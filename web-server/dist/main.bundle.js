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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fg-loadcss/src/loadCSS.js":
/*!************************************************!*\
  !*** ./node_modules/fg-loadcss/src/loadCSS.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */\n(function(w){\n\t\"use strict\";\n\t/* exported loadCSS */\n\tvar loadCSS = function( href, before, media, attributes ){\n\t\t// Arguments explained:\n\t\t// `href` [REQUIRED] is the URL for your CSS file.\n\t\t// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before\n\t\t// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.\n\t\t// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'\n\t\t// `attributes` [OPTIONAL] is the Object of attribute name/attribute value pairs to set on the stylesheet's DOM Element.\n\t\tvar doc = w.document;\n\t\tvar ss = doc.createElement( \"link\" );\n\t\tvar ref;\n\t\tif( before ){\n\t\t\tref = before;\n\t\t}\n\t\telse {\n\t\t\tvar refs = ( doc.body || doc.getElementsByTagName( \"head\" )[ 0 ] ).childNodes;\n\t\t\tref = refs[ refs.length - 1];\n\t\t}\n\n\t\tvar sheets = doc.styleSheets;\n\t\t// Set any of the provided attributes to the stylesheet DOM Element.\n\t\tif( attributes ){\n\t\t\tfor( var attributeName in attributes ){\n\t\t\t\tif( attributes.hasOwnProperty( attributeName ) ){\n\t\t\t\t\tss.setAttribute( attributeName, attributes[attributeName] );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tss.rel = \"stylesheet\";\n\t\tss.href = href;\n\t\t// temporarily set media to something inapplicable to ensure it'll fetch without blocking render\n\t\tss.media = \"only x\";\n\n\t\t// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.\n\t\tfunction ready( cb ){\n\t\t\tif( doc.body ){\n\t\t\t\treturn cb();\n\t\t\t}\n\t\t\tsetTimeout(function(){\n\t\t\t\tready( cb );\n\t\t\t});\n\t\t}\n\t\t// Inject link\n\t\t\t// Note: the ternary preserves the existing behavior of \"before\" argument, but we could choose to change the argument to \"after\" in a later release and standardize on ref.nextSibling for all refs\n\t\t\t// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/\n\t\tready( function(){\n\t\t\tref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );\n\t\t});\n\t\t// A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.\n\t\tvar onloadcssdefined = function( cb ){\n\t\t\tvar resolvedHref = ss.href;\n\t\t\tvar i = sheets.length;\n\t\t\twhile( i-- ){\n\t\t\t\tif( sheets[ i ].href === resolvedHref ){\n\t\t\t\t\treturn cb();\n\t\t\t\t}\n\t\t\t}\n\t\t\tsetTimeout(function() {\n\t\t\t\tonloadcssdefined( cb );\n\t\t\t});\n\t\t};\n\n\t\tfunction loadCB(){\n\t\t\tif( ss.addEventListener ){\n\t\t\t\tss.removeEventListener( \"load\", loadCB );\n\t\t\t}\n\t\t\tss.media = media || \"all\";\n\t\t}\n\n\t\t// once loaded, set link's media back to `all` so that the stylesheet applies once it loads\n\t\tif( ss.addEventListener ){\n\t\t\tss.addEventListener( \"load\", loadCB);\n\t\t}\n\t\tss.onloadcssdefined = onloadcssdefined;\n\t\tonloadcssdefined( loadCB );\n\t\treturn ss;\n\t};\n\t// commonjs\n\tif( true ){\n\t\texports.loadCSS = loadCSS;\n\t}\n\telse {}\n}( typeof global !== \"undefined\" ? global : this ));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/fg-loadcss/src/loadCSS.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fg_loadcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fg-loadcss */ \"./node_modules/fg-loadcss/src/loadCSS.js\");\n/* harmony import */ var fg_loadcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fg_loadcss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction asyncRequest(methodType, uri, callback, postData, contentType, requestHeaders) {\n    function handleReadyState(o, callback) {\n        var poll = window.setInterval(function () {\n            if (o && o.readyState == 4) {\n                window.clearInterval(poll);\n                if (callback) {\n                    callback(o);\n                }\n            }\n        }, 50);\n    }\n    var http;\n    try {\n        http = new XMLHttpRequest;\n    } catch (e) {\n        var msxml = ['MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];\n        for (var i = 0, len = msxml.length; i < len; ++i) {\n            try {\n                http = new ActiveXObject(msxml[i]);\n                break;\n            } catch (e) { }\n        }\n    }\n\n    http.open(methodType, uri, true);\n\n    if (contentType) {\n        http.setRequestHeader(\"Content-Type\", contentType);\n    }\n\n    if (requestHeaders) {\n        var headerData = Object.keys(requestHeaders);\n        for (var i = 0; i < headerData.length; i++) {\n            http.setRequestHeader(headerData[i], requestHeaders[headerData[i]]);\n        }\n    }\n\n    handleReadyState(http, callback);\n    http.send(postData || null);\n    return http;\n}\nfunction onloadCSS(ss, callback) {\n    var called;\n    function newcb() {\n        if (!called && callback) {\n            called = true;\n            callback.call(ss);\n        }\n    }\n    if (ss.addEventListener) {\n        ss.addEventListener(\"load\", newcb);\n    }\n    if (ss.attachEvent) {\n        ss.attachEvent(\"onload\", newcb);\n    }\n\n    if (\"isApplicationInstalled\" in navigator && \"onloadcssdefined\" in ss) {\n        ss.onloadcssdefined(newcb);\n    }\n}\n\n//var constants={\"staticPath\":\"//image.timespoints.iimg.in/static/ssoLoginWidget\",\"apiEndPoint\":\"//tpapi.timespoints.com\"}\nvar constants={\"staticPath\":\"//test-img.timespoints.com/static/sso1\",\"apiEndPoint\":\"//test-img.timespoints.com/static/sso1\"}\nvar versionapi={\"apiEndPoint\":\"https://test.timespoints.com/tpapi\"}\n\nasyncRequest('GET', versionapi.apiEndPoint + \"/config/nocache/wversion\", function (res) {\n    window.__tpvar=1;\n    if (res.status >= 200 && res.status < 400) {\n        var data = res.responseText && typeof res.responseText == 'string' ? JSON.parse(res.responseText) : res.responseText;\n        window.__tpvar = data.version;\n    }\n    var stylesheet = Object(fg_loadcss__WEBPACK_IMPORTED_MODULE_0__[\"loadCSS\"])(constants.staticPath + '/src/css/sso.css?v=' + window.__tpvar);\n    onloadCSS(stylesheet, function () {\n        var s = document.createElement('script');\n        s.src = constants.staticPath + '/dist/centralLogin.bundle.js?v=' + window.__tpvar;\n        s.type = \"text/javascript\";\n        s.async = false;\n        document.getElementsByTagName('head')[0].appendChild(s);\n    });\n    onloadCSS(stylesheet, function () {\n        var s = document.createElement('script');\n        s.src = \"https://www.google.com/recaptcha/api.js\";\n        s.type = \"text/javascript\";\n        s.async = false;\n        document.getElementsByTagName('head')[0].appendChild(s);\n    });\n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ });