import React, { Component, useState } from "react";
import { CompositeFeature, Device, DeviceState, GenericExposedFeature, SwitchFeature, WithFreiendlyName } from "../../types";
import actions from "../../actions/actions";
import { SceneApi, SceneId } from "../../actions/SceneApi";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import { useTranslation } from "react-i18next";
import Button from "../button";
import Composite from "../features/composite/composite";
import { DashboardFeatureWrapper } from "../dashboard-page/DashboardFeatureWrapper";
import { isLightFeature, isSwitchFeature } from "./type-guards";
import { StateApi } from "../../actions/StateApi";
import groupBy from "lodash/groupBy";



interface RecallRemoveAndMayBeStoreSceneProps {
    target: WithFreiendlyName;
    deviceState: DeviceState;
    showStoreButton: boolean;
}

export function RecallRemoveAndMayBeStoreScene(props: RecallRemoveAndMayBeStoreSceneProps & Pick<SceneApi, 'sceneRecall' | 'sceneRemove' | 'sceneStore'>) {
    const { sceneRecall, sceneRemove, sceneStore, showStoreButton, target } = props;
    const { t } = useTranslation("scene");
    const [sceneId, setSceneId] = useState<SceneId>(0);
    return <>
        <div className="mb-3">
            <label htmlFor="rr-scene" className="form-label">{t('scene_id')}</label>
            <input min={0} value={sceneId} type="number" className="form-control" id="rr-scene"
                onChange={(e) => setSceneId(e.target.valueAsNumber)}
            />
        </div>
        <div className="d-flex">
            <div className="btn-group ms-auto">
                {showStoreButton ? <button onClick={() => sceneStore(target.friendly_name, sceneId)} type="submit" className="btn btn-primary">{t('store')}</button> : null}
                <button onClick={() => sceneRecall(target.friendly_name, sceneId)} type="submit" className="btn btn-success">{t('recall')}</button>
                <Button promt onClick={() => sceneRemove(target.friendly_name, sceneId)} type="submit" className="btn btn-danger">{t('remove')}</Button>
            </div>
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
    device: Device;
    deviceState: DeviceState;
}
function AddScene(props: AddSceneProps & Pick<SceneApi, 'sceneStore'> & Pick<StateApi, 'setDeviceState'>) {
    const { device, deviceState, sceneStore, setDeviceState } = props;

    const { t } = useTranslation("scene");
    const [sceneId, setSceneId] = useState<SceneId>(0);

    const filteredFeatures = ((device.definition?.exposes ?? []) as GenericExposedFeature[])
        .map((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForScenes(e, deviceState))
        .filter(f => f);




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

            <Composite feature={{ features: filteredFeatures } as CompositeFeature}
                className="row"
                type="composite"
                device={device}
                deviceState={deviceState}
                onChange={(endpoint, value) => {
                    setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                }}
                onRead={() => { }}
                featureWrapperClass={DashboardFeatureWrapper}
                minimal={true}
            />
        </div>
        <div className="d-flex">
            <button type="submit" onClick={() => sceneStore(device.friendly_name, sceneId)} className="btn btn-primary ms-auto">{t('store')}</button>
        </div>
    </>
}

type SceneProps = {
    device: Device;
    deviceState: DeviceState;
}
function Scene(props: SceneProps & SceneApi & StateApi) {
    const { sceneStore, sceneRecall, sceneRemove, sceneRemoveAll, setDeviceState, device, deviceState } = props;
    const { t } = useTranslation("scene");
    return <div className="row">
        <div className="col-12 col-sm-6 col-xxl-4 d-flex">
            <div className="card flex-fill">
                <div className="card-body py-4">
                    <AddScene
                        sceneStore={sceneStore}
                        device={device}
                        deviceState={deviceState}
                        setDeviceState={setDeviceState}
                    />
                </div>
            </div>
        </div>

        <div className="col-12 col-sm-6 col-xxl-4 d-flex">
            <div className="card flex-fill">
                <div className="card-body py-4">
                    <RecallRemoveAndMayBeStoreScene
                        sceneStore={sceneStore}
                        sceneRecall={sceneRecall}
                        sceneRemove={sceneRemove}
                        showStoreButton={false}
                        target={device}
                        deviceState={deviceState}
                    />
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-xxl-4 d-flex">
            <div className="card flex-fill">
                <div className="card-body d-flex py-4">
                    <div className="align-self-center mx-auto">
                        <Button promt onClick={() => sceneRemoveAll(device.friendly_name)} type="submit" className="btn btn-danger">{t('remove_all')}</Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

const mappedProps = [];
const ConnectedDeviceStates = connect<SceneProps, unknown, GlobalState, SceneApi & StateApi>(mappedProps, actions)(Scene);
export default ConnectedDeviceStates;
