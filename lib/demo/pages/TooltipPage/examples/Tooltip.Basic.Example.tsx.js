module.exports = "/* tslint:disable:no-unused-variable */\r\nimport * as React from 'react';\r\n/* tslint:enable:no-unused-variable */\r\nimport { BaseComponent } from '../../../../common/BaseComponent';\r\n\r\nimport {\r\n  TooltipHost,\r\n  Button\r\n} from '../../../../index';\r\n\r\nexport class TooltipBasicExample extends BaseComponent<any, any> {\r\n\r\n  public render() {\r\n    return (\r\n      <div>\r\n        <TooltipHost content='This is the tooltip' id='myID'>\r\n          <Button aria-describedby='myID'>Hover Over Me</Button>\r\n        </TooltipHost>\r\n      </div>\r\n    );\r\n  }\r\n}";