'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IosBicycle = function IosBicycle(props) {
  return _react2.default.createElement(
    _SVG2.default,
    {
      style: props.style,
      className: props.className,
      fill: props.color,
      width: props.fontSize,
      height: props.fontSize,
      viewBox: '0 0 1024 1024',
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('path', { d: 'M250.6 522.6c-102.6 0-186.6 84-186.6 186.6 0 102.8 84 186.8 186.6 186.8s186.6-84 186.6-186.6c0.2-102.8-83.8-186.8-186.6-186.8zM359.8 818.6c-29.4 29.4-68 45.4-109.2 45.4s-79.8-16.2-109.2-45.4-45.4-68.2-45.4-109.2c0-41.2 16.2-79.8 45.4-109.2 29.4-29.4 68-45.4 109.2-45.4s79.8 16.2 109.2 45.4c29.4 29.4 45.4 68 45.4 109.2 0.2 41-16 79.8-45.4 109.2z M639.6 255.6c35.6 0 64-28.4 64-64s-28-63.6-63.6-63.6c-35.6 0-64.4 28-64.4 63.6s28.6 64 64 64z M773.4 522.6c-102.6 0-186.6 84-186.6 186.6s84 186.6 186.6 186.6c102.6 0 186.6-84 186.6-186.6s-84-186.6-186.6-186.6zM882.6 818.6c-29.4 29.4-68 45.4-109.2 45.4s-79.8-16.2-109.2-45.4c-29.4-29.4-45.4-68-45.4-109.2s16.2-79.8 45.4-109.2c29.4-29.4 68-45.4 109.2-45.4s79.8 16.2 109.2 45.4c29.4 29.4 45.4 68 45.4 109.2 0 41-16.2 79.8-45.4 109.2z M736 384h-96l-59-120.2c-11.2-18.6-31.8-31.8-54.2-31.8-16.8 0-33.6 7.4-44.8 18.6l-143.4 138.2c-11.2 11.2-18.6 28-18.6 44.8 0 34.8 25.2 47.2 37 54.2 91 52.4 123 58.2 123 84.4s0 131.8 0 131.8c0 17.6 14.4 32 32 32s32-14.4 32-32c0 0 0-153.6 0-180s-60.8-48-96.6-76l97.8-103c37.4 57 54.6 103 76 103s114.8 0 114.8 0c17.6 0 32-14.4 32-32s-14.4-32-32-32z' })
  );
};

IosBicycle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBicycle.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = IosBicycle;
module.exports = exports['default'];
//# sourceMappingURL=IosBicycle.js.map