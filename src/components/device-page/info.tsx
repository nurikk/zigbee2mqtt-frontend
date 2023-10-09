/* eslint-disable react/display-name */
import React, { Component, Fragment } from 'react';
import { BridgeInfo, Device, DeviceState } from '../../types';
import { isDeviceDisabled, toHex } from '../../utils';
import DeviceControlGroup from '../device-control/DeviceControlGroup';
import cx from 'classnames';
import style from './style.module.css';
import { connect } from 'unistore/react';
import { AvailabilityState, GlobalState } from '../../store';
import get from 'lodash/get';
import DeviceImage from '../device-image';
import { ModelLink, VendorLink } from '../vendor-links/vendor-links';
import PowerSource from '../power-source';
import { LastSeen } from '../LastSeen';
import { WithTranslation, withTranslation } from 'react-i18next';
import { DisplayValue } from '../display-value/DisplayValue';
import { Availability } from '../zigbee/Availability';
import { DeviceApi } from '../../actions/DeviceApi';
import actions from '../../actions/actions';

type DeviceInfoProps = {
    device: Device;
};
type PropsFromStore = Pick<GlobalState, 'deviceStates' | 'bridgeInfo' | 'availability'>;

// [Flower sensor](https://modkam.ru/?p=1700)
const markdownLinkRegex = /\[(.*?)]\((.*?)\)/;

const displayProps = [
    {
        translationKey: 'friendly_name',
        render: (device: Device) => (
            <dd className="col-12 col-md-7">
                <strong>{device.friendly_name}</strong>
            </dd>
        ),
    },
    {
        translationKey: 'zigbee:description',
        render: (device: Device) => (
            <dd className="col-12 col-md-7">
                <pre>{device.description}</pre>
            </dd>
        ),
    },
    {
        translationKey: 'last_seen',
        render: (device: Device, state: DeviceState, bridgeInfo: BridgeInfo) => (
            <dd className="col-12 col-md-7">
                <LastSeen lastSeenType={bridgeInfo.config.advanced.last_seen} state={state} />
            </dd>
        ),
    },
    {
        translationKey: 'avaliability:avaliability',
        render: (device: Device, state: DeviceState, bridgeInfo: BridgeInfo, availability: AvailabilityState) => {
            const { config } = bridgeInfo;
            const availabilityFeatureEnabled = !!config.availability;
            const availabilityEnabledForDevice = config.devices[device.ieee_address]?.availability !== false;

            return (
                <dd className="col-12 col-md-7">
                    <Availability
                        availability={availability}
                        disabled={isDeviceDisabled(device, config)}
                        availabilityFeatureEnabled={availabilityFeatureEnabled}
                        availabilityEnabledForDevice={availabilityEnabledForDevice}
                    />
                </dd>
            );
        },
    },
    {
        key: 'type',
        translationKey: 'device_type',
    },
    {
        key: 'model_id',
        translationKey: 'zigbee_model',
    },
    {
        key: 'manufacturer',
        translationKey: 'zigbee_manufacturer',
    },
    {
        key: 'definition.description',
        translationKey: 'description',
        if: 'supported',
        render: (device: Device) => {
            const result = markdownLinkRegex.exec(device.definition?.description as string);
            let content = <span>{device.definition?.description}</span>;
            if (result) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [all, title, link] = result;
                content = (
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                        {title}
                    </a>
                );
            }
            return <dd className="col-12 col-md-7">{content}</dd>;
        },
    },
    {
        render: (device: Device) => (
            <dd className="col-12 col-md-7">
                <p
                    className={cx('mb-0', 'font-weight-bold', {
                        'text-danger': !device.supported,
                        'text-success': device.supported,
                    })}
                >
                    <DisplayValue name="supported" value={device.supported} />
                </p>
            </dd>
        ),
        translationKey: 'support_status',
    },
    {
        key: 'ieee_address',
        translationKey: 'ieee_address',
    },
    {
        key: 'network_address',
        translationKey: 'network_address',
        render: (device: Device) => <dd className="col-12 col-md-7">{toHex(device.network_address)}</dd>,
    },
    {
        key: 'date_code',
        translationKey: 'firmware_build_date',
        if: 'date_code',
    },
    {
        key: 'software_build_id',
        translationKey: 'firmware_version',
        if: 'software_build_id',
    },

    {
        key: 'definition.vendor',
        translationKey: 'manufacturer',
        if: 'supported',
        render: (device: Device) => (
            <dd className="col-12 col-md-7">
                <VendorLink device={device} />
            </dd>
        ),
    },
    {
        key: 'definition.model',
        translationKey: 'model',
        if: 'supported',
        render: (device: Device) => (
            <dd className="col-12 col-md-7">
                <ModelLink device={device} />
            </dd>
        ),
    },

    {
        translationKey: 'power',
        render: (device: Device, deviceStatus: DeviceState) => (
            <dd className="col-12 col-md-7">
                <PowerSource showLevel={true} device={device} deviceState={deviceStatus} />
            </dd>
        ),
    },
    {
        translationKey: 'interview_completed',
        render: (device: Device) => (
            <dd className="col-12 col-md-7">
                <DisplayValue name="interview_completed" value={device.interview_completed} />
            </dd>
        ),
    },
];
// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<
    Pick<DeviceApi, 'configureDevice' | 'renameDevice' | 'removeDevice' | 'setDeviceDescription'> &
        DeviceInfoProps &
        PropsFromStore &
        WithTranslation<'zigbee'>,
    unknown
> {
    render(): JSX.Element {
        const { device, deviceStates, bridgeInfo, availability, t } = this.props;
        const { configureDevice, renameDevice, removeDevice, setDeviceDescription } = this.props;
        const homeassistantEnabled = !!bridgeInfo.config?.homeassistant;
        const deviceState: DeviceState = deviceStates[device.friendly_name] ?? ({} as DeviceState);
        return (
            <Fragment>
                <div className="d-flex justify-content-center">
                    <DeviceImage
                        className={`card-img-top w-auto ${style['device-pic']}`}
                        device={device}
                        deviceStatus={deviceState}
                        disabled={isDeviceDisabled(device, bridgeInfo.config)}
                    />
                </div>
                <dl className="row">
                    {displayProps
                        .filter((prop) => prop.if === undefined || get(device, prop.if, false))
                        .map((prop) => (
                            <Fragment key={prop.translationKey}>
                                <dt className="col-12 col-md-5">{t(prop.translationKey)}</dt>
                                {prop.render ? (
                                    prop.render(
                                        device,
                                        deviceState,
                                        bridgeInfo,
                                        availability[device.friendly_name] ?? 'offline',
                                    )
                                ) : (
                                    <dd className="col-12 col-md-7">{get(device, prop.key)}</dd>
                                )}
                            </Fragment>
                        ))}
                </dl>
                <DeviceControlGroup
                    device={device}
                    state={deviceState}
                    homeassistantEnabled={homeassistantEnabled}
                    {...{ configureDevice, renameDevice, removeDevice, setDeviceDescription }}
                />
            </Fragment>
        );
    }
}

const mappedProps = ['deviceStates', 'bridgeInfo', 'availability'];

const ConnectedDeviceInfoPage = withTranslation('zigbee')(
    connect<DeviceInfoProps, unknown, GlobalState, PropsFromStore>(mappedProps, actions)(DeviceInfo),
);
export default ConnectedDeviceInfoPage;
