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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ convertImgToSchedule; }\n/* harmony export */ });\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _cptCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cptCodes */ \"./lib/cptCodes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction convertImgToSchedule(lines) {\n  return getAllVisitData(lines);\n}\n\nvar getAllVisitData = function getAllVisitData(lines) {\n  var allVisitData = [];\n  lines.forEach(function (line) {\n    var visitData = getVisitData(line);\n    var visitId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();\n    if (Object.keys(visitData).length !== 0) allVisitData.push(_objectSpread(_objectSpread({}, visitData), {}, {\n      visitId: visitId\n    }));\n  });\n  return allVisitData;\n};\n\nvar getVisitData = function getVisitData(line) {\n  var visitData = {};\n  line.words.forEach(function (key) {\n    var text = key.text; // const visitType = isVisitType(text);\n\n    if (isVisitType(text)) visitData.visitType = text;\n    if (isMrn(text)) visitData.mrn = text;\n    console.log(\"visit data block: \".concat(visitData));\n    console.log(\"visit data block 2: \".concat(visitData.visitType));\n    if (visitData.visitType == null) return;\n    visitData = _objectSpread(_objectSpread(_objectSpread({}, visitData), visitType), {}, {\n      visitDate: new Date()\n    });\n  });\n  console.log(visitData);\n  return visitData;\n};\n\nvar isMrn = function isMrn(str) {\n  // MRN is usually a six digit number, Tim's mock schedule uses 9 digit #'s for MRNs\n  var strNoHyphens = str.replace(/-/g, '');\n  return strNoHyphens.length === 9 && parseInt(strNoHyphens);\n};\n\nvar isVisitType = function isVisitType(str) {\n  var visitType = _cptCodes__WEBPACK_IMPORTED_MODULE_1__.default.filter( // case insensitive comparison of each 'type' value in cptCode array with 'text'\n  function (key) {\n    return key.visitType.localeCompare(str, undefined, {\n      sensitivity: 'accent'\n    }) === 0;\n  });\n  console.log(\"str is \".concat(str, \", visitType is: \").concat(visitType));\n  console.log(visitType[0]);\n  return visitType !== null && visitType !== void 0 && visitType.length ? visitType[0] : ''; // if (visitType?.length) {\n  //   return visitType[0];\n  // }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnZlcnRJbWdUb1NjaGVkdWxlLmpzPzc5MjciXSwibmFtZXMiOlsiY29udmVydEltZ1RvU2NoZWR1bGUiLCJsaW5lcyIsImdldEFsbFZpc2l0RGF0YSIsImFsbFZpc2l0RGF0YSIsImZvckVhY2giLCJsaW5lIiwidmlzaXREYXRhIiwiZ2V0VmlzaXREYXRhIiwidmlzaXRJZCIsInV1aWR2NCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwid29yZHMiLCJrZXkiLCJ0ZXh0IiwiaXNWaXNpdFR5cGUiLCJ2aXNpdFR5cGUiLCJpc01ybiIsIm1ybiIsImNvbnNvbGUiLCJsb2ciLCJ2aXNpdERhdGUiLCJEYXRlIiwic3RyIiwic3RyTm9IeXBoZW5zIiwicmVwbGFjZSIsInBhcnNlSW50IiwiY3B0Q29kZXMiLCJsb2NhbGVDb21wYXJlIiwidW5kZWZpbmVkIiwic2Vuc2l0aXZpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLG9CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUNsRCxTQUFPQyxlQUFlLENBQUNELEtBQUQsQ0FBdEI7QUFDRDs7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNELEtBQUQsRUFBVztBQUNqQyxNQUFNRSxZQUFZLEdBQUcsRUFBckI7QUFDQUYsT0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFFBQU1DLFNBQVMsR0FBR0MsWUFBWSxDQUFDRixJQUFELENBQTlCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHQyx3Q0FBTSxFQUF0QjtBQUNBLFFBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxTQUFaLEVBQXVCTSxNQUF2QixLQUFrQyxDQUF0QyxFQUNFVCxZQUFZLENBQUNVLElBQWIsaUNBQXVCUCxTQUF2QjtBQUFrQ0UsYUFBTyxFQUFQQTtBQUFsQztBQUNILEdBTEQ7QUFNQSxTQUFPTCxZQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixJQUFELEVBQVU7QUFDN0IsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FELE1BQUksQ0FBQ1MsS0FBTCxDQUFXVixPQUFYLENBQW1CLFVBQUNXLEdBQUQsRUFBUztBQUFBLFFBQ2xCQyxJQURrQixHQUNURCxHQURTLENBQ2xCQyxJQURrQixFQUUxQjs7QUFDQSxRQUFJQyxXQUFXLENBQUNELElBQUQsQ0FBZixFQUF1QlYsU0FBUyxDQUFDWSxTQUFWLEdBQXNCRixJQUF0QjtBQUN2QixRQUFJRyxLQUFLLENBQUNILElBQUQsQ0FBVCxFQUFpQlYsU0FBUyxDQUFDYyxHQUFWLEdBQWdCSixJQUFoQjtBQUNqQkssV0FBTyxDQUFDQyxHQUFSLDZCQUFpQ2hCLFNBQWpDO0FBQ0FlLFdBQU8sQ0FBQ0MsR0FBUiwrQkFBbUNoQixTQUFTLENBQUNZLFNBQTdDO0FBQ0EsUUFBSVosU0FBUyxDQUFDWSxTQUFWLElBQXVCLElBQTNCLEVBQWlDO0FBQ2pDWixhQUFTLGlEQUFRQSxTQUFSLEdBQXNCWSxTQUF0QjtBQUFpQ0ssZUFBUyxFQUFFLElBQUlDLElBQUo7QUFBNUMsTUFBVDtBQUNELEdBVEQ7QUFVQUgsU0FBTyxDQUFDQyxHQUFSLENBQVloQixTQUFaO0FBQ0EsU0FBT0EsU0FBUDtBQUNELENBZEQ7O0FBZ0JBLElBQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNNLEdBQUQsRUFBUztBQUNyQjtBQUNBLE1BQU1DLFlBQVksR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFyQjtBQUNBLFNBQU9ELFlBQVksQ0FBQ2QsTUFBYixLQUF3QixDQUF4QixJQUE2QmdCLFFBQVEsQ0FBQ0YsWUFBRCxDQUE1QztBQUNELENBSkQ7O0FBTUEsSUFBTVQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1EsR0FBRCxFQUFTO0FBQzNCLE1BQU1QLFNBQVMsR0FBR1cscURBQUEsRUFDaEI7QUFDQSxZQUFDZCxHQUFEO0FBQUEsV0FDRUEsR0FBRyxDQUFDRyxTQUFKLENBQWNZLGFBQWQsQ0FBNEJMLEdBQTVCLEVBQWlDTSxTQUFqQyxFQUE0QztBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBNUMsTUFDQSxDQUZGO0FBQUEsR0FGZ0IsQ0FBbEI7QUFNQVgsU0FBTyxDQUFDQyxHQUFSLGtCQUFzQkcsR0FBdEIsNkJBQTRDUCxTQUE1QztBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBUyxDQUFDLENBQUQsQ0FBckI7QUFDQSxTQUFPQSxTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULElBQUFBLFNBQVMsQ0FBRU4sTUFBWCxHQUFvQk0sU0FBUyxDQUFDLENBQUQsQ0FBN0IsR0FBbUMsRUFBMUMsQ0FUMkIsQ0FXM0I7QUFDQTtBQUNBO0FBQ0QsQ0FkRCIsImZpbGUiOiIuL2xpYi9jb252ZXJ0SW1nVG9TY2hlZHVsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IGNwdENvZGVzIGZyb20gJy4vY3B0Q29kZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJ0SW1nVG9TY2hlZHVsZShsaW5lcykge1xuICByZXR1cm4gZ2V0QWxsVmlzaXREYXRhKGxpbmVzKTtcbn1cblxuY29uc3QgZ2V0QWxsVmlzaXREYXRhID0gKGxpbmVzKSA9PiB7XG4gIGNvbnN0IGFsbFZpc2l0RGF0YSA9IFtdO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgdmlzaXREYXRhID0gZ2V0VmlzaXREYXRhKGxpbmUpO1xuICAgIGNvbnN0IHZpc2l0SWQgPSB1dWlkdjQoKTtcbiAgICBpZiAoT2JqZWN0LmtleXModmlzaXREYXRhKS5sZW5ndGggIT09IDApXG4gICAgICBhbGxWaXNpdERhdGEucHVzaCh7IC4uLnZpc2l0RGF0YSwgdmlzaXRJZCB9KTtcbiAgfSk7XG4gIHJldHVybiBhbGxWaXNpdERhdGE7XG59O1xuXG5jb25zdCBnZXRWaXNpdERhdGEgPSAobGluZSkgPT4ge1xuICBsZXQgdmlzaXREYXRhID0ge307XG4gIGxpbmUud29yZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBrZXk7XG4gICAgLy8gY29uc3QgdmlzaXRUeXBlID0gaXNWaXNpdFR5cGUodGV4dCk7XG4gICAgaWYgKGlzVmlzaXRUeXBlKHRleHQpKSB2aXNpdERhdGEudmlzaXRUeXBlID0gdGV4dDtcbiAgICBpZiAoaXNNcm4odGV4dCkpIHZpc2l0RGF0YS5tcm4gPSB0ZXh0O1xuICAgIGNvbnNvbGUubG9nKGB2aXNpdCBkYXRhIGJsb2NrOiAke3Zpc2l0RGF0YX1gKTtcbiAgICBjb25zb2xlLmxvZyhgdmlzaXQgZGF0YSBibG9jayAyOiAke3Zpc2l0RGF0YS52aXNpdFR5cGV9YCk7XG4gICAgaWYgKHZpc2l0RGF0YS52aXNpdFR5cGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHZpc2l0RGF0YSA9IHsgLi4udmlzaXREYXRhLCAuLi52aXNpdFR5cGUsIHZpc2l0RGF0ZTogbmV3IERhdGUoKSB9O1xuICB9KTtcbiAgY29uc29sZS5sb2codmlzaXREYXRhKTtcbiAgcmV0dXJuIHZpc2l0RGF0YTtcbn07XG5cbmNvbnN0IGlzTXJuID0gKHN0cikgPT4ge1xuICAvLyBNUk4gaXMgdXN1YWxseSBhIHNpeCBkaWdpdCBudW1iZXIsIFRpbSdzIG1vY2sgc2NoZWR1bGUgdXNlcyA5IGRpZ2l0ICMncyBmb3IgTVJOc1xuICBjb25zdCBzdHJOb0h5cGhlbnMgPSBzdHIucmVwbGFjZSgvLS9nLCAnJyk7XG4gIHJldHVybiBzdHJOb0h5cGhlbnMubGVuZ3RoID09PSA5ICYmIHBhcnNlSW50KHN0ck5vSHlwaGVucyk7XG59O1xuXG5jb25zdCBpc1Zpc2l0VHlwZSA9IChzdHIpID0+IHtcbiAgY29uc3QgdmlzaXRUeXBlID0gY3B0Q29kZXMuZmlsdGVyKFxuICAgIC8vIGNhc2UgaW5zZW5zaXRpdmUgY29tcGFyaXNvbiBvZiBlYWNoICd0eXBlJyB2YWx1ZSBpbiBjcHRDb2RlIGFycmF5IHdpdGggJ3RleHQnXG4gICAgKGtleSkgPT5cbiAgICAgIGtleS52aXNpdFR5cGUubG9jYWxlQ29tcGFyZShzdHIsIHVuZGVmaW5lZCwgeyBzZW5zaXRpdml0eTogJ2FjY2VudCcgfSkgPT09XG4gICAgICAwXG4gICk7XG4gIGNvbnNvbGUubG9nKGBzdHIgaXMgJHtzdHJ9LCB2aXNpdFR5cGUgaXM6ICR7dmlzaXRUeXBlfWApO1xuICBjb25zb2xlLmxvZyh2aXNpdFR5cGVbMF0pO1xuICByZXR1cm4gdmlzaXRUeXBlPy5sZW5ndGggPyB2aXNpdFR5cGVbMF0gOiAnJztcblxuICAvLyBpZiAodmlzaXRUeXBlPy5sZW5ndGgpIHtcbiAgLy8gICByZXR1cm4gdmlzaXRUeXBlWzBdO1xuICAvLyB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/convertImgToSchedule.js\n");

/***/ })

});