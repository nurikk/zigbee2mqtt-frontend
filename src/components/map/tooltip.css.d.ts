declare namespace TooltipCssModule {
    export interface ITooltipCss {
        tooltip: string;
    }
}

declare const TooltipCssModule: TooltipCssModule.ITooltipCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: TooltipCssModule.ITooltipCss;
};

export = TooltipCssModule;
