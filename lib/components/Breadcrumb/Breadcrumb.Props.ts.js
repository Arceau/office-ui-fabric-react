module.exports = "/* tslint:disable:no-unused-variable */\r\nimport * as React from 'react';\r\n/* tslint:enable:no-unused-variable */\r\nimport { Breadcrumb } from './Breadcrumb';\r\n\r\nexport interface IBreadcrumbProps extends React.Props<Breadcrumb> {\r\n\r\n  /**\r\n   * Collection of breadcrumbs to render\r\n   */\r\n  items: IBreadcrumbItem[];\r\n\r\n  /**\r\n   * Optional root classname for the root breadcrumb element.\r\n   */\r\n  className?: string;\r\n\r\n  /**\r\n   * The maximum number of breadcrumbs to display before coalescing.\r\n   * If not specified, all breadcrumbs will be rendered.\r\n   */\r\n  maxDisplayedItems?: number;\r\n}\r\n\r\nexport interface IBreadcrumbItem {\r\n\r\n  /**\r\n   * Text to display to the user for the breadcrumb\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Arbitrary unique string associated with the breadcrumb\r\n   */\r\n  key: string;\r\n\r\n  /**\r\n   * Callback issued when the breadcrumb is selected.\r\n   */\r\n  onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: IBreadcrumbItem) => void;\r\n\r\n  /**\r\n   * Url to navigate to when this breadcrumb is clicked.\r\n   */\r\n  href?: string;\r\n}";