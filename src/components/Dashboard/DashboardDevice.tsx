/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react';
import { CompositeFeature } from 'types';
import { BaseFeatureProps } from 'components/features/base';
import DeviceFooter from 'components/Dashboard/DeviceFooter';

import styles from 'components/Dashboard/DashboardDevice.scss';
import ReactSwitch from 'react-switch';

type Props = BaseFeatureProps<CompositeFeature>;

type State = {
    isThermostat?: true;
    isSocket?: true;
    hasTemperature?: true;
    hasHumidity?: true;
    hasContact?: true;
    hasSwitch?: true;
    hasOccupancy?: true;
    hasWaterLeak?: true;
    hasClick?: true;
};

const DashboardDevice: React.FC<Props> = (props) => {
    const state = useMemo(() => {
        const state: Partial<State> = {};
        if (Array.isArray(props.feature.features)) {
            props.feature.features.forEach((config) => {
                if (config.type === 'climate') {
                    state.isThermostat = true;
                } else if (config.property === 'power' || config.property === 'energy') {
                    state.isSocket = true;
                }
                switch (config.property) {
                    case 'climate':
                        state.isThermostat = true;
                        break;
                    case 'temperature':
                        state.hasTemperature = true;
                        break;
                    case 'humidity':
                        state.hasHumidity = true;
                        break;
                    case 'contact':
                        state.hasContact = true;
                        break;
                    case 'switch':
                        state.hasSwitch = true;
                        break;
                    case 'occupancy':
                        state.hasOccupancy = true;
                        break;
                    case 'click':
                        state.hasClick = true;
                        break;
                    case 'water_leak':
                        state.hasWaterLeak = true;
                        break;
                }
            });
        }
        return state;
    }, [props.feature.features]);

    const renderContact = () => {
        const { contact } = props.deviceState;
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className={`fa ${contact ? 'fa-door-closed text-muted' : 'fa-door-open text-primary'} fa-fw`} />
                </div>
                <div className={styles.title}>Contact</div>
                <div className={styles.value}>{contact ? 'Closed' : 'Opened'}</div>
            </div>
        );
    };

    const renderClick = () => {
        const { click } = props.deviceState;
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className="fa fa-fw fa-circle" />
                </div>
                <div className={styles.title}>Button</div>
                <div className={styles.value}>{click}</div>
            </div>
        );
    };

    const renderOccupancy = () => {
        const { occupancy } = props.deviceState;
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className={`fa fa-fw fa-walking ${occupancy ? 'text-warning' : ''}`} />
                </div>
                <div className={styles.title}>Occupancy</div>
                <div className={styles.value}>{occupancy ? 'Detected' : 'Clear'}</div>
            </div>
        );
    };

    const renderWaterLeak = () => {
        const { water_leak } = props.deviceState;
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className={`fa fa-fw fa-water ${water_leak ? 'text-primary' : ''}`} />
                </div>
                <div className={styles.title}>
                    Water Leak
                    {water_leak ? <i className="fa fa-fw fa-exclamation-triangle text-danger" /> : null}
                </div>
                <div className={styles.value}>{water_leak ? 'Detected' : 'Clear'}</div>
            </div>
        );
    };

    const renderHumidity = () => {
        const { humidity = 0 } = props.deviceState;
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className="fa fa-fw text-info fa-tint" />
                </div>
                <div className={styles.title}>Humidity</div>
                <div className={styles.value}>{humidity} %</div>
            </div>
        );
    };

    const getTemperatureIcon = (temperature: number) => {
        let icon = 'fa-thermometer-empty';
        if (temperature >= 30) {
            icon = 'fa-thermometer-full';
        } else if (temperature >= 25) {
            icon = 'fa-thermometer-three-quarters';
        } else if (temperature >= 20) {
            icon = 'fa-thermometer-half';
        } else if (temperature >= 15) {
            icon = 'fa-thermometer-quarter';
        }
        return icon;
    };

    const renderTemperature = () => {
        const { temperature = 0 } = props.deviceState;
        const icon = getTemperatureIcon(temperature as number);
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className={`fa fa-fw ${icon} text-danger`} />
                </div>
                <div className={styles.title}>Temperature</div>
                <div className={styles.value}>{temperature} °C</div>
            </div>
        );
    };

    const handleSwitchChange = (value: boolean) => {
        props.onChange('', { state: value ? 'ON' : 'OFF' });
    };

    const renderSwitch = () => {
        const { state, power } = props.deviceState;
        return (
            <div className={styles.entity}>
                <div className={styles.icon}>
                    <i className={`fa fa-fw fa-bolt ${state === 'ON' ? 'text-warning' : 'text-muted'}`} />
                </div>
                <div className={styles.title}>{state === 'ON' ? <>{power} W</> : <>Off</>}</div>
                <div className={styles.value}>
                    <ReactSwitch onChange={handleSwitchChange} checked={state === 'ON'} width={40} height={20} />
                </div>
            </div>
        );
    };

    const renderThermostat = () => {
        const { local_temperature = 0, current_heating_setpoint = 0, running_state, system_mode } = props.deviceState;
        return (
            <>
                <div className={styles.entity}>
                    <div className={styles.icon}>
                        <i className="fa fa-fw fa-fire-alt text-warning" />
                    </div>
                    <div className={styles.title}>
                        Set ({system_mode}/{running_state})
                    </div>
                    <div className={styles.value}>{current_heating_setpoint} °C</div>
                </div>
                <div className={styles.entity}>
                    <div className={styles.icon}>
                        <i className={`fa fa-fw ${getTemperatureIcon(local_temperature as number)} text-danger`} />
                    </div>
                    <div className={styles.title}>Room</div>
                    <div className={styles.value}>{local_temperature} °C</div>
                </div>
            </>
        );
    };

    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className={`${styles.card} card bg-light`}>
                <div className="card-header text-truncate">{props.device.friendly_name}</div>
                <div className="card-body">
                    {state.isThermostat ? renderThermostat() : null}
                    {!state.isSocket && state.hasTemperature ? renderTemperature() : null}
                    {state.hasHumidity ? renderHumidity() : null}
                    {state.hasContact ? renderContact() : null}
                    {state.isSocket ? renderSwitch() : null}
                    {state.hasOccupancy ? renderOccupancy() : null}
                    {state.hasClick ? renderClick() : null}
                    {state.hasWaterLeak ? renderWaterLeak() : null}
                </div>
                <DeviceFooter
                    lastUpdate={props.deviceState.last_seen as number}
                    battery={props.deviceState.battery}
                    voltage={props.deviceState.voltage as number}
                    consumption={props.deviceState.consumption as number}
                    linkquality={props.deviceState.linkquality}
                    temperature={state.isSocket ? (props.deviceState.temperature as number) : undefined}
                />
            </div>
        </div>
    );
};

export default DashboardDevice;
