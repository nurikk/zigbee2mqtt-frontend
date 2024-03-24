import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import { GlobalState } from '../../store';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { DevicePage } from './DevicePage';

export const ConnectedDevicePage = withTranslation('devicePage')(
    connect<unknown, unknown, GlobalState, unknown>(
        ['devices', 'deviceStates', 'logs', 'bridgeInfo', 'generatedExternalDefinitions', 'theme'],
        actions,
    )(withRouter(DevicePage)),
);
