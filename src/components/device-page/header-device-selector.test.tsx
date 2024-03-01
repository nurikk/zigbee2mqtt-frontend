// import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import { createMockDevice } from '../../createMockDevice';
import { it, expect } from 'vitest';
import { HeaderDeviceSelector } from './header-device-selector';

it('all devices are visible in dropdown', async () => {
    const ieeeAddress1 = 'FF:FF:FF:FF:FF:AA';
    const ieeeAddress2 = 'AA:AA:AA:AA:AA:AA';
    const currentDevice = createMockDevice({ ieee_address: ieeeAddress1, friendly_name: 'Button' });
    const devices = {
        [ieeeAddress1]: currentDevice,
        [ieeeAddress2]: createMockDevice({ ieee_address: ieeeAddress2, friendly_name: 'Light' }),
    };
    render(<HeaderDeviceSelector allDevices={devices} currentDevice={currentDevice} />);
    await waitFor(() => fireEvent.click(screen.getByLabelText(/Select a device/)));
    expect(document.querySelectorAll('.dropdown-item')).toHaveLength(2);
});

it('device can be selected', async () => {
    const ieeeAddress1 = 'FF:FF:FF:FF:FF:AA';
    const ieeeAddress2 = 'AA:AA:AA:AA:AA:AA';
    const currentDevice = createMockDevice({ ieee_address: ieeeAddress1, friendly_name: 'Button' });
    const devices = {
        [ieeeAddress1]: currentDevice,
        [ieeeAddress2]: createMockDevice({ ieee_address: ieeeAddress2, friendly_name: 'Light' }),
    };

    render(<HeaderDeviceSelector allDevices={devices} currentDevice={currentDevice} />);

    await waitFor(() => fireEvent.click(screen.getByLabelText(/Select a device/)));
    await waitFor(() => fireEvent.click(screen.getByText(/Light/)));
    expect(document.location.toString()).toContain(ieeeAddress2);
});

it('devices list can be filtered', async () => {
    const ieeeAddress1 = 'FF:FF:FF:FF:FF:AA';
    const ieeeAddress2 = 'AA:AA:AA:AA:AA:AA';
    const currentDevice = createMockDevice({ ieee_address: ieeeAddress1, friendly_name: 'Button' });
    const devices = {
        [ieeeAddress1]: currentDevice,
        [ieeeAddress2]: createMockDevice({ ieee_address: ieeeAddress2, friendly_name: 'Light' }),
    };
    render(<HeaderDeviceSelector allDevices={devices} currentDevice={currentDevice} />);

    await waitFor(() => fireEvent.click(screen.getByLabelText(/Select a device/)));
    await waitFor(() =>
        fireEvent.change(screen.getByPlaceholderText(/Type to filter.../), { target: { value: 'Light' } }),
    );

    expect(document.querySelectorAll('.dropdown-item')).toHaveLength(1);
});
