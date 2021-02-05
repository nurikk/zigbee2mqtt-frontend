declare namespace DashboardFeatureWrapperScssNamespace {
    export interface IDashboardFeatureWrapperScss {
        entity: string;
        icon: string;
        title: string;
        value: string;
    }
}

declare const DashboardFeatureWrapperScssModule: DashboardFeatureWrapperScssNamespace.IDashboardFeatureWrapperScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: DashboardFeatureWrapperScssNamespace.IDashboardFeatureWrapperScss;
};

export = DashboardFeatureWrapperScssModule;
