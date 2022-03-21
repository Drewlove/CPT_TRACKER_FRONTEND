/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/records",{

/***/ "./components/Records.js":
/*!*******************************!*\
  !*** ./components/Records.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query SORT_VISITS {\\n    allPatientVisits(sortBy: mrn_ASC) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\\n    allPatientVisits(first: $first, skip: $skip) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n // NEXT: PAGINATION\n// NEXT: sort by mrn, cpt, rvu,\n// only retrieve records with specific mrn, cpt, rvu\n\nvar ALL_PATIENT_VISITS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nvar SORT_VISITS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject2());\nvar VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"Records__VisitTypeLabelWrapper\",\n  componentId: \"sc-bxqmhb-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\n_c = VisitTypeLabelWrapper;\nvar VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button.withConfig({\n  displayName: \"Records__VisitTypeLabel\",\n  componentId: \"sc-bxqmhb-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\n_c2 = VisitTypeLabel;\nfunction Records(_ref) {\n  _s();\n\n  var _this = this;\n\n  var page = _ref.page;\n\n  var handleClick = function handleClick() {\n    refetch();\n  }; // NEXT: how to sort data by MRN, and other variables (CPT, RVU, visit type)\n  // do you just manually sort the data? i.e. do NOT run another query, just sort the data\n  // that was already retrieved from the first query? This might be the answer\n  // In doing so, how to label 'data', 'error', and 'loading'\n  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked\n  // THEN, update and delete records\n  // const {data, error, loading, refetch } = useQuery(SORT_VISITS);\n\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_3__.perPage - _config__WEBPACK_IMPORTED_MODULE_3__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_3__.perPage\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 23\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 21\n  }, this);\n\n  var renderVisitRecordLabels = function renderVisitRecordLabels() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        onClick: function onClick() {\n          return handleClick();\n        },\n        children: \"MRN\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Visit Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"CPT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"RVU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderVisitRecords = function renderVisitRecords() {\n    return data.allPatientVisits.map(function (visit) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_4__.default, {\n        visit: visit\n      }, visit.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 7\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}\n\n_s(Records, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery];\n});\n\n_c3 = Records;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitTypeLabelWrapper\");\n$RefreshReg$(_c2, \"VisitTypeLabel\");\n$RefreshReg$(_c3, \"Records\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRzLmpzPzFiYTAiXSwibmFtZXMiOlsiQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZIiwiZ3FsIiwiU09SVF9WSVNJVFMiLCJWaXNpdFR5cGVMYWJlbFdyYXBwZXIiLCJzdHlsZWQiLCJWaXNpdFR5cGVMYWJlbCIsIlJlY29yZHMiLCJwYWdlIiwiaGFuZGxlQ2xpY2siLCJyZWZldGNoIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJza2lwIiwicGVyUGFnZSIsImZpcnN0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInJlbmRlclZpc2l0UmVjb3JkTGFiZWxzIiwicmVuZGVyVmlzaXRSZWNvcmRzIiwiYWxsUGF0aWVudFZpc2l0cyIsIm1hcCIsInZpc2l0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLG9EQUFILG1CQUE5QjtBQWFBLElBQU1DLFdBQVcsR0FBR0Qsb0RBQUgsb0JBQWpCO0FBYUEsSUFBTUUscUJBQXFCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUEzQjtLQUFNRCxxQjtBQVNOLElBQU1FLGNBQWMsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQXBCO01BQU1DLGM7QUFPUyxTQUFTQyxPQUFULE9BQTJCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUN4QyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxXQUFPO0FBQ1IsR0FGRCxDQUR3QyxDQUt4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBWndDLGtCQWNQQyx3REFBUSxDQUFDVix3QkFBRCxFQUEyQjtBQUNsRVcsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRUwsSUFBSSxHQUFHTSw0Q0FBUCxHQUFpQkEsNENBRGQ7QUFFVEMsV0FBSyxFQUFFRCw0Q0FBT0E7QUFGTDtBQUR1RCxHQUEzQixDQWREO0FBQUEsTUFjaENFLElBZGdDLGFBY2hDQSxJQWRnQztBQUFBLE1BYzFCQyxLQWQwQixhQWMxQkEsS0FkMEI7QUFBQSxNQWNuQkMsT0FkbUIsYUFjbkJBLE9BZG1COztBQW9CeEMsTUFBSUEsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FwQjJCLENBcUJ4Qzs7QUFDQSxNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDs7QUFFWCxNQUFNRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCO0FBQUEsd0JBQzlCLDhEQUFDLHFCQUFEO0FBQUEsOEJBQ0UsOERBQUMsY0FBRDtBQUFnQixlQUFPLEVBQUU7QUFBQSxpQkFBTVYsV0FBVyxFQUFqQjtBQUFBLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDhCO0FBQUEsR0FBaEM7O0FBVUEsTUFBTVcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFdBQ3pCSixJQUFJLENBQUNLLGdCQUFMLENBQXNCQyxHQUF0QixDQUEwQixVQUFDQyxLQUFEO0FBQUEsMEJBQ3hCLDhEQUFDLDRDQUFEO0FBQXVCLGFBQUssRUFBRUE7QUFBOUIsU0FBYUEsS0FBSyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCO0FBQUEsS0FBMUIsQ0FEeUI7QUFBQSxHQUEzQjs7QUFLQSxzQkFDRTtBQUFBLGVBQ0dMLHVCQUF1QixFQUQxQixFQUVHQyxrQkFBa0IsRUFGckI7QUFBQSxrQkFERjtBQVFEOztHQS9DdUJiLE87VUFjV0ksb0Q7OztNQWRYSixPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWNvcmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IFJlY29yZCBmcm9tICcuL1JlY29yZCc7XG5cbi8vIE5FWFQ6IFBBR0lOQVRJT05cbi8vIE5FWFQ6IHNvcnQgYnkgbXJuLCBjcHQsIHJ2dSxcbi8vIG9ubHkgcmV0cmlldmUgcmVjb3JkcyB3aXRoIHNwZWNpZmljIG1ybiwgY3B0LCBydnVcblxuY29uc3QgQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XG4gICAgYWxsUGF0aWVudFZpc2l0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIG1yblxuICAgICAgdmlzaXRUeXBlXG4gICAgICB2aXNpdERhdGVcbiAgICAgIGNwdFxuICAgICAgcnZ1XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTT1JUX1ZJU0lUUyA9IGdxbGBcbiAgcXVlcnkgU09SVF9WSVNJVFMge1xuICAgIGFsbFBhdGllbnRWaXNpdHMoc29ydEJ5OiBtcm5fQVNDKSB7XG4gICAgICBpZFxuICAgICAgbXJuXG4gICAgICB2aXNpdFR5cGVcbiAgICAgIHZpc2l0RGF0ZVxuICAgICAgY3B0XG4gICAgICBydnVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbiAgZmxleDogMSAxIDBweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzKHsgcGFnZSB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHJlZmV0Y2goKTtcbiAgfTtcblxuICAvLyBORVhUOiBob3cgdG8gc29ydCBkYXRhIGJ5IE1STiwgYW5kIG90aGVyIHZhcmlhYmxlcyAoQ1BULCBSVlUsIHZpc2l0IHR5cGUpXG4gIC8vIGRvIHlvdSBqdXN0IG1hbnVhbGx5IHNvcnQgdGhlIGRhdGE/IGkuZS4gZG8gTk9UIHJ1biBhbm90aGVyIHF1ZXJ5LCBqdXN0IHNvcnQgdGhlIGRhdGFcbiAgLy8gdGhhdCB3YXMgYWxyZWFkeSByZXRyaWV2ZWQgZnJvbSB0aGUgZmlyc3QgcXVlcnk/IFRoaXMgbWlnaHQgYmUgdGhlIGFuc3dlclxuICAvLyBJbiBkb2luZyBzbywgaG93IHRvIGxhYmVsICdkYXRhJywgJ2Vycm9yJywgYW5kICdsb2FkaW5nJ1xuICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MjM0MDY5Ny9yZWFjdC1xdWVyeS1ob3ctdG8tdXNlcXVlcnktd2hlbi1idXR0b24taXMtY2xpY2tlZFxuXG4gIC8vIFRIRU4sIHVwZGF0ZSBhbmQgZGVsZXRlIHJlY29yZHNcbiAgLy8gY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nLCByZWZldGNoIH0gPSB1c2VRdWVyeShTT1JUX1ZJU0lUUyk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2UsXG4gICAgICBmaXJzdDogcGVyUGFnZSxcbiAgICB9LFxuICB9KTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcblxuICBjb25zdCByZW5kZXJWaXNpdFJlY29yZExhYmVscyA9ICgpID0+IChcbiAgICA8VmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9Pk1STjwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+VmlzaXQgVHlwZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+Q1BUPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5SVlU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPkRhdGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgIDwvVmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICApO1xuXG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkcyA9ICgpID0+XG4gICAgZGF0YS5hbGxQYXRpZW50VmlzaXRzLm1hcCgodmlzaXQpID0+IChcbiAgICAgIDxSZWNvcmQga2V5PXt2aXNpdC5pZH0gdmlzaXQ9e3Zpc2l0fSAvPlxuICAgICkpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJWaXNpdFJlY29yZExhYmVscygpfVxuICAgICAge3JlbmRlclZpc2l0UmVjb3JkcygpfVxuXG4gICAgICB7LyogPFByb2R1Y3RzTGlzdFN0eWxlcz57ZGlzcGxheVByb2R1Y3RzKCl9PC9Qcm9kdWN0c0xpc3RTdHlsZXM+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ })

});