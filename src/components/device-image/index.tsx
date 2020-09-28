import React, { FunctionComponent, ImgHTMLAttributes, useState } from "react";
import genericDevice from "../../images/generic-zigbee-device.png";
import { Device } from "../../types";
type DeviceImageProps = {
    device: Device;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const genericDeiviceImageFallback = (device: Device): string => genericDevice;
const genSlsDeviceImageUrlZ2M = (device: Device): string => `https://www.zigbee2mqtt.io/images/devices/${device?.definition?.model?.replace(/:|\s|\//g, "-")}.jpg`;
const genSlsDeviceImageUrlSLS = (device: Device): string => `https://slsys.github.io/Gateway/devices/png/${device?.definition?.model?.replace("/", "_")}.png`;

const AVALIABLE_GENERATORS = [
    genSlsDeviceImageUrlZ2M, genSlsDeviceImageUrlSLS, genericDeiviceImageFallback
]

const DeviceImage: FunctionComponent<DeviceImageProps & ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    const [imageGenerators, setimageGenerators] = useState(AVALIABLE_GENERATORS);
    const { device, ...rest } = props;
    const src = imageGenerators.length ? imageGenerators[0](device) : false;
    return src ? <img {...rest} onError={() => {
        const newGenerators = [...imageGenerators];
        newGenerators.shift();
        setimageGenerators(newGenerators);
    }} src={src} /> : null;
}

const DeviceSvgImage: FunctionComponent<DeviceImageProps & ImgHTMLAttributes<SVGImageElement>> = (props) => {
    const [imageGenerators, setimageGenerators] = useState(AVALIABLE_GENERATORS);
    const { device, ...rest } = props;
    const src = imageGenerators.length ? imageGenerators[0](device) : false;
    return src ? <image {...rest} onError={() => {
        const newGenerators = [...imageGenerators];
        newGenerators.shift();
        setimageGenerators(newGenerators);
    }} href={src} /> : null;
}
export default DeviceImage;
export { DeviceSvgImage };