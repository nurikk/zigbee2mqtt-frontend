import { Component, ComponentChild, h } from "preact";
// import Bind from "../device-page/bind";
import cx from "classnames";

export interface TabInfo {
    name: string;
    TabComponent: ComponentChild;
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

    render(): ComponentChild {
        const { name, isActive } = this.props;
        return <a onClick={this.onClick} class={cx("nav-link", { active: isActive })} id={`${name}-tab`}
                  data-toggle="tab" href={`#${name}`} role="tab" aria-controls={name} aria-selected="true">{name}</a>;
    }
}

export default class TabPanel extends Component<TabPanelProps, TabPanelState> {
    constructor() {
        super();
        this.state = {
            activeTab: "Info"
        };
    }

    componentDidMount(): void {
        this.initializeDefaultTab();
    }

    initializeDefaultTab(): void {
        const { defaultTab } = this.props;
        if (defaultTab) {
            this.setState({ activeTab: defaultTab });
        }
    }

    onTabLinkClick = (activeTab: string): void => {
        this.setState({ activeTab });
    };


    render(): ComponentChild {
        const { activeTab } = this.state;
        const { tabs } = this.props;

        return (<div>
                <ul class="nav nav-tabs">
                    {
                        tabs.map(({ name }) => (
                            <li key={name} class="nav-item">
                                <TabLink name={name} isActive={name === activeTab} onClick={this.onTabLinkClick} />
                            </li>
                        ))
                    }
                </ul>
                <div class="tab-content">
                    {
                        tabs.map(({ name, TabComponent }) => (
                            <div key={name} class={cx("tab-pane fade", {
                                "show active": activeTab === name
                            })}>{TabComponent}</div>
                        ))
                    }
                </div>
            </div>
        );
    }
}