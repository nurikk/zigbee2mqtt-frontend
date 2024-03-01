import { TableState } from 'react-table';
import * as local from 'store2';

const TABLE_STORAGE_PREFIX = 'z2m-';
export const getStorageKey = (id: string) => `${TABLE_STORAGE_PREFIX}${id}`;

export type StateItem = Partial<TableState<Record<string, unknown>>>;

export const persist = (key: string, data: StateItem): void => {
    local.set(getStorageKey(key), data);
};

export const restore = (key: string): StateItem => {
    return local.get<StateItem>(key);
};
