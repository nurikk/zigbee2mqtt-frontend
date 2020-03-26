declare namespace StyleCssModule {
    export interface IStyleCss {
        "action-column": string;
        actions: string;
        adaptive: string;
        "device-image": string;
        "device-pic": string;
        "ieee-addr": string;
        invisible: string;
        "manu-name": string;
        "nwk-addr": string;
        zigbee: string;
    }
}

declare const StyleCssModule: StyleCssModule.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssModule.IStyleCss;
};

export = StyleCssModule;
