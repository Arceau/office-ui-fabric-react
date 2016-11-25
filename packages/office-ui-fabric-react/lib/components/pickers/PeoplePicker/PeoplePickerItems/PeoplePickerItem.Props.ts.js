module.exports = "import { IPersonaProps } from '../../../../Persona';\r\nimport { IPickerItemProps } from '../../PickerItem.Props';\r\nimport { IContextualMenuItem } from '../../../../ContextualMenu';\r\nexport interface IPeoplePickerItemProps extends IPickerItemProps <IPersonaProps> {\r\n}\r\n\r\nexport interface IPeoplePickerItemWithMenuProps extends IPickerItemProps<IPersonaWithMenu> {\r\n  item: IPersonaWithMenu;\r\n}\r\n\r\nexport interface IPersonaWithMenu extends IPersonaProps {\r\n  menuItems?: IContextualMenuItem[];\r\n}";