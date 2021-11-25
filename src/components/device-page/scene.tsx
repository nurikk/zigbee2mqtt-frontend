import React, { ChangeEvent, useState } from "react";
import { CompositeFeature, Device, DeviceState, GenericExposedFeature, Group, Scene, WithFreiendlyName, WithScenes } from "../../types";
import actions from "../../actions/actions";
import { SceneApi, SceneId } from "../../actions/SceneApi";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import { useTranslation } from "react-i18next";
import Button from "../button";
import Composite from "../features/composite/composite";
import { DashboardFeatureWrapper } from "../dashboard-page/DashboardFeatureWrapper";
import { isLightFeature } from "./type-guards";
import { StateApi } from "../../actions/StateApi";
import groupBy from "lodash/groupBy";

const isValidSceneId = (id: SceneId, existingScenes: Scene[] = []): boolean => {
    return id >= 0 && id <= 255 && !existingScenes.find(s => s.id == id);
}


interface RecallRemoveAndMayBeStoreSceneProps {
    target: Device | Group;
    deviceState: DeviceState;
}


type ScenePickerProps = {
    value: Scene;
    scenes: Scene[];
    onSceneSelected: (sceneId: Scene) => void;
};
function ScenePicker(props: ScenePickerProps) {
    const { t } = useTranslation("scene");
    const { onSceneSelected, scenes = [], value } = props;
    const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const [id, endpoint] = e.target.value.split("-");
        onSceneSelected({ id: parseInt(id, 10), endpoint });
    }
    const selectPicker = <>
        <label htmlFor="rr-scene" className="form-label">{t('scene_name')}</label>
        <select onChange={onSelectHandler} id="rr-scene" className="form-select">
            <option key="hidden" hidden>{t('select_scene')}</option>
            {
                scenes.map(scene => <option key={`${scene.id}-${scene.endpoint}`} value={`${scene.id}-${scene.endpoint}`}>{scene.name}</option>)
            }
        </select>
    </>;

    const textPicker = <>
        <label htmlFor="rr-scene" className="form-label">{t('scene_id')}</label>
        <input min={0} value={value.id} type="number" className="form-control" id="rr-scene"
            onChange={(e) => onSceneSelected({ id: e.target.valueAsNumber, endpoint: undefined })} />
    </>

    return <>
        {scenes.length > 0 ? selectPicker : textPicker}


    </>
}

function getScenes(target: Group | Device): Scene[] {
    if ((target as Device).endpoints) {
        const scenes: Scene[] = [];
        Object.entries((target as Device).endpoints).forEach(
            ([endpoint, value]) => {
                for (let _scene of value.scenes) {
                    scenes.push({
                        ..._scene, ...{ endpoint }
                    })
                }
            }
        );
        return scenes;
    } else if ((target as WithScenes).scenes) {
        return (target as WithScenes).scenes;
    }
    return []
}

export function RecallRemove(props: RecallRemoveAndMayBeStoreSceneProps & Pick<SceneApi, 'sceneRecall' | 'sceneRemove' | 'sceneStore' | 'sceneRemoveAll'>) {
    const { sceneRecall, sceneRemove, sceneRemoveAll, target } = props;
    const { t } = useTranslation("scene");
    const [scene, setScene] = useState<Scene>({ id: 0, endpoint: undefined } as Scene);
    const sceneIsntSelected = scene.id === undefined;
    const scenes = getScenes(target);
    const { friendly_name } = target as WithFreiendlyName;
    return <>
        <div className="mb-3">
            <ScenePicker
                onSceneSelected={setScene}
                value={scene}
                scenes={scenes}
            />
        </div>
        <div className="d-flex">
            <div className="btn-group ms-auto pe-1">
                <button disabled={sceneIsntSelected} onClick={() => sceneRecall(friendly_name, scene.id, scene.endpoint)} type="submit" className="btn btn-success">{t('recall')}</button>
                <Button disabled={sceneIsntSelected} promt onClick={() => sceneRemove(friendly_name, scene.id, scene.endpoint)} type="submit" className="btn btn-danger">{t('remove')}</Button>
            </div>
            <Button promt onClick={() => sceneRemoveAll(friendly_name, "")} type="submit" className="btn btn-danger">{t('remove_all')}</Button>
        </div>
    </>
}


const whitelistFeatureNames = ['state', 'color_temp', 'color', 'transition', 'brightness'];

export const onlyValidFeaturesForScenes = (feature: GenericExposedFeature | CompositeFeature,
    deviceState: DeviceState = {} as DeviceState): GenericExposedFeature | CompositeFeature | false => {

    const { property, name } = feature;
    let { features } = feature as CompositeFeature;
    if (isLightFeature(feature)) {
        features = features
            .map(f => onlyValidFeaturesForScenes(f, (property ? deviceState[property] : deviceState) as DeviceState))
            .filter(f => f) as (GenericExposedFeature | CompositeFeature)[];
        const groupedFeatures = groupBy(features, 'property');
        features = Object.values(groupedFeatures)
            .map(f => f[0]);
    }
    const filteredOutFeature = { ...feature, features } as GenericExposedFeature | CompositeFeature;
    if (whitelistFeatureNames.includes(name)) {
        return filteredOutFeature;
    }
    if (Array.isArray(features) && features.length > 0) {
        return filteredOutFeature;
    }
    return false;
}

type AddSceneProps = {
    target: Device | Group;
    deviceState: DeviceState;

}
export function AddScene(props: AddSceneProps & Pick<SceneApi, 'sceneStore'> & Pick<StateApi, 'setDeviceState'>) {
    const { target, deviceState, sceneStore, setDeviceState } = props;
    const scenes = getScenes(target);
    const { t } = useTranslation("scene");
    const [sceneId, setSceneId] = useState<SceneId>(0);
    const [sceneName, setSceneName] = useState<string>("");

    const defaultSceneName = `Scene ${sceneId}`;
    let filteredFeatures: (false | GenericExposedFeature | CompositeFeature)[] = [];
    if ((target as Device).definition) {
        filteredFeatures = (((target as Device).definition?.exposes ?? []) as GenericExposedFeature[])
            .map((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForScenes(e, deviceState))
            .filter(f => f);
    }

    return <>
        <div className="mb-3">
            <label htmlFor="add-scene" className="form-label">{t('scene_id')}</label>
            <input id="add-scene"
                className="form-control"
                min={0}
                max={255}
                value={sceneId}
                type="number"
                onChange={(e) => setSceneId(e.target.valueAsNumber)}
            />
            <label htmlFor="add-scene-name" className="form-label">{t('scene_name')}</label>
            <input id="add-scene-name"
                className="form-control"
                value={sceneName}
                type="string"
                onChange={(e) => setSceneName(e.target.value)}
                placeholder={defaultSceneName}
            />

            <Composite feature={{ features: filteredFeatures } as CompositeFeature}
                className="row"
                type="composite"
                device={target as Device}
                deviceState={deviceState}
                onChange={(endpoint, value) => {
                    setDeviceState(`${target.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                }}
                onRead={() => {
                    // empty function
                 }}
                featureWrapperClass={DashboardFeatureWrapper}
                minimal={true}
            />
        </div>
        <div className="d-flex">
            <button disabled={!isValidSceneId(sceneId, scenes)} type="submit" onClick={() => sceneStore(target.friendly_name, { id: sceneId, name: sceneName || defaultSceneName })} className="btn btn-primary ms-auto">{t('store')}</button>
        </div>
    </>
}


type SceneProps = {
    device: Device;
    deviceState: DeviceState;
}

function ScenePage(props: SceneProps & SceneApi & StateApi) {
    const { sceneStore, sceneRecall, sceneRemove, sceneRemoveAll, setDeviceState, device, deviceState } = props;
    return <div className="row">
        <div className="col-12 col-sm-6 col-xxl-6 d-flex">
            <div className="card flex-fill">
                <div className="card-body py-4">
                    <AddScene
                        sceneStore={sceneStore}
                        target={device}
                        deviceState={deviceState}
                        setDeviceState={setDeviceState}
                    />
                </div>
            </div>
        </div>

        <div className="col-12 col-sm-6 col-xxl-6 d-flex">
            <div className="card flex-fill">
                <div className="card-body py-4">
                    <RecallRemove
                        sceneStore={sceneStore}
                        sceneRecall={sceneRecall}
                        sceneRemove={sceneRemove}
                        sceneRemoveAll={sceneRemoveAll}
                        target={device}
                        deviceState={deviceState}
                    />
                </div>
            </div>
        </div>
    </div>
}

const mappedProps = [];
const ConnectedDeviceStates = connect<SceneProps, unknown, GlobalState, SceneApi & StateApi>(mappedProps, actions)(ScenePage);
export default ConnectedDeviceStates;
