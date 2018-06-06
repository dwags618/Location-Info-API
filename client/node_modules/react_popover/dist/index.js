(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Popover"] = factory(require("react"));
	else
		root["Popover"] = factory(root["React"]);
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _palette = __webpack_require__(2);\n\nvar _palette2 = _interopRequireDefault(_palette);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Popover = function (_React$Component) {\n  _inherits(Popover, _React$Component);\n\n  function Popover(props) {\n    _classCallCheck(this, Popover);\n\n    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));\n\n    _this.state = {\n      menu: null,\n      shift: 0\n    };\n    _this.setRef = _this.setRef.bind(_this);\n    _this.isInView = _this.isInView.bind(_this);\n    _this.reposition = _this.reposition.bind(_this);\n    _this.wasUnfocused = _this.wasUnfocused.bind(_this);\n    _this.setCenterShift = _this.setCenterShift.bind(_this);\n    return _this;\n  }\n\n  _createClass(Popover, [{\n    key: 'setRef',\n    value: function setRef(ref) {\n      this.state.menu = ref;\n      this.setState(this.state);\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      window.addEventListener('scroll', this.reposition);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('scroll', this.reposition);\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      if (this.props.open) {\n        if (this.props.anchorEl) {\n          this.props.anchorEl.tabIndex = -1;\n        }\n        if (this.props.autoCloseOnBlur) {\n          this.state.menu.focus();\n        }\n        if (!this.isInView()) {\n          this.props.onRequestClose();\n        }\n      }\n    }\n  }, {\n    key: 'isInView',\n    value: function isInView() {\n      if (this.state.menu) {\n        var rect = this.state.menu.getBoundingClientRect();\n        var html = document.documentElement;\n        return rect.top <= (window.innerHeight || html.clientHeight) && rect.bottom > 0;\n      }\n      return false;\n    }\n  }, {\n    key: 'reposition',\n    value: function reposition() {\n      if (this.props.anchorEl && this.props.open) {\n        this.forceUpdate();\n      }\n    }\n  }, {\n    key: 'wasUnfocused',\n    value: function wasUnfocused(evt) {\n      if (this.props.autoCloseOnBlur && evt.relatedTarget !== this.props.anchorEl) {\n        window.setTimeout(this.props.onRequestClose, 100);\n      }\n    }\n  }, {\n    key: 'setCenterShift',\n    value: function setCenterShift() {\n      var shift = 0;\n      if (this.props.centered && this.state.menu) {\n        shift = this.state.menu.getBoundingClientRect().width / 2;\n      }\n      this.setState({ shift: shift });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var leftPos = 0;\n      var rightPos = 0;\n      if (this.props.centered && this.props.anchorEl) {\n        setTimeout(this.setCenterShift, 20);\n      }\n      if (this.props.attachRight && this.props.anchorEl) {\n        rightPos = Math.round(this.props.anchorEl.getBoundingClientRect().right - this.props.anchorEl.getBoundingClientRect().left);\n      }\n      if (!this.props.attachRight && this.props.anchorEl) {\n        if (this.props.centered) {\n          leftPos = Math.round(this.props.anchorEl.getBoundingClientRect().left - this.state.shift);\n        } else {\n          leftPos = Math.round(this.props.anchorEl.getBoundingClientRect().left);\n        }\n      }\n      var styles = {\n        main: {\n          'position': 'fixed',\n          'top': this.props.anchorEl && this.props.open ? Math.round(this.props.anchorEl.getBoundingClientRect().bottom + (this.props.verticalOffset || 0)) + 'px' : 0,\n          'left': this.props.attachRight ? null : this.props.anchorEl && this.props.open ? leftPos + 'px' : 0,\n          'right': this.props.attachRight ? this.props.anchorEl && this.props.open ? rightPos + 'px' : 0 : null,\n          'display': this.props.open ? 'block' : 'none',\n          'backgroundColor': _palette2.default.whiteReal,\n          'zIndex': '2',\n          border: this.props.withTriangle ? '1px solid rgba(0,0,0,0.2)' : null,\n          'boxShadow': 'rgba(0, 0, 0, 0.45) 0px 1px 7px',\n          'outline': 'none'\n        }\n      };\n      return _react2.default.createElement(\n        'div',\n        { tabIndex: '-1',\n          ref: this.setRef,\n          onBlur: this.wasUnfocused,\n          style: styles.main },\n        this.props.children\n      );\n    }\n  }]);\n\n  return Popover;\n}(_react2.default.Component);\n\n;\n\nexports.default = Popover;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

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