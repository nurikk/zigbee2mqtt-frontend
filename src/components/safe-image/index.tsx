import React, { FunctionComponent, ImgHTMLAttributes, useState } from "react";
import genericDevice from "../../images/generic-zigbee-device.png";

const SafeImg: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    const [isOk, setisOk] = useState(true);
    const { ...rest } = props;
    return isOk ? <img {...rest} onError={() => setisOk(false)} /> : <img {...rest} src={genericDevice} />;
}
export default SafeImg;