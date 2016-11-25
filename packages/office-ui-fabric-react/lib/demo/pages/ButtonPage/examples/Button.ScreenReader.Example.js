"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var index_1 = require('../../../../index');
var ButtonScreenReaderExample = (function (_super) {
    __extends(ButtonScreenReaderExample, _super);
    function ButtonScreenReaderExample() {
        _super.call(this);
    }
    ButtonScreenReaderExample.prototype.render = function () {
        var disabled = this.props.disabled;
        return (React.createElement("div", {className: 'ms-BasicButtonsExample'}, 
            React.createElement(index_1.Label, null, "Button with aria description for screen reader"), 
            React.createElement(index_1.Button, {"data-automation-id": 'test', disabled: disabled, buttonType: index_1.ButtonType.primary, ariaDescription: 'This is aria description used for screen reader.'}, "Aria Description")));
    };
    return ButtonScreenReaderExample;
}(React.Component));
exports.ButtonScreenReaderExample = ButtonScreenReaderExample;

//# sourceMappingURL=Button.ScreenReader.Example.js.map