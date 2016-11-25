import * as React from 'react';
import { IDropdownProps } from './Dropdown.Props';
import { FocusZone } from '../../FocusZone';
import { BaseComponent } from '../../Utilities';
import './Dropdown.scss';
export interface IDropdownState {
    isOpen: boolean;
    selectedIndex: number;
    isDisabled: boolean;
}
export declare class Dropdown extends BaseComponent<IDropdownProps, any> {
    static defaultProps: {
        options: any[];
    };
    private static Option;
    refs: {
        [key: string]: React.ReactInstance;
        root: HTMLElement;
        focusZone: FocusZone;
    };
    private _optionList;
    private _dropDown;
    private _dropdownLabel;
    constructor(props?: IDropdownProps);
    componentWillReceiveProps(newProps: IDropdownProps): void;
    render(): JSX.Element;
    focus(): void;
    setSelectedIndex(index: number): void;
    private _onRenderItem(item);
    private _onItemClick(index);
    private _onDismiss();
    private _getSelectedIndex(options, selectedKey);
    private _onDropdownKeyDown(ev);
    private _onDropdownClick();
}