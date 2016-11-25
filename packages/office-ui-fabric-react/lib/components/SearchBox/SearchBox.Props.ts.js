module.exports = "import * as React from 'react';\r\nimport { SearchBox } from './SearchBox';\r\n\r\nexport interface ISearchBoxProps extends React.Props<SearchBox> {\r\n\r\n  /**\r\n  * Label text for the SearchBox.\r\n  * @default \"Search\"\r\n  */\r\n  labelText?: string;\r\n\r\n  /**\r\n  * Callback function for when the typed input for the SearchBox has changed.\r\n  */\r\n  onChange?: (newValue: any) => void;\r\n\r\n  /**\r\n   * Callback executed when the user presses enter in the search box.\r\n   */\r\n  onSearch?: (newValue: any) => void;\r\n\r\n  /**\r\n   * @deprecated\r\n   * Deprecated at v0.52.2, to be removed at >= v1.0.0. Use 'onChange' instead.\r\n   */\r\n  onChanged?: (newValue: any) => void;\r\n\r\n  /**\r\n  * The value of the text in the SearchBox.\r\n  */\r\n  value?: string;\r\n\r\n  /**\r\n  * CSS class to apply to the SearchBox.\r\n  */\r\n  className?: string;\r\n}\r\n";