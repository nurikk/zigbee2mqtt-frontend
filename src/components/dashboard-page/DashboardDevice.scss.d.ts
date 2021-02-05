declare namespace DashboardDeviceScssNamespace {
    export interface IDashboardDeviceScss {
        card: string;
        cardBody: string;
        deviceImage: string;
        exposes: string;
    }
}

declare const DashboardDeviceScssModule: DashboardDeviceScssNamespace.IDashboardDeviceScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: DashboardDeviceScssNamespace.IDashboardDeviceScss;
};

export = DashboardDeviceScssModule;
