"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var FocusZone_1 = require('../../FocusZone');
var ContextualMenu_1 = require('../../ContextualMenu');
var EventGroup_1 = require('../../utilities/eventGroup/EventGroup');
var DirectionalHint_1 = require('../../common/DirectionalHint');
var autobind_1 = require('../../utilities/autobind');
var css_1 = require('../../utilities/css');
var object_1 = require('../../utilities/object');
var properties_1 = require('../../utilities/properties');
require('./CommandBar.scss');
var OVERFLOW_KEY = 'overflow';
var OVERFLOW_WIDTH = 41.5;
var CommandBar = (function (_super) {
    __extends(CommandBar, _super);
    function CommandBar(props) {
        _super.call(this, props);
        this.state = this._getStateFromProps(props);
        this._id = object_1.getId('CommandBar');
        this._events = new EventGroup_1.EventGroup(this);
    }
    CommandBar.prototype.componentDidMount = function () {
        this._updateItemMeasurements();
        this._updateRenderedItems();
        this._events.on(window, 'resize', this._updateRenderedItems);
    };
    CommandBar.prototype.componentWillUnmount = function () {
        this._events.dispose();
    };
    CommandBar.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this._getStateFromProps(nextProps));
        this._commandItemWidths = null;
    };
    CommandBar.prototype.componentDidUpdate = function (prevProps, prevStates) {
        if (!this._commandItemWidths) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
    };
    CommandBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, isSearchBoxVisible = _a.isSearchBoxVisible, searchPlaceholderText = _a.searchPlaceholderText, className = _a.className;
        var _b = this.state, renderedItems = _b.renderedItems, contextualMenuItems = _b.contextualMenuItems, expandedMenuItemKey = _b.expandedMenuItemKey, expandedMenuId = _b.expandedMenuId, renderedOverflowItems = _b.renderedOverflowItems, contextualMenuTarget = _b.contextualMenuTarget, renderedFarItems = _b.renderedFarItems;
        var searchBox;
        if (isSearchBoxVisible) {
            searchBox = (React.createElement("div", {className: 'ms-CommandBarSearch', ref: 'searchSurface'}, 
                React.createElement("input", {className: 'ms-CommandBarSearch-input', type: 'text', placeholder: searchPlaceholderText}), 
                React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'}, 
                    React.createElement("i", {className: 'ms-Icon ms-Icon--Search'})
                ), 
                React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'}, 
                    React.createElement("i", {className: 'ms-Icon ms-Icon--Cancel'})
                )));
        }
        return (React.createElement("div", {className: css_1.css('ms-CommandBar', className), ref: 'commandBarRegion'}, 
            searchBox, 
            React.createElement(FocusZone_1.FocusZone, {ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.horizontal, rootProps: { role: 'menubar' }}, 
                React.createElement("div", {className: 'ms-CommandBar-primaryCommands', ref: 'commandSurface'}, renderedItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey)); }).concat((renderedOverflowItems && renderedOverflowItems.length) ? [
                    React.createElement("div", {className: 'ms-CommandBarItem', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, 
                        React.createElement("button", {id: this._id + OVERFLOW_KEY, className: css_1.css('ms-CommandBarItem-link', { 'is-expanded': (expandedMenuItemKey === OVERFLOW_KEY) }), onClick: this._onOverflowClick, role: 'menuitem', "aria-label": this.props.elipisisAriaLabel || '', "aria-haspopup": true, "data-automation-id": 'commandBarOverflow'}, 
                            React.createElement("i", {className: 'ms-CommandBarItem-overflow ms-Icon ms-Icon--More'})
                        )
                    )
                ] : [])), 
                React.createElement("div", {className: 'ms-CommandBar-sideCommands', ref: 'farCommandSurface'}, renderedFarItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey, true)); }))), 
            (contextualMenuItems) ?
                (React.createElement(ContextualMenu_1.ContextualMenu, {labelElementId: expandedMenuId, className: 'ms-CommandBar-menuHost', items: contextualMenuItems, targetElement: contextualMenuTarget, onDismiss: this._onContextMenuDismiss, isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge})) : (null)));
    };
    CommandBar.prototype.focus = function () {
        this.refs.focusZone.focus();
    };
    CommandBar.prototype._renderItemInCommandBar = function (item, index, expandedMenuItemKey, isFarItem) {
        var _this = this;
        var itemKey = item.key || String(index);
        var className = css_1.css(item.onClick ? 'ms-CommandBarItem-link' : 'ms-CommandBarItem-text', !item.name && 'ms-CommandBarItem--noName');
        var classNameValue = css_1.css(className, { 'is-expanded': (expandedMenuItemKey === item.key) });
        return React.createElement("div", {className: css_1.css('ms-CommandBarItem', item.className), key: itemKey, ref: itemKey}, (function () {
            if (item.onClick || item.items) {
                return React.createElement("button", __assign({}, properties_1.getNativeProps(item, properties_1.buttonProperties), {id: _this._id + item.key, className: classNameValue, onClick: function (ev) { return _this._onItemClick(ev, item); }, "data-command-key": index, "aria-haspopup": !!(item.items && item.items.length), role: 'menuitem', "aria-label": item.ariaLabel || item.name}), 
                    (!!item.icon) && React.createElement("span", {className: "ms-CommandBarItem-icon ms-Icon ms-Icon--" + item.icon}), 
                    (!!item.name) && React.createElement("span", {className: 'ms-CommandBarItem-commandText'}, item.name), 
                    (item.items && item.items.length) ? (React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--ChevronDown'})) : (null));
            }
            else {
                return React.createElement("div", __assign({}, properties_1.getNativeProps(item, properties_1.divProperties), {id: _this._id + item.key, className: classNameValue, "data-command-key": index, "aria-haspopup": !!(item.items && item.items.length)}), 
                    React.createElement("span", {className: "ms-CommandBarItem-icon ms-Icon ms-Icon--" + item.icon}), 
                    React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular', "aria-hidden": 'true', role: 'presentation'}, item.name));
            }
        })());
    };
    CommandBar.prototype._updateItemMeasurements = function () {
        // the generated width for overflow is 35 in chrome, 38 in IE, but the actual value is 41.5
        if (this.refs[OVERFLOW_KEY] || (this.props.overflowItems && this.props.overflowItems.length)) {
            this._overflowWidth = OVERFLOW_WIDTH;
        }
        else {
            this._overflowWidth = 0;
        }
        if (!this._commandItemWidths) {
            this._commandItemWidths = {};
        }
        for (var i = 0; i < this.props.items.length; i++) {
            var item = this.props.items[i];
            if (!this._commandItemWidths[item.key]) {
                var el = this.refs[item.key];
                if (el) {
                    this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
                }
            }
        }
    };
    CommandBar.prototype._updateRenderedItems = function () {
        var _a = this.props, items = _a.items, overflowItems = _a.overflowItems;
        var commandSurface = this.refs.commandSurface;
        var farCommandSurface = this.refs.farCommandSurface;
        var commandBarRegion = this.refs.commandBarRegion;
        var searchSurface = this.refs.searchSurface;
        var renderedItems = [].concat(items);
        var renderedOverflowItems = overflowItems;
        var consumedWidth = 0;
        var isOverflowVisible = overflowItems && overflowItems.length;
        var style = window.getComputedStyle(commandSurface);
        var availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
        if (searchSurface) {
            availableWidth -= searchSurface.getBoundingClientRect().width;
        }
        if (farCommandSurface) {
            availableWidth -= farCommandSurface.getBoundingClientRect().width;
        }
        if (isOverflowVisible) {
            availableWidth -= this._overflowWidth;
        }
        for (var i = 0; i < renderedItems.length; i++) {
            var item = renderedItems[i];
            var itemWidth = this._commandItemWidths[item.key];
            if ((consumedWidth + itemWidth) >= availableWidth) {
                if (i > 0 && !isOverflowVisible && (availableWidth - consumedWidth) < OVERFLOW_WIDTH) {
                    i--;
                }
                renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
                break;
            }
            else {
                consumedWidth += itemWidth;
            }
        }
        this.setState({
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
            expandedMenuItemKey: null,
            contextualMenuItems: null,
            contextualMenuTarget: null
        });
    };
    CommandBar.prototype._onItemClick = function (ev, item) {
        if (item.key === this.state.expandedMenuItemKey || !item.items || !item.items.length) {
            this._onContextMenuDismiss();
        }
        else {
            this.setState({
                expandedMenuId: ev.currentTarget.id,
                expandedMenuItemKey: item.key,
                contextualMenuItems: item.items,
                contextualMenuTarget: ev.currentTarget
            });
        }
        if (item.onClick) {
            item.onClick(ev, item);
        }
    };
    CommandBar.prototype._onOverflowClick = function (ev) {
        if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
            this._onContextMenuDismiss();
        }
        else {
            this.setState({
                expandedMenuId: ev.currentTarget.id,
                expandedMenuItemKey: OVERFLOW_KEY,
                contextualMenuItems: this.state.renderedOverflowItems,
                contextualMenuTarget: ev.currentTarget
            });
        }
    };
    CommandBar.prototype._onContextMenuDismiss = function (ev) {
        if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget)) {
            this.setState({
                expandedMenuItemKey: null,
                contextualMenuItems: null,
                contextualMenuTarget: null
            });
        }
        else {
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    CommandBar.prototype._getStateFromProps = function (nextProps) {
        return {
            renderedItems: nextProps.items || [],
            renderedOverflowItems: null,
            contextualMenuItems: null,
            renderedFarItems: nextProps.farItems || null
        };
    };
    CommandBar.defaultProps = {
        items: [],
        overflowItems: [],
        farItems: []
    };
    __decorate([
        autobind_1.autobind
    ], CommandBar.prototype, "_onOverflowClick", null);
    __decorate([
        autobind_1.autobind
    ], CommandBar.prototype, "_onContextMenuDismiss", null);
    return CommandBar;
}(React.Component));
exports.CommandBar = CommandBar;

//# sourceMappingURL=CommandBar.js.map
