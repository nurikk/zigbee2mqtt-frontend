import { LinkI } from "./types";
import React, { Component, createRef, FunctionComponent, RefObject } from "react";
import style from "./map.css";
import cx from "classnames";
import { select } from "d3-selection";

interface LinkProps {
    link: LinkI;
    id?: string;
}

class Link extends Component<LinkProps, {}> {
    ref = createRef<SVGPathElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        select(current as SVGPathElement).data([link]);
    }

    render() {
        const { link, id, ...rest } = this.props;
        const { linkType } = link;

        return (
            <path
                id={id}
                {...rest}
                className={cx(style.link, style[linkType])}
                ref={this.ref as RefObject<SVGPathElement>}
                strokeWidth={1}
                fill="transparent"
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
        select(current as SVGTextElement).data([link]);
    }

    render() {
        const { link } = this.props;
        return (
            <text
                className={style.linkLabel}
                ref={this.ref}
            >
                {link.linkquality}
            </text>
        );
    }
}

interface LinksPros {
    links: LinkI[];
}

const Links: FunctionComponent<LinksPros> = props => {
    const { links } = props;
    return (
        <g className={style.links}>
            {links.map((link: LinkI, index: number) => <Link
                id={`edgepath${index}`}
                key={`link${index}`}
                link={link}
            />)}
            {links.map((link: LinkI, index: number) => (
                <LinkLabel
                    xlinkHref={`#edgepath${index}`}
                    key={`label${index}`}
                    link={link}
                />
            ))}
        </g>
    );
};
export default Links;
