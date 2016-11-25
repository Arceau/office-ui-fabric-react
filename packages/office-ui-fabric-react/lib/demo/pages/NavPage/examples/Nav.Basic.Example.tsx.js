module.exports = "import * as React from 'react';\r\nimport {\r\n  Nav,\r\n  INavProps\r\n} from '../../../../index';\r\nimport './Nav.Basic.Example.scss';\r\n\r\nexport class NavBasicExample extends React.Component<any, any> {\r\n  constructor(props: INavProps) {\r\n    super(props);\r\n    this._onClickHandler = this._onClickHandler.bind(this);\r\n  }\r\n\r\n  public render() {\r\n    return (\r\n      <div className='ms-NavExample-LeftPane'>\r\n        <Nav\r\n          groups={\r\n            [\r\n              {\r\n                links:\r\n                [\r\n                  {\r\n                  name: 'Home',\r\n                  url: 'http://example.com',\r\n                  links: [{\r\n                    name: 'Activity',\r\n                    url: 'http://msn.com',\r\n                    key: 'key1'\r\n                    },\r\n                    {\r\n                      name: 'News',\r\n                      url: 'http://msn.com',\r\n                      key: 'key2'\r\n                    }],\r\n                  isExpanded: true\r\n                  },\r\n                  { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },\r\n                  { name: 'Pages', url: 'http://msn.com', key: 'key4' },\r\n                  { name: 'Notebook', url: 'http://msn.com', key: 'key5'  },\r\n                  { name: 'Long Name Test for elipse', url: 'http://msn.com', key: 'key6' },\r\n                  {\r\n                    name: 'Edit',\r\n                    url: 'http://cnn.com',\r\n                    onClick: this._onClickHandler2,\r\n                    icon: 'Edit',\r\n                    key: 'key8'\r\n                  }\r\n                ]\r\n              }\r\n            ]\r\n          }\r\n          expandedStateText={ 'expanded' }\r\n          collapsedStateText={'collapsed'}\r\n          selectedKey={ 'key3' }\r\n          />\r\n       </div>\r\n    );\r\n  }\r\n\r\n  private _onClickHandler(e: React.MouseEvent<HTMLElement>) {\r\n    alert('test');\r\n    return false;\r\n  }\r\n\r\n  private _onClickHandler2(e: React.MouseEvent<HTMLElement>) {\r\n    return false;\r\n  }\r\n}\r\n";