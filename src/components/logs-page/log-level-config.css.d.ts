declare namespace LogLevelConfigCssNamespace {
    export interface ILogLevelConfigCss {
        'hide-description': string;
    }
}

declare const LogLevelConfigCssModule: LogLevelConfigCssNamespace.ILogLevelConfigCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: LogLevelConfigCssNamespace.ILogLevelConfigCss;
};

export = LogLevelConfigCssModule;
