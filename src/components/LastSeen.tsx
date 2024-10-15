import React from 'react';
import { DeviceState, LastSeenType } from '../types';
import { format } from 'timeago.js';
import { lastSeen, formatDate } from '../utils';

import { useTranslation } from 'react-i18next';

type LastSeenProps = {
    state: DeviceState;
    lastSeenType: LastSeenType;
};
export function LastSeen(props: LastSeenProps): JSX.Element {
    const { i18n } = useTranslation();
    const { state, lastSeenType } = props;
    const lastSeenDate = lastSeen(state, lastSeenType);
    if (lastSeenDate) {
        return <span title={formatDate(lastSeenDate)}>{format(lastSeenDate, i18n.language)}</span>;
    } else {
        return <>N/A</>;
    }
}
