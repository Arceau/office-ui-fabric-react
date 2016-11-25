import * as React from 'react';
import { BaseComponent } from '../../Utilities';
import { IFocusTrapZone, IFocusTrapZoneProps } from './FocusTrapZone.Props';
export declare class FocusTrapZone extends BaseComponent<IFocusTrapZoneProps, {}> implements IFocusTrapZone {
    refs: {
        [key: string]: React.ReactInstance;
        root: HTMLElement;
    };
    private _previouslyFocusedElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /**
     * Need to expose this method in case of popups since focus needs to be set when popup is opened
     */
    focus(): void;
    private _onKeyboardHandler(ev);
    private _forceFocusInTrap(ev);
    private _forceClickInTrap(ev);
}