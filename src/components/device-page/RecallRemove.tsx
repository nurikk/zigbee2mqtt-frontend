import React, { useState } from "react";
import { Device, DeviceState, Group, Scene, WithFreiendlyName } from "../../types";
import { SceneApi } from "../../actions/SceneApi";
import { useTranslation } from "react-i18next";
import Button from "../button";
import { ScenePicker } from "./ScenePicker";
import { getScenes } from "./scene";

export interface RecallRemoveAndMayBeStoreSceneProps {
    target: Device | Group;
    deviceState: DeviceState;
}


export function RecallRemove(props: RecallRemoveAndMayBeStoreSceneProps & Pick<SceneApi, 'sceneRecall' | 'sceneRemove' | 'sceneStore' | 'sceneRemoveAll'>) {
    const { sceneRecall, sceneRemove, sceneRemoveAll, target } = props;
    const { t } = useTranslation("scene");
    const [scene, setScene] = useState<Scene>({ id: 0, endpoint: undefined } as Scene);
    const sceneIsntSelected = scene.id === undefined;
    const scenes = getScenes(target);
    const { friendly_name } = target as WithFreiendlyName;
    return <>
        <div className="mb-3">
            <ScenePicker
                onSceneSelected={setScene}
                value={scene}
                scenes={scenes} />
        </div>
        <div className="d-flex">
            <div className="btn-group ms-auto pe-1">
                <button disabled={sceneIsntSelected} onClick={() => sceneRecall(friendly_name, scene.id, scene.endpoint)} type="submit" className="btn btn-success">{t('recall')}</button>
                <Button disabled={sceneIsntSelected} promt onClick={() => sceneRemove(friendly_name, scene.id, scene.endpoint)} type="submit" className="btn btn-danger">{t('remove')}</Button>
            </div>
            <Button promt onClick={() => sceneRemoveAll(friendly_name, "")} type="submit" className="btn btn-danger">{t('remove_all')}</Button>
        </div>
    </>;
}
