/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addVisit",{

/***/ "./lib/convertImgToSchedule.js":
/*!*************************************!*\
  !*** ./lib/convertImgToSchedule.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ convertImgToSchedule; }\n/* harmony export */ });\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _cptCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cptCodes */ \"./lib/cptCodes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction convertImgToSchedule(lines) {\n  return getAllVisitData(lines);\n}\n\nvar getAllVisitData = function getAllVisitData(lines) {\n  var allVisitData = [];\n  lines.forEach(function (line) {\n    var visitData = getVisitData(line);\n    if (Object.keys(visitData).length !== 0) allVisitData.push(_objectSpread({}, visitData));\n  });\n  console.log(\"allvisitData:\");\n  allVisitData.forEach(function (k) {\n    return console.log(k);\n  });\n  return allVisitData;\n};\n\nvar getVisitData = function getVisitData(line) {\n  var visitData = {};\n  line.words.forEach(function (key) {\n    var text = key.text;\n    var visitType = isVisitType(text);\n    if (typeof visitType === 'undefined') return;\n    console.log(\"valid visitType: \".concat(Object.entries(visitType)));\n    visitData = _objectSpread(_objectSpread(_objectSpread({}, visitData), visitType), {}, {\n      visitId: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n      visitDate: new Date(new Date().setHours(0, 0, 0, 0))\n    });\n  });\n  console.log(\"visitData before returned: \".concat(Object.entries(visitData)));\n  return visitData;\n};\n\nvar isVisitType = function isVisitType(str) {\n  var visitType = _cptCodes__WEBPACK_IMPORTED_MODULE_1__.default.filter( // case insensitive comparison of each 'type' value in cptCode array with str\n  function (key) {\n    return key.visitType.localeCompare(str, undefined, {\n      sensitivity: 'accent'\n    }) === 0;\n  });\n\n  if (visitType !== null && visitType !== void 0 && visitType.length) {\n    return visitType[0];\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnZlcnRJbWdUb1NjaGVkdWxlLmpzPzc5MjciXSwibmFtZXMiOlsiY29udmVydEltZ1RvU2NoZWR1bGUiLCJsaW5lcyIsImdldEFsbFZpc2l0RGF0YSIsImFsbFZpc2l0RGF0YSIsImZvckVhY2giLCJsaW5lIiwidmlzaXREYXRhIiwiZ2V0VmlzaXREYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiayIsIndvcmRzIiwia2V5IiwidGV4dCIsInZpc2l0VHlwZSIsImlzVmlzaXRUeXBlIiwiZW50cmllcyIsInZpc2l0SWQiLCJ1dWlkdjQiLCJ2aXNpdERhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJzdHIiLCJjcHRDb2RlcyIsImxvY2FsZUNvbXBhcmUiLCJ1bmRlZmluZWQiLCJzZW5zaXRpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0Esb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQXFDO0FBQ2xELFNBQU9DLGVBQWUsQ0FBQ0QsS0FBRCxDQUF0QjtBQUNEOztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0QsS0FBRCxFQUFXO0FBQ2pDLE1BQU1FLFlBQVksR0FBRyxFQUFyQjtBQUNBRixPQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEIsUUFBTUMsU0FBUyxHQUFHQyxZQUFZLENBQUNGLElBQUQsQ0FBOUI7QUFDQSxRQUFJRyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsU0FBWixFQUF1QkksTUFBdkIsS0FBa0MsQ0FBdEMsRUFDRVAsWUFBWSxDQUFDUSxJQUFiLG1CQUF1QkwsU0FBdkI7QUFDSCxHQUpEO0FBS0FNLFNBQU8sQ0FBQ0MsR0FBUjtBQUNBVixjQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBQ1UsQ0FBRDtBQUFBLFdBQU9GLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFaLENBQVA7QUFBQSxHQUFyQjtBQUVBLFNBQU9YLFlBQVA7QUFDRCxDQVhEOztBQWFBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNGLElBQUQsRUFBVTtBQUM3QixNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQUQsTUFBSSxDQUFDVSxLQUFMLENBQVdYLE9BQVgsQ0FBbUIsVUFBQ1ksR0FBRCxFQUFTO0FBQUEsUUFDbEJDLElBRGtCLEdBQ1RELEdBRFMsQ0FDbEJDLElBRGtCO0FBRTFCLFFBQU1DLFNBQVMsR0FBR0MsV0FBVyxDQUFDRixJQUFELENBQTdCO0FBQ0EsUUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3RDTixXQUFPLENBQUNDLEdBQVIsNEJBQWdDTCxNQUFNLENBQUNZLE9BQVAsQ0FBZUYsU0FBZixDQUFoQztBQUNBWixhQUFTLGlEQUNKQSxTQURJLEdBRUpZLFNBRkk7QUFHUEcsYUFBTyxFQUFFQyx3Q0FBTSxFQUhSO0FBSVBDLGVBQVMsRUFBRSxJQUFJQyxJQUFKLENBQVMsSUFBSUEsSUFBSixHQUFXQyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQVQ7QUFKSixNQUFUO0FBTUQsR0FYRDtBQVlBYixTQUFPLENBQUNDLEdBQVIsc0NBQTBDTCxNQUFNLENBQUNZLE9BQVAsQ0FBZWQsU0FBZixDQUExQztBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQWhCRDs7QUFrQkEsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ08sR0FBRCxFQUFTO0FBQzNCLE1BQU1SLFNBQVMsR0FBR1MscURBQUEsRUFDaEI7QUFDQSxZQUFDWCxHQUFEO0FBQUEsV0FDRUEsR0FBRyxDQUFDRSxTQUFKLENBQWNVLGFBQWQsQ0FBNEJGLEdBQTVCLEVBQWlDRyxTQUFqQyxFQUE0QztBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBNUMsTUFDQSxDQUZGO0FBQUEsR0FGZ0IsQ0FBbEI7O0FBTUEsTUFBSVosU0FBSixhQUFJQSxTQUFKLGVBQUlBLFNBQVMsQ0FBRVIsTUFBZixFQUF1QjtBQUNyQixXQUFPUSxTQUFTLENBQUMsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsQ0FWRCIsImZpbGUiOiIuL2xpYi9jb252ZXJ0SW1nVG9TY2hlZHVsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IGNwdENvZGVzIGZyb20gJy4vY3B0Q29kZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJ0SW1nVG9TY2hlZHVsZShsaW5lcykge1xuICByZXR1cm4gZ2V0QWxsVmlzaXREYXRhKGxpbmVzKTtcbn1cblxuY29uc3QgZ2V0QWxsVmlzaXREYXRhID0gKGxpbmVzKSA9PiB7XG4gIGNvbnN0IGFsbFZpc2l0RGF0YSA9IFtdO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgdmlzaXREYXRhID0gZ2V0VmlzaXREYXRhKGxpbmUpO1xuICAgIGlmIChPYmplY3Qua2V5cyh2aXNpdERhdGEpLmxlbmd0aCAhPT0gMClcbiAgICAgIGFsbFZpc2l0RGF0YS5wdXNoKHsgLi4udmlzaXREYXRhIH0pO1xuICB9KTtcbiAgY29uc29sZS5sb2coYGFsbHZpc2l0RGF0YTpgKTtcbiAgYWxsVmlzaXREYXRhLmZvckVhY2goKGspID0+IGNvbnNvbGUubG9nKGspKTtcblxuICByZXR1cm4gYWxsVmlzaXREYXRhO1xufTtcblxuY29uc3QgZ2V0VmlzaXREYXRhID0gKGxpbmUpID0+IHtcbiAgbGV0IHZpc2l0RGF0YSA9IHt9O1xuICBsaW5lLndvcmRzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0ga2V5O1xuICAgIGNvbnN0IHZpc2l0VHlwZSA9IGlzVmlzaXRUeXBlKHRleHQpO1xuICAgIGlmICh0eXBlb2YgdmlzaXRUeXBlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKGB2YWxpZCB2aXNpdFR5cGU6ICR7T2JqZWN0LmVudHJpZXModmlzaXRUeXBlKX1gKTtcbiAgICB2aXNpdERhdGEgPSB7XG4gICAgICAuLi52aXNpdERhdGEsXG4gICAgICAuLi52aXNpdFR5cGUsXG4gICAgICB2aXNpdElkOiB1dWlkdjQoKSxcbiAgICAgIHZpc2l0RGF0ZTogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSksXG4gICAgfTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGB2aXNpdERhdGEgYmVmb3JlIHJldHVybmVkOiAke09iamVjdC5lbnRyaWVzKHZpc2l0RGF0YSl9YCk7XG4gIHJldHVybiB2aXNpdERhdGE7XG59O1xuXG5jb25zdCBpc1Zpc2l0VHlwZSA9IChzdHIpID0+IHtcbiAgY29uc3QgdmlzaXRUeXBlID0gY3B0Q29kZXMuZmlsdGVyKFxuICAgIC8vIGNhc2UgaW5zZW5zaXRpdmUgY29tcGFyaXNvbiBvZiBlYWNoICd0eXBlJyB2YWx1ZSBpbiBjcHRDb2RlIGFycmF5IHdpdGggc3RyXG4gICAgKGtleSkgPT5cbiAgICAgIGtleS52aXNpdFR5cGUubG9jYWxlQ29tcGFyZShzdHIsIHVuZGVmaW5lZCwgeyBzZW5zaXRpdml0eTogJ2FjY2VudCcgfSkgPT09XG4gICAgICAwXG4gICk7XG4gIGlmICh2aXNpdFR5cGU/Lmxlbmd0aCkge1xuICAgIHJldHVybiB2aXNpdFR5cGVbMF07XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/convertImgToSchedule.js\n");

/***/ })

});