import '@testing-library/jest-dom';
import React from 'react';
import AttributeEditor from './AttributeEditor';
import { fireEvent, render, screen } from '../../test-utils';
import { createMockDevice } from '../../createMockDevice';
import { vi, it, expect } from 'vitest';

it('display pickers', async () => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <AttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
            logs={[]}
        />,
    );

    const endpointPicker = screen.getByTestId<HTMLSelectElement>('endpoint-picker');
    const clusterPicker = screen.getByTestId<HTMLSelectElement>('cluster-picker');
    const attributePicker = screen.getByTestId<HTMLSelectElement>('attribute-picker');

    expect(endpointPicker.options).toHaveLength(2);
    expect(clusterPicker.options.length).toBeGreaterThan(10);
    expect(attributePicker.options).toHaveLength(2);
});

it('attribute can be selected and removed', async () => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <AttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
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

it('attribute can be read', async () => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <AttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
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

it('attribute can be write', async () => {
    const readDeviceAttributes = vi.fn();
    const writeDeviceAttributes = vi.fn();
    const mockDevice = createMockDevice();

    render(
        <AttributeEditor
            readDeviceAttributes={readDeviceAttributes}
            writeDeviceAttributes={writeDeviceAttributes}
            theme={'light'}
            device={mockDevice}
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
