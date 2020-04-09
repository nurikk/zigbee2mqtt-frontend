import { Component, ComponentChild, h } from "preact";
import Bind from "./bind";
import SimpleBind from "./simple-bind";
import TabPanel, { TabInfo } from "../tab-panel";
import { Device } from "../../types";
import { getDeviceInfo } from "../actions";
import DeviceInfo from "./info";

interface DevicePageState {
    activeTab: string;
    device: Device;
    isLoading: boolean;
}

interface DevicePageProps {
    [k: string]: any;
}


export default class DevicePage extends Component<DevicePageProps, DevicePageState> {
    constructor() {
        super();
        this.state = {
            device: undefined,
            isLoading: true,
            activeTab: "Info"
        };
    }

    componentDidMount(): void {
        this.initPage();
    }

    initPage(): void {
        const { activeTab } = this.state;
        const { searchParams } = new URL(location.href);
        const deviceId = searchParams.get('dev');
        const paramActiveTab = searchParams.get('activeTab') || activeTab;
        this.setState({ isLoading: true, activeTab: paramActiveTab });
        getDeviceInfo(deviceId, (err, device) => {
            if (!err) {
                this.setState({ device, isLoading: false });
            }
        });
    }


    render(): ComponentChild {
        const { device, isLoading, activeTab } = this.state;


        if (isLoading) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>;
        }
        if (device) {
            const tabs: TabInfo[] = [
                {
                    name: "Info",
                    TabComponent: <DeviceInfo device={device} />
                },
                {
                    name: "Bind",
                    TabComponent: <Bind device={device} />
                },
                {
                    name: "States",
                    TabComponent: <SimpleBind device={device} />
                }
            ];
            return (<TabPanel defaultTab={activeTab} tabs={tabs} />);
        }

    }
}
