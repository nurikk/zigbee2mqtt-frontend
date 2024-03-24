import React from 'react';
import { Redirect } from 'react-router-dom';
import DeviceInfo from './info';
import Bind from './bind';
import Reporting from './reporting';
import States from './states';
import ConnectedDeviceExposes from './exposes';
import Clusters from './clusters';
import { DeviceSettings } from './DeviceSettings';
import Scene from './scene';
import DeviceSpecificSettings from './DeviceSpecificSettings';
import { TranslatedDevConsole } from './dev-console';
import { DevicePageProps } from '.';

export function ContentRenderer(props: DevicePageProps): JSX.Element {
    const { match, devices, logs } = props;
    const {
        readDeviceAttributes,
        writeDeviceAttributes,
        setDeviceOptions,
        executeCommand,
        generateExternalDefinition,
        bridgeInfo,
        deviceStates,
        generatedExternalDefinitions,
        theme,
    } = props;
    const { tab, dev } = match.params;
    const device = devices[dev];
    const deviceState = deviceStates[device.friendly_name] ?? {};

    switch (tab) {
        case 'info':
            return <DeviceInfo device={device} />;
        case 'bind':
            return <Bind device={device} />;
        case 'state':
            return <States device={device} />;
        case 'exposes':
            return <ConnectedDeviceExposes device={device} />;
        case 'clusters':
            return <Clusters device={device} />;
        case 'reporting':
            return <Reporting device={device} />;
        case 'settings':
            return <DeviceSettings device={device} setDeviceOptions={setDeviceOptions} bridgeInfo={bridgeInfo} />;
        case 'settings-specific':
            return (
                <DeviceSpecificSettings device={device} setDeviceOptions={setDeviceOptions} bridgeInfo={bridgeInfo} />
            );
        case 'dev-console':
            return (
                <TranslatedDevConsole
                    device={device}
                    logs={logs}
                    readDeviceAttributes={readDeviceAttributes}
                    writeDeviceAttributes={writeDeviceAttributes}
                    generateExternalDefinition={generateExternalDefinition}
                    generatedExternalDefinitions={generatedExternalDefinitions}
                    executeCommand={executeCommand}
                    theme={theme}
                />
            );
        case 'scene':
            return <Scene device={device} deviceState={deviceState} />;
        default:
            return <Redirect to={`/device/${dev}/info`} />;
    }
}
