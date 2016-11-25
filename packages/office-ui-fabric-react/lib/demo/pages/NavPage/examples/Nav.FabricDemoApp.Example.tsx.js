module.exports = "import * as React from 'react';\r\nimport { AppState, ExampleStatus } from '../../../components/App/AppState';\r\nimport {\r\n  Nav\r\n} from '../../../../index';\r\n\r\nexport class NavFabricDemoAppExample extends React.Component<any, any> {\r\n  public render() {\r\n    return (\r\n      <Nav groups={ AppState.examplePages } onRenderLink={(link) => ([\r\n        <span key={ 1 } className='Nav-linkText'>{ link.name }</span>,\r\n        (link.status !== undefined ?\r\n          <span key={ 2 } className={ 'Nav-linkFlair ' + 'is-state' + link.status } >{ ExampleStatus[link.status] }</span> :\r\n          null)\r\n        ])}\r\n      />\r\n    );\r\n  }\r\n\r\n}\r\n";