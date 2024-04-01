import React, { Suspense } from 'react';
import genericDevice from '../../images/generic-zigbee-device.png';
import { Device, DeviceState, OTAState } from '../../types';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { LazyImage } from './LazyImage';
import { ErrorBoundary } from './ErrorBoundary';

type DeviceImageProps = {
    device: Device;
    deviceStatus?: DeviceState;
    disabled: boolean;
    type?: 'img' | 'svg';
    className?: string;
};

export function DeviceImage(props: Readonly<DeviceImageProps>) {
    const { t } = useTranslation('zigbee');

    const { device = {} as Device, disabled, deviceStatus, type = 'img', className, ...rest } = props;

    if (type === 'svg') {
        return (
            <Suspense fallback={<image crossOrigin={'anonymous'} {...rest} href={genericDevice} />}>
                <ErrorBoundary>
                    <LazyImage type="svg" device={device} {...rest} />
                </ErrorBoundary>
            </Suspense>
        );
    }
    const otaState = (deviceStatus?.update ?? {}) as OTAState;
    const otaSpinner =
        otaState.state === 'updating' ? (
            <i title={t('updating_firmware')} className="fa fa-sync fa-spin position-absolute bottom-0 right-0" />
        ) : null;
    const interviewSpinner = device.interviewing ? (
        <i title={t('interviewing')} className="fa fa-spinner fa-spin position-absolute bottom-0 right-0" />
    ) : null;
    const unsuccessfulInterview = !device.interviewing && !device.interview_completed;
    const disabledIcon = disabled ? (
        <i title={t('device_disabled')} className="fa fa-ban position-absolute bottom-0 right-0" />
    ) : null;

    return (
        <div className={cx(className, 'position-relative')} {...rest}>
            <Suspense fallback={<img alt="" src={genericDevice} />}>
                <ErrorBoundary>
                    <LazyImage device={device} />
                </ErrorBoundary>
            </Suspense>
            {interviewSpinner}
            {otaSpinner}
            {disabledIcon}
            {unsuccessfulInterview && (
                <i
                    title={t('interview_failed')}
                    className="fa fa-exclamation-triangle position-absolute top-0 right-0 text-danger"
                />
            )}
        </div>
    );
}
