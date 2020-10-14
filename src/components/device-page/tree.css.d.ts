declare namespace TreeCssNamespace {
    export interface ITreeCss {
        mappings: string;
        names: string;
        sourceRoot: string;
        sources: string;
        sourcesContent: string;
        tree: string;
        version: string;
    }
}

declare const TreeCssModule: TreeCssNamespace.ITreeCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: TreeCssNamespace.ITreeCss;
};

export = TreeCssModule;
