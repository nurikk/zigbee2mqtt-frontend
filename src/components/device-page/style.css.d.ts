declare namespace StyleCssModule {
    export interface IStyleCss {
        "dashed-link": string;
        "device-pic": string;
        loader: string;
        "props-row": string;
        "value-col": string;
    }
}

declare const StyleCssModule: StyleCssModule.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssModule.IStyleCss;
};

export = StyleCssModule;
