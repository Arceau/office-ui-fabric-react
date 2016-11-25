module.exports = "import * as React from 'react';\r\nimport {\r\n  Dialog,\r\n  DialogType,\r\n  DialogFooter,\r\n  Button,\r\n  ButtonType,\r\n  ChoiceGroup\r\n} from '../../../../index';\r\n\r\nexport class DialogBlockingExample extends React.Component<any, any> {\r\n\r\n  constructor() {\r\n    super();\r\n    this.state = {\r\n      showDialog: false\r\n    };\r\n  }\r\n\r\n  public render() {\r\n    return (\r\n      <div>\r\n        <Button description='Opens the Sample Dialog' onClick={ this._showDialog.bind(this) }>Open Dialog</Button>\r\n        <Dialog\r\n          isOpen={ this.state.showDialog }\r\n          type={ DialogType.normal }\r\n          onDismiss={ this._closeDialog.bind(this) }\r\n          title='All emails together'\r\n          subText='Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'\r\n          isBlocking={ true }\r\n        >\r\n          <ChoiceGroup\r\n            options={ [\r\n              {\r\n                key: 'A',\r\n                text: 'Option A'\r\n              },\r\n              {\r\n                key: 'B',\r\n                text: 'Option B',\r\n                checked: true\r\n              },\r\n              {\r\n                key: 'C',\r\n                text: 'Option C',\r\n                disabled: true\r\n              }\r\n            ] }\r\n            onChanged={ this._onChoiceChanged }\r\n          />\r\n          <DialogFooter>\r\n            <Button buttonType={ ButtonType.primary } onClick={this._closeDialog.bind(this)}>Save</Button>\r\n            <Button onClick={this._closeDialog.bind(this)}>Cancel</Button>\r\n          </DialogFooter>\r\n        </Dialog>\r\n      </div>\r\n    );\r\n  }\r\n\r\n  private _showDialog() {\r\n    this.setState( {showDialog: true } );\r\n  }\r\n\r\n  private _closeDialog() {\r\n    this.setState( {showDialog: false } );\r\n  }\r\n\r\n  private _onChoiceChanged() {\r\n    console.log( 'Choice option change' );\r\n  }\r\n}\r\n";