/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var CrateForm = (__webpack_require__(2).CrateForm);
var elem = new CrateForm();
elem.changeDOM();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9qdHMvbWFpbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLElBQUEsU0FBUyxHQUFLLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUEvQixDQUFnQztBQUVqRCxJQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQzdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyJ9

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrateForm = void 0;
var CrateForm = (function () {
    function CrateForm() {
    }
    Object.defineProperty(CrateForm.prototype, "formHtml", {
        get: function () {
            var div = document.createElement('div');
            div.classList.add('col-md-5');
            div.innerHTML = "<ul class=\"cards list-unstyled\">\n\t\t\t\t<li><span class=\"card visa\" title=\"Visa\">Visa</span></li>\n\t\t\t\t<li><span class=\"card master cdisabled\" title=\"Mastercard\">Mastercard</span></li>\n\t\t\t\t<li><span class=\"card amex cdisabled\" title=\"American Express\">American Express</span></li>\n\t\t\t\t<li><span class=\"card discover cdisabled\" title=\"Discover\">Discover</span></li>\n\t\t\t\t<li><span class=\"card jcb cdisabled\" title=\"JCB\">JCB</span></li>\n\t\t\t\t<li><span class=\"card diners_club cdisabled\" title=\"Diners Club\">Diners Club</span></li>\n\t\t\t</ul>";
            return div;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CrateForm.prototype, "picPreviewHtml", {
        get: function () {
            var div = document.createElement('div');
            div.classList.add('form');
            var inp = document.createElement('input');
            inp.classList.add('form-control', 'col-md-6');
            inp.id = 'card_number';
            inp['name'] = 'card_number';
            inp.type = 'text';
            inp['placeholder'] = 'Credit card number';
            var a_link = document.createElement('a');
            a_link.classList.add('btn', 'btn-success');
            a_link.id = 'submitform';
            a_link.innerHTML = 'Click to Validate';
            div.insertAdjacentElement('beforeend', inp);
            div.insertAdjacentElement('beforeend', a_link);
            return div;
        },
        enumerable: false,
        configurable: true
    });
    CrateForm.prototype.changeDOM = function () {
        var web_elem = document.querySelector('main');
        web_elem.insertAdjacentElement('beforeend', this.formHtml);
        web_elem.insertAdjacentElement('beforeend', this.picPreviewHtml);
    };
    return CrateForm;
}());
exports.CrateForm = CrateForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2p0cy9tb2Nrcy9tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBQ0M7SUFBZ0IsQ0FBQztJQUVqQixzQkFBSSwrQkFBUTthQUFaO1lBQ0MsSUFBTSxHQUFHLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDekQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFFLENBQUE7WUFDOUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxpbEJBT1QsQ0FBQTtZQUNQLE9BQU8sR0FBRyxDQUFBO1FBQ1gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBYzthQUFsQjtZQUNDLElBQU0sR0FBRyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBRTNCLElBQU0sR0FBRyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzdELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQTtZQUM3QyxHQUFHLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQTtZQUN0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFBO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO1lBQ2pCLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztZQUUxQyxJQUFNLE1BQU0sR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN2RCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUE7WUFDMUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUE7WUFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUd2QyxHQUFHLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0MsT0FBTyxHQUFHLENBQUE7UUFDWCxDQUFDOzs7T0FBQTtJQUVELDZCQUFTLEdBQVQ7UUFJQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQztRQUMvRCxRQUFRLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVsRSxDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLDhCQUFTIn0=

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jts_mains_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _jts_mains_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jts_mains_ts__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;