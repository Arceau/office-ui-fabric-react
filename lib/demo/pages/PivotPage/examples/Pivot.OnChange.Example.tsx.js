module.exports = "import * as React from 'react';\r\nimport {\r\n  Label,\r\n  Pivot,\r\n  PivotItem,\r\n  PivotLinkFormat,\r\n  PivotLinkSize\r\n} from '../../../../index';\r\n\r\nexport class PivotOnChangeExample extends React.Component<any, any> {\r\n  public render() {\r\n    return (\r\n      <div>\r\n        <Pivot linkSize={ PivotLinkSize.large } linkFormat={ PivotLinkFormat.tabs } onLinkClick={ this.onLinkClick.bind(this) }>\r\n            <PivotItem linkText='Foo'>\r\n              <Label>Pivot #1</Label>\r\n            </PivotItem>\r\n            <PivotItem linkText='Bar'>\r\n              <Label>Pivot #2</Label>\r\n            </PivotItem>\r\n            <PivotItem linkText='Bas'>\r\n              <Label>Pivot #3</Label>\r\n            </PivotItem>\r\n            <PivotItem linkText='Biz'>\r\n              <Label>Pivot #4</Label>\r\n            </PivotItem>\r\n            <div>\r\n              content not in a PivotItem\r\n            </div>\r\n        </Pivot>\r\n      </div>\r\n    );\r\n  }\r\n\r\n  public onLinkClick(item: PivotItem): void {\r\n    alert(item.props.linkText);\r\n  }\r\n}\r\n";