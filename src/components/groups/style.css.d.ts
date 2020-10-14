declare namespace StyleCssNamespace {
    export interface IStyleCss {
        'device-image': string;
        'device-pic': string;
        mappings: string;
        names: string;
        sourceRoot: string;
        sources: string;
        sourcesContent: string;
        version: string;
    }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
