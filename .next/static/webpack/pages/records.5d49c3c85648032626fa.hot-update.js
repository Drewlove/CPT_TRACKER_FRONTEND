/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/records",{

/***/ "./components/Record.js":
/*!******************************!*\
  !*** ./components/Record.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Record; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Record.js\";\n\n\nvar VisitRecord = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.a.withConfig({\n  displayName: \"Record__VisitRecord\",\n  componentId: \"sc-1wi8xkh-0\"\n})([\"display:flex;justify-content:space-around;border:3px solid lightgray;margin:5px 0px;border-radius:10px;padding:5px;:hover{text-decoration:none;background-color:gray;color:white;cursor:pointer;}\"]);\n_c = VisitRecord;\nvar VisitRecordItem = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({\n  displayName: \"Record__VisitRecordItem\",\n  componentId: \"sc-1wi8xkh-1\"\n})([\"flex:1 1 0px;display:flex;justify-content:center;align-items:center;justify-content:center;\"]);\n_c2 = VisitRecordItem;\nfunction Record(props) {\n  var _props$visit = props.visit,\n      mrn = _props$visit.mrn,\n      cpt = _props$visit.cpt,\n      rvu = _props$visit.rvu,\n      visitType = _props$visit.visitType,\n      id = _props$visit.id;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecord, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n      children: mrn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n      children: visitType\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n      children: cpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n      children: rvu\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n_c3 = Record;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitRecord\");\n$RefreshReg$(_c2, \"VisitRecordItem\");\n$RefreshReg$(_c3, \"Record\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmQuanM/OTdkNCJdLCJuYW1lcyI6WyJWaXNpdFJlY29yZCIsInN0eWxlZCIsIlZpc2l0UmVjb3JkSXRlbSIsIlJlY29yZCIsInByb3BzIiwidmlzaXQiLCJtcm4iLCJjcHQiLCJydnUiLCJ2aXNpdFR5cGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsbUVBQUg7QUFBQTtBQUFBO0FBQUEseU1BQWpCO0tBQU1ELFc7QUFlTixJQUFNRSxlQUFlLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFyQjtNQUFNQyxlO0FBUVMsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQSxxQkFDS0EsS0FBSyxDQUFDQyxLQURYO0FBQUEsTUFDNUJDLEdBRDRCLGdCQUM1QkEsR0FENEI7QUFBQSxNQUN2QkMsR0FEdUIsZ0JBQ3ZCQSxHQUR1QjtBQUFBLE1BQ2xCQyxHQURrQixnQkFDbEJBLEdBRGtCO0FBQUEsTUFDYkMsU0FEYSxnQkFDYkEsU0FEYTtBQUFBLE1BQ0ZDLEVBREUsZ0JBQ0ZBLEVBREU7QUFFcEMsc0JBQ0UsOERBQUMsV0FBRDtBQUFBLDRCQUdFLDhEQUFDLGVBQUQ7QUFBQSxnQkFBa0JKO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLGVBQUQ7QUFBQSxnQkFBa0JHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLGVBQUQ7QUFBQSxnQkFBa0JGO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLGVBQUQ7QUFBQSxnQkFBa0JDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO01BWnVCTCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWNvcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFZpc2l0UmVjb3JkID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICA6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFZpc2l0UmVjb3JkSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZChwcm9wcykge1xuICBjb25zdCB7IG1ybiwgY3B0LCBydnUsIHZpc2l0VHlwZSwgaWQgfSA9IHByb3BzLnZpc2l0O1xuICByZXR1cm4gKFxuICAgIDxWaXNpdFJlY29yZD5cbiAgICAgIHsvKiA8TGluayBocmVmPXtgL3JlY29yZC8ke2lkfWB9IC8+ICovfVxuXG4gICAgICA8VmlzaXRSZWNvcmRJdGVtPnttcm59PC9WaXNpdFJlY29yZEl0ZW0+XG4gICAgICA8VmlzaXRSZWNvcmRJdGVtPnt2aXNpdFR5cGV9PC9WaXNpdFJlY29yZEl0ZW0+XG4gICAgICA8VmlzaXRSZWNvcmRJdGVtPntjcHR9PC9WaXNpdFJlY29yZEl0ZW0+XG4gICAgICA8VmlzaXRSZWNvcmRJdGVtPntydnV9PC9WaXNpdFJlY29yZEl0ZW0+XG4gICAgPC9WaXNpdFJlY29yZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Record.js\n");

/***/ })

});