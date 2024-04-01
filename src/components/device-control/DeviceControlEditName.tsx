import React from 'react';
import Button from '../button';
import { Device } from '../../types';

import { useTranslation } from 'react-i18next';
import { RenameDeviceModal } from '../modal/components/RenameDeviceModal';
import NiceModal from '@ebay/nice-modal-react';

interface DeviceControlEditNameProps {
    device: Device;
    renameDevice(old: string, newName: string, homeassistantRename: boolean): Promise<void>;
    homeassistantEnabled: boolean;
}

export const DeviceControlEditName = (props: DeviceControlEditNameProps): JSX.Element => {
    const { homeassistantEnabled, device, renameDevice } = props;
    const { t } = useTranslation(['zigbee', 'common']);

    return (
        <Button<void>
            className="btn btn-primary btn btn-primary btn-sm d-none d-md-inline mx-1"
            onClick={() =>
                NiceModal.show(RenameDeviceModal, {
                    device,
                    renameDevice,
                })
            }
            title={t('rename_device')}
        >
            <i className="fa fa-edit" />
        </Button>
    );
}
