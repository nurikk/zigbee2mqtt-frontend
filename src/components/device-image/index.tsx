import React, { FunctionComponent, ImgHTMLAttributes, useState } from "react";
import genericDevice from "../../images/generic-zigbee-device.png";
import { Device, DeviceState } from "../../types";
import cx from "classnames";
import { sanitizeZ2MDeviceName } from "../../utils";
type DeviceImageProps = {
    device: Device;
    deviceStatus?: DeviceState;
    type?: "img" | "svg";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const genericDeiviceImageFallback = (device: Device): string => genericDevice;
const genSlsDeviceImageUrlZ2M = (device: Device): string => `https://www.zigbee2mqtt.io/images/devices/${sanitizeZ2MDeviceName(device?.definition?.model)}.jpg`;
const genSlsDeviceImageUrlSLS = (device: Device): string => `https://slsys.github.io/Gateway/devices/png/${device?.definition?.model?.replace("/", "_")}.png`;

const AVALIABLE_GENERATORS = [
    genSlsDeviceImageUrlZ2M, genSlsDeviceImageUrlSLS, genericDeiviceImageFallback
]

const DeviceImage: FunctionComponent<DeviceImageProps & ImgHTMLAttributes<HTMLDivElement | SVGImageElement>> = (props) => {
    const [imageGenerators, setimageGenerators] = useState(AVALIABLE_GENERATORS);
    const { device, deviceStatus, type = "img", className, ...rest } = props;
    let src = genericDeiviceImageFallback(device);
    if (device?.definition?.model && imageGenerators.length) {
        src = imageGenerators[0](device);
    }

    const onImageError = () => {
        const newGenerators = [...imageGenerators];
        newGenerators.shift();
        setimageGenerators(newGenerators);
    };
    const otaSpinner = deviceStatus?.update?.state === "updating" ? <i title="Updating firmware" className="fa fa-sync fa-spin position-absolute bottom-0 right-0" /> : null;
    const interviewSpinner = device.interviewing ? <i title="Interviewing" className="fa fa-spinner fa-spin position-absolute bottom-0 right-0" /> : null;
    const unseccessfullInterview = !device.interviewing && !device.interview_completed ? <i title="Interview failed" className="fa fa-exclamation-triangle position-absolute top-0 right-0 text-danger" /> : null;
    switch (type) {
        case "svg":
            return src ? <image {...rest} onError={onImageError} href={src} /> : null;
        case "img":
        default:
            return src ? <div className={cx(className, "position-relative")} {...rest}>
                <img onError={onImageError} src={src} className={"position-relative"} />
                {interviewSpinner}
                {otaSpinner}
                {unseccessfullInterview}
            </div> : null;
    }
}
export default DeviceImage;