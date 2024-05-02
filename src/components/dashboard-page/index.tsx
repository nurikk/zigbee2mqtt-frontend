import { CompositeFeature, Device, DeviceState, FeatureAccessMode, GenericExposedFeature, Paths } from '../../types';
import { GlobalState } from '../../store';
import { isOnlyOneBitIsSet } from '../../utils';

import { isClimateFeature, isLightFeature } from '../device-page/type-guards';
import groupBy from 'lodash/groupBy';

export type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo'>;

const genericRendererIgnoredNames = [
    'linkquality',
    'battery',
    'battery_low',
    'battery_state',
    'color_temp_startup',
    'voltage',
    'strength',
    'color_options',
    'warning',
    'position',
    'operation_mode',
    'operation_mode2',
    'programming_mode',
    'options',
    'programming',
    'schedule_monday',
    'schedule_tuesday',
    'schedule_wednesday',
    'schedule_thursday',
    'schedule_friday',
    'schedule_saturday',
    'schedule_sunday',
    'holiday_mode_date',
];

const whitelistFeatureNames = ['state', 'brightness', 'color_temp', 'mode', 'sound', 'occupancy', 'tamper', 'alarm'];
const whitelistFeatureTypes = ['light'];
const nullish = ['', null, undefined];

export const onlyValidFeaturesForDashboard = (
    feature: GenericExposedFeature | CompositeFeature,
    deviceState: DeviceState = {} as DeviceState,
): GenericExposedFeature | CompositeFeature | false => {
    const { access, property, name, type } = feature;
    let { features } = feature as CompositeFeature;
    if (isLightFeature(feature) || isClimateFeature(feature)) {
        features = features
            .map((f) =>
                onlyValidFeaturesForDashboard(f, (property ? deviceState[property] : deviceState) as DeviceState),
            )
            .filter((f) => f) as (GenericExposedFeature | CompositeFeature)[];
        const groupedFeatures = groupBy(features, 'property');
        features = Object.values(groupedFeatures).map((f) => f[0]);
    }
    const filteredOutFeature = { ...feature, features } as GenericExposedFeature | CompositeFeature;
    if (whitelistFeatureNames.includes(name)) {
        return filteredOutFeature;
    }
    if (whitelistFeatureTypes.includes(type)) {
        return filteredOutFeature;
    }
    if (
        access &&
        !(
            access & FeatureAccessMode.ACCESS_STATE &&
            !nullish.includes(deviceState[property] as string | null | undefined)
        )
    ) {
        return false;
    }
    if (name == 'voltage' && deviceState.battery == undefined) {
        return filteredOutFeature;
    }
    if (genericRendererIgnoredNames.includes(name)) {
        return false;
    }
    if (
        access === FeatureAccessMode.ACCESS_STATE ||
        access === FeatureAccessMode.ACCESS_STATE + FeatureAccessMode.ACCESS_READ
    ) {
        return filteredOutFeature;
    }
    if (Array.isArray(features) && features.length > 0) {
        return filteredOutFeature;
    }
    return false;
};

export const filterKeys: Paths<Device>[] = [
    'friendly_name',
    'description',
    'ieee_address',
    'manufacturer',
    'type',
    'power_source',
    'model_id',
    'definition.model',
    'definition.vendor',
];
