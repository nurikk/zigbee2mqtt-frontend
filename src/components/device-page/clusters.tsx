import React, { Component, FunctionComponent } from "react";
import { Device } from "../../types";
import treeStyle from "./tree.css";

interface ClustersProps {
    device: Device;
}
type ClustersComp = {
    label: string;
    clusters: string[];
}
const ClustersComp: FunctionComponent<ClustersComp> = (props) => {
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
export default class Clusters extends Component<ClustersProps, {}> {
    render() {
        const { device } = this.props;
        return <dl className={`${treeStyle.tree} row`}>
            <ul>
                <li>
                    <span>{device.ieee_address}</span>
                    <ul>
                        {Object.entries(device.endpoints).map(([epName, epData]) => {
                            return (
                                <li key={epName}>
                                    <span>Endpoint <strong>{epName}</strong></span>
                                    <ul>
                                        <ClustersComp label="Output clusters" clusters={epData.clusters.output} />
                                        <ClustersComp label="Input clusters" clusters={epData.clusters.input} />
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </li>
            </ul>
        </dl>

    }
}

