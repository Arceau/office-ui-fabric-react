module.exports = "import * as React from 'react';\r\nimport {\r\n  ColorPicker\r\n} from '../../../../index';\r\nimport './ColorPicker.Basic.Example.scss';\r\n\r\nexport interface IBasicColorPickerExampleState {\r\n  color: string;\r\n}\r\n\r\nexport class ColorPickerBasicExample extends React.Component<any, IBasicColorPickerExampleState> {\r\n\r\n  public render() {\r\n\r\n    return (\r\n        <ColorPicker color='#FFFFFF'/>\r\n    );\r\n  }\r\n}\r\n";