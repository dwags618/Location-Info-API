(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MenuItem"] = factory(require("react"));
	else
		root["MenuItem"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _palette = __webpack_require__(2);\n\nvar _palette2 = _interopRequireDefault(_palette);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MenuItem = function (_React$Component) {\n  _inherits(MenuItem, _React$Component);\n\n  function MenuItem(props) {\n    _classCallCheck(this, MenuItem);\n\n    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));\n\n    _this.state = {\n      hovered: false\n    };\n    _this.handleClick = _this.handleClick.bind(_this);\n    _this.hoverOn = _this.hoverOn.bind(_this);\n    _this.hoverOff = _this.hoverOff.bind(_this);\n    return _this;\n  }\n\n  _createClass(MenuItem, [{\n    key: 'handleClick',\n    value: function handleClick() {\n      if (typeof this.props.onTouchTap === 'function') {\n        this.props.onTouchTap();\n      }\n    }\n  }, {\n    key: 'hoverOn',\n    value: function hoverOn() {\n      this.setState({ hovered: true });\n    }\n  }, {\n    key: 'hoverOff',\n    value: function hoverOff() {\n      this.setState({ hovered: false });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var styles = {\n        main: {\n          cursor: 'pointer',\n          backgroundColor: this.state.hovered || this.props.active ? '#eaeaea' : null,\n          padding: '5px 20px',\n          color: _palette2.default.black,\n          textAlign: 'left',\n          transition: 'all 300ms ease-in-out',\n          fontSize: '15px'\n        }\n      };\n      return _react2.default.createElement(\n        'div',\n        { style: styles.main,\n          onClick: this.handleClick,\n          onMouseEnter: this.hoverOn,\n          onMouseLeave: this.hoverOff },\n        this.props.label\n      );\n    }\n  }]);\n\n  return MenuItem;\n}(_react2.default.Component);\n\nexports.default = MenuItem;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar palette = {\n  red: '#ff5353',\n  redDark: '#e43e3e',\n  errorOrange: '#f7814c',\n  blue: '#344164',\n  blueDark: '#283760',\n  blueLight: '#526490',\n  blueDarkTransparent: 'rgba(40, 55, 96, 0.83)',\n  linkedInBlueDark: '#0077B5',\n  linkedInBlueLight: '#54A4CD',\n  linkedInBlueHover: '#006BA3',\n  green: '#2EBE71',\n  greenDark: '#29AC66',\n  greenLight: '#9FE6BA',\n  yellow: '#FFB200',\n  yellowDark: '#E9A300',\n  yellowLight: '#FCC700',\n  whiteReal: '#FFFFFF',\n  white: '#FAFAF9',\n  whiteDarker: '#F6F6F6',\n  grey: '#3F454A',\n  greyTransparent: 'rgba(45,51,56,0.95)',\n  greyMedium: '#797979',\n  greyLight: '#AEAEAE',\n  greyLightTransparent: 'rgba(174, 174, 174, 0.58)',\n  black: '#000000',\n  realWhite: '#FFFFFF'\n};\n\nmodule.exports = palette;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/palette.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/palette.js?");

/***/ })
/******/ ]);
});