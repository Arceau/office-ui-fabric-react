module.exports = "/* tslint:disable:no-unused-variable */\r\nimport * as React from 'react';\r\n/* tslint:enable:no-unused-variable */\r\nimport {\r\n  DetailsList,\r\n  MarqueeSelection,\r\n  Selection,\r\n  TextField,\r\n  Link\r\n} from '../../../../index';\r\nimport { createListItems } from '../../../utilities/data';\r\n\r\nlet _items: any[];\r\n\r\nexport class DetailsListBasicExample extends React.Component<any, any> {\r\n  private _selection: Selection;\r\n\r\n  constructor() {\r\n    super();\r\n\r\n    _items = _items || createListItems(500);\r\n\r\n    this._onRenderItemColumn = this._onRenderItemColumn.bind(this);\r\n    this._selection = new Selection({\r\n      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })\r\n    });\r\n\r\n    this.state = {\r\n      items: _items,\r\n      selectionDetails: this._getSelectionDetails()\r\n    };\r\n  }\r\n\r\n  public render() {\r\n    let { items, selectionDetails } = this.state;\r\n\r\n    return (\r\n      <div>\r\n        <div>{ selectionDetails }</div>\r\n        <TextField\r\n          label='Filter by name:'\r\n          onChanged={ text => this.setState({ items: text ? _items.filter(i => i.name.toLowerCase().indexOf(text) > -1) : _items }) }\r\n        />\r\n        <MarqueeSelection selection={ this._selection }>\r\n          <DetailsList\r\n            items={ items }\r\n            setKey='set'\r\n            selection={ this._selection }\r\n            onItemInvoked={ (item) => alert(`Item invoked: ${item.name}`) }\r\n            onRenderItemColumn={ this._onRenderItemColumn }\r\n            />\r\n        </MarqueeSelection>\r\n      </div>\r\n    );\r\n  }\r\n\r\n  private _onRenderItemColumn(item, index, column) {\r\n    if (column.key === 'name') {\r\n      return <Link data-selection-invoke={ true }>{ item[column.key] }</Link>;\r\n    }\r\n\r\n    return item[column.key];\r\n  }\r\n\r\n  private _getSelectionDetails(): string {\r\n    let selectionCount = this._selection.getSelectedCount();\r\n\r\n    switch (selectionCount) {\r\n      case 0:\r\n        return 'No items selected';\r\n      case 1:\r\n        return '1 item selected: ' + (this._selection.getSelection()[0] as any).name;\r\n      default:\r\n        return `${ selectionCount } items selected`;\r\n    }\r\n  }\r\n}\r\n";