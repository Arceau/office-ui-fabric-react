"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var FocusZone_1 = require('../../FocusZone');
var css_1 = require('../../utilities/css');
var rtl_1 = require('../../utilities/rtl');
var Button_1 = require('../../Button');
require('./Nav.scss');
// The number pixels per indentation level for Nav links.
var _indentationSize = 14;
// Tne number of pixels of left margin when there is expand/collaps button
var _indentWithExpandButton = 28;
// Tne number of pixels of left margin when there is expand/collaps button
var _indentNoExpandButton = 20;
// global var used in _isLinkSelectedKey
var _urlResolver;
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        _super.call(this, props);
        this.state = {
            isGroupExpanded: [],
            isLinkExpandStateChanged: false,
            selectedKey: props.initialSelectedKey || props.selectedKey,
        };
        this._hasExpandButton = false;
    }
    Nav.prototype.render = function () {
        var _this = this;
        if (!this.props.groups) {
            return null;
        }
        // when this.props.groups[x].name is specified or Any of the link has child link, chevorn Expand/collaps button is shown,
        // different padding is needed. _hasExpandButton marks this condition.
        this._hasExpandButton = this.props.groups.some(function (group, groupIndex) {
            return !!group && !!group.name || group.links && group.links.some(function (link, linkIndex) {
                return !!link && !!link.links && link.links.length > 0;
            });
        });
        var groupElements = this.props.groups.map(function (group, groupIndex) { return _this._renderGroup(group, groupIndex); });
        return (React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.vertical}, 
            React.createElement("nav", {role: 'navigation', className: css_1.css('ms-Nav', { 'is-onTop ms-u-slideRightIn40': this.props.isOnTop })}, groupElements)
        ));
    };
    Object.defineProperty(Nav.prototype, "selectedKey", {
        get: function () {
            return this.state.selectedKey;
        },
        enumerable: true,
        configurable: true
    });
    Nav.prototype._renderAnchorLink = function (link, linkIndex, nestingLevel) {
        // Determine the appropriate padding to add before this link.
        // In RTL, the "before" padding will go on the right instead of the left.
        var isRtl = rtl_1.getRTL();
        var paddingBefore = (_indentationSize * nestingLevel +
            (this._hasExpandButton ? _indentWithExpandButton : _indentNoExpandButton)).toString(10) + 'px';
        return (React.createElement("a", {className: css_1.css('ms-Nav-link'), style: (_a = {}, _a[isRtl ? 'paddingRight' : 'paddingLeft'] = paddingBefore, _a), href: link.url || 'javascript:', onClick: this._onNavAnchorLinkClicked.bind(this, link), "aria-label": link.ariaLabel, title: link.title || link.name, target: link.target}, 
            link.iconClassName && React.createElement("i", {className: css_1.css('ms-Icon', 'ms-Nav-IconLink', link.iconClassName)}), 
            this.props.onRenderLink(link)));
        var _a;
    };
    Nav.prototype._renderButtonLink = function (link, linkIndex) {
        return (React.createElement(Button_1.Button, {className: css_1.css('ms-Nav-link ms-Nav-linkButton', { 'isOnExpanded': this._hasExpandButton }), buttonType: Button_1.ButtonType.command, href: link.url, icon: link.icon, description: link.title || link.name, onClick: this._onNavButtonLinkClicked.bind(this, link)}, link.name));
    };
    Nav.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
        var isLinkSelected = this._isLinkSelected(link);
        return (React.createElement("div", {key: link.key || linkIndex, className: css_1.css('ms-Nav-compositeLink', { ' is-expanded': link.isExpanded, 'is-selected': isLinkSelected })}, 
            (nestingLevel === 0 && link.links && link.links.length > 0 ?
                React.createElement("button", {className: 'ms-Nav-chevronButton ms-Nav-chevronButton--link', onClick: this._onLinkExpandClicked.bind(this, link), "aria-label": this.props.expandButtonAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false'}, 
                    React.createElement("i", {className: 'ms-Nav-chevron ms-Icon ms-Icon--ChevronDown'})
                ) : null), 
            !!link.onClick ? this._renderButtonLink(link, linkIndex) : this._renderAnchorLink(link, linkIndex, nestingLevel)));
    };
    Nav.prototype._renderLink = function (link, linkIndex, nestingLevel) {
        return (React.createElement("li", {key: link.key || linkIndex, role: 'listitem'}, 
            this._renderCompositeLink(link, linkIndex, nestingLevel), 
            (link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null)));
    };
    Nav.prototype._renderLinks = function (links, nestingLevel) {
        var _this = this;
        if (!links || !links.length) {
            return null;
        }
        var linkElements = links.map(function (link, linkIndex) { return _this._renderLink(link, linkIndex, nestingLevel); });
        return (React.createElement("ul", {role: 'list', "aria-label": this.props.ariaLabel}, linkElements));
    };
    Nav.prototype._renderGroup = function (group, groupIndex) {
        var isGroupExpanded = this.state.isGroupExpanded[groupIndex] !== false;
        return (React.createElement("div", {key: groupIndex, className: css_1.css('ms-Nav-group', { 'is-expanded': isGroupExpanded })}, 
            (group.name ?
                React.createElement("button", {className: 'ms-Nav-chevronButton ms-Nav-chevronButton--group ms-Nav-groupHeaderFontSize', onClick: this._onGroupHeaderClicked.bind(this, groupIndex)}, 
                    React.createElement("i", {className: css_1.css('ms-Nav-chevron', 'ms-Icon', 'ms-Icon--ChevronDown')}), 
                    group.name) : null), 
            React.createElement("div", {className: css_1.css('ms-Nav-groupContent', 'ms-u-slideDownIn20')}, this._renderLinks(group.links, 0 /* nestingLevel */))));
    };
    Nav.prototype._onGroupHeaderClicked = function (groupIndex, ev) {
        var isGroupExpanded = this.state.isGroupExpanded;
        isGroupExpanded[groupIndex] = !isGroupExpanded[groupIndex];
        this.setState({ isGroupExpanded: isGroupExpanded });
        ev.preventDefault();
        ev.stopPropagation();
    };
    Nav.prototype._onLinkExpandClicked = function (link, ev) {
        link.isExpanded = !link.isExpanded;
        this.setState({ isLinkExpandStateChanged: true });
        ev.preventDefault();
        ev.stopPropagation();
    };
    Nav.prototype._onNavAnchorLinkClicked = function (link, ev) {
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link);
        }
        this.setState({ selectedKey: link.key });
    };
    Nav.prototype._onNavButtonLinkClicked = function (link, ev) {
        if (link.onClick) {
            link.onClick(ev, link);
        }
        this.setState({ selectedKey: link.key });
    };
    Nav.prototype._isLinkSelected = function (link) {
        // if caller passes in selectedKey, use it as first choice or
        // if current state.selectedKey (from addressbar) is match to the link
        if (this.props.selectedKey !== undefined && link.key === this.props.selectedKey ||
            this.state.selectedKey !== undefined && link.key === this.state.selectedKey) {
            return true;
        }
        // resolve is not supported for ssr
        if (typeof (window) === 'undefined') {
            return false;
        }
        if (!link.url) {
            return false;
        }
        _urlResolver = _urlResolver || document.createElement('a');
        _urlResolver.href = link.url || '';
        var target = _urlResolver.href;
        if (location.href === target) {
            return true;
        }
        if (location.protocol + '//' + location.host + location.pathname === target) {
            return true;
        }
        if (location.hash) {
            // Match the hash to the url.
            if (location.hash === link.url) {
                return true;
            }
            // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
            _urlResolver.href = location.hash.substring(1);
            return _urlResolver.href === target;
        }
        return false;
    };
    Nav.defaultProps = {
        groups: null,
        onRenderLink: function (link) { return (React.createElement("span", {className: 'ms-Nav-linkText'}, link.name)); }
    };
    return Nav;
}(React.Component));
exports.Nav = Nav;

//# sourceMappingURL=Nav.js.map