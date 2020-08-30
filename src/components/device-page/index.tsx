// import { Component, ComponentChild, h } from "preact";
// import { connect } from "unistore/preact";
// import actions, { Actions } from "../../actions";
// import { GlobalState } from "../../store";
// // import SimpleBind from "./simple-bind";
// // import Bind from "./bind";
// import DeviceInfo from "./info";
// import TabPanel, { TabInfo } from "../tab-panel";
// import style from "./style.css";
// import Tabs from "../tab-panel/Tabs";
// import { Bind } from "./bind";

// interface DevicePageProps {
//     dev?: string;

// }

// // eslint-disable-next-line react/prefer-stateless-function
// export class DevicePage extends Component<DevicePageProps & Actions & GlobalState, {}> {

//     render(): ComponentChild {

//         const { dev, devices } = this.props;
//         const device = devices.find(d => d.ieee_address == dev);
//         return (<div class={"position-relative"}>
//             <Tabs>
//                 <div label="Info">
//                     <DeviceInfo device={device} />
//                 </div>
//                 <div label="Bind">
//                     <Bind device={device} />
//                 </div>
//             </Tabs>
//             {/* <TabPanel defaultTab={activeTab} tabs={tabs} /> */}
//         </div>);

//     }
// }

// const mappedProps = ["isLoading", "isError", "devices"];
// const ConnectedDevicePage = connect<DevicePageProps, {}, GlobalState, Actions>(mappedProps, actions)(DevicePage);
// export default ConnectedDevicePage;