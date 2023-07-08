/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/mains.ts":
/*!*************************!*\
  !*** ./src/ts/mains.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar CrateForm = (__webpack_require__(/*! ./mock.ts */ \"./src/ts/mock.ts\").CrateForm);\nvar elem = new CrateForm();\nelem.changeDOM();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/ts/mains.ts?");

/***/ }),

/***/ "./src/ts/mock.ts":
/*!************************!*\
  !*** ./src/ts/mock.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CrateForm = void 0;\nvar CrateForm = /** @class */ (function () {\n    function CrateForm() {\n    }\n    Object.defineProperty(CrateForm.prototype, \"formHtml\", {\n        get: function () {\n            var div = document.createElement('div');\n            div.classList.add('col-md-5');\n            div.innerHTML = \"<ul class=\\\"cards list-unstyled\\\">\\n\\t\\t\\t\\t<li><span class=\\\"card visa\\\" title=\\\"Visa\\\">Visa</span></li>\\n\\t\\t\\t\\t<li><span class=\\\"card master cdisabled\\\" title=\\\"Mastercard\\\">Mastercard</span></li>\\n\\t\\t\\t\\t<li><span class=\\\"card amex cdisabled\\\" title=\\\"American Express\\\">American Express</span></li>\\n\\t\\t\\t\\t<li><span class=\\\"card discover cdisabled\\\" title=\\\"Discover\\\">Discover</span></li>\\n\\t\\t\\t\\t<li><span class=\\\"card jcb cdisabled\\\" title=\\\"JCB\\\">JCB</span></li>\\n\\t\\t\\t\\t<li><span class=\\\"card diners_club cdisabled\\\" title=\\\"Diners Club\\\">Diners Club</span></li>\\n\\t\\t\\t</ul>\";\n            // let elem: any = div.cloneNode(true);\n            return div;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(CrateForm.prototype, \"picPreviewHtml\", {\n        get: function () {\n            var div = document.createElement('div');\n            div.classList.add('form');\n            var inp = document.createElement('input');\n            inp.classList.add('form-control', 'col-md-6');\n            inp.id = 'card_number';\n            inp['name'] = 'card_number';\n            inp.type = 'text';\n            inp['placeholder'] = 'Credit card number';\n            var a_link = document.createElement('a');\n            a_link.classList.add('btn', 'btn-success');\n            a_link.id = 'submitform';\n            a_link.innerHTML = 'Click to Validate';\n            div.insertAdjacentElement('beforeend', inp);\n            div.insertAdjacentElement('beforeend', a_link);\n            return div;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    CrateForm.prototype.changeDOM = function () {\n        // TODO: type classElem is a string. It's variable\n        // keep the class-name from the www-page, into which will be the two html-element insert \n        var web_elem = document.querySelector('main');\n        web_elem.insertAdjacentElement('beforeend', this.formHtml);\n        web_elem.insertAdjacentElement('beforeend', this.picPreviewHtml);\n    };\n    return CrateForm;\n}());\nexports.CrateForm = CrateForm;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/ts/mock.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_mains_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/mains.ts */ \"./src/ts/mains.ts\");\n/* harmony import */ var _ts_mains_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ts_mains_ts__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;