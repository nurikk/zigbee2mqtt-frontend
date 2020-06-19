import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState } from "../../store";
// import SimpleBind from "./simple-bind";
// import Bind from "./bind";
import DeviceInfo from "./info";
import TabPanel, { TabInfo } from "../tab-panel";
import style from "./style.css";

interface DevicePageProps {
    dev?: string;
    activeTab: string;
}

export class DevicePage extends Component<DevicePageProps & Actions & GlobalState, {}> {
    // constructor() {

    //     super();
    //     const { searchParams } = new URL(location.href);
    //     const paramActiveTab = searchParams.get("activeTab");
    //     const deviceId = searchParams.get("dev");
    //     this.state = {
    //         dev: deviceId,
    //         activeTab: paramActiveTab ? paramActiveTab : "Info"
    //     };
    // }

    componentDidMount(): void {
        console.log(this.props);
        // this.initPage();
        // console.log(this.props);
        
    }



    initPage(): void {
        const { dev } = this.props;
        const { getDeviceInfo, getZigbeeDevicesList, getDeviceBinds } = this.props;

        getDeviceInfo(dev);
        getDeviceBinds(dev);
        getZigbeeDevicesList(true);
    }

    render(): ComponentChild {
        const { isLoading, isError } = this.props;
        const { activeTab } = this.props;

        const tabs: TabInfo[] = [
            {
                name: "Info",
                TabComponent: <DeviceInfo />
            },
            // {
            //     name: "Bind",
            //     TabComponent: <Bind />
            // },
            // {
            //     name: "States",
            //     TabComponent: <SimpleBind />
            // }
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

const mappedProps = ["isLoading", "isError", "device"];
const ConnectedDevicePage = connect<DevicePageProps, {}, GlobalState, Actions>(mappedProps, actions)(DevicePage);
export default ConnectedDevicePage;