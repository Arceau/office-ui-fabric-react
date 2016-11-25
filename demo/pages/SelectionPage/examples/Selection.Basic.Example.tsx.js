module.exports = "import * as React from 'react';\r\nimport { CommandBar, IContextualMenuItem, MarqueeSelection } from '../../../../index';\r\nimport { Check } from '../../../../components/Check/Check';\r\nimport {\r\n  IObjectWithKey,\r\n  ISelection,\r\n  Selection,\r\n  SelectionMode,\r\n  SelectionZone\r\n} from '../../../../utilities/selection/index';\r\nimport { createListItems } from '../../../utilities/data';\r\n\r\nimport './Selection.Example.scss';\r\n\r\nconst ITEM_COUNT = 100;\r\n\r\nexport interface ISelectionBasicExampleState {\r\n  items?: any[];\r\n  selection?: ISelection;\r\n  selectionMode?: SelectionMode;\r\n  canSelect?: string;\r\n}\r\n\r\nexport interface ISelectionItemExampleProps {\r\n  item?: any;\r\n  itemIndex?: number;\r\n  selection?: ISelection;\r\n  selectionMode?: SelectionMode;\r\n}\r\n\r\n/**\r\n * The SelectionBasicExample controls the selection state of all items\r\n */\r\nexport class SelectionBasicExample extends React.Component<any, ISelectionBasicExampleState> {\r\n  private _hasMounted: boolean;\r\n\r\n  constructor() {\r\n    super();\r\n\r\n    this._hasMounted = false;\r\n    this._onSelectionChanged = this._onSelectionChanged.bind(this);\r\n    this._onSelectionModeChanged = this._onSelectionModeChanged.bind(this);\r\n    this._onToggleSelectAll = this._onToggleSelectAll.bind(this);\r\n    this._onCanSelectChanged = this._onCanSelectChanged.bind(this);\r\n    this._canSelectItem = this._canSelectItem.bind(this);\r\n\r\n    this.state = {\r\n      items: createListItems(ITEM_COUNT),\r\n      selection: new Selection({ onSelectionChanged: this._onSelectionChanged }),\r\n      selectionMode: SelectionMode.multiple,\r\n      canSelect: 'all'\r\n    };\r\n    this.state.selection.setItems(this.state.items as IObjectWithKey[], false);\r\n  }\r\n\r\n  public componentDidMount() {\r\n    this._hasMounted = true;\r\n  }\r\n\r\n  public render() {\r\n    let { items, selection, selectionMode } = this.state;\r\n\r\n    return (\r\n      <div className='ms-SelectionBasicExample'>\r\n        <CommandBar items={ this._getCommandItems() } />\r\n        <MarqueeSelection selection={ selection } isEnabled={ selectionMode === SelectionMode.multiple } >\r\n          <SelectionZone\r\n            selection={ selection }\r\n            selectionMode={ selectionMode }\r\n            onItemInvoked={ (item) => alert('item invoked: ' + item.name) }>\r\n            { items.map((item, index) => (\r\n              <SelectionItemExample\r\n                ref={ 'detailsGroup_' + index }\r\n                key={ item.key }\r\n                item={ item }\r\n                itemIndex={ index }\r\n                selectionMode={ selectionMode }\r\n                selection={ selection }\r\n                />\r\n            )) }\r\n          </SelectionZone>\r\n        </MarqueeSelection>\r\n      </div>\r\n    );\r\n  }\r\n\r\n  private _onSelectionChanged() {\r\n    if (this._hasMounted) {\r\n      this.forceUpdate();\r\n    }\r\n  }\r\n\r\n  private _onToggleSelectAll() {\r\n    let { selection } = this.state;\r\n    selection.toggleAllSelected();\r\n  }\r\n\r\n  private _onSelectionModeChanged(ev: React.MouseEvent<HTMLElement>, menuItem: IContextualMenuItem) {\r\n    this.setState({\r\n      selectionMode: menuItem.data\r\n    });\r\n  }\r\n\r\n  private _onCanSelectChanged(ev: React.MouseEvent<HTMLElement>, menuItem: IContextualMenuItem) {\r\n    let canSelectItem = (menuItem.data === 'vowels') ? this._canSelectItem : undefined;\r\n    let newSelection = new Selection({ onSelectionChanged: this._onSelectionChanged, canSelectItem: canSelectItem });\r\n    newSelection.setItems(this.state.items as IObjectWithKey[], false);\r\n    this.setState({\r\n      selection: newSelection,\r\n      canSelect: (menuItem.data === 'vowels') ? 'vowels' : 'all'\r\n    });\r\n  }\r\n\r\n  private _canSelectItem(item: any): boolean {\r\n    return item.name && (item.name.indexOf('a') === 0 || item.name.indexOf('e') === 0 || item.name.indexOf('i') === 0 || item.name.indexOf('o') === 0 || item.name.indexOf('u') === 0);\r\n  }\r\n\r\n  private _getCommandItems(): IContextualMenuItem[] {\r\n    let { selectionMode, canSelect } = this.state;\r\n\r\n    return [\r\n      {\r\n        key: 'selectionMode',\r\n        name: 'Selection Mode',\r\n        items: [\r\n          {\r\n            key: SelectionMode[SelectionMode.none],\r\n            name: 'None',\r\n            canCheck: true,\r\n            checked: selectionMode === SelectionMode.none,\r\n            onClick: this._onSelectionModeChanged,\r\n            data: SelectionMode.none\r\n\r\n          },\r\n          {\r\n            key: SelectionMode[SelectionMode.single],\r\n            name: 'Single select',\r\n            canCheck: true,\r\n            checked: selectionMode === SelectionMode.single,\r\n            onClick: this._onSelectionModeChanged,\r\n            data: SelectionMode.single\r\n          },\r\n          {\r\n            key: SelectionMode[SelectionMode.multiple],\r\n            name: 'Multi select',\r\n            canCheck: true,\r\n            checked: selectionMode === SelectionMode.multiple,\r\n            onClick: this._onSelectionModeChanged,\r\n            data: SelectionMode.multiple\r\n          },\r\n        ]\r\n      },\r\n      {\r\n        key: 'selectAll',\r\n        name: 'Select All',\r\n        icon: 'check',\r\n        onClick: this._onToggleSelectAll\r\n      },\r\n      {\r\n        key: 'allowCanSelect',\r\n        name: 'Choose selectable items',\r\n        items: [\r\n          {\r\n            key: 'all',\r\n            name: 'All items',\r\n            canCheck: true,\r\n            checked: canSelect === 'all',\r\n            onClick: this._onCanSelectChanged,\r\n            data: 'all'\r\n          },\r\n          {\r\n            key: 'a',\r\n            name: 'Names starting with vowels',\r\n            canCheck: true,\r\n            checked: canSelect === 'vowels',\r\n            onClick: this._onCanSelectChanged,\r\n            data: 'vowels'\r\n          }\r\n        ]\r\n      }\r\n    ];\r\n  }\r\n}\r\n\r\n/**\r\n * The SelectionItemExample controls and displays the selection state of a single item\r\n */\r\nexport class SelectionItemExample extends React.Component<ISelectionItemExampleProps, {}> {\r\n  public render() {\r\n    let { item, itemIndex, selection, selectionMode } = this.props;\r\n    let isSelected = selection.isIndexSelected(itemIndex);\r\n\r\n    return (\r\n      <div className='ms-SelectionItemExample'  data-selection-index={ itemIndex }>\r\n        { (selectionMode !== SelectionMode.none) && (\r\n          <div className='ms-SelectionItemExample-check' data-selection-toggle={ true } >\r\n            <Check checked={ isSelected } />\r\n          </div>\r\n        ) }\r\n        <span className='ms-SelectionItemExample-name'>\r\n          { item.name }\r\n        </span>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n";