import React, { ChangeEvent } from 'react';
import { Scene } from '../../types';
import { useTranslation } from 'react-i18next';

type ScenePickerProps = {
    value: Scene;
    scenes: Scene[];
    onSceneSelected: (sceneId: Scene) => void;
};
export function ScenePicker(props: ScenePickerProps): JSX.Element {
    const { t } = useTranslation('scene');
    const { onSceneSelected, scenes = [], value } = props;
    const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const [id, endpoint] = e.target.value.split('-');
        onSceneSelected({ id: parseInt(id, 10), endpoint });
    };
    const selectPicker = (
        <>
            <label htmlFor="rr-scene" className="form-label">
                {t('scene_name')}
            </label>
            <select onChange={onSelectHandler} id="rr-scene" className="form-select">
                <option key="hidden" hidden>
                    {t('select_scene')}
                </option>
                {scenes.map((scene) => (
                    <option key={`${scene.id}-${scene.endpoint}`} value={`${scene.id}-${scene.endpoint}`}>
                        {scene.name}
                    </option>
                ))}
            </select>
        </>
    );

    const textPicker = (
        <>
            <label htmlFor="rr-scene" className="form-label">
                {t('scene_id')}
            </label>
            <input
                min={0}
                value={value.id}
                type="number"
                className="form-control"
                id="rr-scene"
                onChange={(e) => onSceneSelected({ id: e.target.valueAsNumber, endpoint: undefined })}
            />
        </>
    );

    return <>{scenes.length > 0 ? selectPicker : textPicker}</>;
}
