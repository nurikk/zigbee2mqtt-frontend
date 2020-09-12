import React, { Component, ReactChild, ReactElement, ReactNode } from "react";
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
    render() {
        const { children } = this.props;
        const { activeTab } = this.state;
        const childArray = React.Children.toArray(children);
        return (

            <div className="tabs">
                <ul className="nav nav-tabs">
                    {childArray.map((child) => {
                        const { label } = (child as ReactElement).props;
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
                <div className="tab-content">
                    {childArray.map((child) => {
                        if ((child as ReactElement).props.label !== activeTab) {
                            return undefined;
                        }
                        return (child as ReactElement).props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;