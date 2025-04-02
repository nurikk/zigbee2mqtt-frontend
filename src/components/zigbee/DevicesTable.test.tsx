import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '../../test-utils';
import { DevicesTable } from './DevicesTable';
import { expect, it, vi, describe } from 'vitest';
import { createMockDevice } from '../../createMockDevice';
import { DeviceState } from '../../types';

vi.mock('react-i18next', async () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
    initReactI18next: {
        type: '3rdParty',
        init: () => {},
    },
    I18nextProvider: ({ children }) => children,
}));

vi.mock('react-table', () => {
    const mockHeaderGroup = {
        getHeaderGroupProps: () => ({}),
        headers: [],
    };

    return {
        useTable: (props) => {
            const columns = props.columns || [];
            mockHeaderGroup.headers = columns.map((column) => ({
                ...column,
                getHeaderProps: () => ({}),
                getSortByToggleProps: () => ({}),
                isSorted: false,
                isSortedDesc: false,
                canSort: false,
                render: (type) => {
                    if (type === 'Header') {
                        return column.Header;
                    }
                    return null;
                },
            }));

            return {
                getTableProps: () => ({}),
                getTableBodyProps: () => ({}),
                headerGroups: [mockHeaderGroup],
                rows: [],
                prepareRow: () => {},
                state: { globalFilter: '' },
                visibleColumns: columns,
                setGlobalFilter: () => {},
                preGlobalFilteredRows: [],
            };
        },
        useGlobalFilter: () => [null, () => {}],
        useAsyncDebounce: (fn) => fn,
        useSortBy: () => ({}),
    };
});

const mockDeviceBase = createMockDevice({
    friendly_name: 'Test Device',
    ieee_address: '0x123',
    network_address: 1234,
    manufacturer: 'Test Manufacturer',
    model_id: 'Test Model ID',
});

const mockState: DeviceState = {
    linkquality: 100,
};

const createMockDeviceData = (overrides = {}) => ({
    id: mockDeviceBase.friendly_name,
    device: mockDeviceBase,
    state: mockState,
    disabled: false,
    availabilityState: 'online' as const,
    availabilityEnabledForDevice: false,
    ...overrides,
});

const defaultProps = {
    data: [createMockDeviceData()],
    lastSeenType: 'disable' as const,
    availabilityFeatureEnabled: false,
    homeassistantEnabled: false,
    configureDevice: vi.fn(),
    renameDevice: vi.fn(),
    removeDevice: vi.fn(),
    setDeviceDescription: vi.fn(),
    interviewDevice: vi.fn(),
};

describe('Availability column visibility', () => {
    it('should show availability column when device has it explicitly enabled, even if globally disabled', () => {
        const deviceWithAvailability = createMockDeviceData({
            availabilityEnabledForDevice: true,
        });
        render(<DevicesTable {...defaultProps} data={[deviceWithAvailability]} availabilityFeatureEnabled={false} />);
        expect(screen.getByRole('columnheader', { name: /avaliability:avaliability/i })).toBeInTheDocument();
    });

    it('should not show availability column when device has it explicitly disabled, even if globally enabled', () => {
        const deviceWithoutAvailability = createMockDeviceData({
            availabilityEnabledForDevice: false,
        });
        render(<DevicesTable {...defaultProps} data={[deviceWithoutAvailability]} availabilityFeatureEnabled={true} />);
        expect(screen.queryByRole('columnheader', { name: /avaliability:avaliability/i })).not.toBeInTheDocument();
    });

    it('should show availability column when device has no config, and global availabilty is enabled', () => {
        const deviceWithoutAvailability = createMockDeviceData({
            availabilityEnabledForDevice: undefined,
        });
        render(<DevicesTable {...defaultProps} data={[deviceWithoutAvailability]} availabilityFeatureEnabled={true} />);
        expect(screen.queryByRole('columnheader', { name: /avaliability:avaliability/i })).toBeInTheDocument();
    });

    it('should show availability column when some devices have it enabled and others disabled', () => {
        const deviceWithAvailability = createMockDeviceData({
            availabilityEnabledForDevice: true,
        });
        const deviceWithoutAvailability = createMockDeviceData({
            availabilityEnabledForDevice: false,
            id: 'device2',
        });
        render(
            <DevicesTable
                {...defaultProps}
                data={[deviceWithAvailability, deviceWithoutAvailability]}
                availabilityFeatureEnabled={false}
            />,
        );
        expect(screen.getByRole('columnheader', { name: /avaliability:avaliability/i })).toBeInTheDocument();
    });

    it('should not show availability column when all devices have it disabled and globally disabled', () => {
        const deviceWithoutAvailability = createMockDeviceData({
            availabilityEnabledForDevice: false,
        });
        render(
            <DevicesTable {...defaultProps} data={[deviceWithoutAvailability]} availabilityFeatureEnabled={false} />,
        );
        expect(screen.queryByRole('columnheader', { name: /avaliability:avaliability/i })).not.toBeInTheDocument();
    });
});
