module.exports = "/* tslint:disable */\r\nimport * as React from 'react';\r\n/* tslint:enable */\r\nimport {\r\n  ListPeoplePicker,\r\n  NormalPeoplePicker,\r\n  CompactPeoplePicker,\r\n  IContextualMenuItem,\r\n  Dropdown,\r\n  IDropdownOption,\r\n  IPersonaProps,\r\n  IBasePickerSuggestionsProps,\r\n  BaseComponent,\r\n  autobind,\r\n  Toggle\r\n} from '../../../../index';\r\nimport { IPersonaWithMenu } from '../../../../components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.Props';\r\nimport { people } from './PeoplePickerExampleData';\r\nimport { assign } from '../../../../utilities/object';\r\nimport './PeoplePicker.Types.Example.scss';\r\n\r\nexport interface IPeoplePickerExampleState {\r\n  currentPicker?: number | string;\r\n  delayResults?: boolean;\r\n}\r\n\r\nconst suggestionProps: IBasePickerSuggestionsProps = {\r\n  suggestionsHeaderText: 'Suggested People',\r\n  noResultsFoundText: 'No results found',\r\n  loadingText: 'Loading'\r\n};\r\n\r\nexport class PeoplePickerTypesExample extends BaseComponent<any, IPeoplePickerExampleState> {\r\n  private _peopleList;\r\n  private contextualMenuItems: IContextualMenuItem[] = [\r\n    {\r\n      key: 'newItem',\r\n      icon: 'circlePlus',\r\n      name: 'New'\r\n    },\r\n    {\r\n      key: 'upload',\r\n      icon: 'upload',\r\n      name: 'Upload'\r\n    },\r\n    {\r\n      key: 'divider_1',\r\n      name: '-',\r\n    },\r\n    {\r\n      key: 'rename',\r\n      name: 'Rename'\r\n    },\r\n    {\r\n      key: 'properties',\r\n      name: 'Properties'\r\n    },\r\n    {\r\n      key: 'disabled',\r\n      name: 'Disabled item',\r\n      disabled: true\r\n    }\r\n  ];\r\n\r\n  constructor() {\r\n    super();\r\n    this._peopleList = [];\r\n    people.forEach((persona: IPersonaProps) => {\r\n      let target: IPersonaWithMenu = {};\r\n\r\n      assign(target, persona, { menuItems: this.contextualMenuItems });\r\n      this._peopleList.push(target);\r\n    });\r\n\r\n    this.state = {\r\n      currentPicker: 1,\r\n      delayResults: false\r\n    };\r\n  }\r\n\r\n  public render() {\r\n    let currentPicker: JSX.Element;\r\n\r\n    switch (this.state.currentPicker) {\r\n      case 1:\r\n        currentPicker = this._renderNormalPicker();\r\n        break;\r\n      case 2:\r\n        currentPicker = this._renderCompactPicker();\r\n        break;\r\n      case 3:\r\n        currentPicker = this._renderListPicker();\r\n        break;\r\n      case 4:\r\n        currentPicker = this._renderPreselectedItemsPicker();\r\n        break;\r\n      case 5:\r\n        currentPicker = this._renderLimitedSearch();\r\n        break;\r\n    }\r\n\r\n    return (\r\n      <div>\r\n        { currentPicker }\r\n        <div className={'dropdown-div'}>\r\n          <Dropdown label='Select People Picker Type'\r\n            options={[\r\n              { key: 1, text: 'Normal' },\r\n              { key: 2, text: 'Compact' },\r\n              { key: 3, text: 'Members List' },\r\n              { key: 4, text: 'Preselected Items' },\r\n              { key: 5, text: 'Limit Search' }\r\n            ]}\r\n            selectedKey={ this.state.currentPicker }\r\n            onChanged={ this._dropDownSelected }\r\n            />\r\n          <Toggle\r\n            label='Delay Suggestion Results'\r\n            defaultChecked={ false }\r\n            onChanged={ this._toggleChange }/>\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n\r\n  public _renderListPicker() {\r\n    return (\r\n      <ListPeoplePicker\r\n        onResolveSuggestions={ this._onFilterChanged }\r\n        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText }\r\n        className={ 'ms-PeoplePicker' }\r\n        pickerSuggestionsProps={ suggestionProps }\r\n        key={'list'}\r\n        />\r\n    );\r\n  }\r\n\r\n  public _renderNormalPicker() {\r\n    return (\r\n      <NormalPeoplePicker\r\n        onResolveSuggestions={ this._onFilterChanged }\r\n        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText }\r\n        pickerSuggestionsProps={ suggestionProps }\r\n        className={ 'ms-PeoplePicker' }\r\n        key={ 'normal' }\r\n        />\r\n    );\r\n  }\r\n\r\n  public _renderCompactPicker() {\r\n    return (\r\n      <CompactPeoplePicker\r\n        onResolveSuggestions={ this._onFilterChanged }\r\n        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText }\r\n        pickerSuggestionsProps={ suggestionProps }\r\n        className={ 'ms-PeoplePicker' }\r\n        />\r\n    );\r\n  }\r\n\r\n  public _renderPreselectedItemsPicker() {\r\n    return (\r\n      <CompactPeoplePicker\r\n        onResolveSuggestions={ this._onFilterChanged }\r\n        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText }\r\n        className={ 'ms-PeoplePicker' }\r\n        defaultSelectedItems={ people.splice(0, 3) }\r\n        key={ 'list' }\r\n        pickerSuggestionsProps={ suggestionProps }\r\n        />\r\n    );\r\n  }\r\n\r\n  public _renderLimitedSearch() {\r\n    let limitedSearchSuggestionProps = suggestionProps;\r\n    limitedSearchSuggestionProps.searchForMoreText = 'Load all Results';\r\n    return (\r\n      <CompactPeoplePicker\r\n        onResolveSuggestions={ this._onFilterChangedWithLimit }\r\n        getTextFromItem={ (persona: IPersonaProps) => persona.primaryText }\r\n        className={ 'ms-PeoplePicker' }\r\n        onGetMoreResults={ this._onFilterChanged }\r\n        pickerSuggestionsProps={ limitedSearchSuggestionProps }\r\n        />\r\n    );\r\n  }\r\n\r\n  @autobind\r\n  private _onFilterChanged(filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) {\r\n    if (filterText) {\r\n      let filteredPersonas: IPersonaProps[] = this._filterPersonasByText(filterText);\r\n\r\n      filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);\r\n      filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;\r\n      return this._filterPromise(filteredPersonas);\r\n    } else {\r\n      return [];\r\n    }\r\n  }\r\n\r\n  @autobind\r\n  private _onFilterChangedWithLimit(filterText: string, currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {\r\n    return this._onFilterChanged(filterText, currentPersonas, 3);\r\n  }\r\n\r\n  private _filterPromise(personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {\r\n    if (this.state.delayResults) {\r\n      return this._convertResultsToPromise(personasToReturn);\r\n    } else {\r\n      return personasToReturn;\r\n    }\r\n  }\r\n\r\n  private _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {\r\n    if (!personas || !personas.length || personas.length === 0) {\r\n      return false;\r\n    }\r\n    return personas.filter(item => item.primaryText === persona.primaryText).length > 0;\r\n  }\r\n\r\n  private _filterPersonasByText(filterText: string): IPersonaProps[] {\r\n    return this._peopleList.filter(item => this._doesTextStartWith(item.primaryText, filterText));\r\n  }\r\n\r\n  private _doesTextStartWith(text: string, filterText: string): boolean {\r\n    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;\r\n  }\r\n\r\n  private _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {\r\n    return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));\r\n  }\r\n\r\n  private _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {\r\n    return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));\r\n  }\r\n\r\n  @autobind\r\n  private _toggleChange(toggleState: boolean) {\r\n    this.setState({ delayResults: toggleState });\r\n  }\r\n\r\n  @autobind\r\n  private _dropDownSelected(option: IDropdownOption) {\r\n    this.setState({ currentPicker: option.key });\r\n  }\r\n\r\n}\r\n";