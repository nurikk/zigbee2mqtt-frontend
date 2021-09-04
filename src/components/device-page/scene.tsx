import React, { Component, useState } from "react";
import { CompositeFeature, Device, DeviceState, GenericExposedFeature, SwitchFeature } from "../../types";
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



interface SceneProps {
    device: Device;
    deviceState: DeviceState;
}

function RecallRemoveScene(props: SceneProps & Pick<SceneApi, 'sceneRecall' | 'sceneRemove'>) {
    const { sceneRecall, sceneRemove, device } = props;
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
                <button onClick={() => sceneRecall(device.friendly_name, sceneId)} type="submit" className="btn btn-success">{t('recall')}</button>
                <Button promt onClick={() => sceneRemove(device.friendly_name, sceneId)} type="submit" className="btn btn-danger">{t('remove')}</Button>
            </div>
        </div>
    </>
}

function getFeatureName(feature: GenericExposedFeature): string {
    if (feature.name) {
        return feature.name;
    } else if (isSwitchFeature(feature)) {
        return (feature as SwitchFeature).features[0].name;
    } else if (isLightFeature(feature)) {
        return "light"
    }

    return "";
}

function AddScene(props: SceneProps & Pick<SceneApi, 'sceneStore'> & Pick<StateApi, 'setDeviceState'>) {
    const { device, deviceState, sceneStore, setDeviceState } = props;

    const { t } = useTranslation("scene");
    const [sceneId, setSceneId] = useState<SceneId>(0);
    const sceneExposes = ['light', 'state', 'color_temp', 'color', 'transition', 'brightness'];

    const sceneFeatures = (device.definition?.exposes as GenericExposedFeature[]).filter(f => sceneExposes.includes(getFeatureName(f)));


    return <>
        <div className="mb-3">
            <label htmlFor="add-scene" className="form-label">{t('scene_id')}</label>
            <input min={0} max={255} value={sceneId} type="number" className="form-control" id="add-scene"
                onChange={(e) => setSceneId(e.target.valueAsNumber)}
            />

            <Composite feature={{ features: sceneFeatures } as CompositeFeature}
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
                    <RecallRemoveScene
                        sceneRecall={sceneRecall}
                        sceneRemove={sceneRemove}
                        device={device}
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
