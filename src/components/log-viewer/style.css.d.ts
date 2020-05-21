declare namespace StyleCssNamespace {
    export interface IStyleCss {
        "log-line": string;
        "log-line-num": string;
        "log-main": string;
    }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
