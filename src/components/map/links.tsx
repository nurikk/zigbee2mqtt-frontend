import { LinkI } from "./types";
import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import style from "./map.css";
import cx from "classnames";
import { select } from "d3-selection";

interface LinkProps {
    link: LinkI;
    id?: string;
}

const Link: FunctionComponent<LinkProps> = props => {
    const { link: { linkType }, id, ...rest } = props;
    return <path
        id={id}
        className={cx(style.link, style[linkType])}
        strokeWidth={1}
        fill="transparent"
        {...rest}
    />;
};

interface LinkLabelProps extends LinkProps {
    xlinkHref: string;
}

const LinkLabel: FunctionComponent<LinkLabelProps> = props => {
    const { link } = props;
    return <text className={style.linkLabel}>{link.linkquality}</text>;
};

interface LinksPros {
    links: LinkI[];
}

const Links: FunctionComponent<LinksPros> = props => {
    const { links } = props;
    const ref = useRef<SVGGElement>();
    useLayoutEffect(() => {
        select(ref.current).selectAll(`.${style.link}`).data(links);
        select(ref.current).selectAll(`.${style.linkLabel}`).data(links);
    }, [links.length]);

    return (
        <g ref={ref} className={style.links}>
            {links.map((link: LinkI) => <Link
                id={`edgepath${link.sourceIeeeAddr}-${link.targetIeeeAddr}-${link.linkType}`}
                key={`link${link.sourceIeeeAddr}-${link.targetIeeeAddr}-${link.linkType}`}
                link={link}
            />)}
            {links.map((link: LinkI) => (
                <LinkLabel
                    xlinkHref={`#edgepath${link.sourceIeeeAddr}-${link.targetIeeeAddr}-${link.linkType}`}
                    key={`label${link.sourceIeeeAddr}-${link.targetIeeeAddr}-${link.linkType}`}
                    link={link}
                />
            ))}
        </g>
    );
};
export default Links;
