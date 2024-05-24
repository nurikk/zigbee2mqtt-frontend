import '@testing-library/jest-dom';
import React from 'react';
import { TranslatedAttributeEditor } from './AttributeEditor';
import { fireEvent, render, screen } from '../../test-utils';
import { createMockDevice } from '../../createMockDevice';

import jsonmessage from '../../../ws-messages/onConnect.json';
import { BridgeDefinitions } from '../../types';

import { expect, it, vi, beforeEach } from 'vitest';

interface LocalTestContext {
    cluster_data: BridgeDefinitions;
}
beforeEach<LocalTestContext>(async (context) => {
    // extend context
    context.cluster_data = jsonmessage.filter((m) => m.topic == 'bridge/definitions')[0].payload as BridgeDefinitions;
});

it<LocalTestContext>('display pickers', async ({ cluster_data }) => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <TranslatedAttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
            clusters={cluster_data}
            logs={[]}
        />,
    );

    const endpointPicker = screen.getByTestId<HTMLSelectElement>('endpoint-picker');
    const clusterPicker = screen.getByTestId<HTMLSelectElement>('cluster-picker');
    const attributePicker = screen.getByTestId<HTMLSelectElement>('attribute-picker');

    expect(endpointPicker.options).toHaveLength(2);
    expect(clusterPicker.options.length).toBeLessThanOrEqual(5);
    expect(attributePicker.options).toHaveLength(2);
});

it<LocalTestContext>('attribute can be selected and removed', async ({ cluster_data }) => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <TranslatedAttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
            clusters={cluster_data}
            logs={[]}
        />,
    );

    const clusterPicker = screen.getByTestId<HTMLSelectElement>('cluster-picker');
    const attributePicker = screen.getByTestId<HTMLSelectElement>('attribute-picker');

    // At the beginning we don't have any attributes selected
    expect(screen.getByTestId('selected-attribute').children).toHaveLength(0);

    // We selct a cluster and an attribute
    fireEvent.change(clusterPicker, { target: { value: 'genPowerCfg' } });
    fireEvent.change(attributePicker, { target: { value: 'batteryPercentageRemaining' } });

    // Then we should have one attribute selected
    expect(screen.getByTestId('selected-attribute').children).toHaveLength(1);

    // We remove the attribute
    fireEvent.click(screen.getByTestId('remove-attribute'));

    // Now we should have no attributes visible
    expect(screen.getByTestId('selected-attribute').children).toHaveLength(0);
});

it<LocalTestContext>('attribute can be read', async ({ cluster_data }) => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <TranslatedAttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
            clusters={cluster_data}
            logs={[]}
        />,
    );

    const clusterPicker = screen.getByTestId<HTMLSelectElement>('cluster-picker');
    const attributePicker = screen.getByTestId<HTMLSelectElement>('attribute-picker');

    // We selct a cluster and an attribute
    fireEvent.change(clusterPicker, { target: { value: 'genPowerCfg' } });
    fireEvent.change(attributePicker, { target: { value: 'batteryPercentageRemaining' } });
    expect(screen.getByTestId('selected-attribute').children).toHaveLength(1);

    // We click read button
    fireEvent.click(screen.getByTestId('read-attribute'));

    // Now Device API should be called
    console.log(readDeviceAttributes.mock.calls);
    expect(readDeviceAttributes.mock.calls).toEqual([
        ['Living Room Light', '1', 'genPowerCfg', ['batteryPercentageRemaining'], {}],
    ]);
});

it<LocalTestContext>('attribute can be write', async ({ cluster_data }) => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <TranslatedAttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
            clusters={cluster_data}
            logs={[]}
        />,
    );

    const clusterPicker = screen.getByTestId<HTMLSelectElement>('cluster-picker');
    const attributePicker = screen.getByTestId<HTMLSelectElement>('attribute-picker');

    // We selct a cluster and an attribute
    fireEvent.change(clusterPicker, { target: { value: 'hvacUserInterfaceCfg' } });
    fireEvent.change(attributePicker, { target: { value: 'tempDisplayMode' } });
    expect(screen.getByTestId('selected-attribute').children).toHaveLength(1);

    // We enter a new value and click write button
    fireEvent.change(screen.getByTestId('attribute-value-input'), { target: { value: '42' } });

    fireEvent.click(screen.getByTestId('write-attribute'));

    // Now Device API should be called
    console.log(writeDeviceAttributes.mock.calls);
    expect(writeDeviceAttributes.mock.calls).toEqual([
        [
            'Living Room Light',
            '1',
            'hvacUserInterfaceCfg',
            [{ attribute: 'tempDisplayMode', value: 42, definition: { ID: 0, type: 48 } }],
            {},
        ],
    ]);
});
