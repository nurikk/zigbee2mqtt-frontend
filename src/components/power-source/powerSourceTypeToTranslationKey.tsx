import { PowerSource as PowerSourceType } from '../../types';

export const powerSourceTypeToTranslationKey = (source: PowerSourceType | undefined): string => {
    return (source + '')
        .toLowerCase()
        .replace(/\s/g, '_')
        .replace(/[^a-z0-9_]/g, '');
};
