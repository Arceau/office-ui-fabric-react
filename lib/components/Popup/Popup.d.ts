import * as React from 'react';
import { IPopupProps } from './Popup.Props';
import { BaseComponent } from '../../common/BaseComponent';
/**
 * This adds accessibility to Dialog and Panel controls
 */
export declare class Popup extends BaseComponent<IPopupProps, {}> {
    static defaultProps: IPopupProps;
    refs: {
        [key: string]: React.ReactInstance;
        root: HTMLElement;
    };
    private _originalFocusedElement;
    private _containsFocus;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onKeyDown(ev);
}