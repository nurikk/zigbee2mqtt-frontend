import React, { Component, Fragment } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import actions from "../../actions";
import { GlobalState } from "../../store";
import DeviceInfo from "./info";
import Bind from "./bind";
import States from "./states";
import ConnectedDeviceExposes from "./exposes";
import Clusters from "./clusters";

import {  Tabs, Tab, Box, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Center } from "../center/center";


type UrlParams = {
    dev: string;
    tab?: TabName;
};
type DevicePageProps = RouteComponentProps<UrlParams>;

function a11yProps(index: unknown) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: unknown;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

type TabName = "info" | "bind" | "state" | "exposes" | "clusters";
type DevicePageState = {
    activeTab: number;
}
export class DevicePage extends Component<DevicePageProps & GlobalState, DevicePageState> {
    state: DevicePageState = {
        activeTab: 3
    }

    setActiveTab = (event, activeTab: number): void => {
        this.setState({ activeTab });
    }
    render() {
        const { activeTab } = this.state;
        const { devices, match } = this.props;
        const { dev } = match.params;
        const device = devices.get(dev);
        if (!device) {
            return <Center><Alert severity="error">Unknown device</Alert></Center>
        }

        return (<Fragment>
            <Paper square>
                <Tabs value={activeTab}
                    onChange={this.setActiveTab}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="Info" {...a11yProps(0)} />
                    <Tab label="Bind" {...a11yProps(1)} />
                    <Tab label="State" {...a11yProps(2)} />
                    <Tab label="Exposes" {...a11yProps(4)} />
                    <Tab label="Clusters" {...a11yProps(5)} />
                </Tabs>
            </Paper>
            <TabPanel value={activeTab} index={0}>
                <DeviceInfo device={device} />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                <Bind device={device} />
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
                <States device={device} />
            </TabPanel>
            <TabPanel value={activeTab} index={3}>
                <ConnectedDeviceExposes device={device} />
            </TabPanel>
            <TabPanel value={activeTab} index={4}>
                <Clusters device={device} />
            </TabPanel>
        </Fragment>
        )
    }
}
const devicePageWithRouter = withRouter(DevicePage);
const mappedProps = ["devices"];
const ConnectedDevicePage = connect<{}, {}, GlobalState, {}>(mappedProps, actions)(devicePageWithRouter);
export default ConnectedDevicePage;