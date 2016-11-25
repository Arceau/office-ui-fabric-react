module.exports = "import * as React from 'react';\r\nimport { Facepile } from './Facepile';\r\nimport { IButtonProps } from '../Button/index';\r\nimport { IPersonaProps, PersonaInitialsColor } from '../Persona/index';\r\n\r\nexport interface IFacepileProps extends React.Props<Facepile> {\r\n  /**\r\n   * Array of IPersonaProps that define each Persona. Note that the size\r\n   * is fixed at PersonaSize.extraSmall regardless of what is specified.\r\n   */\r\n  personas: IFacepilePersona[];\r\n\r\n  /** Maximum number of personas to show */\r\n  maxDisplayablePersonas?: number;\r\n\r\n  /** Show add person button */\r\n  showAddButton?: boolean;\r\n\r\n  /** Button properties for the add face button */\r\n  addButtonProps?: IButtonProps;\r\n\r\n  /**\r\n   * @deprecated\r\n   * Deprecated at v0.70, to be removed at >= v1.0.0. User overflowButtonProps instead;\r\n   * Button properties for the chevron button\r\n   */\r\n  chevronButtonProps?: IButtonProps;\r\n\r\n  /** Properties for the overflow icon */\r\n  overflowButtonProps?: IButtonProps;\r\n\r\n  /** Type of overflow icon to use */\r\n  overflowButtonType?: OverflowButtonType;\r\n\r\n  /** Method to access properties on the underlying Persona control */\r\n  getPersonaProps?: (persona: IFacepilePersona) => IPersonaProps;\r\n}\r\n\r\nexport interface IFacepilePersona extends React.HTMLProps<HTMLButtonElement | HTMLDivElement> {\r\n  /**\r\n   * Name of the person.\r\n   */\r\n  personaName?: string;\r\n\r\n  /**\r\n   * Url to the image to use, should be a square aspect ratio and big enough to fit in the image area.\r\n   */\r\n  imageUrl?: string;\r\n\r\n  /**\r\n   * The user's initials to display in the image area when there is no image.\r\n   */\r\n  imageInitials?: string;\r\n\r\n  /**\r\n   * The background color when the user's initials are displayed.\r\n   * @defaultvalue PersonaInitialsColor.blue\r\n   */\r\n  initialsColor?: PersonaInitialsColor;\r\n\r\n  /**\r\n   * If provided, persona will be rendered with cursor:pointer and the handler will be\r\n   * called on click.\r\n   */\r\n  onClick?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;\r\n\r\n  /**\r\n   * If provided, the handler will be called on mouse move.\r\n   */\r\n  onMouseMove?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;\r\n\r\n  /**\r\n   * If provided, the handler will be called when mouse moves out of the component.\r\n   */\r\n  onMouseOut?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;\r\n\r\n  /**\r\n   * Extra data - not used directly but can be handy for passing additional data to custom event\r\n   * handlers.\r\n   */\r\n  data?: any;\r\n}\r\n\r\nexport enum OverflowButtonType {\r\n  /** No overflow */\r\n  none,\r\n  /** +1 overflow icon */\r\n  descriptive,\r\n  /** More overflow icon */\r\n  more,\r\n  /** Chevron overflow icon */\r\n  downArrow\r\n}";