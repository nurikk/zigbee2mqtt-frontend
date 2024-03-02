import { connect } from 'unistore/react';
import { GlobalState } from '../../store';
import actions from '../../actions/actions';
import { withTranslation } from 'react-i18next';
import { MapState } from '.';
import { MapComponent } from './MapComponent';

export const ConnectedMap = withTranslation('map')(
    connect<unknown, MapState, GlobalState, unknown>(
        ['networkGraph', 'networkGraphIsLoading', 'deviceStates', 'devices', 'availability'],
        actions,
    )(MapComponent),
);
