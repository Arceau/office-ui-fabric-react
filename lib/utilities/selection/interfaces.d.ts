export interface IObjectWithKey {
    key?: string;
}
export declare const SELECTION_CHANGE: string;
export declare enum SelectionMode {
    none = 0,
    single = 1,
    multiple = 2,
}
export interface ISelection {
    count: number;
    canSelectItem?: (item: IObjectWithKey) => boolean;
    setChangeEvents(isEnabled: boolean, suppressChange?: boolean): any;
    setItems(items: IObjectWithKey[], shouldClear: boolean): any;
    getItems(): IObjectWithKey[];
    getSelection(): IObjectWithKey[];
    getSelectedCount(): number;
    isRangeSelected(fromIndex: number, count: number): boolean;
    isAllSelected(): boolean;
    isKeySelected(key: string): boolean;
    isIndexSelected(index: number): boolean;
    setAllSelected(isAllSelected: boolean): any;
    setKeySelected(key: string, isSelected: boolean, shouldAnchor: boolean): any;
    setIndexSelected(index: number, isSelected: boolean, shouldAnchor: boolean): any;
    selectToKey(key: string, clearSelection?: boolean): any;
    selectToIndex(index: number, clearSelection?: boolean): any;
    toggleAllSelected(): any;
    toggleKeySelected(key: string): any;
    toggleIndexSelected(index: number): any;
    toggleRangeSelected(fromIndex: number, count: number): any;
}
export interface ISelectionLayout {
    getItemIndexAbove(index: number, items: any[]): number;
    getItemIndexBelow(index: number, items: any[]): number;
    getItemIndexLeft(index: number, items: any[]): number;
    getItemIndexRight(index: number, items: any[]): number;
}
export declare enum SelectionDirection {
    horizontal = 0,
    vertical = 1,
}
