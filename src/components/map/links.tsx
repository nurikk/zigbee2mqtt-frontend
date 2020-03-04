import { LinkI } from './types';
import {
    h,
    Component,
    ComponentChild,
    createRef,
    FunctionalComponent,
    RefObject
} from 'preact';
import * as d3Selection from 'd3-selection';
import * as style from './map.css';
import cx from 'classnames';

interface LinkProps {
    link: LinkI;
    id?: string;
}

class Link extends Component<LinkProps, {}> {
    ref = createRef<SVGPathElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { link } = this.props;
        d3Selection.select(current as SVGPathElement).data([link]);
    }

    render(): ComponentChild {
        const { link, id, ...rest } = this.props;
        const linkType = link.type as string;
        const mappedClas = style[linkType] as string;
        return (
            <path
                id={id}
                {...rest}
                className={cx(style.link, mappedClas)}
                ref={this.ref as RefObject<SVGPathElement>}
                strokeWidth={5}
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
        d3Selection.select(current as SVGTextElement).data([link]);
    }

    render(): ComponentChild {
        const { link, xlinkHref } = this.props;
        /* eslint-disable @typescript-eslint/ban-ts-ignore */
        //@ts-ignore
        const textPath = <textPath startOffset="50%" xlinkHref={xlinkHref}>{link.linkQuality}</textPath>
        return (
            <text
                filter={'url(#solid)'}
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
}
const Links: FunctionalComponent<LinksPros> = props => {
    const { links } = props;
    return (
        <g className={style.links}>
            <defs>
                <filter x="-0.1" y="0" width="1.2" height="1" id="solid">
                    <feFlood flood-color="#eef5f9" />
                    <feComposite in="SourceGraphic" />
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
                    xlinkHref={`#edgepath${index}`}
                    key={`label${index}`}
                    link={link}
                />
            ))}
        </g>
    );
};
export default Links;
