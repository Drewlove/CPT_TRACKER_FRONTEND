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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Record; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_VisitTypeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/VisitTypeStyles */ \"./components/styles/VisitTypeStyles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Record.js\";\n\n // const VisitRecord = styled.div`\n//   display: flex;\n//   justify-content: space-around;\n// `;\n// const VisitRecordItem = styled.p`\n//   flex: 1 1 0px;\n// `;\n\nfunction Record(props) {\n  var _props$visitData = props.visitData,\n      mrn = _props$visitData.mrn,\n      cpt = _props$visitData.cpt,\n      rvu = _props$visitData.rvu,\n      visitType = _props$visitData.visitType;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_VisitTypeStyles__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"mrn-\".concat(visitId),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        id: \"mrn-\".concat(visitId),\n        name: \"mrn\",\n        placeholder: \"0\",\n        value: mrn,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"visitType-\".concat(visitId),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"visitType-\".concat(visitId),\n        name: \"visitType\",\n        placeholder: \"\",\n        value: visitType,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"cpt-\".concat(visitId),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        id: \"cpt-\".concat(visitId),\n        name: \"cpt\",\n        placeholder: \"0\",\n        value: cpt,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"rvu-\".concat(visitId),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        id: \"rvu-\".concat(visitId),\n        name: \"rvu\",\n        placeholder: \"0\",\n        value: rvu,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n_c = Record;\n\nvar _c;\n\n$RefreshReg$(_c, \"Record\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmQuanM/OTdkNCJdLCJuYW1lcyI6WyJSZWNvcmQiLCJwcm9wcyIsInZpc2l0RGF0YSIsIm1ybiIsImNwdCIsInJ2dSIsInZpc2l0VHlwZSIsInZpc2l0SWQiLCJlIiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBLHlCQUNDQSxLQUFLLENBQUNDLFNBRFA7QUFBQSxNQUM1QkMsR0FENEIsb0JBQzVCQSxHQUQ0QjtBQUFBLE1BQ3ZCQyxHQUR1QixvQkFDdkJBLEdBRHVCO0FBQUEsTUFDbEJDLEdBRGtCLG9CQUNsQkEsR0FEa0I7QUFBQSxNQUNiQyxTQURhLG9CQUNiQSxTQURhO0FBRXBDLHNCQUNFLDhEQUFDLDREQUFEO0FBQUEsNEJBQ0U7QUFBTyxhQUFPLGdCQUFTQyxPQUFULENBQWQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsVUFBRSxnQkFBU0EsT0FBVCxDQUZKO0FBR0UsWUFBSSxFQUFDLEtBSFA7QUFJRSxtQkFBVyxFQUFDLEdBSmQ7QUFLRSxhQUFLLEVBQUVKLEdBTFQ7QUFNRSxnQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsaUJBQU9DLFlBQVksQ0FBQ0QsQ0FBRCxFQUFJRCxPQUFKLENBQW5CO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBTyxhQUFPLHNCQUFlQSxPQUFmLENBQWQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsVUFBRSxzQkFBZUEsT0FBZixDQUZKO0FBR0UsWUFBSSxFQUFDLFdBSFA7QUFJRSxtQkFBVyxFQUFDLEVBSmQ7QUFLRSxhQUFLLEVBQUVELFNBTFQ7QUFNRSxnQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsaUJBQU9DLFlBQVksQ0FBQ0QsQ0FBRCxFQUFJRCxPQUFKLENBQW5CO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBc0JFO0FBQU8sYUFBTyxnQkFBU0EsT0FBVCxDQUFkO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLFVBQUUsZ0JBQVNBLE9BQVQsQ0FGSjtBQUdFLFlBQUksRUFBQyxLQUhQO0FBSUUsbUJBQVcsRUFBQyxHQUpkO0FBS0UsYUFBSyxFQUFFSCxHQUxUO0FBTUUsZ0JBQVEsRUFBRSxrQkFBQ0ksQ0FBRDtBQUFBLGlCQUFPQyxZQUFZLENBQUNELENBQUQsRUFBSUQsT0FBSixDQUFuQjtBQUFBO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkYsZUFnQ0U7QUFBTyxhQUFPLGdCQUFTQSxPQUFULENBQWQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsVUFBRSxnQkFBU0EsT0FBVCxDQUZKO0FBR0UsWUFBSSxFQUFDLEtBSFA7QUFJRSxtQkFBVyxFQUFDLEdBSmQ7QUFLRSxhQUFLLEVBQUVGLEdBTFQ7QUFNRSxnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9DLFlBQVksQ0FBQ0QsQ0FBRCxFQUFJRCxPQUFKLENBQW5CO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZDRDtLQS9DdUJQLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFZpc2l0VHlwZSBmcm9tICcuL3N0eWxlcy9WaXNpdFR5cGVTdHlsZXMnO1xuXG4vLyBjb25zdCBWaXNpdFJlY29yZCA9IHN0eWxlZC5kaXZgXG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuLy8gYDtcblxuLy8gY29uc3QgVmlzaXRSZWNvcmRJdGVtID0gc3R5bGVkLnBgXG4vLyAgIGZsZXg6IDEgMSAwcHg7XG4vLyBgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmQocHJvcHMpIHtcbiAgY29uc3QgeyBtcm4sIGNwdCwgcnZ1LCB2aXNpdFR5cGUgfSA9IHByb3BzLnZpc2l0RGF0YTtcbiAgcmV0dXJuIChcbiAgICA8VmlzaXRUeXBlPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2Btcm4tJHt2aXNpdElkfWB9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD17YG1ybi0ke3Zpc2l0SWR9YH1cbiAgICAgICAgICBuYW1lPVwibXJuXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgIHZhbHVlPXttcm59XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgdmlzaXRJZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2B2aXNpdFR5cGUtJHt2aXNpdElkfWB9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9e2B2aXNpdFR5cGUtJHt2aXNpdElkfWB9XG4gICAgICAgICAgbmFtZT1cInZpc2l0VHlwZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIHZhbHVlPXt2aXNpdFR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgdmlzaXRJZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj17YGNwdC0ke3Zpc2l0SWR9YH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPXtgY3B0LSR7dmlzaXRJZH1gfVxuICAgICAgICAgIG5hbWU9XCJjcHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXG4gICAgICAgICAgdmFsdWU9e2NwdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCB2aXNpdElkKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17YHJ2dS0ke3Zpc2l0SWR9YH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPXtgcnZ1LSR7dmlzaXRJZH1gfVxuICAgICAgICAgIG5hbWU9XCJydnVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXG4gICAgICAgICAgdmFsdWU9e3J2dX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCB2aXNpdElkKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9WaXNpdFR5cGU+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Record.js\n");

/***/ })

});