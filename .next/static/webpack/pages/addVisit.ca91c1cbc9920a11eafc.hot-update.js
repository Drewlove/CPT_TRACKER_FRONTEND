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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ convertImgToSchedule; }\n/* harmony export */ });\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _cptCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cptCodes */ \"./lib/cptCodes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction convertImgToSchedule(lines) {\n  return getAllVisitData(lines);\n}\n\nvar getAllVisitData = function getAllVisitData(lines) {\n  var allVisitData = [];\n  lines.forEach(function (line) {\n    var visitData = getVisitData(line);\n    var visitId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();\n    if (Object.keys(visitData).length !== 0) allVisitData.push(_objectSpread(_objectSpread({}, visitData), {}, {\n      visitId: visitId\n    }));\n  });\n  return allVisitData;\n};\n\nvar getVisitData = function getVisitData(line) {\n  var visitData = {};\n  line.words.forEach(function (key) {\n    var text = key.text;\n    if (isMrn(text)) visitData.mrn = text; // const visitType = isVisitType(text);\n\n    if (isVisitType(text)) visitData.text = text;\n    if (visitType == null) return;\n    visitData = _objectSpread(_objectSpread(_objectSpread({}, visitData), visitType), {}, {\n      visitDate: new Date()\n    });\n  });\n  console.log(visitData);\n  return visitData;\n};\n\nvar isMrn = function isMrn(str) {\n  // MRN is usually a six digit number, Tim's mock schedule uses 9 digit #'s for MRNs\n  var strNoHyphens = str.replace(/-/g, '');\n  console.log(strNoHyphens);\n  return strNoHyphens.length === 9 && parseInt(strNoHyphens);\n};\n\nvar isVisitType = function isVisitType(str) {\n  var visitType = _cptCodes__WEBPACK_IMPORTED_MODULE_1__.default.filter( // case insensitive comparison of each 'type' value in cptCode array with 'text'\n  function (key) {\n    return key.visitType.localeCompare(str, undefined, {\n      sensitivity: 'accent'\n    }) === 0;\n  });\n\n  if (visitType !== null && visitType !== void 0 && visitType.length) {\n    return visitType[0];\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbnZlcnRJbWdUb1NjaGVkdWxlLmpzPzc5MjciXSwibmFtZXMiOlsiY29udmVydEltZ1RvU2NoZWR1bGUiLCJsaW5lcyIsImdldEFsbFZpc2l0RGF0YSIsImFsbFZpc2l0RGF0YSIsImZvckVhY2giLCJsaW5lIiwidmlzaXREYXRhIiwiZ2V0VmlzaXREYXRhIiwidmlzaXRJZCIsInV1aWR2NCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwid29yZHMiLCJrZXkiLCJ0ZXh0IiwiaXNNcm4iLCJtcm4iLCJpc1Zpc2l0VHlwZSIsInZpc2l0VHlwZSIsInZpc2l0RGF0ZSIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwic3RyIiwic3RyTm9IeXBoZW5zIiwicmVwbGFjZSIsInBhcnNlSW50IiwiY3B0Q29kZXMiLCJsb2NhbGVDb21wYXJlIiwidW5kZWZpbmVkIiwic2Vuc2l0aXZpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLG9CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUNsRCxTQUFPQyxlQUFlLENBQUNELEtBQUQsQ0FBdEI7QUFDRDs7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNELEtBQUQsRUFBVztBQUNqQyxNQUFNRSxZQUFZLEdBQUcsRUFBckI7QUFDQUYsT0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFFBQU1DLFNBQVMsR0FBR0MsWUFBWSxDQUFDRixJQUFELENBQTlCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHQyx3Q0FBTSxFQUF0QjtBQUNBLFFBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxTQUFaLEVBQXVCTSxNQUF2QixLQUFrQyxDQUF0QyxFQUNFVCxZQUFZLENBQUNVLElBQWIsaUNBQXVCUCxTQUF2QjtBQUFrQ0UsYUFBTyxFQUFQQTtBQUFsQztBQUNILEdBTEQ7QUFNQSxTQUFPTCxZQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixJQUFELEVBQVU7QUFDN0IsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FELE1BQUksQ0FBQ1MsS0FBTCxDQUFXVixPQUFYLENBQW1CLFVBQUNXLEdBQUQsRUFBUztBQUFBLFFBQ2xCQyxJQURrQixHQUNURCxHQURTLENBQ2xCQyxJQURrQjtBQUUxQixRQUFJQyxLQUFLLENBQUNELElBQUQsQ0FBVCxFQUFpQlYsU0FBUyxDQUFDWSxHQUFWLEdBQWdCRixJQUFoQixDQUZTLENBRzFCOztBQUNBLFFBQUlHLFdBQVcsQ0FBQ0gsSUFBRCxDQUFmLEVBQXVCVixTQUFTLENBQUNVLElBQVYsR0FBaUJBLElBQWpCO0FBQ3ZCLFFBQUlJLFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUN2QmQsYUFBUyxpREFBUUEsU0FBUixHQUFzQmMsU0FBdEI7QUFBaUNDLGVBQVMsRUFBRSxJQUFJQyxJQUFKO0FBQTVDLE1BQVQ7QUFDRCxHQVBEO0FBUUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsU0FBWjtBQUNBLFNBQU9BLFNBQVA7QUFDRCxDQVpEOztBQWNBLElBQU1XLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNRLEdBQUQsRUFBUztBQUNyQjtBQUNBLE1BQU1DLFlBQVksR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFyQjtBQUNBSixTQUFPLENBQUNDLEdBQVIsQ0FBWUUsWUFBWjtBQUNBLFNBQU9BLFlBQVksQ0FBQ2QsTUFBYixLQUF3QixDQUF4QixJQUE2QmdCLFFBQVEsQ0FBQ0YsWUFBRCxDQUE1QztBQUNELENBTEQ7O0FBT0EsSUFBTVAsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ00sR0FBRCxFQUFTO0FBQzNCLE1BQU1MLFNBQVMsR0FBR1MscURBQUEsRUFDaEI7QUFDQSxZQUFDZCxHQUFEO0FBQUEsV0FDRUEsR0FBRyxDQUFDSyxTQUFKLENBQWNVLGFBQWQsQ0FBNEJMLEdBQTVCLEVBQWlDTSxTQUFqQyxFQUE0QztBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBNUMsTUFDQSxDQUZGO0FBQUEsR0FGZ0IsQ0FBbEI7O0FBTUEsTUFBSVosU0FBSixhQUFJQSxTQUFKLGVBQUlBLFNBQVMsQ0FBRVIsTUFBZixFQUF1QjtBQUNyQixXQUFPUSxTQUFTLENBQUMsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsQ0FWRCIsImZpbGUiOiIuL2xpYi9jb252ZXJ0SW1nVG9TY2hlZHVsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IGNwdENvZGVzIGZyb20gJy4vY3B0Q29kZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJ0SW1nVG9TY2hlZHVsZShsaW5lcykge1xuICByZXR1cm4gZ2V0QWxsVmlzaXREYXRhKGxpbmVzKTtcbn1cblxuY29uc3QgZ2V0QWxsVmlzaXREYXRhID0gKGxpbmVzKSA9PiB7XG4gIGNvbnN0IGFsbFZpc2l0RGF0YSA9IFtdO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgdmlzaXREYXRhID0gZ2V0VmlzaXREYXRhKGxpbmUpO1xuICAgIGNvbnN0IHZpc2l0SWQgPSB1dWlkdjQoKTtcbiAgICBpZiAoT2JqZWN0LmtleXModmlzaXREYXRhKS5sZW5ndGggIT09IDApXG4gICAgICBhbGxWaXNpdERhdGEucHVzaCh7IC4uLnZpc2l0RGF0YSwgdmlzaXRJZCB9KTtcbiAgfSk7XG4gIHJldHVybiBhbGxWaXNpdERhdGE7XG59O1xuXG5jb25zdCBnZXRWaXNpdERhdGEgPSAobGluZSkgPT4ge1xuICBsZXQgdmlzaXREYXRhID0ge307XG4gIGxpbmUud29yZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBrZXk7XG4gICAgaWYgKGlzTXJuKHRleHQpKSB2aXNpdERhdGEubXJuID0gdGV4dDtcbiAgICAvLyBjb25zdCB2aXNpdFR5cGUgPSBpc1Zpc2l0VHlwZSh0ZXh0KTtcbiAgICBpZiAoaXNWaXNpdFR5cGUodGV4dCkpIHZpc2l0RGF0YS50ZXh0ID0gdGV4dDtcbiAgICBpZiAodmlzaXRUeXBlID09IG51bGwpIHJldHVybjtcbiAgICB2aXNpdERhdGEgPSB7IC4uLnZpc2l0RGF0YSwgLi4udmlzaXRUeXBlLCB2aXNpdERhdGU6IG5ldyBEYXRlKCkgfTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHZpc2l0RGF0YSk7XG4gIHJldHVybiB2aXNpdERhdGE7XG59O1xuXG5jb25zdCBpc01ybiA9IChzdHIpID0+IHtcbiAgLy8gTVJOIGlzIHVzdWFsbHkgYSBzaXggZGlnaXQgbnVtYmVyLCBUaW0ncyBtb2NrIHNjaGVkdWxlIHVzZXMgOSBkaWdpdCAjJ3MgZm9yIE1STnNcbiAgY29uc3Qgc3RyTm9IeXBoZW5zID0gc3RyLnJlcGxhY2UoLy0vZywgJycpO1xuICBjb25zb2xlLmxvZyhzdHJOb0h5cGhlbnMpO1xuICByZXR1cm4gc3RyTm9IeXBoZW5zLmxlbmd0aCA9PT0gOSAmJiBwYXJzZUludChzdHJOb0h5cGhlbnMpO1xufTtcblxuY29uc3QgaXNWaXNpdFR5cGUgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IHZpc2l0VHlwZSA9IGNwdENvZGVzLmZpbHRlcihcbiAgICAvLyBjYXNlIGluc2Vuc2l0aXZlIGNvbXBhcmlzb24gb2YgZWFjaCAndHlwZScgdmFsdWUgaW4gY3B0Q29kZSBhcnJheSB3aXRoICd0ZXh0J1xuICAgIChrZXkpID0+XG4gICAgICBrZXkudmlzaXRUeXBlLmxvY2FsZUNvbXBhcmUoc3RyLCB1bmRlZmluZWQsIHsgc2Vuc2l0aXZpdHk6ICdhY2NlbnQnIH0pID09PVxuICAgICAgMFxuICApO1xuICBpZiAodmlzaXRUeXBlPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdmlzaXRUeXBlWzBdO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/convertImgToSchedule.js\n");

/***/ })

});