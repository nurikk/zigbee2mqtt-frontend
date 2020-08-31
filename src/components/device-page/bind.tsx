import { Component, ComponentChild, h } from "preact";
import { BindParams, Device } from "../../types";
import { ZigbeeClusters } from "./clusters";
import BindRow from "./bind-row";
import actions, { Actions } from "../../actions";
import { connect } from "unistore/preact";
import { GlobalState, Group } from "../../store";



export const getClusterName = (id: number, addBraces = true): string => {
    if (ZigbeeClusters[id]) {
        const cleanName = (ZigbeeClusters[id] as string).replace(/^ZCL_CLUSTER_ID_/, "");
        return addBraces ? ` (${cleanName})` : cleanName;
    }
    return "";
};

interface PropsFromStore {
    devices: Device[];
    groups: Group[];
    bindRules: BindParams[];
}
interface BindProps {
    dev?: string;
}
export class Bind extends Component<BindProps & PropsFromStore & Actions, {}> {

    onRuleChange = (idx: number, rule: BindParams): void => {
        const { bindRules, setBindRules } = this.props;
        const copyRules = [...bindRules];
        copyRules[idx] = rule;
        setBindRules(copyRules);
    };

    onBindClick = (params: BindParams): void => {
        console.log(params);
        const { bindReqest } = this.props;
        bindReqest(true, params);


    };

    onUnBindClick = async (params: BindParams): Promise<void> => {
        console.log(params);
        const { bindReqest } = this.props;
        bindReqest(false, params);
    };

    render(): ComponentChild {
        const { dev, devices, bindRules, groups } = this.props;
        const device = devices.find(d => d.ieee_address == dev);
        if (!device) {
            return "Unknown device";
        }
        return (
            <table class="table table-striped table-borderless">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Source EP</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Destination EP</th>
                        <th scope="col">Clusters</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bindRules.map((rule, idx) => <BindRow
                            key={idx}
                            groups={groups}
                            onUnBind={this.onUnBindClick}
                            onBind={this.onBindClick}
                            device={device}
                            idx={idx}
                            devices={devices} />)
                    }
                </tbody>
            </table>
        );
    }
}

const mappedProps = ["devices", "bindRules", "groups"];
const ConnectedBindPage = connect<{}, {}, GlobalState, BindProps & PropsFromStore & Actions>(mappedProps, actions)(Bind);
export default ConnectedBindPage