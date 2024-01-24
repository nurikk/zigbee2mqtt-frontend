import React, { Component, useEffect, useState } from 'react';

import { WithTranslation, withTranslation } from 'react-i18next';
import Button from '../button';
import { Device, IEEEEAddress } from '../../types';
import { WithDevices } from '../../store';
import { DeviceApi } from '../../actions/DeviceApi';
import { getZ2mDeviceImage } from '../device-image';

type LocaliserState = 'none' | 'start' | 'inprogress' | 'done';

type Props = WithTranslation<'setting'> & WithDevices & Pick<DeviceApi, 'setDeviceOptions'>;

type LStatus = 'init' | 'error' | 'done';

function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(blob);
    });
}

async function downloadImage(imageSrc: string): Promise<string> {
    const image = await fetch(imageSrc);
    if (image.ok) {
        const blob = await image.blob();
        return blobToBase64(blob);
    } else {
        return Promise.reject(image.status);
    }
}

function ImageLocaliser(props: Props): JSX.Element {
    const [currentState, setCurrentState] = useState<LocaliserState>('none');
    const { setDeviceOptions, t, devices } = props;
    const [localisationStatus, setLocalisationStatus] = useState<Record<IEEEEAddress, LStatus>>({});

    async function localiseImage(device: Device) {
        setLocalisationStatus((curr) => {
            return { ...curr, [device.ieee_address]: 'init' };
        });

        const imageUrl = getZ2mDeviceImage(device);

        const imageContent = await downloadImage(imageUrl);
        console.log(device.friendly_name, imageUrl, imageContent);
        await setDeviceOptions(device.ieee_address, { icon: imageContent });
        setLocalisationStatus((curr) => {
            return { ...curr, [device.ieee_address]: 'done' };
        });
    }
    useEffect(() => {
        if (currentState == 'start') {
            for (const device of Object.values<Device>(devices).filter((d) => d.type !== 'Coordinator')) {
                localiseImage(device)
                    .catch((err) => {
                        setLocalisationStatus((curr) => {
                            return { ...curr, [device.ieee_address]: 'error' };
                        });
                    })
                    .then();
            }
            setCurrentState('inprogress');
        }
    }, [currentState]);

    switch (currentState) {
        case 'none':
            return (
                <Button className="btn btn-primary d-block mt-2" onClick={() => setCurrentState('start')}>
                    {t('localise_images')}
                </Button>
            );
        case 'inprogress':
            return (
                <div>
                    {Object.values(devices).map((device) => {
                        return (
                            <div key={device.ieee_address}>
                                {device.friendly_name} {localisationStatus[device.ieee_address]}
                            </div>
                        );
                    })}
                </div>
            );
        case 'done':
            return <div>done</div>;
    }
    return <div>Unknown</div>;
}

export default withTranslation(['settings'])(ImageLocaliser);
