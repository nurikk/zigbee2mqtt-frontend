import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState } from "../../store";
import SimpleBind from "./simple-bind";
import Bind from "./bind";
import DeviceInfo from "./info";
import TabPanel, { TabInfo } from "../tab-panel";
import style from "./style.css";
import WebsocketManager from "../../websocket";

interface DevicePageState {
    dev: string;
    activeTab: string;
}

export class DevicePage extends Component<Actions & GlobalState, DevicePageState> {
    constructor() {
        super();
        const { searchParams } = new URL(location.href);
        const paramActiveTab = searchParams.get("activeTab");
        const deviceId = searchParams.get("dev");
        this.state = {
            dev: deviceId,
            activeTab: paramActiveTab ? paramActiveTab : "Info"
        };
    }

    componentDidMount(): void {
        this.initPage();
    }

    processZigbeeEvent = ({ category, payload }): void => {
        console.log({category, payload});
    }

    initPage(): void {
        const { dev } = this.state;
        const { getDeviceInfo, getZigbeeDevicesList, getDeviceBinds } = this.props;

        getDeviceInfo(dev);
        getDeviceBinds(dev);
        getZigbeeDevicesList(true);

        const manager = new WebsocketManager();
        console.log("use `copy(wsEventsData)` to copy events log");
        manager.subscribe("zigbee", this.processZigbeeEvent);

    }

    render(): ComponentChild {
        const { isLoading, isError } = this.props;
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

const mappedProps = ["isLoading", "isError"];
const ConnectedDevicePage = connect<{}, DevicePageState, GlobalState, Actions>(mappedProps, actions)(DevicePage);
export default ConnectedDevicePage;