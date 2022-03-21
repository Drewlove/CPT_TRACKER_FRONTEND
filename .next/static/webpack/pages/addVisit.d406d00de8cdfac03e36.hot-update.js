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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ convertImgToSchedule; }\n/* harmony export */ });\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _cptCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cptCodes */ \"./lib/cptCodes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction convertImgToSchedule(lines) {\n  return getAllVisitData(lines);\n}\n\nvar getAllVisitData = function getAllVisitData(lines) {\n  var allVisitData = [];\n  lines.forEach(function (line) {\n    var visitData = getVisitData(line);\n    var visitId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();\n    if (Object.keys(visitData).length !== 0) allVisitData.push(_objectSpread(_objectSpread({}, visitData), {}, {\n      visitId: visitId\n    }));\n  });\n  return allVisitData;\n};\n\nvar getVisitData = function getVisitData(line) {\n  var visitData = {};\n  line.words.forEach(function (key) {\n    var text = key.text; // const visitType = isVisitType(text);\n\n    if (isVisitType(text)) visitData.visitType = text;\n    if (isMrn(text)) visitData.mrn = text;\n    console.log(\"visit data block: \".concat(visitData));\n    console.log(\"visit data block 2: \".concat(visitData.visitType));\n    if (visitData.visitType == null) return;\n    visitData = _objectSpread(_objectSpread(_objectSpread({}, visitData), visitType), {}, {\n      visitDate: new Date()\n    });\n  });\n  console.log(visitData);\n  return visitData;\n};\n\nvar isMrn = function isMrn(str) {\n  // MRN is usually a six digit number, Tim's mock schedule uses 9 digit #'s for MRNs\n  var strNoHyphens = str.replace(/-/g, '');\n  return strNoHyphens.length === 9 && parseInt(strNoHyphens);\n};\n\nvar isVisitType = function isVisitType(str) {\n  var visitType = _cptCodes__WEBPACK_IMPORTED_MODULE_1__.default.filter( // case insensitive comparison of each 'type' value in cptCode array with 'text'\n  function (key) {\n    return key.visitType.localeCompare(str, undefined, {\n      sensitivity: 'accent'\n    }) === 0;\n  });\n  console.log(\"str is \".concat(str, \", visitType is: \").concat(visitType));\n  console.log(visitType[0]);\n  return visitType[0]; // if (visitType?.length) {\n  //   return visitType[0];\n  // }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnZlcnRJbWdUb1NjaGVkdWxlLmpzPzc5MjciXSwibmFtZXMiOlsiY29udmVydEltZ1RvU2NoZWR1bGUiLCJsaW5lcyIsImdldEFsbFZpc2l0RGF0YSIsImFsbFZpc2l0RGF0YSIsImZvckVhY2giLCJsaW5lIiwidmlzaXREYXRhIiwiZ2V0VmlzaXREYXRhIiwidmlzaXRJZCIsInV1aWR2NCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwid29yZHMiLCJrZXkiLCJ0ZXh0IiwiaXNWaXNpdFR5cGUiLCJ2aXNpdFR5cGUiLCJpc01ybiIsIm1ybiIsImNvbnNvbGUiLCJsb2ciLCJ2aXNpdERhdGUiLCJEYXRlIiwic3RyIiwic3RyTm9IeXBoZW5zIiwicmVwbGFjZSIsInBhcnNlSW50IiwiY3B0Q29kZXMiLCJsb2NhbGVDb21wYXJlIiwidW5kZWZpbmVkIiwic2Vuc2l0aXZpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLG9CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUNsRCxTQUFPQyxlQUFlLENBQUNELEtBQUQsQ0FBdEI7QUFDRDs7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNELEtBQUQsRUFBVztBQUNqQyxNQUFNRSxZQUFZLEdBQUcsRUFBckI7QUFDQUYsT0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFFBQU1DLFNBQVMsR0FBR0MsWUFBWSxDQUFDRixJQUFELENBQTlCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHQyx3Q0FBTSxFQUF0QjtBQUNBLFFBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxTQUFaLEVBQXVCTSxNQUF2QixLQUFrQyxDQUF0QyxFQUNFVCxZQUFZLENBQUNVLElBQWIsaUNBQXVCUCxTQUF2QjtBQUFrQ0UsYUFBTyxFQUFQQTtBQUFsQztBQUNILEdBTEQ7QUFNQSxTQUFPTCxZQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixJQUFELEVBQVU7QUFDN0IsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FELE1BQUksQ0FBQ1MsS0FBTCxDQUFXVixPQUFYLENBQW1CLFVBQUNXLEdBQUQsRUFBUztBQUFBLFFBQ2xCQyxJQURrQixHQUNURCxHQURTLENBQ2xCQyxJQURrQixFQUUxQjs7QUFDQSxRQUFJQyxXQUFXLENBQUNELElBQUQsQ0FBZixFQUF1QlYsU0FBUyxDQUFDWSxTQUFWLEdBQXNCRixJQUF0QjtBQUN2QixRQUFJRyxLQUFLLENBQUNILElBQUQsQ0FBVCxFQUFpQlYsU0FBUyxDQUFDYyxHQUFWLEdBQWdCSixJQUFoQjtBQUNqQkssV0FBTyxDQUFDQyxHQUFSLDZCQUFpQ2hCLFNBQWpDO0FBQ0FlLFdBQU8sQ0FBQ0MsR0FBUiwrQkFBbUNoQixTQUFTLENBQUNZLFNBQTdDO0FBQ0EsUUFBSVosU0FBUyxDQUFDWSxTQUFWLElBQXVCLElBQTNCLEVBQWlDO0FBQ2pDWixhQUFTLGlEQUFRQSxTQUFSLEdBQXNCWSxTQUF0QjtBQUFpQ0ssZUFBUyxFQUFFLElBQUlDLElBQUo7QUFBNUMsTUFBVDtBQUNELEdBVEQ7QUFVQUgsU0FBTyxDQUFDQyxHQUFSLENBQVloQixTQUFaO0FBQ0EsU0FBT0EsU0FBUDtBQUNELENBZEQ7O0FBZ0JBLElBQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNNLEdBQUQsRUFBUztBQUNyQjtBQUNBLE1BQU1DLFlBQVksR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFyQjtBQUNBLFNBQU9ELFlBQVksQ0FBQ2QsTUFBYixLQUF3QixDQUF4QixJQUE2QmdCLFFBQVEsQ0FBQ0YsWUFBRCxDQUE1QztBQUNELENBSkQ7O0FBTUEsSUFBTVQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1EsR0FBRCxFQUFTO0FBQzNCLE1BQU1QLFNBQVMsR0FBR1cscURBQUEsRUFDaEI7QUFDQSxZQUFDZCxHQUFEO0FBQUEsV0FDRUEsR0FBRyxDQUFDRyxTQUFKLENBQWNZLGFBQWQsQ0FBNEJMLEdBQTVCLEVBQWlDTSxTQUFqQyxFQUE0QztBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBNUMsTUFDQSxDQUZGO0FBQUEsR0FGZ0IsQ0FBbEI7QUFNQVgsU0FBTyxDQUFDQyxHQUFSLGtCQUFzQkcsR0FBdEIsNkJBQTRDUCxTQUE1QztBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBUyxDQUFDLENBQUQsQ0FBckI7QUFDQSxTQUFPQSxTQUFTLENBQUMsQ0FBRCxDQUFoQixDQVQyQixDQVUzQjtBQUNBO0FBQ0E7QUFDRCxDQWJEIiwiZmlsZSI6Ii4vbGliL2NvbnZlcnRJbWdUb1NjaGVkdWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgY3B0Q29kZXMgZnJvbSAnLi9jcHRDb2Rlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnZlcnRJbWdUb1NjaGVkdWxlKGxpbmVzKSB7XG4gIHJldHVybiBnZXRBbGxWaXNpdERhdGEobGluZXMpO1xufVxuXG5jb25zdCBnZXRBbGxWaXNpdERhdGEgPSAobGluZXMpID0+IHtcbiAgY29uc3QgYWxsVmlzaXREYXRhID0gW107XG4gIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCB2aXNpdERhdGEgPSBnZXRWaXNpdERhdGEobGluZSk7XG4gICAgY29uc3QgdmlzaXRJZCA9IHV1aWR2NCgpO1xuICAgIGlmIChPYmplY3Qua2V5cyh2aXNpdERhdGEpLmxlbmd0aCAhPT0gMClcbiAgICAgIGFsbFZpc2l0RGF0YS5wdXNoKHsgLi4udmlzaXREYXRhLCB2aXNpdElkIH0pO1xuICB9KTtcbiAgcmV0dXJuIGFsbFZpc2l0RGF0YTtcbn07XG5cbmNvbnN0IGdldFZpc2l0RGF0YSA9IChsaW5lKSA9PiB7XG4gIGxldCB2aXNpdERhdGEgPSB7fTtcbiAgbGluZS53b3Jkcy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGtleTtcbiAgICAvLyBjb25zdCB2aXNpdFR5cGUgPSBpc1Zpc2l0VHlwZSh0ZXh0KTtcbiAgICBpZiAoaXNWaXNpdFR5cGUodGV4dCkpIHZpc2l0RGF0YS52aXNpdFR5cGUgPSB0ZXh0O1xuICAgIGlmIChpc01ybih0ZXh0KSkgdmlzaXREYXRhLm1ybiA9IHRleHQ7XG4gICAgY29uc29sZS5sb2coYHZpc2l0IGRhdGEgYmxvY2s6ICR7dmlzaXREYXRhfWApO1xuICAgIGNvbnNvbGUubG9nKGB2aXNpdCBkYXRhIGJsb2NrIDI6ICR7dmlzaXREYXRhLnZpc2l0VHlwZX1gKTtcbiAgICBpZiAodmlzaXREYXRhLnZpc2l0VHlwZSA9PSBudWxsKSByZXR1cm47XG4gICAgdmlzaXREYXRhID0geyAuLi52aXNpdERhdGEsIC4uLnZpc2l0VHlwZSwgdmlzaXREYXRlOiBuZXcgRGF0ZSgpIH07XG4gIH0pO1xuICBjb25zb2xlLmxvZyh2aXNpdERhdGEpO1xuICByZXR1cm4gdmlzaXREYXRhO1xufTtcblxuY29uc3QgaXNNcm4gPSAoc3RyKSA9PiB7XG4gIC8vIE1STiBpcyB1c3VhbGx5IGEgc2l4IGRpZ2l0IG51bWJlciwgVGltJ3MgbW9jayBzY2hlZHVsZSB1c2VzIDkgZGlnaXQgIydzIGZvciBNUk5zXG4gIGNvbnN0IHN0ck5vSHlwaGVucyA9IHN0ci5yZXBsYWNlKC8tL2csICcnKTtcbiAgcmV0dXJuIHN0ck5vSHlwaGVucy5sZW5ndGggPT09IDkgJiYgcGFyc2VJbnQoc3RyTm9IeXBoZW5zKTtcbn07XG5cbmNvbnN0IGlzVmlzaXRUeXBlID0gKHN0cikgPT4ge1xuICBjb25zdCB2aXNpdFR5cGUgPSBjcHRDb2Rlcy5maWx0ZXIoXG4gICAgLy8gY2FzZSBpbnNlbnNpdGl2ZSBjb21wYXJpc29uIG9mIGVhY2ggJ3R5cGUnIHZhbHVlIGluIGNwdENvZGUgYXJyYXkgd2l0aCAndGV4dCdcbiAgICAoa2V5KSA9PlxuICAgICAga2V5LnZpc2l0VHlwZS5sb2NhbGVDb21wYXJlKHN0ciwgdW5kZWZpbmVkLCB7IHNlbnNpdGl2aXR5OiAnYWNjZW50JyB9KSA9PT1cbiAgICAgIDBcbiAgKTtcbiAgY29uc29sZS5sb2coYHN0ciBpcyAke3N0cn0sIHZpc2l0VHlwZSBpczogJHt2aXNpdFR5cGV9YCk7XG4gIGNvbnNvbGUubG9nKHZpc2l0VHlwZVswXSk7XG4gIHJldHVybiB2aXNpdFR5cGVbMF07XG4gIC8vIGlmICh2aXNpdFR5cGU/Lmxlbmd0aCkge1xuICAvLyAgIHJldHVybiB2aXNpdFR5cGVbMF07XG4gIC8vIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/convertImgToSchedule.js\n");

/***/ })

});