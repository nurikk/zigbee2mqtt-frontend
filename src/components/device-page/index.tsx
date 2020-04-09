import { Component, ComponentChild, Fragment, h } from "preact";
import Bind from "./bind";
import SimpleBind from "./simple-bind";
import TabPanel, { TabInfo } from "../tab-panel";
import { BindRule, Device } from "../../types";
import style from "./style.css";
import {
    createBind,
    fetchZigbeeDevicesList,
    getDeviceInfo,
    loadBindsList,
    removeBind,
    setSimpleBind,
    setState
} from "../actions";
import DeviceInfo from "./info";
import { Notyf } from "notyf";

interface DevicePageState {
    dev: string;
    activeTab: string;
    device: Device;
    devices: Device[];
    bindRules: BindRule[];
    isLoading: boolean;
}

interface DevicePageProps {
    [k: string]: any;
}


export default class DevicePage extends Component<DevicePageProps, DevicePageState> {
    constructor() {
        super();
        this.state = {
            dev: undefined,
            device: {} as Device,
            devices: [],
            isLoading: true,
            activeTab: "Info",
            bindRules: []
        };
    }

    componentDidMount(): void {
        console.log("componentDidMount DevicePage");
        this.initPage();
    }

    fetchZigbeeDevicesList(): void {
        this.setState({ isLoading: true });
        fetchZigbeeDevicesList((err, devices) => {
            if (!err) {
                this.setState({
                    isLoading: false,
                    devices
                });
            }
        });
    }

    loadBindsList(): void {
        this.setState({ isLoading: true });
        const { dev } = this.state;
        loadBindsList(dev, (err, bindRules) => {
            this.setState({ bindRules: [{} as BindRule, ...bindRules], isLoading: false });
        });
    }

    fetchZigbeeDeviceInfo(): void {
        const { dev } = this.state;

        getDeviceInfo(dev, (err, device) => {
            if (!err) {
                this.setState({ device, isLoading: false });
            }
        });
    }

    fetchAll(): void {
        this.fetchZigbeeDevicesList();
        this.fetchZigbeeDeviceInfo();
        this.loadBindsList();
    }

    initPage(): void {
        const { activeTab } = this.state;
        const { searchParams } = new URL(location.href);
        const paramActiveTab = searchParams.get("activeTab") || activeTab;
        const deviceId = searchParams.get("dev");
        this.setState({ isLoading: true, activeTab: paramActiveTab, dev: deviceId }, () => {
            this.fetchAll();
        });


    }

    onCreateBind = (dev: string, rule: BindRule) => {
        this.setState({ isLoading: true });
        createBind(dev, rule, (err, response) => {
            this.setState({ isLoading: false });
            if (!err) {
                new Notyf().success(`Successfully binded`);
                this.loadBindsList();
            }
        });
    };
    onRemoveBind = (dev: string, rule: BindRule) => {
        this.setState({ isLoading: true });
        removeBind(dev, rule, (err, response) => {
            this.setState({ isLoading: false });
            if (!err) {
                new Notyf().success(`Removed bind rule`);
                this.loadBindsList();
            }
        });
    };


    setStateValue = (dev: string, name: string, value: unknown): void => {
        this.setState({ isLoading: true });
        setState(dev, name, value, (err, response) => {
            this.setState({ isLoading: false });
            if (!err) {
                this.fetchZigbeeDeviceInfo();
                new Notyf().success(`Successfully set state value ${name}=${value}`);
            }
        });
    };
    setSimpleBindValue = (dev: string, name: string, value: unknown): void => {
        this.setState({ isLoading: true });
        setSimpleBind(dev, name, value, (err, response) => {
            this.setState({ isLoading: false });
            if (!err) {
                this.fetchZigbeeDeviceInfo();
                new Notyf().success(`Successfully set simple bind value ${name}=${value}`);
            }
        });
    };


    render(): ComponentChild {
        const { device, isLoading, activeTab, devices, bindRules } = this.state;


        const tabs: TabInfo[] = [
            {
                name: "Info",
                TabComponent: <DeviceInfo device={device} />
            },
            {
                name: "Bind",
                TabComponent: <Bind removeBind={this.onRemoveBind} createBind={this.onCreateBind} device={device}
                                    devices={devices} bindRules={bindRules} />
            },
            {
                name: "States",
                TabComponent: <SimpleBind setStateValue={this.setStateValue}
                                          setSimpleBindValue={this.setSimpleBindValue} device={device} />
            }
        ];
        return (<div class={"position-relative"}>
            {
                isLoading ? (
                    <div className={`${style.loader} spinner-grow text-primary`} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : null
            }
            <TabPanel defaultTab={activeTab} tabs={tabs} />
        </div>);

    }
}
