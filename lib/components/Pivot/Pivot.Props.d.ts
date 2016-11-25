import * as React from 'react';
import { Pivot } from './Pivot';
import { PivotItem } from './PivotItem';
export interface IPivotProps extends React.Props<Pivot> {
    /**
     * The index of the pivot item initially selected.
     *
     * It only works when initialSelectedKey is not defined. You must not use them together.
     */
    initialSelectedIndex?: number;
    /**
     * The key of the pivot item initially selected.
     *
     * It will make initialSelectedIndex not work. You must not use them together.
     */
    initialSelectedKey?: string;
    /**
     * Callback issued when the selected pivot item is changed
     */
    onLinkClick?: (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>) => void;
    /**
     * Specify the PivotLinkSize to use (normal, large)
     */
    linkSize?: PivotLinkSize;
    /**
     * Specify the PivotLinkFormat to use (links, tabs)
     */
    linkFormat?: PivotLinkFormat;
}
export declare enum PivotLinkFormat {
    /**
     * Display Pivot Links as links
     */
    links = 0,
    /**
     * Display Pivot Links as Tabs
     */
    tabs = 1,
}
export declare enum PivotLinkSize {
    /**
     * Display Link using normal font size
     */
    normal = 0,
    /**
     * Display links using large font size
     */
    large = 1,
}