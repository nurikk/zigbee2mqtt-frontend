import React, { FunctionComponent, ImgHTMLAttributes, useState } from "react";
import genericDevice from "../../images/generic-zigbee-device.png";
import { Device } from "../../types";
type DeviceImageProps = {
    device: Device;
    type?: "img" | "svg";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const genericDeiviceImageFallback = (device: Device): string => genericDevice;
const genSlsDeviceImageUrlZ2M = (device: Device): string => `https://www.zigbee2mqtt.io/images/devices/${device?.definition?.model?.replace(/:|\s|\//g, "-")}.jpg`;
const genSlsDeviceImageUrlSLS = (device: Device): string => `https://slsys.github.io/Gateway/devices/png/${device?.definition?.model?.replace("/", "_")}.png`;

const AVALIABLE_GENERATORS = [
    genSlsDeviceImageUrlZ2M, genSlsDeviceImageUrlSLS, genericDeiviceImageFallback
]

const DeviceImage: FunctionComponent<DeviceImageProps & ImgHTMLAttributes<HTMLImageElement | SVGImageElement>> = (props) => {
    const [imageGenerators, setimageGenerators] = useState(AVALIABLE_GENERATORS);
    const { device, type = "img", ...rest } = props;
    const src = imageGenerators.length ? imageGenerators[0](device) : false;
    const onImageError = () => {
        const newGenerators = [...imageGenerators];
        newGenerators.shift();
        setimageGenerators(newGenerators);
    };
    switch (type) {
        case "svg":
            return src ? <image {...rest} onError={onImageError} href={src} /> : null;
        case "img":
        default:
            return src ? <img {...rest} onError={onImageError} src={src} /> : null;
    }
}
export default DeviceImage;