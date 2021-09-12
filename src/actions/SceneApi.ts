import api from "../api";
import { Endpoint } from "../types";

//tz.scene_store, tz.scene_recall, tz.scene_add, tz.scene_remove, tz.scene_remove_all

type SceneAddParams = {
    color_temp?: string;
    color?: string;
    transition?: number;
    state?: string;
    brightness?: number;

}
export type SceneId = number;
export interface SceneApi {
    sceneStore(dev: string,  sceneId: SceneId, endpoint?: Endpoint | undefined): Promise<void>;
    sceneRecall(dev: string,  sceneId: SceneId, endpoint?: Endpoint| undefined): Promise<void>;
    sceneRemove(dev: string,  sceneId: SceneId, endpoint?: Endpoint| undefined): Promise<void>;
    sceneAdd(dev: string,  sceneId: SceneId, params: SceneAddParams, endpoint?: Endpoint| undefined): Promise<void>;
    sceneRemoveAll(dev: string, endpoint?: Endpoint): Promise<void>;
}
// Document: https://www.zigbee2mqtt.io/information/scenes.html

export default {
    sceneStore(state, dev: string,  sceneId: SceneId, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_store: sceneId });
    },
    sceneRecall(state, dev: string,  sceneId: SceneId, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_recall: sceneId });
    },
    sceneAdd(state, dev: string,  sceneId: SceneId, params: SceneAddParams, endpoint?: Endpoint): Promise<void> {
        return Promise.reject("Not implemented yet");
    },
    sceneRemove(state, dev: string,  sceneId: SceneId, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_remove: sceneId });
    },
    sceneRemoveAll(state, dev: string, endpoint?: Endpoint): Promise<void> {
        return api.send(`${dev}/set`, { scene_remove_all: "" });
    },

}
