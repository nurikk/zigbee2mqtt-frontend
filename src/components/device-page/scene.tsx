import React from 'react';
import { CompositeFeature, Device, DeviceState, GenericExposedFeature, Group, Scene, WithScenes } from '../../types';
import actions from '../../actions/actions';
import { SceneApi, SceneId } from '../../actions/SceneApi';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';
import { isLightFeature } from './type-guards';
import { StateApi } from '../../actions/StateApi';
import groupBy from 'lodash/groupBy';
import { AddScene } from './AddScene';
import { RecallRemove } from './RecallRemove';

export const isValidSceneId = (id: SceneId, existingScenes: Scene[] = []): boolean => {
    return id >= 0 && id <= 255 && !existingScenes.find((s) => s.id == id);
};

export function getScenes(target: Group | Device): Scene[] {
    if ((target as Device).endpoints) {
        const scenes: Scene[] = [];
        Object.entries((target as Device).endpoints).forEach(([endpoint, value]) => {
            value.scenes?.forEach((_scene) => scenes.push({ ..._scene, ...{ endpoint } }));
        });
        return scenes;
    } else if ((target as WithScenes).scenes) {
        return (target as WithScenes).scenes as Scene[];
    }
    return [];
}

const whitelistFeatureNames = ['state', 'color_temp', 'color', 'transition', 'brightness'];

export function onlyValidFeaturesForScenes(
    feature: GenericExposedFeature | CompositeFeature,
    deviceState: DeviceState = {} as DeviceState,
): GenericExposedFeature | CompositeFeature | undefined {
    // eslint-disable-next-line prefer-const
    let { property, name, features } = feature as CompositeFeature;
    if (isLightFeature(feature)) {
        features = features
            .map((f) => onlyValidFeaturesForScenes(f, (property ? deviceState[property] : deviceState) as DeviceState))
            .filter((f) => f) as (GenericExposedFeature | CompositeFeature)[];

        features = Object.values(groupBy(features, 'property')).map((f) => f[0]);
    }

    if (whitelistFeatureNames.includes(name) || (Array.isArray(features) && features.length > 0)) {
        return { ...feature, features } as GenericExposedFeature | CompositeFeature;
    }
}

type SceneProps = {
    device: Device;
    deviceState: DeviceState;
};

function ScenePage(props: SceneProps & SceneApi & StateApi) {
    const { sceneStore, sceneRecall, sceneRemove, sceneRemoveAll, setDeviceState, device, deviceState } = props;
    return (
        <div className="row">
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
    );
}

const mappedProps = [];
const ConnectedDeviceStates = connect<SceneProps, unknown, GlobalState, SceneApi & StateApi>(
    mappedProps,
    actions,
)(ScenePage);
export default ConnectedDeviceStates;
