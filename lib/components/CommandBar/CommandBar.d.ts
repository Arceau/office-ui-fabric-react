import * as React from 'react';
import { ICommandBar, ICommandBarProps } from './CommandBar.Props';
import { FocusZone } from '../../FocusZone';
import { IContextualMenuItem } from '../../ContextualMenu';
import './CommandBar.scss';
export interface ICommandBarState {
    renderedItems?: IContextualMenuItem[];
    renderedOverflowItems?: IContextualMenuItem[];
    expandedMenuItemKey?: string;
    expandedMenuId?: string;
    contextualMenuItems?: IContextualMenuItem[];
    contextualMenuTarget?: HTMLElement;
    renderedFarItems?: IContextualMenuItem[];
}
export declare class CommandBar extends React.Component<ICommandBarProps, ICommandBarState> implements ICommandBar {
    static defaultProps: {
        items: any[];
        overflowItems: any[];
        farItems: any[];
    };
    refs: {
        [key: string]: React.ReactInstance;
        commandSurface: HTMLElement;
        farCommandSurface: HTMLElement;
        commandBarRegion: HTMLElement;
        searchSurface: HTMLElement;
        focusZone: FocusZone;
    };
    private _id;
    private _overflowWidth;
    private _commandItemWidths;
    private _events;
    constructor(props: ICommandBarProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: ICommandBarProps): void;
    componentDidUpdate(prevProps: ICommandBarProps, prevStates: ICommandBarState): void;
    render(): JSX.Element;
    focus(): void;
    private _renderItemInCommandBar(item, index, expandedMenuItemKey, isFarItem?);
    private _updateItemMeasurements();
    private _updateRenderedItems();
    private _onItemClick(ev, item);
    private _onOverflowClick(ev);
    private _onContextMenuDismiss(ev?);
    private _getStateFromProps(nextProps);
}
