import { LinkI } from "./types";
import React, { Fragment, FunctionComponent, RefObject, useLayoutEffect, useRef } from "react";
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
    return <text className={style.linkLabel}>{link.linkqualities.join('/')}</text>;
};

interface LinksPros {
    links: LinkI[];
}

const Links: FunctionComponent<LinksPros> = props => {
    const { links } = props;
    const ref = useRef<SVGGElement>();
    useLayoutEffect(() => {
        select(ref.current as SVGGElement).selectAll(`.${style.link}`).data(links);
        select(ref.current as SVGGElement).selectAll(`.${style.linkLabel}`).data(links);
    }, [links.length]);

    return (
        <g ref={ref as RefObject<SVGGElement>} className={style.links}>
            {links.map((link: LinkI) => {
                const id = `${link.source.ieeeAddr}-${link.target.ieeeAddr}-${link.linkType}`;
                return <Fragment key={`fragment${id}`}>
                    <Link
                        id={`edgepath${id}`}
                        link={link}
                    />
                    <LinkLabel
                        xlinkHref={`#edgepath${id}`}
                        link={link}
                    />
                </Fragment>
            })}
        </g>
    );
};
export default Links;
