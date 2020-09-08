import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { BridgeApi } from "../../actions";
import { GlobalState } from "../../store";
import get from "lodash/get";
import UniversalEditor from "../universal-editor";







const settings = [
    {
        key: 'last_seen',
        path: 'advanced.last_seen',
        title: 'Last seen',
        description: 'Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message',
        values: ['disable', 'ISO_8601', 'ISO_8601_local', 'epoch']
    },
    {
        key: 'elapsed',
        path: 'advanced.elapsed',
        title: 'Elapsed',
        description: 'Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg',

    },
    {
        key: 'log_level',
        path: 'advanced.log_level',
        title: 'Log level',
        description: 'Logging level',
        values: ['debug', 'info', 'warn', 'error']
    },
    {
        key: 'homeassistant',
        path: 'homeassistant',
        title: 'Homeassistant support',
        description: 'Home Assistant integration (MQTT discovery)',

    }

]

export class SettingsPage extends Component<BridgeApi & GlobalState> {
    updateConfig = (name: string, value: unknown): void => {
        const { updateConfigValue } = this.props;
        updateConfigValue(name, value);
    }

    render(): ComponentChild {

        const { bridgeInfo } = this.props;
        return <div className="container"><form>
            {
                settings.map(setting => (
                    <div class="row">
                        <div class="col">

                            <label for={setting.key}>{setting.title}</label>
                            <UniversalEditor
                                value={get(bridgeInfo.config, setting.path)}
                                values={setting.values}
                                onChange={(value): void => this.updateConfig(setting.key, value)}
                            />
                            <div class="form-text">{setting.description}</div>

                        </div>
                    </div>
                ))
            }

        </form>
        </div>

    }
}

const mappedProps = ["bridgeInfo"];
const ConnectedSettingsPage = connect<{}, {}, GlobalState, BridgeApi>(mappedProps, actions)(SettingsPage);
export default ConnectedSettingsPage;