import React from "react";
import { DeviceState } from "../types";
import { format } from 'timeago.js';
import { lastSeen } from "../utils";
import { LastSeenType } from "./zigbee";

type LastSeenProps = {
    state: DeviceState;
    lastSeenType: LastSeenType;
}
export function LastSeen(props: LastSeenProps): JSX.Element {
    const { state, lastSeenType } = props;
    const lastSeenDate = lastSeen(state, lastSeenType);
    if (lastSeenDate) {
        return <>{format(lastSeenDate)}</>
    } else {
        return <>N/A</>;
    }
}
