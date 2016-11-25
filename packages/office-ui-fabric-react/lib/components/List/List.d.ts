import * as React from 'react';
import { IListProps, IPage } from './List.Props';
import { BaseComponent } from '../../Utilities';
export interface IListState {
    pages?: IPage[];
    /** The last versionstamp for  */
    measureVersion?: number;
}
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback if
 * provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if provided by
 * the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
export declare class List extends BaseComponent<IListProps, IListState> {
    static defaultProps: {
        startIndex: number;
        onRenderCell: (item: any, index: any, containsFocus: any) => JSX.Element;
        renderedWindowsAhead: number;
        renderedWindowsBehind: number;
    };
    refs: {
        [key: string]: React.ReactInstance;
        root: HTMLElement;
        surface: HTMLElement;
    };
    private _estimatedPageHeight;
    private _totalEstimates;
    private _cachedPageHeights;
    private _focusedIndex;
    private _scrollElement;
    private _scrollingToIndex;
    private _hasCompletedFirstRender;
    private _surfaceRect;
    private _requiredRect;
    private _allowedRect;
    private _materializedRect;
    private _requiredWindowsAhead;
    private _requiredWindowsBehind;
    private _measureVersion;
    constructor(props: IListProps);
    componentDidMount(): void;
    componentWillReceiveProps(newProps: IListProps): void;
    shouldComponentUpdate(newProps: IListProps, newState: IListState): boolean;
    forceUpdate(): void;
    render(): JSX.Element;
    private _renderPage(page);
    /** Generate the style object for the page. */
    private _getPageStyle(page);
    /** Track the last item index focused so that we ensure we keep it rendered. */
    private _onFocus(ev);
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    private _onScroll();
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    private _onAsyncScroll();
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    private _onAsyncIdle();
    private _onAsyncResize();
    private _updatePages(props?);
    private _updatePageMeasurements(oldPages, newPages);
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    private _measurePage(page);
    /** Called when a page has been added to the DOM. */
    private _onPageAdded(page);
    /** Called when a page has been removed from the DOM. */
    private _onPageRemoved(page);
    /** Build up the pages that should be rendered. */
    private _buildPages(items, startIndex, renderCount);
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    private _getPageHeight(itemIndex, itemsPerPage, visibleRect);
    private _getItemCountForPage(itemIndex, visibileRect);
    private _createPage(pageKey, items, startIndex?, count?, style?);
    private _getRenderCount(props?);
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    private _updateRenderRects(props?, forceUpdate?);
}
