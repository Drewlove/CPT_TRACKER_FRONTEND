/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/records/[page]",{

/***/ "./components/RecordList.js":
/*!**********************************!*\
  !*** ./components/RecordList.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/RecordList.js\";\n\n\n\n\n\nvar VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({\n  displayName: \"RecordList__VisitTypeLabelWrapper\",\n  componentId: \"sc-ee059e-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\n_c = VisitTypeLabelWrapper;\nvar VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button.withConfig({\n  displayName: \"RecordList__VisitTypeLabel\",\n  componentId: \"sc-ee059e-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\n_c2 = VisitTypeLabel;\nfunction RecordList(props) {\n  var _this = this;\n\n  var renderVisitRecordLabels = function renderVisitRecordLabels() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"MRN\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Visit Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"CPT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"RVU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderVisitRecords = function renderVisitRecords() {\n    var data = props.data;\n    console.log(data); // data.allPatientVisits.map((key) => <Record key={key.id} visit={key} />);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}\n_c3 = RecordList;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitTypeLabelWrapper\");\n$RefreshReg$(_c2, \"VisitTypeLabel\");\n$RefreshReg$(_c3, \"RecordList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRMaXN0LmpzP2M4OWIiXSwibmFtZXMiOlsiVmlzaXRUeXBlTGFiZWxXcmFwcGVyIiwic3R5bGVkIiwiVmlzaXRUeXBlTGFiZWwiLCJSZWNvcmRMaXN0IiwicHJvcHMiLCJyZW5kZXJWaXNpdFJlY29yZExhYmVscyIsInJlbmRlclZpc2l0UmVjb3JkcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2R0FBM0I7S0FBTUQscUI7QUFTTixJQUFNRSxjQUFjLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLDZDQUFwQjtNQUFNQyxjO0FBT1MsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDeEMsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLHdCQUM5Qiw4REFBQyxxQkFBRDtBQUFBLDhCQUNFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEOEI7QUFBQSxHQUFoQzs7QUFVQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQSxRQUN2QkMsSUFEdUIsR0FDZEgsS0FEYyxDQUN2QkcsSUFEdUI7QUFFL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBRitCLENBRy9CO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLGVBQ0dGLHVCQUF1QixFQUQxQixFQUVHQyxrQkFBa0IsRUFGckI7QUFBQSxrQkFERjtBQU1EO01BdkJ1QkgsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVjb3JkTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IFJlY29yZCBmcm9tICcuL1JlY29yZCc7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbiAgZmxleDogMSAxIDBweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkTGFiZWxzID0gKCkgPT4gKFxuICAgIDxWaXNpdFR5cGVMYWJlbFdyYXBwZXI+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+TVJOPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5WaXNpdCBUeXBlPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5DUFQ8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPlJWVTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+RGF0ZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgPC9WaXNpdFR5cGVMYWJlbFdyYXBwZXI+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyVmlzaXRSZWNvcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gZGF0YS5hbGxQYXRpZW50VmlzaXRzLm1hcCgoa2V5KSA9PiA8UmVjb3JkIGtleT17a2V5LmlkfSB2aXNpdD17a2V5fSAvPik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlbmRlclZpc2l0UmVjb3JkTGFiZWxzKCl9XG4gICAgICB7cmVuZGVyVmlzaXRSZWNvcmRzKCl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RecordList.js\n");

/***/ })

});