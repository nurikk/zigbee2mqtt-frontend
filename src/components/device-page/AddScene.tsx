import React, { useState } from 'react';
import { CompositeFeature, Device, DeviceState, GenericExposedFeature, Group } from '../../types';
import { SceneApi, SceneId } from '../../actions/SceneApi';
import { useTranslation } from 'react-i18next';
import { TranslatedComposite } from '../features/composite/composite';
import { DashboardFeatureWrapper } from '../dashboard-page/DashboardFeatureWrapper';
import { StateApi } from '../../actions/StateApi';
import { onlyValidFeaturesForScenes } from './onlyValidFeaturesForScenes';
import { getScenes } from './getScenes';
import { isValidSceneId } from './isValidSceneId';

type AddSceneProps = {
    target: Device | Group;
    deviceState: DeviceState;
};
export function AddScene(
    props: AddSceneProps & Pick<SceneApi, 'sceneStore'> & Pick<StateApi, 'setDeviceState'>,
): JSX.Element {
    const { target, deviceState, sceneStore, setDeviceState } = props;
    const scenes = getScenes(target);
    const { t } = useTranslation('scene');
    const [sceneId, setSceneId] = useState<SceneId>(0);
    const [sceneName, setSceneName] = useState<string>('');

    const defaultSceneName = `Scene ${sceneId}`;
    let filteredFeatures: (false | GenericExposedFeature | CompositeFeature)[] = [];
    if ((target as Device).definition) {
        filteredFeatures = (((target as Device).definition?.exposes ?? []) as GenericExposedFeature[])
            .map((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForScenes(e, deviceState))
            .filter((f) => f);
    }

    return (
        <>
            <h3>{t('add_update_header')}</h3>
            <div className="mb-3">
                <label htmlFor="add-scene" className="form-label">
                    {t('scene_id')}
                </label>
                <input
                    id="add-scene"
                    className="form-control"
                    min={0}
                    max={255}
                    value={sceneId}
                    type="number"
                    onChange={(e) => setSceneId(e.target.valueAsNumber)}
                />
                <label htmlFor="add-scene-name" className="form-label">
                    {t('scene_name')}
                </label>
                <input
                    id="add-scene-name"
                    className="form-control"
                    value={sceneName}
                    type="string"
                    onChange={(e) => setSceneName(e.target.value)}
                    placeholder={defaultSceneName}
                />

                <TranslatedComposite
                    feature={{ features: filteredFeatures } as CompositeFeature}
                    className="row"
                    type="composite"
                    device={target as Device}
                    deviceState={deviceState}
                    onChange={(endpoint, value) => {
                        setDeviceState(target.friendly_name, value);
                    }}
                    featureWrapperClass={DashboardFeatureWrapper}
                    minimal={true}
                />
            </div>
            <div className="d-flex">
                <button
                    disabled={!isValidSceneId(sceneId, scenes)}
                    type="submit"
                    onClick={() =>
                        sceneStore(target.friendly_name, { id: sceneId, name: sceneName || defaultSceneName })
                    }
                    className="btn btn-primary ms-auto"
                >
                    {t('store')}
                </button>
            </div>
        </>
    );
}
