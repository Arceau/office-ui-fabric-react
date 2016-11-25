module.exports = "import * as React from 'react';\r\nimport {\r\n  List\r\n} from '../../../../index';\r\nimport './List.Mail.Example.scss';\r\n\r\nexport class MailTile extends React.Component<any, any> {\r\n  public render() {\r\n    let { item } = this.props;\r\n    return (\r\n      <div className='ms-ListItem is-unread is-selectable'>\r\n        <span className='ms-ListItem-primaryText'>{ item.name }</span>\r\n        <span className='ms-ListItem-secondaryText'>{ item.title }</span>\r\n        <span className='ms-ListItem-tertiaryText'>{ item.description }</span>\r\n        <span className='ms-ListItem-metaText'>2:42p</span>\r\n        <div className='ms-ListItem-selectionTarget js-toggleSelection'></div>\r\n        <div className='ms-ListItem-actions'>\r\n          <div className='ms-ListItem-action'></div>\r\n          <div className='ms-ListItem-action'></div>\r\n          <div className='ms-ListItem-action'></div>\r\n          <div className='ms-ListItem-action'></div>\r\n        </div>\r\n    </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport interface IListMailExampleProps {\r\n  items: any[];\r\n}\r\n\r\nexport class ListMailExample extends React.Component<IListMailExampleProps, any> {\r\n  public render() {\r\n    return (\r\n      <div>\r\n        <h1 className='ms-font-xxl'>Inbox</h1>\r\n        <div className='MailList' data-is-scrollable={ true }>\r\n          <List\r\n            items={ this.props.items }\r\n            onRenderCell={ (item, index) => (\r\n              <MailTile item={ item } />\r\n            )}\r\n          />\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n";