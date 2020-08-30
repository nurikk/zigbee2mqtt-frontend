import { Component, ComponentChild, h } from "preact";
import { Cluster, Dictionary } from "../../types";
import isEqual from "lodash/isEqual";


const possibleClusters: Cluster[] = [
    "genScenes",
    "genOnOff",
    "genLevelCtrl",
    "lightingColorCtrl",
    "closuresWindowCovering"
]

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
}
interface ClusterPickerState {
    checked: Set<Cluster>;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class ClusterPicker extends Component<ClusterPickerProps, ClusterPickerState> {
    state: Readonly<ClusterPickerState> = {
        checked: new Set<Cluster>()
    }
    componentDidMount(): void {
        this.initDefaultChecks();
    }

    initDefaultChecks(): void {
        const { value = [] } = this.props;
        if (!value.length) {
            this.setState({ checked: new Set(possibleClusters) });
        } else {
            this.setState({ checked: new Set(value) });
        }
    }
    onSelect = (e: Event): void => {
        const { onSelect } = this.props;
        const { checked: isChecked, name } = e.target as HTMLInputElement;
        const { checked } = this.state;
        if (isChecked) {
            checked.add(name);
        } else {
            checked.delete(name);
        }
        this.setState({ checked });
        const allChecked = isEqual(new Set(possibleClusters), checked);
        if (allChecked) {
            onSelect(undefined);
        } else {
            onSelect(Array.from(checked));
        }
        
    }
    onCheckAll = (e: Event): void => {
        const { onSelect } = this.props;
        const { checked: allChecked } = e.target as HTMLInputElement;
        let checked = new Set<Cluster>();
        if (allChecked) {
            checked = new Set(possibleClusters);
        }
        this.setState({ checked });
        if (allChecked) {
            onSelect(undefined);
        } else {
            onSelect(Array.from(checked));
        }
        
    }
    render(): ComponentChild {
        const { checked } = this.state;

        const allChecked = isEqual(new Set(possibleClusters), checked);
        const options = possibleClusters.map(cluster => (
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" checked={checked.has(cluster)} name={cluster} id={cluster} value={cluster} onChange={this.onSelect} />
                <label class="form-check-label" for={cluster} title={cluster}>{clusterDescriptions[cluster] ?? cluster}</label>
            </div>
        ));
        options.unshift(<div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" checked={allChecked} id="clusters-all" value="all" onChange={this.onCheckAll} />
            <label class="form-check-label" for="clusters-all" title={"All"}>All</label>
        </div>)

        return options;
    }
}