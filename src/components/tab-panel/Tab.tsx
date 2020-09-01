import { Component, ComponentChild, h } from "preact";
import cx from "classnames";
interface TabProps {
    activeTab: string;

    label: string;
    onClick(arg1: string): void;
}

interface TabState { }
class Tab extends Component<TabProps, TabState> {


    onClick = (): void => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render(): ComponentChild {
        const {
            activeTab,
            label
        } = this.props;



        return (
            <a
                className={cx("nav-link", { active: activeTab === label })}
                onClick={this.onClick}
            >
                {label}
            </a>
        );
    }
}

export default Tab;