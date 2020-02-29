import { LinkI } from "./types";
import { h, Component, ComponentChild, createRef } from "preact";
import * as d3Selection from "d3-selection";
import * as style from "./map.css";

class Link extends Component<{ link: LinkI }, {}> {
    ref = createRef<SVGLineElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        d3Selection.select(current as SVGLineElement).data([link]);
    }

    render(): ComponentChild {
        // const { link } = this.props;
        // debugger
        return <line className={style.link} ref={this.ref} strokeWidth={5} />;
    }
}

export default class Links extends Component<{ links: LinkI[] }, {}> {
    render(): ComponentChild {
        const { links } = this.props;
        return (
            <g className={style.links}>
                {links.map((link: LinkI, index: number) => (
                    <Link key={index} link={link} />
                ))}
            </g>
        );
    }
}
