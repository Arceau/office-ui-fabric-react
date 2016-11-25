module.exports = "import * as React from 'react';\r\nimport {\r\n  Persona,\r\n  PersonaSize,\r\n  PersonaPresence,\r\n  Checkbox\r\n} from '../../../../index';\r\n\r\nconst examplePersona = {\r\n  imageUrl: './images/persona-female.png',\r\n  imageInitials: 'AL',\r\n  primaryText: 'Annie Lindqvist',\r\n  secondaryText: 'Software Engineer',\r\n  tertiaryText: 'In a meeting',\r\n  optionalText: 'Available at 4:00pm'\r\n};\r\n\r\nexport class PersonaBasicExample extends React.Component<React.Props<PersonaBasicExample>, { renderPersonaDetails?: boolean; }> {\r\n  constructor() {\r\n    super();\r\n    this.state = {\r\n      renderPersonaDetails: true\r\n    };\r\n  }\r\n\r\n  public render() {\r\n    let { renderPersonaDetails } = this.state;\r\n\r\n    return (\r\n      <div>\r\n        <div>\r\n          <Checkbox\r\n            label='Include persona details'\r\n            checked={ renderPersonaDetails }\r\n            onChange={ (ev, checked) => { this.setState({ renderPersonaDetails: checked }); }} />\r\n        </div>\r\n        <Persona\r\n          { ...examplePersona }\r\n          size={ PersonaSize.tiny }\r\n          presence={ PersonaPresence.offline }\r\n          hidePersonaDetails={ !renderPersonaDetails }\r\n        />\r\n        <Persona\r\n          { ...examplePersona }\r\n          size={ PersonaSize.extraSmall }\r\n          presence={ PersonaPresence.online }\r\n          hidePersonaDetails={ !renderPersonaDetails }\r\n        />\r\n        <Persona\r\n          { ...examplePersona }\r\n          size={ PersonaSize.small }\r\n          presence={ PersonaPresence.away }\r\n          hidePersonaDetails={ !renderPersonaDetails }\r\n        />\r\n        <Persona\r\n          { ...examplePersona }\r\n          hidePersonaDetails={ !renderPersonaDetails }\r\n          presence={ PersonaPresence.busy }\r\n        />\r\n        <Persona\r\n          { ...examplePersona }\r\n          size={ PersonaSize.large }\r\n          presence={ PersonaPresence.dnd }\r\n          hidePersonaDetails={ !renderPersonaDetails }\r\n        />\r\n        <Persona\r\n          { ...examplePersona }\r\n          size={ PersonaSize.extraLarge }\r\n          presence={ PersonaPresence.blocked }\r\n          hidePersonaDetails={ !renderPersonaDetails }\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n";