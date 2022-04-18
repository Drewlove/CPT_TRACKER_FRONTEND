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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/RecordList.js\";\n\n\n\n\n\nvar VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({\n  displayName: \"RecordList__VisitTypeLabelWrapper\",\n  componentId: \"sc-ee059e-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\n_c = VisitTypeLabelWrapper;\nvar VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button.withConfig({\n  displayName: \"RecordList__VisitTypeLabel\",\n  componentId: \"sc-ee059e-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\n_c2 = VisitTypeLabel;\nfunction RecordList(props) {\n  var _this = this;\n\n  var renderVisitRecordLabels = function renderVisitRecordLabels() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"MRN\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Visit Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"CPT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"RVU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderVisitRecords = function renderVisitRecords() {\n    var data = props.data;\n    data.allPatientVisits.map(function (key) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_2__.default, {\n        visit: key\n      }, key.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 40\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}\n_c3 = RecordList;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitTypeLabelWrapper\");\n$RefreshReg$(_c2, \"VisitTypeLabel\");\n$RefreshReg$(_c3, \"RecordList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRMaXN0LmpzP2M4OWIiXSwibmFtZXMiOlsiVmlzaXRUeXBlTGFiZWxXcmFwcGVyIiwic3R5bGVkIiwiVmlzaXRUeXBlTGFiZWwiLCJSZWNvcmRMaXN0IiwicHJvcHMiLCJyZW5kZXJWaXNpdFJlY29yZExhYmVscyIsInJlbmRlclZpc2l0UmVjb3JkcyIsImRhdGEiLCJhbGxQYXRpZW50VmlzaXRzIiwibWFwIiwia2V5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUEzQjtLQUFNRCxxQjtBQVNOLElBQU1FLGNBQWMsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQXBCO01BQU1DLGM7QUFPUyxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUN4QyxNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCO0FBQUEsd0JBQzlCLDhEQUFDLHFCQUFEO0FBQUEsOEJBQ0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ4QjtBQUFBLEdBQWhDOztBQVVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBLFFBQ3ZCQyxJQUR1QixHQUNkSCxLQURjLENBQ3ZCRyxJQUR1QjtBQUUvQkEsUUFBSSxDQUFDQyxnQkFBTCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsR0FBRDtBQUFBLDBCQUFTLDhEQUFDLDRDQUFEO0FBQXFCLGFBQUssRUFBRUE7QUFBNUIsU0FBYUEsR0FBRyxDQUFDQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUFBQSxLQUExQjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBQSxlQUNHTix1QkFBdUIsRUFEMUIsRUFFR0Msa0JBQWtCLEVBRnJCO0FBQUEsa0JBREY7QUFNRDtNQXRCdUJILFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY29yZExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBSZWNvcmQgZnJvbSAnLi9SZWNvcmQnO1xuXG5jb25zdCBWaXNpdFR5cGVMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG5gO1xuXG5jb25zdCBWaXNpdFR5cGVMYWJlbCA9IHN0eWxlZC5idXR0b25gXG4gIGZsZXg6IDEgMSAwcHg7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3JkTGlzdChwcm9wcykge1xuICBjb25zdCByZW5kZXJWaXNpdFJlY29yZExhYmVscyA9ICgpID0+IChcbiAgICA8VmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPk1STjwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+VmlzaXQgVHlwZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+Q1BUPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5SVlU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPkRhdGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgIDwvVmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICApO1xuXG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuICAgIGRhdGEuYWxsUGF0aWVudFZpc2l0cy5tYXAoKGtleSkgPT4gPFJlY29yZCBrZXk9e2tleS5pZH0gdmlzaXQ9e2tleX0gLz4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJWaXNpdFJlY29yZExhYmVscygpfVxuICAgICAge3JlbmRlclZpc2l0UmVjb3JkcygpfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RecordList.js\n");

/***/ })

});