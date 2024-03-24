import { CompositeFeature, DeviceState, GenericExposedFeature } from '../../types';
import { isLightFeature } from './type-guards';
import groupBy from 'lodash/groupBy';
import { whitelistFeatureNames } from './whitelistFeatureNames';

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
