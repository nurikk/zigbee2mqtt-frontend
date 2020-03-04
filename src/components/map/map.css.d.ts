declare namespace MapCssModule {
    export interface IMapCss {
        Coordinator: string;
        EndDevice: string;
        EndDevice2Coordinator: string;
        EndDevice2Router: string;
        Router: string;
        Router2Coordinator: string;
        Router2Router: string;
        container: string;
        foreignObject: string;
        label: string;
        labels: string;
        link: string;
        linkLabel: string;
        links: string;
        node: string;
        nodes: string;
        offline: string;
    }
}

declare const MapCssModule: MapCssModule.IMapCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: MapCssModule.IMapCss;
};

export = MapCssModule;
