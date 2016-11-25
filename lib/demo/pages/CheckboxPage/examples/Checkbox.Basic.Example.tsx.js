module.exports = "import * as React from 'react';\r\nimport {\r\n  Checkbox\r\n} from '../../../../Checkbox';\r\n\r\nexport interface ICheckboxBasicExampleState {\r\n  isChecked: boolean;\r\n}\r\n\r\nexport class CheckboxBasicExample extends React.Component<{}, ICheckboxBasicExampleState> {\r\n  constructor() {\r\n    super();\r\n\r\n    this.state = {\r\n      isChecked: false\r\n    };\r\n\r\n    this._onCheckboxChange = this._onCheckboxChange.bind(this);\r\n  }\r\n\r\n  public render() {\r\n    let { isChecked } = this.state;\r\n\r\n    return (\r\n      <div>\r\n        <Checkbox\r\n          label='Uncontrolled checkbox'\r\n          onChange={ this._onCheckboxChange }\r\n          inputProps={ {\r\n            onFocus: () => { console.log('Uncontrolled checkbox is focused'); },\r\n            onBlur: () => { console.log('Uncontrolled checkbox is blured'); }\r\n          } } />\r\n\r\n        <Checkbox\r\n          label='Uncontrolled checkbox with defaultChecked true'\r\n          defaultChecked={ true }\r\n          onChange={ this._onCheckboxChange } />\r\n\r\n        <Checkbox\r\n          label='Disabled uncontrolled checkbox with defaultChecked true'\r\n          disabled={ true }\r\n          defaultChecked={ true }\r\n          onChange={ this._onCheckboxChange } />\r\n\r\n        <Checkbox\r\n          label='Controlled checkbox'\r\n          checked={ isChecked }\r\n          onChange={ (ev, checked) => this.setState({ isChecked: checked }) } />\r\n      </div>\r\n    );\r\n  }\r\n\r\n  private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {\r\n    console.log(`The option has been changed to ${isChecked}.`);\r\n  }\r\n\r\n}\r\n";