import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Device } from "../../types";
import treeStyle from "./tree.css";

interface ClustersProps {
    device: Device;
}
type ClustersCompProps = {
    label: string;
    clusters: string[];
}
const ClustersComp: FunctionComponent<ClustersCompProps> = (props) => {
    const { label, clusters } = props;
    if (clusters.length) {
        return (<li>
            <span>{label}</span>
            <ul>{clusters.map(cluster => <li key={cluster}><span>{cluster}</span></li>)}</ul>
        </li>)
    } else {
        return null;
    }

}
export default function Clusters(props: ClustersProps): JSX.Element {
    const { t } = useTranslation("zigbee");
    const { device } = props;
    return <dl className={`${treeStyle.tree} row`}>
        <ul>
            <li>
                <span>{device.ieee_address}</span>
                <ul>
                    {Object.entries(device.endpoints).map(([epName, epData]) => {
                        return (
                            <li key={epName}>
                                <span>{t('endpoint')} <strong>{epName}</strong></span>
                                <ul>
                                    <ClustersComp label={t('output_clusters')} clusters={epData.clusters.output} />
                                    <ClustersComp label={t('input_clusters')} clusters={epData.clusters.input} />
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </li>
        </ul>
    </dl>


}

