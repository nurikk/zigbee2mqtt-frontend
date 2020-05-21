declare namespace StyleCssNamespace {
    export interface IStyleCss {
        "code-editor": string;
        "new-file": string;
        "page-content-wrapper": string;
        "sidebar-heading": string;
        "sidebar-wrapper": string;
        toggled: string;
        wrapper: string;
    }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
