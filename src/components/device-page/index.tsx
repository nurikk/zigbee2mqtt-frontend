import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState } from "../../store";
import SimpleBind from "./simple-bind";
import Bind from "./bind";
import DeviceInfo from "./info";
import TabPanel, { TabInfo } from "../tab-panel";
import style from "./style.css";

interface DevicePageState {
    dev: string;
    activeTab: string;
}

export class DevicePage extends Component<Actions & GlobalState, DevicePageState> {
    constructor() {
        super();
        this.state = {
            dev: undefined,
            activeTab: "Info"
        };
    }

    componentDidMount(): void {
        this.initPage();
    }

    initPage(): void {
        const { activeTab } = this.state;
        const { searchParams } = new URL(location.href);
        const paramActiveTab = searchParams.get("activeTab") || activeTab;
        this.setState({
            activeTab: paramActiveTab
        });
        const { getDeviceInfo, getZigbeeDevicesList, getDeviceBinds } = this.props;
        const deviceId = searchParams.get("dev");
        getDeviceInfo(deviceId);
        getDeviceBinds(deviceId);
        getZigbeeDevicesList();
    }

    render(): ComponentChild {
        const { isLoading, device, isError, devices, bindRules } = this.props;
        const { activeTab } = this.state;


        const tabs: TabInfo[] = [
            {
                name: "Info",
                TabComponent: <DeviceInfo />
            },
            {
                name: "Bind",
                TabComponent: <Bind />
            },
            {
                name: "States",
                TabComponent: <SimpleBind />
            }
        ];
        return (<div class={"position-relative"}>
            {
                isError ? <h1>{isError}</h1> : (
                    isLoading ? (
                        <div className={`${style.loader} spinner-grow text-primary`} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : null
                )

            }
            <TabPanel defaultTab={activeTab} tabs={tabs} />
        </div>);

    }
}

const mappedProps = ["isLoading", "isError", "device", "devices", "bindRules"];
const ConnectedDevicePage = connect<{}, DevicePageState, GlobalState, Actions>(mappedProps, actions)(DevicePage);
export default ConnectedDevicePage;