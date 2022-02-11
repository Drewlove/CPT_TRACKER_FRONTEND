/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addVisit",{

/***/ "./components/VisitType/VisitType.js":
/*!*******************************************!*\
  !*** ./components/VisitType/VisitType.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ visitType; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/VisitType/VisitType.js\";\n // How to update each item? Work onChange handler\n// name for each input needs to be specific to that input,\n// ie you will get multiple inputs with name of 'mrn', 'visitType' etc.\n// since each daily schedule line will generate an mrn, visitType, etc.\n\nvar VisitType = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({\n  displayName: \"VisitType\",\n  componentId: \"sc-esqyn6-0\"\n})([\"display:flex;\"]); // how to pass onChange handler?\n// export default function visitType({ props }) {\n\n_c = VisitType;\nfunction visitType(props) {\n  console.log(props);\n  var _props$visitData = props.visitData,\n      mrn = _props$visitData.mrn,\n      data = _props$visitData.data,\n      type = _props$visitData.type,\n      cpt = _props$visitData.cpt,\n      rvu = _props$visitData.rvu,\n      visitId = _props$visitData.visitId;\n\n  var handleChange = function handleChange(e, visitId) {\n    console.log(\"test\", visitId);\n    props.handleChange(e, visitId);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitType, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"mrn-\".concat(visitId),\n      children: [\"MRN\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        id: \"mrn-\".concat(visitId),\n        name: \"mrn\",\n        placeholder: \"0\",\n        value: mrn,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"visitType-\".concat(visitId),\n      children: [\"Visit Type\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"visitType-\".concat(visitId),\n        name: \"visitType\",\n        placeholder: \"0\",\n        value: visitType,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"cpt-\".concat(visitId),\n      children: [\"CPT\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        id: \"cpt-\".concat(visitId),\n        name: \"cpt\",\n        placeholder: \"0\",\n        value: cpt,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"rvu-\".concat(visitId),\n      children: [\"RVU\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"number\",\n        id: \"rvu-\".concat(visitId),\n        name: \"rvu\",\n        placeholder: \"0\",\n        value: visitData.rvu,\n        onChange: function onChange(e) {\n          return handleChange(e, visitId);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"VisitType\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXNpdFR5cGUvVmlzaXRUeXBlLmpzPzA3NDciXSwibmFtZXMiOlsiVmlzaXRUeXBlIiwic3R5bGVkIiwidmlzaXRUeXBlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidmlzaXREYXRhIiwibXJuIiwiZGF0YSIsInR5cGUiLCJjcHQiLCJydnUiLCJ2aXNpdElkIiwiaGFuZGxlQ2hhbmdlIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztDQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEscUJBQWYsQyxDQUlBO0FBRUE7O0tBTk1ELFM7QUFPUyxTQUFTRSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFEdUMseUJBRVFBLEtBQUssQ0FBQ0csU0FGZDtBQUFBLE1BRS9CQyxHQUYrQixvQkFFL0JBLEdBRitCO0FBQUEsTUFFMUJDLElBRjBCLG9CQUUxQkEsSUFGMEI7QUFBQSxNQUVwQkMsSUFGb0Isb0JBRXBCQSxJQUZvQjtBQUFBLE1BRWRDLEdBRmMsb0JBRWRBLEdBRmM7QUFBQSxNQUVUQyxHQUZTLG9CQUVUQSxHQUZTO0FBQUEsTUFFSkMsT0FGSSxvQkFFSkEsT0FGSTs7QUFJdkMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFJRixPQUFKLEVBQWdCO0FBQ25DUixXQUFPLENBQUNDLEdBQVIsU0FBb0JPLE9BQXBCO0FBQ0FULFNBQUssQ0FBQ1UsWUFBTixDQUFtQkMsQ0FBbkIsRUFBc0JGLE9BQXRCO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBTyxhQUFPLGdCQUFTQSxPQUFULENBQWQ7QUFBQSxxQ0FFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsVUFBRSxnQkFBU0EsT0FBVCxDQUZKO0FBR0UsWUFBSSxFQUFDLEtBSFA7QUFJRSxtQkFBVyxFQUFDLEdBSmQ7QUFLRSxhQUFLLEVBQUVMLEdBTFQ7QUFNRSxnQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsaUJBQU9ELFlBQVksQ0FBQ0MsQ0FBRCxFQUFJRixPQUFKLENBQW5CO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFZRTtBQUFPLGFBQU8sc0JBQWVBLE9BQWYsQ0FBZDtBQUFBLDRDQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLHNCQUFlQSxPQUFmLENBRko7QUFHRSxZQUFJLEVBQUMsV0FIUDtBQUlFLG1CQUFXLEVBQUMsR0FKZDtBQUtFLGFBQUssRUFBRVYsU0FMVDtBQU1FLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxpQkFBT0QsWUFBWSxDQUFDQyxDQUFELEVBQUlGLE9BQUosQ0FBbkI7QUFBQTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQXdCRTtBQUFPLGFBQU8sZ0JBQVNBLE9BQVQsQ0FBZDtBQUFBLHFDQUVFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxVQUFFLGdCQUFTQSxPQUFULENBRko7QUFHRSxZQUFJLEVBQUMsS0FIUDtBQUlFLG1CQUFXLEVBQUMsR0FKZDtBQUtFLGFBQUssRUFBRUYsR0FMVDtBQU1FLGdCQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSxpQkFBT0QsWUFBWSxDQUFDQyxDQUFELEVBQUlGLE9BQUosQ0FBbkI7QUFBQTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsZUFtQ0U7QUFBTyxhQUFPLGdCQUFTQSxPQUFULENBQWQ7QUFBQSxxQ0FFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsVUFBRSxnQkFBU0EsT0FBVCxDQUZKO0FBR0UsWUFBSSxFQUFDLEtBSFA7QUFJRSxtQkFBVyxFQUFDLEdBSmQ7QUFLRSxhQUFLLEVBQUVOLFNBQVMsQ0FBQ0ssR0FMbkI7QUFNRSxnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9ELFlBQVksQ0FBQ0MsQ0FBRCxFQUFJRixPQUFKLENBQW5CO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9WaXNpdFR5cGUvVmlzaXRUeXBlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBIb3cgdG8gdXBkYXRlIGVhY2ggaXRlbT8gV29yayBvbkNoYW5nZSBoYW5kbGVyXG5cbi8vIG5hbWUgZm9yIGVhY2ggaW5wdXQgbmVlZHMgdG8gYmUgc3BlY2lmaWMgdG8gdGhhdCBpbnB1dCxcbi8vIGllIHlvdSB3aWxsIGdldCBtdWx0aXBsZSBpbnB1dHMgd2l0aCBuYW1lIG9mICdtcm4nLCAndmlzaXRUeXBlJyBldGMuXG4vLyBzaW5jZSBlYWNoIGRhaWx5IHNjaGVkdWxlIGxpbmUgd2lsbCBnZW5lcmF0ZSBhbiBtcm4sIHZpc2l0VHlwZSwgZXRjLlxuXG5jb25zdCBWaXNpdFR5cGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuLy8gaG93IHRvIHBhc3Mgb25DaGFuZ2UgaGFuZGxlcj9cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaXRUeXBlKHsgcHJvcHMgfSkge1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaXRUeXBlKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgeyBtcm4sIGRhdGEsIHR5cGUsIGNwdCwgcnZ1LCB2aXNpdElkIH0gPSBwcm9wcy52aXNpdERhdGE7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHZpc2l0SWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgdGVzdGAsIHZpc2l0SWQpO1xuICAgIHByb3BzLmhhbmRsZUNoYW5nZShlLCB2aXNpdElkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxWaXNpdFR5cGU+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17YG1ybi0ke3Zpc2l0SWR9YH0+XG4gICAgICAgIE1STlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD17YG1ybi0ke3Zpc2l0SWR9YH1cbiAgICAgICAgICBuYW1lPVwibXJuXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgIHZhbHVlPXttcm59XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgdmlzaXRJZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2B2aXNpdFR5cGUtJHt2aXNpdElkfWB9PlxuICAgICAgICBWaXNpdCBUeXBlXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD17YHZpc2l0VHlwZS0ke3Zpc2l0SWR9YH1cbiAgICAgICAgICBuYW1lPVwidmlzaXRUeXBlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgIHZhbHVlPXt2aXNpdFR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgdmlzaXRJZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj17YGNwdC0ke3Zpc2l0SWR9YH0+XG4gICAgICAgIENQVFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD17YGNwdC0ke3Zpc2l0SWR9YH1cbiAgICAgICAgICBuYW1lPVwiY3B0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgIHZhbHVlPXtjcHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgdmlzaXRJZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2BydnUtJHt2aXNpdElkfWB9PlxuICAgICAgICBSVlVcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9e2BydnUtJHt2aXNpdElkfWB9XG4gICAgICAgICAgbmFtZT1cInJ2dVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcbiAgICAgICAgICB2YWx1ZT17dmlzaXREYXRhLnJ2dX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCB2aXNpdElkKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9WaXNpdFR5cGU+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VisitType/VisitType.js\n");

/***/ })

});