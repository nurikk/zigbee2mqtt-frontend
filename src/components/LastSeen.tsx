import React from "react";
import { DeviceState } from "../types";
import { format } from 'timeago.js';
import { lastSeen } from "../utils";
import { LastSeenType } from "./zigbee";
import { useTranslation } from "react-i18next";

type LastSeenProps = {
    state: DeviceState;
    lastSeenType: LastSeenType;
}
export function LastSeen(props: LastSeenProps): JSX.Element {
    const { i18n } = useTranslation();
    const { state, lastSeenType } = props;
    const lastSeenDate = lastSeen(state, lastSeenType);
    if (lastSeenDate) {
        return <>{format(lastSeenDate, i18n.language)}</>
    } else {
        return <>N/A</>;
    }
}
