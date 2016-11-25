module.exports = "import * as React from 'react';\r\nimport {\r\n  Label,\r\n  Pivot,\r\n  PivotItem\r\n} from '../../../../index';\r\n\r\nexport class PivotBasicExample extends React.Component<any, any> {\r\n  public render() {\r\n    return (\r\n      <div>\r\n        <Pivot>\r\n            <PivotItem linkText='My Files'>\r\n              <Label>Pivot #1</Label>\r\n            </PivotItem>\r\n            <PivotItem linkText='Recent'>\r\n              <Label>Pivot #2</Label>\r\n            </PivotItem>\r\n            <PivotItem linkText='Shared with me'>\r\n              <Label>Pivot #3</Label>\r\n            </PivotItem>\r\n        </Pivot>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n";