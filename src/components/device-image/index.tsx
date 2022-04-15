import React, { FunctionComponent, ImgHTMLAttributes } from "react";
import genericDevice from "../../images/generic-zigbee-device.png";
import { Device, DeviceState, OTAState } from "../../types";
import cx from "classnames";
import { sanitizeZ2MDeviceName } from "../../utils";
import style from "./style.css";
import { useTranslation } from "react-i18next";
import { useImage } from 'react-image'

type DeviceImageProps = {
    device: Device;
    deviceStatus?: DeviceState;
    type?: "img" | "svg";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFallbackDeviceImage = (device: Device): string => genericDevice;
const getZ2mDeviceImage = (device: Device): string => `https://www.zigbee2mqtt.io/images/devices/${sanitizeZ2MDeviceName(device?.definition?.model)}.jpg`;
const getConverterDeviceImage = (device: Device): string | undefined => device.definition?.icon;

const sanitizeModelIDForImageUrl = (modelName: string): string => modelName?.replace("/", "_");

const getSlsDeviceImage = (device: Device): string => (`https://slsys.github.io/Gateway/devices/png/${sanitizeModelIDForImageUrl(device.model_id)}.png`);


const AVAILABLE_GENERATORS = [
    getConverterDeviceImage,
    getZ2mDeviceImage,
    getSlsDeviceImage,
    getFallbackDeviceImage
]

const DeviceImage: FunctionComponent<DeviceImageProps & ImgHTMLAttributes<HTMLDivElement | SVGImageElement>> = (props) => {
    const { t } = useTranslation("zigbee");

    const { device = {} as Device, deviceStatus, type = "img", className, ...rest } = props;
    const { src } = useImage({
        srcList: AVAILABLE_GENERATORS.map(fn => fn(device)) as string[],
    });

    const otaState = (deviceStatus?.update ?? {}) as OTAState;
    const otaSpinner = otaState.state === "updating" ? <i title={t("updating_firmware")} className="fa fa-sync fa-spin position-absolute bottom-0 right-0" /> : null;
    const interviewSpinner = device.interviewing ? <i title={t("interviewing")} className="fa fa-spinner fa-spin position-absolute bottom-0 right-0" /> : null;
    const unsuccessfulInterview = !device.interviewing && !device.interview_completed ? <i title={t("interview_failed")} className="fa fa-exclamation-triangle position-absolute top-0 right-0 text-danger" /> : null;
    if (type === "svg") {
        return <image crossOrigin={"anonymous"} {...rest} href={src} />;
    } else {
        return <div className={cx(className, "position-relative")} {...rest}>
            <img crossOrigin={"anonymous"} src={src} className={style.img} />
            {interviewSpinner}
            {otaSpinner}
            {unsuccessfulInterview}
        </div>;
    }
}
export default DeviceImage;
