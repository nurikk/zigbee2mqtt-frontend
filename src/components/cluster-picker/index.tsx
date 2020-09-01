import { Component, ComponentChild, h } from "preact";
import { Cluster, Dictionary } from "../../types";
import isEqual from "lodash/isEqual";
import { randomString } from "../../utils";



const clusterDescriptions: Dictionary<string> = {
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
    checked: Set<Cluster>;
    pickerId: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class ClusterPicker extends Component<ClusterPickerProps, ClusterPickerState> {
    public static defaultProps = {
        clusters: []
    };
    state: Readonly<ClusterPickerState> = {
        checked: new Set<Cluster>(),
        pickerId: randomString(5)
    }
    componentDidMount(): void {
        this.initDefaultChecks();
    }

    initDefaultChecks(): void {
        const { value = [], clusters } = this.props;
        if (!value.length) {
            this.setState({ checked: new Set(clusters) });
        } else {
            this.setState({ checked: new Set(value) });
        }
    }
    onSelect = (e: Event): void => {
        const { onSelect, clusters } = this.props;
        const { checked: isChecked, name } = e.target as HTMLInputElement;
        const { checked } = this.state;
        if (isChecked) {
            checked.add(name);
        } else {
            checked.delete(name);
        }
        this.setState({ checked });
        const allChecked = isEqual(new Set(clusters), checked);
        if (allChecked) {
            onSelect(undefined);
        } else {
            onSelect(Array.from(checked));
        }
    }
    onCheckAll = (e: Event): void => {
        const { onSelect, clusters } = this.props;
        const { checked: allChecked } = e.target as HTMLInputElement;
        let checked = new Set<Cluster>();
        if (allChecked) {
            checked = new Set(clusters);
        }
        this.setState({ checked });
        if (allChecked) {
            onSelect(undefined);
        } else {
            onSelect(Array.from(checked));
        }
    }
    render(): ComponentChild {
        const { checked, pickerId } = this.state;
        const { clusters } = this.props;


        const allChecked = isEqual(new Set(clusters), checked);
        const options = clusters.map(cluster => (
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" checked={checked.has(cluster)} name={cluster} id={`${pickerId}_${cluster}`} value={cluster} onChange={this.onSelect} />
                <label class="form-check-label" for={`${pickerId}_${cluster}`} title={cluster}>{clusterDescriptions[cluster] ?? cluster}</label>
            </div>
        ));
        if (options.length) {
            options.unshift(<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" checked={allChecked} id={`${pickerId}_all`} value="all" onChange={this.onCheckAll} />
                <label class="form-check-label" for={`${pickerId}_all`} title={"All"}>All</label>
            </div>)
        }


        return options;
    }
}