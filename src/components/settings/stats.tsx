import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { GlobalState } from "../../store";
import orderBy from "lodash/orderBy";
import { powerSourceTypeToTranslationKey } from "../power-source";
type StatsProps = Pick<GlobalState, 'devices'> & {

}
export function Stats(props: StatsProps) {
    const { devices } = props;
    const { t } = useTranslation(["stats", "zigbee"]);
    const allDevices = Object.values(devices).filter(d => d.type !== "Coordinator");
    const totalDevices = allDevices.length;
    const stats = {

        byType: {},
        byPowerSource: {},
        byVendor: {},
        byModel: {}
    }
    allDevices.forEach(device => {
        stats.byModel[device.model_id] = (stats.byModel[device.model_id] || 0) + 1;
        stats.byVendor[device.manufacturer] = (stats.byVendor[device.manufacturer] || 0) + 1;
        stats.byType[t(device.type)] = (stats.byType[t(device.type)] || 0) + 1;
        const powerSource = t('zigbee:' + powerSourceTypeToTranslationKey(device.power_source));
        stats.byPowerSource[powerSource] = (stats.byPowerSource[powerSource] || 0) + 1;
    });
    const statRows = Object.entries(stats).map(([key, values]) => {
        return <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{t(key)}</div>
                {orderBy(Object.entries(values), [([k, v]) => v], ['desc']).map(([key, value]) => {
                    return <div key={key}>{key}: {value}</div>
                })}
            </div>
        </li>
    })


    return <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{t("total")} {totalDevices}</div>
            </div>
        </li>
        {statRows}
    </ol>
}