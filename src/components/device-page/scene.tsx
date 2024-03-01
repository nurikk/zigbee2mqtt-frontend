import React from 'react';
import { Device, DeviceState } from '../../types';
import actions from '../../actions/actions';
import { SceneApi } from '../../actions/SceneApi';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';
import { StateApi } from '../../actions/StateApi';
import { AddScene } from './AddScene';
import { RecallRemove } from './RecallRemove';

type SceneProps = {
    device: Device;
    deviceState: DeviceState;
};

function ScenePage(props: SceneProps & SceneApi & StateApi) {
    const { sceneStore, sceneRecall, sceneRemove, sceneRemoveAll, setDeviceState, device, deviceState } = props;
    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-xxl-6 d-flex">
                <div className="card flex-fill">
                    <div className="card-body py-4">
                        <AddScene
                            sceneStore={sceneStore}
                            target={device}
                            deviceState={deviceState}
                            setDeviceState={setDeviceState}
                        />
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-xxl-6 d-flex">
                <div className="card flex-fill">
                    <div className="card-body py-4">
                        <RecallRemove
                            sceneStore={sceneStore}
                            sceneRecall={sceneRecall}
                            sceneRemove={sceneRemove}
                            sceneRemoveAll={sceneRemoveAll}
                            target={device}
                            deviceState={deviceState}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mappedProps = [];
const ConnectedDeviceStates = connect<SceneProps, unknown, GlobalState, SceneApi & StateApi>(
    mappedProps,
    actions,
)(ScenePage);
export default ConnectedDeviceStates;
