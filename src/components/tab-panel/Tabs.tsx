import { Component, ComponentChild, h, VNode } from "preact";
import Tab from "./Tab";
interface TabsProps {

}
interface TabsState {
    activeTab: string;
}

interface WithLabel {
    label: string;
}

class Tabs extends Component<TabsProps, TabsState> {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab: string): void => {
        this.setState({ activeTab: tab });
    }
    render(): ComponentChild {
        const { children } = this.props;
        const { activeTab } = this.state;
        return (

            <div className="tabs">
                <ul class="nav nav-tabs">
                    {(children as ComponentChild[]).map((child) => {
                        const { label } = (child as VNode<WithLabel>).props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={this.onClickTabItem}
                            />
                        );
                    })}
                </ul>
                <div class="tab-content">
                    {(children as ComponentChild[]).map((child) => {
                        if ((child as VNode<WithLabel>).props.label !== activeTab) {
                            return undefined;
                        }
                        return (child as VNode<WithLabel>).props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;