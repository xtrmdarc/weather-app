/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../france.jpg */ \"./src/france.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Raleway', sans-serif;\\n  outline: none; }\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  color: white; }\\n\\nmain {\\n  height: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover; }\\n  main header {\\n    width: 100%; }\\n    main header nav {\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding: 10px 20px;\\n      width: 100%;\\n      height: 60px;\\n      color: white; }\\n      main header nav .switch-temp {\\n        border: 1px solid white;\\n        border-radius: 20px;\\n        padding: 8px 12px;\\n        display: flex;\\n        justify-content: space-between;\\n        width: 80px; }\\n        main header nav .switch-temp span {\\n          color: rgba(255, 255, 255, 0.281); }\\n          main header nav .switch-temp span:hover {\\n            cursor: pointer; }\\n          main header nav .switch-temp span.selected {\\n            font-weight: 800;\\n            color: white; }\\n      main header nav .search-wrapper {\\n        display: flex;\\n        height: 100%;\\n        align-items: center; }\\n        main header nav .search-wrapper .loader {\\n          border: 1.3px solid #f3f3f3;\\n          border-top: 1.3px solid #3498db;\\n          border-radius: 50%;\\n          height: 30px;\\n          width: 30px;\\n          animation: spin 2s linear infinite;\\n          margin-right: 8px;\\n          display: none; }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n        main header nav .search-wrapper .geo-wrapper {\\n          border-radius: 20px;\\n          border: 1px solid white;\\n          position: relative; }\\n          main header nav .search-wrapper .geo-wrapper .input-geo {\\n            border: none;\\n            background-color: transparent;\\n            padding: 8px 12px;\\n            font-size: 16px;\\n            color: white; }\\n            main header nav .search-wrapper .geo-wrapper .input-geo::placeholder {\\n              color: rgba(255, 255, 255, 0.651); }\\n          main header nav .search-wrapper .geo-wrapper #error-message {\\n            position: absolute;\\n            left: 6px;\\n            bottom: -26px;\\n            font-size: 13px;\\n            color: rgba(255, 255, 255, 0.795);\\n            display: none; }\\n\\n.overlay {\\n  height: 100%;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.381); }\\n\\n.main-content {\\n  width: 100%;\\n  height: calc(100% - 60px);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between; }\\n  .main-content .main-wrapper {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 100%; }\\n    .main-content .main-wrapper:first-child {\\n      height: 40%; }\\n    .main-content .main-wrapper:last-child {\\n      height: 60%; }\\n    .main-content .main-wrapper .block {\\n      width: 50%; }\\n    .main-content .main-wrapper .geo {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: flex-start;\\n      align-items: center; }\\n      .main-content .main-wrapper .geo div {\\n        display: flex;\\n        flex-direction: column; }\\n        .main-content .main-wrapper .geo div .country {\\n          font-size: 80px;\\n          text-transform: uppercase; }\\n        .main-content .main-wrapper .geo div .capital {\\n          font-size: 40px;\\n          align-self: flex-end;\\n          text-transform: uppercase; }\\n    .main-content .main-wrapper .weather-type {\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: center; }\\n      .main-content .main-wrapper .weather-type .actual {\\n        text-transform: uppercase;\\n        font-size: 30px;\\n        font-weight: lighter;\\n        letter-spacing: 4px;\\n        word-spacing: 10px; }\\n    .main-content .main-wrapper .temp {\\n      text-align: center; }\\n      .main-content .main-wrapper .temp .temperature {\\n        font-size: 200px; }\\n    .main-content .main-wrapper .stats {\\n      display: flex;\\n      flex-direction: row;\\n      justify-content: center; }\\n      .main-content .main-wrapper .stats .wrapper {\\n        width: 50%;\\n        display: flex;\\n        justify-content: space-between; }\\n        .main-content .main-wrapper .stats .wrapper > div {\\n          display: flex;\\n          flex-direction: column;\\n          align-items: center; }\\n          .main-content .main-wrapper .stats .wrapper > div span {\\n            text-transform: uppercase;\\n            font-size: 18px; }\\n            .main-content .main-wrapper .stats .wrapper > div span:last-child {\\n              margin-top: 30px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/styles/styles.scss?");

/***/ }),

/***/ "./src/france.jpg":
/*!************************!*\
  !*** ./src/france.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e1dd9d4e091e9f25afb982bf7fe95ec2.jpg\");\n\n//# sourceURL=webpack:///./src/france.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uiManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiManager */ \"./src/uiManager.js\");\n/* harmony import */ var _plugins_unsplayApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/unsplayApi */ \"./src/plugins/unsplayApi.js\");\n/* harmony import */ var _plugins_openWeatherApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/openWeatherApi */ \"./src/plugins/openWeatherApi.js\");\n\n\n\n\n\n// const mainDOM = document.querySelector('main');\n// console.log(mainDOM);\n// UnsplashApi.getImageBySearch('Peru').then((response) => {\n//   console.log('entro aqui', response.url);\n//   mainDOM.style.backgroundImage = \"url(\"+ response.url +\")\";\n// });\n\n_plugins_openWeatherApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getWeatherByCity('Lima').then((weather) => {\n  console.log(weather);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/weather.js":
/*!******************************!*\
  !*** ./src/model/weather.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weather {\n\n  constructor(temperature, pressure, humidity, tempMin, tempMax, windSpeed, description, country) {\n    this.temperature = temperature;\n    this.pressure = pressure;\n    this.humidity = humidity;\n    this.tempMin = tempMin;\n    this.tempMax = tempMax;\n    this.windSpeed = windSpeed;\n    this.description = description;\n    this.country = country;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/model/weather.js?");

/***/ }),

/***/ "./src/plugins/openWeatherApi.js":
/*!***************************************!*\
  !*** ./src/plugins/openWeatherApi.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/weather */ \"./src/model/weather.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\n\nconst openWeatherApi = (()=> {\n  const apiHost = \"https://api.openweathermap.org/data/2.5/weather?appid=3a35fc19e78203eb10391f72cb009c67\";\n\n  const getWeatherByCity = (cityName, unit) => {\n    const fetchQuery = apiHost+`&q=${cityName}&units=${unit==='c'?'metric':'imperial'}`;\n\n    return new Promise((resolve, reject) => {\n      fetch(fetchQuery)\n      .then((response)=> {\n        console.log(response.status);\n        if(response.status != 200){\n          reject('City not found.');\n          return;\n        } else {\n          response.json().then((json) => {\n            const weather = new _model_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](json.main.temp, json.main.pressure, json.main.humidity, json.main.temp_min, json.main.temp_max, json.wind.speed, json.weather[0].description, _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCountryNameByCode(json.sys.country) );\n  \n            resolve(weather);\n          });\n        }\n\n        \n      }).catch(() => {\n        console.log('entro');\n        reject('City not found.');\n      });\n    });\n    \n  }\n  return { getWeatherByCity };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (openWeatherApi);\n\n//# sourceURL=webpack:///./src/plugins/openWeatherApi.js?");

/***/ }),

/***/ "./src/plugins/unsplayApi.js":
/*!***********************************!*\
  !*** ./src/plugins/unsplayApi.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst unsplashApi = (() => {\n\n  const apiHost = 'https://source.unsplash.com/1600x900';\n  \n  const getImageBySearch = (query) => {\n    const randomPhotoHost = apiHost+'?'+query\n\n    const fullQuery = apiHost + query;\n    return fetch(randomPhotoHost, { method: 'get' });\n  };\n\n  return { getImageBySearch };\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unsplashApi);\n\n//# sourceURL=webpack:///./src/plugins/unsplayApi.js?");

/***/ }),

/***/ "./src/uiManager.js":
/*!**************************!*\
  !*** ./src/uiManager.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugins_unsplayApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/unsplayApi */ \"./src/plugins/unsplayApi.js\");\n/* harmony import */ var _plugins_openWeatherApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/openWeatherApi */ \"./src/plugins/openWeatherApi.js\");\n\n\n\nconst uiManager = (()=> {\n  const inputGeo = document.querySelector('#input-geo');\n  const mainDOM = document.querySelector('main');\n  const weatherDesc = document.querySelector('#weather-description');\n  const temperature = document.querySelector('#temperature');\n  const humidity = document.querySelector('#humidity');\n  const windSpeed = document.querySelector('#wind-speed');\n  const country = document.querySelector('#country');\n  const city = document.querySelector('#city');\n  const unitSwitch = document.querySelector('#units');\n  const fareheintSwitch = document.querySelector('#farenheit-switch');\n  const celsiusSwitch = document.querySelector('#celsius-switch');\n  const mainLoader = document.querySelector('#main-loader');\n  const errorMessage = document.querySelector('#error-message');\n  let degreeUnit = 'c';\n\n  inputGeo.addEventListener('keypress',(e) => {\n    const queryValue = e.target.value;\n    errorMessage.style.display = 'none';\n\n    if(e.code === 'Enter' && queryValue.trim().length > 0)\n    {\n      mainLoader.style.display = 'block';\n      \n\n      _plugins_unsplayApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getImageBySearch(queryValue).then((response)=> {\n        mainDOM.style.backgroundImage = `url(${response.url})`;\n        mainLoader.style.display = 'none';\n        _plugins_openWeatherApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getWeatherByCity(queryValue, degreeUnit).then((weather)=> {\n          updateWeather(weather);\n        }).catch((err) => {\n          errorMessage.style.display = 'block';\n          errorMessage.textContent = err;\n        });\n      });\n    }\n  });\n\n  fareheintSwitch.addEventListener('click', (e) => {\n    celsiusSwitch.classList.remove('selected');\n    fareheintSwitch.classList.add('selected');\n    degreeUnit = 'f';\n  });\n\n  celsiusSwitch.addEventListener('click', (e) => {\n    fareheintSwitch.classList.remove('selected');\n    celsiusSwitch.classList.add('selected');\n    degreeUnit = 'c';\n  });\n\n  const updateWeather = (weather) => {\n    weatherDesc.textContent = weather.description;\n    temperature.textContent = weather.temperature.toFixed(0)+'º';\n    humidity.textContent = weather.humidity+'%';\n    windSpeed.textContent = weather.windSpeed+' m/s';\n    city.textContent = inputGeo.value;\n    country.textContent = weather.country;\n  };\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uiManager);\n\n//# sourceURL=webpack:///./src/uiManager.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst util = (() => {\n\n  const getCountryNameByCode = (countryCode) => {\n    const contryCodeNameDict = {\n      \"AF\": \"Afghanistan\",\n      \"AX\": \"Åland Islands\",\n      \"AL\": \"Albania\",\n      \"DZ\": \"Algeria\",\n      \"AS\": \"American Samoa\",\n      \"AD\": \"Andorra\",\n      \"AO\": \"Angola\",\n      \"AI\": \"Anguilla\",\n      \"AQ\": \"Antarctica\",\n      \"AG\": \"Antigua and Barbuda\",\n      \"AR\": \"Argentina\",\n      \"AM\": \"Armenia\",\n      \"AW\": \"Aruba\",\n      \"AU\": \"Australia\",\n      \"AT\": \"Austria\",\n      \"AZ\": \"Azerbaijan\",\n      \"BH\": \"Bahrain\",\n      \"BS\": \"Bahamas\",\n      \"BD\": \"Bangladesh\",\n      \"BB\": \"Barbados\",\n      \"BY\": \"Belarus\",\n      \"BE\": \"Belgium\",\n      \"BZ\": \"Belize\",\n      \"BJ\": \"Benin\",\n      \"BM\": \"Bermuda\",\n      \"BT\": \"Bhutan\",\n      \"BO\": \"Bolivia, Plurinational State of\",\n      \"BQ\": \"Bonaire, Sint Eustatius and Saba\",\n      \"BA\": \"Bosnia and Herzegovina\",\n      \"BW\": \"Botswana\",\n      \"BV\": \"Bouvet Island\",\n      \"BR\": \"Brazil\",\n      \"IO\": \"British Indian Ocean Territory\",\n      \"BN\": \"Brunei Darussalam\",\n      \"BG\": \"Bulgaria\",\n      \"BF\": \"Burkina Faso\",\n      \"BI\": \"Burundi\",\n      \"KH\": \"Cambodia\",\n      \"CM\": \"Cameroon\",\n      \"CA\": \"Canada\",\n      \"CV\": \"Cape Verde\",\n      \"KY\": \"Cayman Islands\",\n      \"CF\": \"Central African Republic\",\n      \"TD\": \"Chad\",\n      \"CL\": \"Chile\",\n      \"CN\": \"China\",\n      \"CX\": \"Christmas Island\",\n      \"CC\": \"Cocos (Keeling) Islands\",\n      \"CO\": \"Colombia\",\n      \"KM\": \"Comoros\",\n      \"CG\": \"Congo\",\n      \"CD\": \"Congo, the Democratic Republic of the\",\n      \"CK\": \"Cook Islands\",\n      \"CR\": \"Costa Rica\",\n      \"CI\": \"Côte d'Ivoire\",\n      \"HR\": \"Croatia\",\n      \"CU\": \"Cuba\",\n      \"CW\": \"Curaçao\",\n      \"CY\": \"Cyprus\",\n      \"CZ\": \"Czech Republic\",\n      \"DK\": \"Denmark\",\n      \"DJ\": \"Djibouti\",\n      \"DM\": \"Dominica\",\n      \"DO\": \"Dominican Republic\",\n      \"EC\": \"Ecuador\",\n      \"EG\": \"Egypt\",\n      \"SV\": \"El Salvador\",\n      \"GQ\": \"Equatorial Guinea\",\n      \"ER\": \"Eritrea\",\n      \"EE\": \"Estonia\",\n      \"ET\": \"Ethiopia\",\n      \"FK\": \"Falkland Islands (Malvinas)\",\n      \"FO\": \"Faroe Islands\",\n      \"FJ\": \"Fiji\",\n      \"FI\": \"Finland\",\n      \"FR\": \"France\",\n      \"GF\": \"French Guiana\",\n      \"PF\": \"French Polynesia\",\n      \"TF\": \"French Southern Territories\",\n      \"GA\": \"Gabon\",\n      \"GM\": \"Gambia\",\n      \"GE\": \"Georgia\",\n      \"DE\": \"Germany\",\n      \"GH\": \"Ghana\",\n      \"GI\": \"Gibraltar\",\n      \"GR\": \"Greece\",\n      \"GL\": \"Greenland\",\n      \"GD\": \"Grenada\",\n      \"GP\": \"Guadeloupe\",\n      \"GU\": \"Guam\",\n      \"GT\": \"Guatemala\",\n      \"GG\": \"Guernsey\",\n      \"GN\": \"Guinea\",\n      \"GW\": \"Guinea-Bissau\",\n      \"GY\": \"Guyana\",\n      \"HT\": \"Haiti\",\n      \"HM\": \"Heard Island and McDonald Islands\",\n      \"VA\": \"Holy See (Vatican City State)\",\n      \"HN\": \"Honduras\",\n      \"HK\": \"Hong Kong\",\n      \"HU\": \"Hungary\",\n      \"IS\": \"Iceland\",\n      \"IN\": \"India\",\n      \"ID\": \"Indonesia\",\n      \"IR\": \"Iran, Islamic Republic of\",\n      \"IQ\": \"Iraq\",\n      \"IE\": \"Ireland\",\n      \"IM\": \"Isle of Man\",\n      \"IL\": \"Israel\",\n      \"IT\": \"Italy\",\n      \"JM\": \"Jamaica\",\n      \"JP\": \"Japan\",\n      \"JE\": \"Jersey\",\n      \"JO\": \"Jordan\",\n      \"KZ\": \"Kazakhstan\",\n      \"KE\": \"Kenya\",\n      \"KI\": \"Kiribati\",\n      \"KP\": \"Korea, Democratic People's Republic of\",\n      \"KR\": \"Korea, Republic of\",\n      \"KW\": \"Kuwait\",\n      \"KG\": \"Kyrgyzstan\",\n      \"LA\": \"Lao People's Democratic Republic\",\n      \"LV\": \"Latvia\",\n      \"LB\": \"Lebanon\",\n      \"LS\": \"Lesotho\",\n      \"LR\": \"Liberia\",\n      \"LY\": \"Libya\",\n      \"LI\": \"Liechtenstein\",\n      \"LT\": \"Lithuania\",\n      \"LU\": \"Luxembourg\",\n      \"MO\": \"Macao\",\n      \"MK\": \"Macedonia, the Former Yugoslav Republic of\",\n      \"MG\": \"Madagascar\",\n      \"MW\": \"Malawi\",\n      \"MY\": \"Malaysia\",\n      \"MV\": \"Maldives\",\n      \"ML\": \"Mali\",\n      \"MT\": \"Malta\",\n      \"MH\": \"Marshall Islands\",\n      \"MQ\": \"Martinique\",\n      \"MR\": \"Mauritania\",\n      \"MU\": \"Mauritius\",\n      \"YT\": \"Mayotte\",\n      \"MX\": \"Mexico\",\n      \"FM\": \"Micronesia, Federated States of\",\n      \"MD\": \"Moldova, Republic of\",\n      \"MC\": \"Monaco\",\n      \"MN\": \"Mongolia\",\n      \"ME\": \"Montenegro\",\n      \"MS\": \"Montserrat\",\n      \"MA\": \"Morocco\",\n      \"MZ\": \"Mozambique\",\n      \"MM\": \"Myanmar\",\n      \"NA\": \"Namibia\",\n      \"NR\": \"Nauru\",\n      \"NP\": \"Nepal\",\n      \"NL\": \"Netherlands\",\n      \"NC\": \"New Caledonia\",\n      \"NZ\": \"New Zealand\",\n      \"NI\": \"Nicaragua\",\n      \"NE\": \"Niger\",\n      \"NG\": \"Nigeria\",\n      \"NU\": \"Niue\",\n      \"NF\": \"Norfolk Island\",\n      \"MP\": \"Northern Mariana Islands\",\n      \"NO\": \"Norway\",\n      \"OM\": \"Oman\",\n      \"PK\": \"Pakistan\",\n      \"PW\": \"Palau\",\n      \"PS\": \"Palestine, State of\",\n      \"PA\": \"Panama\",\n      \"PG\": \"Papua New Guinea\",\n      \"PY\": \"Paraguay\",\n      \"PE\": \"Peru\",\n      \"PH\": \"Philippines\",\n      \"PN\": \"Pitcairn\",\n      \"PL\": \"Poland\",\n      \"PT\": \"Portugal\",\n      \"PR\": \"Puerto Rico\",\n      \"QA\": \"Qatar\",\n      \"RE\": \"Réunion\",\n      \"RO\": \"Romania\",\n      \"RU\": \"Russian Federation\",\n      \"RW\": \"Rwanda\",\n      \"BL\": \"Saint Barthélemy\",\n      \"SH\": \"Saint Helena, Ascension and Tristan da Cunha\",\n      \"KN\": \"Saint Kitts and Nevis\",\n      \"LC\": \"Saint Lucia\",\n      \"MF\": \"Saint Martin (French part)\",\n      \"PM\": \"Saint Pierre and Miquelon\",\n      \"VC\": \"Saint Vincent and the Grenadines\",\n      \"WS\": \"Samoa\",\n      \"SM\": \"San Marino\",\n      \"ST\": \"Sao Tome and Principe\",\n      \"SA\": \"Saudi Arabia\",\n      \"SN\": \"Senegal\",\n      \"RS\": \"Serbia\",\n      \"SC\": \"Seychelles\",\n      \"SL\": \"Sierra Leone\",\n      \"SG\": \"Singapore\",\n      \"SX\": \"Sint Maarten (Dutch part)\",\n      \"SK\": \"Slovakia\",\n      \"SI\": \"Slovenia\",\n      \"SB\": \"Solomon Islands\",\n      \"SO\": \"Somalia\",\n      \"ZA\": \"South Africa\",\n      \"GS\": \"South Georgia and the South Sandwich Islands\",\n      \"SS\": \"South Sudan\",\n      \"ES\": \"Spain\",\n      \"LK\": \"Sri Lanka\",\n      \"SD\": \"Sudan\",\n      \"SR\": \"Suriname\",\n      \"SJ\": \"Svalbard and Jan Mayen\",\n      \"SZ\": \"Swaziland\",\n      \"SE\": \"Sweden\",\n      \"CH\": \"Switzerland\",\n      \"SY\": \"Syrian Arab Republic\",\n      \"TW\": \"Taiwan, Province of China\",\n      \"TJ\": \"Tajikistan\",\n      \"TZ\": \"Tanzania, United Republic of\",\n      \"TH\": \"Thailand\",\n      \"TL\": \"Timor-Leste\",\n      \"TG\": \"Togo\",\n      \"TK\": \"Tokelau\",\n      \"TO\": \"Tonga\",\n      \"TT\": \"Trinidad and Tobago\",\n      \"TN\": \"Tunisia\",\n      \"TR\": \"Turkey\",\n      \"TM\": \"Turkmenistan\",\n      \"TC\": \"Turks and Caicos Islands\",\n      \"TV\": \"Tuvalu\",\n      \"UG\": \"Uganda\",\n      \"UA\": \"Ukraine\",\n      \"AE\": \"United Arab Emirates\",\n      \"GB\": \"United Kingdom\",\n      \"US\": \"United States\",\n      \"UM\": \"United States Minor Outlying Islands\",\n      \"UY\": \"Uruguay\",\n      \"UZ\": \"Uzbekistan\",\n      \"VU\": \"Vanuatu\",\n      \"VE\": \"Venezuela, Bolivarian Republic of\",\n      \"VN\": \"Viet Nam\",\n      \"VG\": \"Virgin Islands, British\",\n      \"VI\": \"Virgin Islands, U.S.\",\n      \"WF\": \"Wallis and Futuna\",\n      \"EH\": \"Western Sahara\",\n      \"YE\": \"Yemen\",\n      \"ZM\": \"Zambia\",\n      \"ZW\": \"Zimbabwe\",\n    }\n\n    return contryCodeNameDict[countryCode];\n  };\n  \n  return { getCountryNameByCode }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });