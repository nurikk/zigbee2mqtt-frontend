import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '../../test-utils';
import { Availability } from './Availability';
import { expect, it, describe, vi } from 'vitest';

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

describe('Availability Component', () => {
    it('should show availability when device has it explicitly enabled, even if globally disabled', () => {
        render(
            <Availability
                disabled={false}
                availability="online"
                availabilityFeatureEnabled={false}
                availabilityEnabledForDevice={true}
            />,
        );
        expect(screen.getByText('online')).toBeInTheDocument();
    });

    it('should show availability when globally enabled and device not explicitly disabled', () => {
        render(
            <Availability
                disabled={false}
                availability="online"
                availabilityFeatureEnabled={true}
                availabilityEnabledForDevice={undefined}
            />,
        );
        expect(screen.getByText('online')).toBeInTheDocument();
    });

    it('should not show availability when device has it explicitly disabled, even if globally enabled', () => {
        render(
            <Availability
                disabled={false}
                availability="online"
                availabilityFeatureEnabled={true}
                availabilityEnabledForDevice={false}
            />,
        );
        expect(screen.getByText('disabled')).toBeInTheDocument();
    });

    it('should show disabled status when device is disabled', () => {
        render(
            <Availability
                disabled={true}
                availability="online"
                availabilityFeatureEnabled={true}
                availabilityEnabledForDevice={true}
            />,
        );
        expect(screen.getByText('disabled')).toBeInTheDocument();
    });

    it('should not show availability when globally disabled and device not explicitly enabled', () => {
        render(
            <Availability
                disabled={false}
                availability="online"
                availabilityFeatureEnabled={false}
                availabilityEnabledForDevice={undefined}
            />,
        );
        expect(screen.getByText('disabled')).toBeInTheDocument();
    });
});
