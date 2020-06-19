

import {
    connect
} from 'mqtt';
import store, { Group } from "./store";

import { Notyf } from 'notyf';
import { sanitizeGraph } from './utils';
import actions, { Actions } from './actions';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
let sendMessage2Z2M = (topic: string, message: string | Buffer): void => {
    new Notyf().error("Not yet connected");
}
type MessageType = "log" | "groups" | "group_added" | "group_removed";
interface TypesMessage {
    type: MessageType;
    message: unknown;
    [k: string]: unknown;
}


const { settings } = store.getState();
try {
    const baseTopic = settings.mqtt_topic_preffix;
    const cleanTopic = (topic: string): string => topic.replace(baseTopic, '');
    const connectionProps = {
    };
    if (settings.mqtt_user) {
        connectionProps['username'] = settings.mqtt_user;
    }
    if (settings.mqtt_password) {
        connectionProps['password'] = settings.mqtt_password;
    }


    const client = connect(settings.mqtt_host, connectionProps);

    client.on('connect', () => {
        client.subscribe(`${baseTopic}#`, { rh: 1, rap: true, qos: 2 }, (err) => {
            if (err) {
                new Notyf().error(err);
            }
        });
    });
    type MessageTypes = "devices" | "device_removed_failed" | "device_renamed" | "device_force_removed_failed";

    interface LogMessage {
        type: MessageTypes;
        message: string;
    }
    const showNotity = (message: LogMessage): void => {
        switch (message.type) {
            case "devices":
                break;
            case "device_removed_failed":
            case "device_force_removed_failed":

                new Notyf().error(`device_removed_failed, ${message.message}`);
                break;

            case "device_renamed":
                new Notyf().success("device_renamed");
                break;

            default:
                new Notyf().success(message.type);
                break;
        }
    }

    const processMessage = (_topic: string, message: string): void => {

        const topic = cleanTopic(_topic);
        let _messageObje = {} as TypesMessage;
        try {
            _messageObje = JSON.parse(message.toString())
        } catch (e) {
            console.error(_messageObje);
        }

        switch (topic) {
            case 'bridge/config/devices':
                store.setState({
                    isLoading: false,
                    devices: JSON.parse(message.toString())
                });
                break;
            case 'bridge/log':
                switch (_messageObje.type) {

                    case "groups":
                        store.setState({
                            isLoading: false,
                            groups: _messageObje.message as Group[]
                        })
                        break;
                    case "group_added":
                    case "group_removed":
                        (actions(store) as Actions).groupsRequest();
                    // eslint-disable-next-line no-fallthrough
                    default:
                        showNotity(JSON.parse(message.toString()));
                        break;
                }
                // debugger
                // new Notyf().error(`Cant parse json, ${e}`);
                break;



            case 'bridge/networkmap/raw':
                store.setState({
                    isLoading: false,
                    networkGraph: sanitizeGraph(JSON.parse(message.toString()))
                });
                break;


            case (topic.match(/^bridge/) || {}).input:
                console.log('bridge message', topic);
                break;
            case (topic.match(/^[A-z0-9]+$/) || {}).input:
                console.log('device state?', topic, message.toString());
                // eslint-disable-next-line no-case-declarations
                const { deviceStates } = store.getState();
                deviceStates[topic] = JSON.parse(message.toString());
                console.log('topic', topic);
                store.setState({ deviceStates });
                break;

            default: break;
        }
    };

    client.on('message', processMessage);


    sendMessage2Z2M = (topic: string, message: string | Buffer): void => {
        client.publish(`${baseTopic}${topic}`, message);
    }


} catch (e) {
    new Notyf().error(e.toString());
}


export { sendMessage2Z2M };



