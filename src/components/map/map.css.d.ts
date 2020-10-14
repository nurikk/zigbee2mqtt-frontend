declare namespace MapCssNamespace {
    export interface IMapCss {
        BrokenLink: string;
        Coordinator: string;
        Coordinator2EndDevice: string;
        Coordinator2Router: string;
        EndDevice: string;
        EndDevice2Coordinator: string;
        EndDevice2Router: string;
        Router: string;
        Router2Coordinator: string;
        Router2EndDevice: string;
        Router2Router: string;
        container: string;
        controls: string;
        foreignObject: string;
        img: string;
        link: string;
        linkLabel: string;
        links: string;
        mappings: string;
        names: string;
        node: string;
        nodes: string;
        offline: string;
        sourceRoot: string;
        sources: string;
        sourcesContent: string;
        version: string;
    }
}

declare const MapCssModule: MapCssNamespace.IMapCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: MapCssNamespace.IMapCss;
};

export = MapCssModule;
