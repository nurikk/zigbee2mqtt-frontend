import '@testing-library/jest-dom';
import React from 'react';
import { TranslatedAttributeEditor } from './AttributeEditor';
import { fireEvent, render, screen } from '../../test-utils';
import { createMockDevice } from '../../createMockDevice';
import { expect, it, vi } from 'vitest';
import { DeviceInfo } from './info';

it('display pickers', async () => {
    const mockDevice = createMockDevice();

    render(
        <DeviceInfo
            device={mockDevice}
            deviceStates={{}}
            bridgeInfo={{}}
            availability={{}}
            t={() => {}}
            configureDevice={vi.fn()}
            removeDevice={vi.fn()}
            renameDevice={vi.fn()}
            setDeviceDescription={vi.fn()}
            />,
    );

    const endpointPicker = screen.getByTestId<HTMLSelectElement>('endpoint-picker');
    const clusterPicker = screen.getByTestId<HTMLSelectElement>('cluster-picker');
    const attributePicker = screen.getByTestId<HTMLSelectElement>('attribute-picker');

    expect(endpointPicker.options).toHaveLength(2);
    expect(clusterPicker.options.length).toBeGreaterThan(10);
    expect(attributePicker.options).toHaveLength(2);
});

});

