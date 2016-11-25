module.exports = "/* tslint:disable:no-unused-variable */\r\nimport * as React from 'react';\r\n/* tslint:enable:no-unused-variable */\r\nimport {\r\n  DetailsList,\r\n  Link,\r\n  Image,\r\n  ImageFit,\r\n  buildColumns,\r\n  IColumn\r\n} from '../../../../index';\r\nimport { createListItems } from '../../../utilities/data';\r\n\r\nlet _items: any[];\r\n\r\nexport interface IDetailsListCustomColumnsExampleState {\r\n  sortedItems?: any[];\r\n  columns?: IColumn[];\r\n}\r\n\r\nexport class DetailsListCustomColumnsExample extends React.Component<{}, IDetailsListCustomColumnsExampleState> {\r\n\r\n  constructor(props: {}) {\r\n    super(props);\r\n\r\n    _items = _items || createListItems(500);\r\n\r\n    this.state = {\r\n      sortedItems: _items,\r\n      columns: _buildColumns()\r\n    };\r\n  }\r\n\r\n  public render() {\r\n    let { sortedItems, columns } = this.state;\r\n\r\n    return (\r\n      <DetailsList\r\n        items={ sortedItems }\r\n        setKey='set'\r\n        columns={ columns }\r\n        onRenderItemColumn={ _renderItemColumn }\r\n        onColumnHeaderClick={ this._onColumnClick.bind(this) }\r\n        onItemInvoked={ (item, index) => alert(`Item ${ item.name } at index ${ index } has been invoked.`) }\r\n        onColumnHeaderContextMenu={ (column, ev) => console.log(`column ${ column.key } contextmenu opened.`) } />\r\n    );\r\n  }\r\n\r\n  private _onColumnClick(column) {\r\n    let { sortedItems, columns } = this.state;\r\n    let isSortedDescending = column.isSortedDescending;\r\n\r\n    // If we've sorted this column, flip it.\r\n    if (column.isSorted) {\r\n      isSortedDescending = !isSortedDescending;\r\n    }\r\n\r\n    // Sort the items.\r\n    sortedItems = sortedItems.concat([]).sort((a, b) => {\r\n      let firstValue = a[column.fieldName];\r\n      let secondValue = b[column.fieldName];\r\n\r\n      if (isSortedDescending) {\r\n        return firstValue > secondValue ? -1 : 1;\r\n      } else {\r\n        return firstValue > secondValue ? 1 : -1;\r\n      }\r\n    });\r\n\r\n    // Reset the items and columns to match the state.\r\n    this.setState({\r\n      sortedItems: sortedItems,\r\n      columns: columns.map(col => {\r\n        col.isSorted = (col.key === column.key);\r\n\r\n        if (col.isSorted) {\r\n          col.isSortedDescending = isSortedDescending;\r\n        }\r\n\r\n        return col;\r\n      })\r\n    });\r\n  }\r\n}\r\n\r\nfunction _buildColumns() {\r\n  let columns = buildColumns(_items);\r\n\r\n  let thumbnailColumn = columns.filter(column => column.name === 'thumbnail')[0];\r\n\r\n  // Special case one column's definition.\r\n  thumbnailColumn.name = '';\r\n  thumbnailColumn.maxWidth = 50;\r\n\r\n  return columns;\r\n}\r\n\r\nfunction _renderItemColumn(item, index, column) {\r\n  let fieldContent = item[column.fieldName];\r\n\r\n  switch (column.key) {\r\n    case 'thumbnail':\r\n      return <Image src={ fieldContent } width={ 50 } height={ 50 } imageFit={ ImageFit.cover } />;\r\n\r\n    case 'name':\r\n      return <Link href='#'>{ fieldContent }</Link>;\r\n\r\n    case 'color':\r\n      return <span style={ { color: fieldContent } }>{ fieldContent }</span>;\r\n\r\n    default:\r\n      return <span>{ fieldContent }</span>;\r\n  }\r\n}\r\n";