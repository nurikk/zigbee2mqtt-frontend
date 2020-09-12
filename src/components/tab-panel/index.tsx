import React, { Component } from "react";
import cx from "classnames";

export interface TabInfo {
    name: string;
    TabComponent: Component;
}

interface TabPanelProps {
    tabs: TabInfo[];
    defaultTab?: string;
}

interface TabPanelState {
    activeTab: string;
}

interface TabLinkProps {
    name: string;
    isActive: boolean;

    onClick(arg1: string): void;
}

export class TabLink extends Component<TabLinkProps, {}> {
    onClick = (): void => {
        const { name, onClick } = this.props;
        onClick(name);
    };

    render () {
        const { name, isActive } = this.props;
        return (<a onClick={this.onClick} className={cx("nav-link", { active: isActive })} id={`${name}-tab`}
            data-toggle="tab" href={`#${name}`} role="tab" aria-controls={name} aria-selected="true">{name}</a>);
    }
}

export default class TabPanel extends Component<TabPanelProps, TabPanelState> {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: "Info"
        };
    }

    componentDidMount (): void {
        this.initializeDefaultTab();
    }

    initializeDefaultTab (): void {
        const { defaultTab } = this.props;
        if (defaultTab) {
            this.setState({ activeTab: defaultTab });
        }
    }

    onTabLinkClick = (activeTab: string): void => {
        this.setState({ activeTab });
    };


    render () {
        const { activeTab } = this.state;
        const { tabs } = this.props;

        return (<div>
            <ul className="nav nav-tabs">
                {
                    tabs.map(({ name }) => (
                        <li key={name} className="nav-item">
                            <TabLink name={name} isActive={name === activeTab} onClick={this.onTabLinkClick} />
                        </li>
                    ))
                }
            </ul>
            <div className="tab-content">
                {
                    tabs.map(({ name, TabComponent }) => (
                        <div key={name} className={cx("tab-pane fade", {
                            "show active": activeTab === name
                        })}>{TabComponent}</div>
                    ))
                }
            </div>
        </div>
        );
    }
}
