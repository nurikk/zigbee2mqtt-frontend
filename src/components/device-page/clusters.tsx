import React, { Component } from "react";
import { Device } from "../../types";
import treeStyle from "./tree.css";

interface ClustersProps {
    device: Device;
}
export default class Clusters extends Component<ClustersProps, {}> {
    render() {
        const { device } = this.props;
        return <div className="card">
            <div className="card-body">
                <dl className={`${treeStyle.tree} row`}>
                    <ul>
                        <li>
                            <span>{device.ieee_address}</span>
                            <ul>
                                {Array.from(device.endpoints.entries()).map(([epName, epData]) => {
                                    return (

                                        <li key={epName}>

                                            <span>Endpoint <strong>{epName}</strong></span>
                                            <ul>
                                                {epData.clusters.output.length ? <li>
                                                    <span>Output clusters</span>
                                                    <ul>
                                                        {
                                                            epData.clusters.output.map(cluster => <li key={cluster}><span>{cluster}</span></li>)
                                                        }
                                                    </ul>
                                                </li> : null}
                                                {epData.clusters.input.length ? <li>
                                                    <span>Input clusters</span>
                                                    <ul>
                                                        {
                                                            epData.clusters.input.map(cluster => <li key={cluster}><span>{cluster}</span></li>)
                                                        }
                                                    </ul>
                                                </li> : null}

                                            </ul>
                                        </li>

                                    );
                                })}
                            </ul>
                        </li>
                    </ul>
                </dl>
            </div>
        </div>
    }
}

