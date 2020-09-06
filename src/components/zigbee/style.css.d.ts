declare namespace StyleCssNamespace {
    export interface IStyleCss {
        "action-column": string;
        actions: string;
        adaptive: string;
        "device-image": string;
        "device-pic": string;
        "ieee-addr": string;
        invisible: string;
        zigbee: string;
    }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
