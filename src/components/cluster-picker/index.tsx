import { Component, ComponentChild, h } from "preact";
import { Cluster } from "../../types";
import { randomString } from "../../utils";



const clusterDescriptions = {
    genScenes: "Scenes",
    genOnOff: "OnOff",
    genLevelCtrl: "LevelCtrl",
    lightingColorCtrl: "LColorCtrl",
    closuresWindowCovering: "Closures",
}
interface ClusterPickerProps {
    value: Cluster[];
    onSelect(arg1: Cluster[] | undefined): void;
    clusters: Cluster[];

}
interface ClusterPickerState {
    pickerId: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class ClusterPicker extends Component<ClusterPickerProps, ClusterPickerState> {
    public static defaultProps = {
        clusters: []
    };
    state: Readonly<ClusterPickerState> = {
        pickerId: randomString(5)
    }

    onSelect = (e: Event): void => {
        const { onSelect } = this.props;
        let { value } = this.props;
        const { checked: isChecked, name } = e.target as HTMLInputElement;
        if (isChecked) {
            value.push(name);
        } else {
            value = value.filter(v => v !== name);
        }

        onSelect(value);
    }
    render(): ComponentChild {
        const { pickerId } = this.state;
        const { clusters, value } = this.props;

        const options = clusters.map(cluster => (
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" checked={value.includes(cluster)} name={cluster} id={`${pickerId}_${cluster}`} value={cluster} onChange={this.onSelect} />
                <label class="form-check-label" for={`${pickerId}_${cluster}`} title={cluster}>{clusterDescriptions[cluster] ?? cluster}</label>
            </div>
        ));
        return options;
    }
}