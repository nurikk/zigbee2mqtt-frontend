import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DeviceApi } from "../../actions/DeviceApi";

import { LogMessage } from "../../store";
import { Device } from "../../types";
import { LastLogResult } from "./LastLogResult";


interface CommandExecutorProps extends Pick<DeviceApi, "executeCommand"> {
    logs: LogMessage[];
    device: Device;

}
export const CommandExecutor = (props: CommandExecutorProps): JSX.Element => {
    const { executeCommand, device, logs } = props;
    const { t } = useTranslation("zigbee");
    const [endpoint, setEndpoint] = useState<number>(1);
    const [cluster, setCluster] = useState<string>('');
    const [command, setCommand] = useState<string>('');
    const [payload, setPayload] = useState(JSON.stringify({}, null, 2));
    const formIsValid = (): boolean => {
        let payloadIsValid = true;
        try {
            JSON.parse(payload);
        } catch (err) {
            payloadIsValid = false
        }
        return payloadIsValid && !isNaN(parseInt(cluster)) && !isNaN(parseInt(command))
    }
    const onExecuteClick = () => {
        executeCommand(device.friendly_name, endpoint, parseInt(cluster), parseInt(command), JSON.parse(payload));
    }
    const logsFilterFn = (l: LogMessage): boolean => {
        return l.message.startsWith('Invoked ');
    }
    return <div>
        <div className="row mb-3">
            <div className="col-4 col-sm-3">
                <div className="form-group">
                    <label className="form-label">{t('endpoint')}</label>
                    <input type="number"
                        min="1"
                        max="255"
                        value={endpoint}
                        onChange={(e) => setEndpoint(e.target.valueAsNumber)}
                        className="form-control" />
                </div>
            </div>
            <div className="col-4 col-sm-3">
                <div className="col-auto">
                    <label className="form-label">{t('cluster')}</label>
                    <input type="text"
                        value={cluster}
                        placeholder={"example: 0x0001, 1, 123"}
                        onChange={(e) => setCluster(e.target.value)}
                        className="form-control" />
                </div>
            </div>
            <div className="col-4 col-sm-3">
                <div className="col-auto">
                    <label className="form-label">{t('command')}</label>
                    <input type="text"
                        value={command}
                        placeholder={"example: 0x0001, 1, 123"}
                        onChange={(e) => setCommand(e.target.value)}
                        className="form-control" />
                </div>
            </div>
        </div>
        <div className="row mb-3 ">
            <div className="col-9 col-sm-9">
                <div className="col-auto">
                    <label className="form-label">{t('payload')}</label>
                    <textarea rows={3}
                        value={payload}
                        onChange={(e) => setPayload(e.target.value)}
                        className="form-control" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="btn-group col col-3">
                <button onClick={onExecuteClick} disabled={!formIsValid()} type="button" className="btn btn-success">{t('execute')}</button>
            </div>
        </div>
        <div className="row">
            <LastLogResult logs={logs} filterFn={logsFilterFn} />
        </div>
    </div>
}
