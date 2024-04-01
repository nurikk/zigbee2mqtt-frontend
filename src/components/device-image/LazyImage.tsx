import React from 'react';
import { useImage } from 'react-image';
import { AVAILABLE_GENERATORS } from '.';
import { Device } from '../../types';

type LazyImageProps = {
    device: Device;
    type?: 'img' | 'svg';
};

export function LazyImage(props: Readonly<LazyImageProps>) {
    const { device, type, ...rest } = props;

    const { src } = useImage({
        srcList: AVAILABLE_GENERATORS.map((fn) => fn(device)).filter(Boolean) as string[],
    });
    if (type === 'svg') {
        return <image crossOrigin={'anonymous'} {...rest} href={src} />;
    }
    return <img alt="" crossOrigin={'anonymous'} src={src} />;
}
