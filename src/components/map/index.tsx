import { GraphI, LinkI, NodeI, ZigbeeRelationship } from './types';
import { GlobalState } from '../../store';

export interface MapState {
    visibleLinks: ZigbeeRelationship[];
    legendIsVisible: boolean;
}
const parentOrChild = [ZigbeeRelationship.NeigbhorIsAChild, ZigbeeRelationship.NeigbhorIsParent];

export const defaultVisibleRelationsLinks = [...parentOrChild, ZigbeeRelationship.NeigbhorIsASibling];

export type PropsFromStore = Pick<
    GlobalState,
    'networkGraph' | 'networkGraphIsLoading' | 'deviceStates' | 'devices' | 'availability'
>;
