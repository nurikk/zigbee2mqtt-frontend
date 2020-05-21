declare namespace TooltipCssNamespace {
    export interface ITooltipCss {
        tooltip: string;
    }
}

declare const TooltipCssModule: TooltipCssNamespace.ITooltipCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: TooltipCssNamespace.ITooltipCss;
};

export = TooltipCssModule;
