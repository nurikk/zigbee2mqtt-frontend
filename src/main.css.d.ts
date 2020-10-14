declare namespace MainCssNamespace {
    export interface IMainCss {
        mappings: string;
        names: string;
        sourceRoot: string;
        sources: string;
        sourcesContent: string;
        version: string;
    }
}

declare const MainCssModule: MainCssNamespace.IMainCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: MainCssNamespace.IMainCss;
};

export = MainCssModule;
