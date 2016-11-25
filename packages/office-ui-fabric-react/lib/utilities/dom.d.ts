import { IRectangle } from '../common/IRectangle';
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @export
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 */
export declare function setVirtualParent(child: HTMLElement, parent: HTMLElement): void;
export declare function getVirtualParent(child: HTMLElement): HTMLElement;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @export
 * @param {HTMLElement} child
 * @param {boolean} [allowVirtualParents=true]
 * @returns {HTMLElement}
 */
export declare function getParent(child: HTMLElement, allowVirtualParents?: boolean): HTMLElement;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @export
 * @param {HTMLElement} parent
 * @param {HTMLElement} child
 * @param {boolean} [allowVirtualParents=true]
 * @returns {boolean}
 */
export declare function elementContains(parent: HTMLElement, child: HTMLElement, allowVirtualParents?: boolean): boolean;
/** Helper to set ssr mode to simulate no window object returned from getWindow helper. */
export declare function setSSR(isEnabled: any): void;
/** Helper to get the window object. */
export declare function getWindow(rootElement?: HTMLElement): Window;
/** Helper to get the document object. */
export declare function getDocument(rootElement?: HTMLElement): Document;
/** Helper to get bounding client rect, works with window. */
export declare function getRect(element: HTMLElement | Window): IRectangle;