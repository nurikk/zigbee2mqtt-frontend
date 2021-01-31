declare namespace DeviceFooterScssNamespace {
    export interface IDeviceFooterScss {
        'fa-fw': string;
        footer: string;
    }
}

declare const DeviceFooterScssModule: DeviceFooterScssNamespace.IDeviceFooterScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: DeviceFooterScssNamespace.IDeviceFooterScss;
};

export = DeviceFooterScssModule;
