module.exports = "import * as React from 'react';\r\nimport { FocusZone } from './FocusZone';\r\n\r\n/**\r\n * FocusZone component class interface.\r\n */\r\nexport interface IFocusZone {\r\n  /**\r\n   * Sets focus to the first tabbable item in the zone.\r\n   * @returns True if focus could be set to an active element, false if no operation was taken.\r\n   */\r\n  focus(): boolean;\r\n\r\n  /**\r\n   * Sets focus to a specific child element within the zone. This can be used in conjunction with\r\n   * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct\r\n   * location and then focus.)\r\n   * @param {HTMLElement} element The child element within the zone to focus.\r\n   * @returns True if focus could be set to an active element, false if no operation was taken.\r\n   */\r\n  focusElement(childElement?: HTMLElement): boolean;\r\n}\r\n\r\n/**\r\n * FocusZone component props.\r\n */\r\nexport interface IFocusZoneProps extends React.Props<FocusZone> {\r\n  /**\r\n   * Additional class name to provide on the root element, in addition to the ms-FocusZone class.\r\n   */\r\n  className?: string;\r\n\r\n  /**\r\n   * Defines which arrows to react to.\r\n   * @default FocusZoneDirection.bidriectional\r\n   */\r\n  direction?: FocusZoneDirection;\r\n\r\n  /**\r\n   * Optionally provide a selector for identifying the intial active element.\r\n   */\r\n  defaultActiveElement?: string;\r\n\r\n  /**\r\n   * If set, the FocusZone will not be tabbable and keyboard navigation will be disabled.\r\n   * This does not affect disabled attribute of any child.\r\n   */\r\n  disabled?: boolean;\r\n\r\n  /**\r\n   * If set, will cycle to the beginning of the targets once the user navigates to the\r\n   * next target while at the end, and to the end when navigate to the previous at the beginning.\r\n   */\r\n  isCircularNavigation?: boolean;\r\n\r\n  /**\r\n   * If provided, this callback will be executed on keypresses to determine if the user\r\n   * intends to navigate into the inner zone. Returning true will ask the first inner zone to\r\n   * set focus.\r\n   */\r\n  isInnerZoneKeystroke?: (ev: React.KeyboardEvent<HTMLElement>) => boolean;\r\n\r\n  /**\r\n   * Sets the aria-labelledby attribute.\r\n   */\r\n  ariaLabelledBy?: string;\r\n\r\n  /**\r\n   * Callback for when one of immediate children elements gets active by getting focused\r\n   * or by having one of its respective children elements focused.\r\n   */\r\n  onActiveElementChanged?: (element?: HTMLElement, ev?: React.FocusEvent<HTMLElement>) => void;\r\n\r\n  /**\r\n   * Props mixed into the div root element that will be mixed into the root element, *before* other props are applied.\r\n   * This allows you to extend the root element with additional attributes, such as data-automation-id needed for\r\n   *  automation. Note that if you provide, for example, \"ariaLabelledBy\" as well as \"rootProps.ariaLabelledBy\", the\r\n   * former will take precedence over the later.\r\n   */\r\n  rootProps?: React.HTMLProps<HTMLDivElement>;\r\n\r\n  /**\r\n   * Callback method for determining if focus should indeed be set on the given element.\r\n   * @param {HTMLElement} element The child element within the zone to focus.\r\n   * @returns True if focus should be set to the given element, false to avoid setting focus.\r\n   */\r\n  onBeforeFocus?: (childElement?: HTMLElement) => boolean;\r\n}\r\n\r\nexport enum FocusZoneDirection {\r\n  /** Only react to up/down arrows. */\r\n  vertical,\r\n\r\n  /** Only react to left/right arrows. */\r\n  horizontal,\r\n\r\n  /** React to all arrows. */\r\n  bidirectional\r\n}\r\n";