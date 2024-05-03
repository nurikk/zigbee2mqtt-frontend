import React from 'react';
import Button from '../button';
import { Device } from '../../types';

import { useTranslation } from 'react-i18next';
import NiceModal from '@ebay/nice-modal-react';
import { UpdateDeviceDescModal } from '../modal/components/EditDeviceDescModal';

interface DeviceControlUpdateDescProps {
    device: Device;
    setDeviceDescription(old: string, newDesc: string): Promise<void>;
}

export const DeviceControlUpdateDesc = (props: DeviceControlUpdateDescProps): JSX.Element => {
    const { device, setDeviceDescription } = props;
    const { t } = useTranslation(['zigbee', 'common']);

    return (
        <Button<void>
            className="btn btn-link btn-sm d-md-inline-block mx-1"
            onClick={() =>
                NiceModal.show(UpdateDeviceDescModal, {
                    device,
                    setDeviceDescription,
                })
            }
            title={t('edit_description')}
        >
            <i className="fa fa-edit" />
        </Button>
    );
};
