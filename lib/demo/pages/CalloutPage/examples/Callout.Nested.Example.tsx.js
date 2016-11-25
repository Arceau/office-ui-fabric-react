module.exports = "import * as React from 'react';\r\nimport './CalloutExample.scss';\r\nimport {\r\n  Callout,\r\n  Button,\r\n  CommandBar\r\n} from '../../../../index';\r\nimport { items } from '../../CommandBarPage/examples/data';\r\n\r\nexport interface ICalloutBaiscExampleState {\r\n  isCalloutVisible?: boolean;\r\n}\r\n\r\nexport class CalloutNestedExample extends React.Component<any, ICalloutBaiscExampleState> {\r\n  private _menuButtonElement: HTMLElement;\r\n\r\n  public constructor() {\r\n    super();\r\n\r\n    this._onDismiss = this._onDismiss.bind(this);\r\n\r\n    this.state = {\r\n      isCalloutVisible: false,\r\n    };\r\n  }\r\n\r\n  public render() {\r\n    let { isCalloutVisible } = this.state;\r\n\r\n    return (\r\n      <div className='ms-CalloutExample'>\r\n        <div className='ms-CalloutBasicExample-buttonArea' ref={ (menuButton) => this._menuButtonElement = menuButton }>\r\n          <Button onClick={ this._onDismiss } >{ isCalloutVisible ? 'Hide callout' : 'Show callout' }</Button>\r\n        </div>\r\n        { isCalloutVisible ? (\r\n          <div>\r\n            <Callout\r\n              className='ms-CalloutExample-callout'\r\n              gapSpace={ 0 }\r\n              targetElement={ this._menuButtonElement }\r\n              onDismiss={ (ev: any) => { this._onDismiss(ev); } }\r\n              setInitialFocus={ true }\r\n              >\r\n              <div className='ms-CalloutExample-header'>\r\n                <p className='ms-CalloutExample-title'>\r\n                  Callout title here\r\n                </p>\r\n              </div>\r\n              <div className='ms-CalloutExample-inner'>\r\n                <div className='ms-CalloutExample-content'>\r\n                  <p className='ms-CalloutExample-subText'>\r\n                    Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <CommandBar items={ this.props.items } />\r\n            </Callout>\r\n          </div>\r\n        ) : (null) }\r\n      </div>\r\n    );\r\n  }\r\n\r\n  private _onDismiss(ev: any) {\r\n    this.setState({\r\n      isCalloutVisible: !this.state.isCalloutVisible\r\n    });\r\n  }\r\n}\r\n";