(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\hassan\\\\tic toe react\\\\src\\\\App.js: Unexpected token, expected \\\";\\\" (5:11)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mconst\\u001b[39m squareStyle \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m    \\u001b[32m'width'\\u001b[39m\\u001b[33m:\\u001b[39m\\u001b[32m'60px'\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m    \\u001b[32m'height'\\u001b[39m\\u001b[33m:\\u001b[39m\\u001b[32m'60px'\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m    \\u001b[32m'backgroundColor'\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[32m'#ddd'\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m    \\u001b[32m'margin'\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[32m'4px'\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Object._raise (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:757:17)\\n    at Object.raiseWithData (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:750:17)\\n    at Object.raise (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:744:17)\\n    at Object.unexpected (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8834:16)\\n    at Object.semicolon (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8816:40)\\n    at Object.parseExpressionStatement (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11743:10)\\n    at Object.parseStatementContent (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11344:19)\\n    at Object.parseStatement (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11210:17)\\n    at Object.parseBlockOrModuleBlockBody (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11785:25)\\n    at Object.parseBlockBody (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11771:10)\\n    at Object.parseBlock (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11755:10)\\n    at Object.parseFunctionBody (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10758:24)\\n    at Object.parseArrowExpression (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10727:10)\\n    at Object.parseParenAndDistinguishExpression (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10341:12)\\n    at Object.parseExprAtom (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10042:21)\\n    at Object.parseExprAtom (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4648:20)\\n    at Object.parseExprSubscripts (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9688:23)\\n    at Object.parseMaybeUnary (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9668:21)\\n    at Object.parseExprOps (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9538:23)\\n    at Object.parseMaybeConditional (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9511:23)\\n    at Object.parseMaybeAssign (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9466:21)\\n    at Object.parseVar (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11869:26)\\n    at Object.parseVarStatement (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11678:10)\\n    at Object.parseStatementContent (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11277:21)\\n    at Object.parseStatement (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11210:17)\\n    at Object.parseBlockOrModuleBlockBody (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11785:25)\\n    at Object.parseBlockBody (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11771:10)\\n    at Object.parseTopLevel (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11141:10)\\n    at Object.parse (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12843:10)\\n    at parse (E:\\\\hassan\\\\tic toe react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12896:38)\");\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

/******/ });
});