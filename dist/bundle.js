/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    GaussSumStrategy.prototype.get = function (N) {
        return (N * (N + 1)) / 2;
    };
    return GaussSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaussSumStrategy);


/***/ }),

/***/ "./src/strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    LoopSumStrategy.prototype.get = function (N) {
        var sum = 0;
        for (var i = 1; i <= N; i++) {
            sum += i;
        }
        return sum;
    };
    return LoopSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopSumStrategy);


/***/ }),

/***/ "./src/strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    SumPrinter.prototype.print = function (strategy, N, domOutput) {
        var value = strategy.get(N);
        domOutput.innerHTML = "1~".concat(N, "\uAE4C\uC9C0\uC758 \uCD1D\uD569 = ").concat(value);
    };
    return SumPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumPrinter);


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
/*!*******************************!*\
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GaussSumStrategy */ "./src/strategy/GaussSumStrategy.ts");
/* harmony import */ var _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoopSumStrategy */ "./src/strategy/LoopSumStrategy.ts");
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SumPrinter */ "./src/strategy/SumPrinter.ts");



var printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_2__["default"]();
var dom1 = document.createElement('h1');
document.body.appendChild(dom1);
var dom2 = document.createElement('h1');
document.body.appendChild(dom2);
printer.print(new _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom1);
printer.print(new _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__["default"](), 100, dom2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFIRyw4QkFBRyxHQUFILFVBQUksQ0FBUztRQUNULE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0lBQUE7SUFRQSxDQUFDO0lBUEcsNkJBQUcsR0FBSCxVQUFJLENBQVM7UUFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDtJQUFBO0lBS0EsQ0FBQztJQUpHLDBCQUFLLEdBQUwsVUFBTSxRQUFxQixFQUFFLENBQVMsRUFBRSxTQUFrQjtRQUN0RCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBSyxDQUFDLCtDQUFZLEtBQUssQ0FBRSxDQUFDO0lBQ3BELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7O1VDUEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0Y7QUFDVjtBQUV0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLG1EQUFVLEVBQUUsQ0FBQztBQUVqQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHdEQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHlEQUFnQixFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4tdHlwZXNjcmlwdC8uL3NyYy9zdHJhdGVneS9HYXVzc1N1bVN0cmF0ZWd5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLXR5cGVzY3JpcHQvLi9zcmMvc3RyYXRlZ3kvTG9vcFN1bVN0cmF0ZWd5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLXR5cGVzY3JpcHQvLi9zcmMvc3RyYXRlZ3kvU3VtUHJpbnRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4tdHlwZXNjcmlwdC8uL3NyYy9zdHJhdGVneS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSAnLi9TdW1TdHJhdGVneSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXVzc1N1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3kge1xyXG4gICAgZ2V0KE46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIChOICogKE4gKyAxKSkgLyAyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTdW1TdHJhdGVneSBmcm9tICcuL1N1bVN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb3BTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcclxuICAgIGdldChOOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE47IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSAnLi9TdW1TdHJhdGVneSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW1QcmludGVyIHtcclxuICAgIHByaW50KHN0cmF0ZWd5OiBTdW1TdHJhdGVneSwgTjogbnVtYmVyLCBkb21PdXRwdXQ6IEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0cmF0ZWd5LmdldChOKTtcclxuICAgICAgICBkb21PdXRwdXQuaW5uZXJIVE1MID0gYDF+JHtOfeq5jOyngOydmCDstJ3tlakgPSAke3ZhbHVlfWA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2F1c3NTdW1TdHJhdGVneSBmcm9tICcuL0dhdXNzU3VtU3RyYXRlZ3knO1xyXG5pbXBvcnQgTG9vcFN1bVN0cmF0ZWd5IGZyb20gJy4vTG9vcFN1bVN0cmF0ZWd5JztcclxuaW1wb3J0IFN1bVByaW50ZXIgZnJvbSAnLi9TdW1QcmludGVyJztcclxuXHJcbmNvbnN0IHByaW50ZXIgPSBuZXcgU3VtUHJpbnRlcigpO1xyXG5cclxuY29uc3QgZG9tMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tMSk7XHJcbmNvbnN0IGRvbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbTIpO1xyXG5cclxucHJpbnRlci5wcmludChuZXcgTG9vcFN1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMSk7XHJcbnByaW50ZXIucHJpbnQobmV3IEdhdXNzU3VtU3RyYXRlZ3koKSwgMTAwLCBkb20yKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9