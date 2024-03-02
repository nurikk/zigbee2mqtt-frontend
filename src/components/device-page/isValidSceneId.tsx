import { Scene } from '../../types';
import { SceneId } from '../../actions/SceneApi';

export const isValidSceneId = (id: SceneId, existingScenes: Scene[] = []): boolean => {
    return id >= 0 && id <= 255 && !existingScenes.find((s) => s.id == id);
};
