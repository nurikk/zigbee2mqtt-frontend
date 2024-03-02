import { Device, Group, Scene, WithScenes } from '../../types';

export function getScenes(target: Group | Device): Scene[] {
    if ((target as Device).endpoints) {
        const scenes: Scene[] = [];
        Object.entries((target as Device).endpoints).forEach(([endpoint, value]) => {
            value.scenes?.forEach((_scene) => scenes.push({ ..._scene, ...{ endpoint } }));
        });
        return scenes;
    } else if ((target as WithScenes).scenes) {
        return (target as WithScenes).scenes as Scene[];
    }
    return [];
}
