import { LinkI, ZigbeeRelationship } from "./types";
import { Component, ComponentChild, createRef, FunctionalComponent, h, RefObject } from "preact";
import * as style from "./map.css";
import cx from "classnames";
import * as d3 from "d3";

interface LinkProps {
    link: LinkI;
    id?: string;
}

class Link extends Component<LinkProps, {}> {
    ref = createRef<SVGPathElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        d3.select(current as SVGPathElement).data([link]);
    }

    render(): ComponentChild {
        const { link, id, ...rest } = this.props;
        const { linkType } = link;
        let markerEnd = "url(#arrowhead)"
        switch (linkType) {
            case "EndDevice2Coordinator":
            case "Router2Coordinator":
                markerEnd = null;
                break;
            default:
                break;
        }

        return (
            <path
                id={id}
                {...rest}
                className={cx(style.link, style[linkType])}
                ref={this.ref as RefObject<SVGPathElement>}
                strokeWidth={1}
                fill="transparent"
                marker-end={markerEnd}
            />
        );
    }
}

interface LinkLabelProps extends LinkProps {
    xlinkHref: string;
}

class LinkLabel extends Component<LinkLabelProps, {}> {
    ref = createRef<SVGTextElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        d3.select(current as SVGTextElement).data([link]);
    }

    render(): ComponentChild {
        const { link, xlinkHref } = this.props;
        /* eslint-disable @typescript-eslint/ban-ts-ignore */
        //@ts-ignore
        const textPath = <textPath startOffset="50%" xlinkHref={xlinkHref}>{link.linkquality}</textPath>;
        return (
            <text
                className={style.linkLabel}
                ref={this.ref}
                dy={4}
            >{textPath}
            </text>
        );
    }
}

interface LinksPros {
    links: LinkI[];
    visible: ZigbeeRelationship[];
}

const Links: FunctionalComponent<LinksPros> = props => {
    const { links, visible } = props;
    return (
        <g className={style.links}>
            <defs>
                <filter x="-0.1" y="0" width="1.2" height="1" id="solid">
                    <feFlood flood-color="#eef5f9" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            {links.map((link: LinkI, index: number) => visible.includes(link.relationship) && <Link
                id={`edgepath${index}`}
                key={`link${index}`}
                link={link}
            />)}
            {links.map((link: LinkI, index: number) => (
                visible.includes(link.relationship) && <LinkLabel
                    xlinkHref={`#edgepath${index}`}
                    key={`label${index}`}
                    link={link}
                />
            ))}
        </g>
    );
};
export default Links;
