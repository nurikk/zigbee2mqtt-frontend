import { RouteComponentProps } from 'react-router-dom';
import { GlobalState } from '../../store';

import { DeviceApi } from '../../actions/DeviceApi';
import { WithTranslation } from 'react-i18next';
import { TabName } from './types';

export const getDeviceLinks = (dev: string) => [
    {
        translationKey: 'about',
        url: `/device/${dev}/info`,
    },
    {
        translationKey: 'exposes',
        url: `/device/${dev}/exposes`,
    },
    {
        translationKey: 'bind',
        url: `/device/${dev}/bind`,
    },
    {
        translationKey: 'reporting',
        url: `/device/${dev}/reporting`,
    },
    {
        translationKey: 'settings',
        url: `/device/${dev}/settings`,
    },
    {
        translationKey: 'settings_specific',
        url: `/device/${dev}/settings-specific`,
    },
    {
        translationKey: 'state',
        url: `/device/${dev}/state`,
    },
    {
        translationKey: 'clusters',
        url: `/device/${dev}/clusters`,
    },
    {
        translationKey: 'scene',
        url: `/device/${dev}/scene`,
    },
    {
        translationKey: 'dev_console',
        url: `/device/${dev}/dev-console`,
    },
];
type UrlParams = {
    dev: string;
    tab?: TabName;
};
type PropsFromStore = Pick<
    GlobalState,
    'bridgeInfo' | 'devices' | 'logs' | 'deviceStates' | 'generatedExternalDefinitions' | 'theme'
>;

export type DevicePageProps = RouteComponentProps<UrlParams> &
    PropsFromStore &
    DeviceApi &
    WithTranslation<'devicePage'>;
