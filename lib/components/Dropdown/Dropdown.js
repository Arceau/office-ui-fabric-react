"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var DirectionalHint_1 = require('../../common/DirectionalHint');
var Callout_1 = require('../../Callout');
var FocusZone_1 = require('../../FocusZone');
var Utilities_1 = require('../../Utilities');
require('./Dropdown.scss');
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        _super.call(this, props, {
            'isDisabled': 'disabled'
        });
        this.state = {
            id: Utilities_1.getId('Dropdown'),
            isOpen: false,
            selectedIndex: this._getSelectedIndex(props.options, props.selectedKey),
            isDisabled: props.isDisabled !== undefined ? props.isDisabled : props.disabled
        };
    }
    Dropdown.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.selectedKey !== this.props.selectedKey) {
            this.setState({
                selectedIndex: this._getSelectedIndex(newProps.options, newProps.selectedKey)
            });
        }
        if (newProps.isDisabled !== this.props.isDisabled) {
            this.setState({
                isDisabled: newProps.isDisabled !== undefined ? newProps.isDisabled : newProps.disabled
            });
        }
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, options = _a.options, _b = _a.onRenderItem, onRenderItem = _b === void 0 ? this._onRenderItem : _b;
        var _c = this.state, id = _c.id, isOpen = _c.isOpen, selectedIndex = _c.selectedIndex, isDisabled = _c.isDisabled;
        var selectedOption = options[selectedIndex];
        return (React.createElement("div", {ref: 'root'}, 
            label && (React.createElement("label", {id: id + '-label', className: 'ms-Label', ref: function (dropdownLabel) { return _this._dropdownLabel = dropdownLabel; }}, label)), 
            React.createElement("div", {"data-is-focusable": true, ref: function (c) { return _this._dropDown = c; }, id: id, className: Utilities_1.css('ms-Dropdown', {
                'is-open': isOpen, 'is-disabled': isDisabled
            }), tabIndex: isDisabled ? -1 : 0, onKeyDown: this._onDropdownKeyDown, onClick: this._onDropdownClick, "aria-expanded": isOpen ? 'true' : 'false', role: 'combobox', "aria-label": label, "aria-activedescendant": selectedIndex >= 0 ? (id + '-list' + selectedIndex) : (id + '-list'), "aria-controls": id + '-list'}, 
                React.createElement("span", {className: 'ms-Dropdown-title'}, selectedOption ? onRenderItem(selectedOption, this._onRenderItem) : ''), 
                React.createElement("i", {className: 'ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown'})), 
            isOpen && (React.createElement(Callout_1.Callout, {isBeakVisible: false, className: 'ms-Dropdown-callout', gapSpace: 0, doNotLayer: false, targetElement: this._dropDown, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onDismiss}, 
                React.createElement(FocusZone_1.FocusZone, {ref: function (fz) { return fz && fz.focus(); }, direction: FocusZone_1.FocusZoneDirection.vertical, defaultActiveElement: '#' + id + '-list' + selectedIndex}, 
                    React.createElement("ul", {ref: function (c) { return _this._optionList = c; }, id: id + '-list', style: { width: this._dropDown.clientWidth - 2 }, className: 'ms-Dropdown-items', role: 'listbox', "aria-labelledby": id + '-label'}, options.map(function (option, index) { return (React.createElement("li", {id: id + '-list' + index.toString(), ref: Dropdown.Option + index.toString(), key: option.key, "data-index": index, "data-is-focusable": true, className: Utilities_1.css('ms-Dropdown-item', { 'is-selected': selectedIndex === index }), onClick: function () { return _this._onItemClick(index); }, onFocus: function () { return _this.setSelectedIndex(index); }, role: 'option', "aria-selected": selectedIndex === index ? 'true' : 'false', "aria-label": option.text}, option.text)); }))
                )
            ))));
    };
    Dropdown.prototype.focus = function () {
        if (this._dropDown && this._dropDown.tabIndex !== -1) {
            this._dropDown.focus();
        }
    };
    Dropdown.prototype.setSelectedIndex = function (index) {
        var _a = this.props, onChanged = _a.onChanged, options = _a.options;
        var selectedIndex = this.state.selectedIndex;
        index = Math.max(0, Math.min(options.length - 1, index));
        if (index !== selectedIndex) {
            // Set the selected option.
            this.setState({
                selectedIndex: index
            });
            if (onChanged) {
                onChanged(options[index], index);
            }
        }
    };
    Dropdown.prototype._onRenderItem = function (item) {
        return React.createElement("span", null, item.text);
    };
    Dropdown.prototype._onItemClick = function (index) {
        this.setSelectedIndex(index);
        this.setState({
            isOpen: false
        });
    };
    Dropdown.prototype._onDismiss = function () {
        this.setState({ isOpen: false });
    };
    Dropdown.prototype._getSelectedIndex = function (options, selectedKey) {
        return Utilities_1.findIndex(options, (function (option) { return (option.isSelected || option.selected || (selectedKey != null) && option.key === selectedKey); }));
    };
    Dropdown.prototype._onDropdownKeyDown = function (ev) {
        switch (ev.which) {
            case Utilities_1.KeyCodes.enter:
                this.setState({
                    isOpen: !this.state.isOpen
                });
                break;
            case Utilities_1.KeyCodes.escape:
                this.setState({
                    isOpen: false
                });
                break;
            case Utilities_1.KeyCodes.up:
                this.setSelectedIndex(this.state.selectedIndex - 1);
                break;
            case Utilities_1.KeyCodes.down:
                this.setSelectedIndex(this.state.selectedIndex + 1);
                break;
            case Utilities_1.KeyCodes.home:
                this.setSelectedIndex(0);
                break;
            case Utilities_1.KeyCodes.end:
                this.setSelectedIndex(this.props.options.length - 1);
                break;
            default:
                return;
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    Dropdown.prototype._onDropdownClick = function () {
        var _a = this.state, isDisabled = _a.isDisabled, isOpen = _a.isOpen;
        if (!isDisabled) {
            this.setState({
                isOpen: !isOpen
            });
        }
    };
    Dropdown.defaultProps = {
        options: []
    };
    Dropdown.Option = 'option';
    __decorate([
        Utilities_1.autobind
    ], Dropdown.prototype, "_onRenderItem", null);
    __decorate([
        Utilities_1.autobind
    ], Dropdown.prototype, "_onDismiss", null);
    __decorate([
        Utilities_1.autobind
    ], Dropdown.prototype, "_onDropdownKeyDown", null);
    __decorate([
        Utilities_1.autobind
    ], Dropdown.prototype, "_onDropdownClick", null);
    return Dropdown;
}(Utilities_1.BaseComponent));
exports.Dropdown = Dropdown;

//# sourceMappingURL=Dropdown.js.map