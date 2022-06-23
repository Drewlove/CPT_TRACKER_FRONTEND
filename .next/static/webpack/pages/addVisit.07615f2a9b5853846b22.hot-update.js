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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ convertImgToSchedule; }\n/* harmony export */ });\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _cptCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cptCodes */ \"./lib/cptCodes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction convertImgToSchedule(lines) {\n  return getAllVisitData(lines);\n}\n\nvar getAllVisitData = function getAllVisitData(lines) {\n  var allVisitData = [];\n  lines.forEach(function (line) {\n    var visitData = getVisitData(line);\n    if (Object.keys(visitData).length !== 0) allVisitData.push(_objectSpread({}, visitData));\n  });\n  return allVisitData;\n};\n\nvar getVisitData = function getVisitData(line) {\n  var visitData = {};\n  line.words.forEach(function (key) {\n    var text = key.text;\n    var visitType = isVisitType(text);\n    if (typeof visitType === 'undefined') return;\n    visitData = _objectSpread(_objectSpread(_objectSpread({}, visitData), visitType), {}, {\n      visitId: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n      visitDate: new Date(new Date().setHours(0, 0, 0, 0))\n    });\n  });\n  return visitData;\n};\n\nvar isVisitType = function isVisitType(str) {\n  var visitType = _cptCodes__WEBPACK_IMPORTED_MODULE_1__.default.filter( // case insensitive comparison of each 'type' value in cptCode array with str\n  function (key) {\n    return key.visitType.localeCompare(str, undefined, {\n      sensitivity: 'accent'\n    }) === 0;\n  });\n\n  if (visitType !== null && visitType !== void 0 && visitType.length) {\n    return visitType[0];\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnZlcnRJbWdUb1NjaGVkdWxlLmpzPzc5MjciXSwibmFtZXMiOlsiY29udmVydEltZ1RvU2NoZWR1bGUiLCJsaW5lcyIsImdldEFsbFZpc2l0RGF0YSIsImFsbFZpc2l0RGF0YSIsImZvckVhY2giLCJsaW5lIiwidmlzaXREYXRhIiwiZ2V0VmlzaXREYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJ3b3JkcyIsImtleSIsInRleHQiLCJ2aXNpdFR5cGUiLCJpc1Zpc2l0VHlwZSIsInZpc2l0SWQiLCJ1dWlkdjQiLCJ2aXNpdERhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJzdHIiLCJjcHRDb2RlcyIsImxvY2FsZUNvbXBhcmUiLCJ1bmRlZmluZWQiLCJzZW5zaXRpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0Esb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQXFDO0FBQ2xELFNBQU9DLGVBQWUsQ0FBQ0QsS0FBRCxDQUF0QjtBQUNEOztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0QsS0FBRCxFQUFXO0FBQ2pDLE1BQU1FLFlBQVksR0FBRyxFQUFyQjtBQUNBRixPQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEIsUUFBTUMsU0FBUyxHQUFHQyxZQUFZLENBQUNGLElBQUQsQ0FBOUI7QUFDQSxRQUFJRyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsU0FBWixFQUF1QkksTUFBdkIsS0FBa0MsQ0FBdEMsRUFDRVAsWUFBWSxDQUFDUSxJQUFiLG1CQUF1QkwsU0FBdkI7QUFDSCxHQUpEO0FBS0EsU0FBT0gsWUFBUDtBQUNELENBUkQ7O0FBVUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsSUFBRCxFQUFVO0FBQzdCLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBRCxNQUFJLENBQUNPLEtBQUwsQ0FBV1IsT0FBWCxDQUFtQixVQUFDUyxHQUFELEVBQVM7QUFBQSxRQUNsQkMsSUFEa0IsR0FDVEQsR0FEUyxDQUNsQkMsSUFEa0I7QUFFMUIsUUFBTUMsU0FBUyxHQUFHQyxXQUFXLENBQUNGLElBQUQsQ0FBN0I7QUFDQSxRQUFJLE9BQU9DLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDdENULGFBQVMsaURBQ0pBLFNBREksR0FFSlMsU0FGSTtBQUdQRSxhQUFPLEVBQUVDLHdDQUFNLEVBSFI7QUFJUEMsZUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxJQUFJQSxJQUFKLEdBQVdDLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBVDtBQUpKLE1BQVQ7QUFNRCxHQVZEO0FBV0EsU0FBT2YsU0FBUDtBQUNELENBZEQ7O0FBZ0JBLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNNLEdBQUQsRUFBUztBQUMzQixNQUFNUCxTQUFTLEdBQUdRLHFEQUFBLEVBQ2hCO0FBQ0EsWUFBQ1YsR0FBRDtBQUFBLFdBQ0VBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjUyxhQUFkLENBQTRCRixHQUE1QixFQUFpQ0csU0FBakMsRUFBNEM7QUFBRUMsaUJBQVcsRUFBRTtBQUFmLEtBQTVDLE1BQ0EsQ0FGRjtBQUFBLEdBRmdCLENBQWxCOztBQU1BLE1BQUlYLFNBQUosYUFBSUEsU0FBSixlQUFJQSxTQUFTLENBQUVMLE1BQWYsRUFBdUI7QUFDckIsV0FBT0ssU0FBUyxDQUFDLENBQUQsQ0FBaEI7QUFDRDtBQUNGLENBVkQiLCJmaWxlIjoiLi9saWIvY29udmVydEltZ1RvU2NoZWR1bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBjcHRDb2RlcyBmcm9tICcuL2NwdENvZGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udmVydEltZ1RvU2NoZWR1bGUobGluZXMpIHtcbiAgcmV0dXJuIGdldEFsbFZpc2l0RGF0YShsaW5lcyk7XG59XG5cbmNvbnN0IGdldEFsbFZpc2l0RGF0YSA9IChsaW5lcykgPT4ge1xuICBjb25zdCBhbGxWaXNpdERhdGEgPSBbXTtcbiAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHZpc2l0RGF0YSA9IGdldFZpc2l0RGF0YShsaW5lKTtcbiAgICBpZiAoT2JqZWN0LmtleXModmlzaXREYXRhKS5sZW5ndGggIT09IDApXG4gICAgICBhbGxWaXNpdERhdGEucHVzaCh7IC4uLnZpc2l0RGF0YSB9KTtcbiAgfSk7XG4gIHJldHVybiBhbGxWaXNpdERhdGE7XG59O1xuXG5jb25zdCBnZXRWaXNpdERhdGEgPSAobGluZSkgPT4ge1xuICBsZXQgdmlzaXREYXRhID0ge307XG4gIGxpbmUud29yZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBrZXk7XG4gICAgY29uc3QgdmlzaXRUeXBlID0gaXNWaXNpdFR5cGUodGV4dCk7XG4gICAgaWYgKHR5cGVvZiB2aXNpdFR5cGUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgdmlzaXREYXRhID0ge1xuICAgICAgLi4udmlzaXREYXRhLFxuICAgICAgLi4udmlzaXRUeXBlLFxuICAgICAgdmlzaXRJZDogdXVpZHY0KCksXG4gICAgICB2aXNpdERhdGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkpLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gdmlzaXREYXRhO1xufTtcblxuY29uc3QgaXNWaXNpdFR5cGUgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IHZpc2l0VHlwZSA9IGNwdENvZGVzLmZpbHRlcihcbiAgICAvLyBjYXNlIGluc2Vuc2l0aXZlIGNvbXBhcmlzb24gb2YgZWFjaCAndHlwZScgdmFsdWUgaW4gY3B0Q29kZSBhcnJheSB3aXRoIHN0clxuICAgIChrZXkpID0+XG4gICAgICBrZXkudmlzaXRUeXBlLmxvY2FsZUNvbXBhcmUoc3RyLCB1bmRlZmluZWQsIHsgc2Vuc2l0aXZpdHk6ICdhY2NlbnQnIH0pID09PVxuICAgICAgMFxuICApO1xuICBpZiAodmlzaXRUeXBlPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdmlzaXRUeXBlWzBdO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/convertImgToSchedule.js\n");

/***/ })

});