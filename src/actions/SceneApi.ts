import api from "../api";
import { Endpoint, Scene } from "../types";

export type SceneId = number;
export interface SceneApi {
    sceneStore(dev: string,  scene: Scene, endpoint?: Endpoint | undefined): Promise<void>;
    sceneRecall(dev: string,  sceneId: SceneId, endpoint?: Endpoint| undefined): Promise<void>;
    sceneRemove(dev: string,  sceneId: SceneId, endpoint?: Endpoint| undefined): Promise<void>;
    sceneRemoveAll(dev: string, endpoint?: Endpoint): Promise<void>;
}
// Document: https://www.zigbee2mqtt.io/guide/usage/scenes.html

export default {
    sceneStore(state, dev: string,  scene: Scene, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_store: {...{ID: scene.id}, ...(scene.name && {name: scene.name})} });
    },
    sceneRecall(state, dev: string,  sceneId: SceneId, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_recall: sceneId });
    },
    sceneRemove(state, dev: string,  sceneId: SceneId, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_remove: sceneId });
    },
    sceneRemoveAll(state, dev: string, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_remove_all: "" });
    },

}
