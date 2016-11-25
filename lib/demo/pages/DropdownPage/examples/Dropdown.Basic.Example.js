"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var index_1 = require('../../../../index');
require('./Dropdown.Basic.Example.scss');
var DropdownBasicExample = (function (_super) {
    __extends(DropdownBasicExample, _super);
    function DropdownBasicExample() {
        _super.apply(this, arguments);
    }
    DropdownBasicExample.prototype.render = function () {
        return (React.createElement("div", {className: 'ms-DropdownBasicExample'}, 
            React.createElement(index_1.Dropdown, {label: 'Basic example:', options: [
                { key: 'A', text: 'Option a' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c' },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' },
                { key: 'F', text: 'Option f' },
                { key: 'G', text: 'Option g' },
                { key: 'H', text: 'Option h', isSelected: true },
                { key: 'I', text: 'Option i' },
                { key: 'J', text: 'Option j' },
            ]}), 
            React.createElement(index_1.Dropdown, {label: 'Disabled example:', options: [
                { key: 'A', text: 'Option a' },
                { key: 'B', text: 'Option b', isSelected: true },
                { key: 'C', text: 'Option c' },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' },
                { key: 'F', text: 'Option f' },
                { key: 'G', text: 'Option g' },
            ], disabled: true})));
    };
    return DropdownBasicExample;
}(React.Component));
exports.DropdownBasicExample = DropdownBasicExample;

//# sourceMappingURL=Dropdown.Basic.Example.js.map
