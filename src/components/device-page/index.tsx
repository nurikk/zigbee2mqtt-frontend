import { Component, ComponentChild, h } from "preact";
import Bind from "./bind";
import SimpleBind from "./simple-bind";
import TabPanel, { TabInfo } from "../tab-panel";
import { Device } from "../../types";
import { getDeviceInfo } from "../actions";

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
            activeTab: 'SimpleBind'
        };
    }

    componentDidMount(): void {
       this.loadDevice();
    }
    loadDevice(): void {
        const deviceId = "0x00158D00044E3FAE";
        this.setState({ isLoading: true });
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
                    name: "Bind",
                    TabComponent: <Bind device={device} />
                },
                {
                    name: "SimpleBind",
                    TabComponent: <SimpleBind device={device} />
                }
            ];
            return (<TabPanel defaultTab={activeTab} tabs={tabs} />);
        }

    }
}
