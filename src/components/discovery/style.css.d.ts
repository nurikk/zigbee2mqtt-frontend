declare namespace StyleCssNamespace {
    export interface IStyleCss {
        blink: string;
        "device-image": string;
        "scale-in-center": string;
    }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
