import { LinkI } from "./types";
import {
    h,
    Component,
    ComponentChild,
    createRef,
    FunctionalComponent
} from "preact";
import * as d3Selection from "d3-selection";
import * as style from "./map.css";

interface LinkProps {
    link: LinkI;
    [k: string]: unknown;
}
class Link extends Component<LinkProps, {}> {
    ref = createRef<SVGLineElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        d3Selection.select(current as SVGLineElement).data([link]);
    }

    render(): ComponentChild {
        const { link, ...rest } = this.props;
        return (
            <path
                {...rest}
                className={style.link}
                ref={this.ref}
                strokeWidth={5}
            />
        );
    }
}
class LinkLabel extends Component<LinkProps, {}> {
    ref = createRef<SVGTextElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        d3Selection.select(current as SVGTextElement).data([link]);
    }

    render(): ComponentChild {
        const { link, ...rest } = this.props;
        return (
            <text
                filter={"url(#solid)"}
                className={style.linkLabel}
                ref={this.ref}
                dy={4}
            >
                <textPath {...rest}>{link.linkQuality}</textPath>
            </text>
        );
    }
}

{
    /* <text>{link.linkQuality}</text> */
}
const Links: FunctionalComponent<{ links: LinkI[] }> = props => {
    const { links } = props;
    // 
    return (
        <g className={style.links}>
            <defs>
                <filter x="-0.1" y="0" width="1.2" height="1" id="solid">
                    <feFlood flood-color="white"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            {links.map((link: LinkI, index: number) => (
                <Link
                    id={`edgepath${index}`}
                    key={`link${index}`}
                    link={link}
                />
            ))}
            {links.map((link: LinkI, index: number) => (
                <LinkLabel
                    startOffset="50%"
                    xlinkHref={`#edgepath${index}`}
                    key={`label${index}`}
                    link={link}
                />
            ))}
        </g>
    );
};
export default Links;
