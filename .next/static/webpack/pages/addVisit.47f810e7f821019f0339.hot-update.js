/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addVisit",{

/***/ "./components/Records.js":
/*!*******************************!*\
  !*** ./components/Records.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PATIENT_VISITS_QUERY\": function() { return /* binding */ ALL_PATIENT_VISITS_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* harmony import */ var _AdvancedSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdvancedSearch */ \"./components/AdvancedSearch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\\n    allPatientVisits(first: $first, skip: $skip) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n // NEXT: sort by mrn, cpt, rvu,\n// only retrieve records with specific mrn, cpt, rvu\n\nvar ALL_PATIENT_VISITS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject()); // const SORT_VISITS = gql`\n//   query SORT_VISITS {\n//     allPatientVisits(sortBy: mrn_ASC) {\n//       id\n//       mrn\n//       visitType\n//       visitDate\n//       cpt\n//       rvu\n//     }\n//   }\n// `;\n\nvar VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({\n  displayName: \"Records__VisitTypeLabelWrapper\",\n  componentId: \"sc-bxqmhb-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\n_c = VisitTypeLabelWrapper;\nvar VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.button.withConfig({\n  displayName: \"Records__VisitTypeLabel\",\n  componentId: \"sc-bxqmhb-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\n_c2 = VisitTypeLabel;\nfunction Records(_ref) {\n  _s();\n\n  var _this = this;\n\n  var page = _ref.page;\n  // const { data, error, loading } = useQuery(ALL_PATIENT_VISITS_QUERY, {\n  //   variables: {\n  //     skip: page * perPage - perPage,\n  //     first: perPage,\n  //   },\n  // });\n  var allVisits = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_4__.perPage - _config__WEBPACK_IMPORTED_MODULE_4__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_4__.perPage\n    }\n  }); // START HERE\n  // useLazyQuery seems to fire automatically,\n  // see this thread: https://github.com/apollographql/apollo-client/issues/7484\n  // use skip to fix? See comment by \"pronovaso \".\n  // const handleClick = (e) => {\n  //   e.preventDefault();\n  //   console.log('click');\n  //   filterVisitsMrn();\n  // };\n  // const handleClick = () => {\n  //   refetch();\n  // };\n  // NEXT:\n  // how to sort data by MRN, and other variables (CPT, RVU, visit type, date)\n  // do you just manually sort the data? i.e. do NOT run another query, just sort the data\n  // that was already retrieved from the first query? This might be the answer\n  // In doing so, how to label 'data', 'error', and 'loading'\n  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked\n  // THEN, sort by all input types (MRN, CPT, RVU, Date)\n  // THEN, advanced search: filter for visits within certain date ranges, or just one mrn, or just one visit type\n  // THEN, update and delete records\n  // const {data, error, loading, refetch } = useQuery(SORT_VISITS);\n\n  if (allVisits.loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 33\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (allVisits.error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 31\n  }, this);\n\n  var renderVisitRecordLabels = function renderVisitRecordLabels() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        onClick: function onClick() {\n          return handleClick();\n        },\n        children: \"MRN\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Visit Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"CPT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"RVU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderVisitRecords = function renderVisitRecords() {\n    return allVisits.data.allPatientVisits.map(function (visit) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_5__.default, {\n        visit: visit\n      }, visit.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 7\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}\n\n_s(Records, \"0hqKTNwlN/7CLWSPkKqdX+QWXAc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c3 = Records;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitTypeLabelWrapper\");\n$RefreshReg$(_c2, \"VisitTypeLabel\");\n$RefreshReg$(_c3, \"Records\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRzLmpzPzFiYTAiXSwibmFtZXMiOlsiQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZIiwiZ3FsIiwiVmlzaXRUeXBlTGFiZWxXcmFwcGVyIiwic3R5bGVkIiwiVmlzaXRUeXBlTGFiZWwiLCJSZWNvcmRzIiwicGFnZSIsImFsbFZpc2l0cyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsInBlclBhZ2UiLCJmaXJzdCIsImxvYWRpbmciLCJlcnJvciIsInJlbmRlclZpc2l0UmVjb3JkTGFiZWxzIiwiaGFuZGxlQ2xpY2siLCJyZW5kZXJWaXNpdFJlY29yZHMiLCJkYXRhIiwiYWxsUGF0aWVudFZpc2l0cyIsIm1hcCIsInZpc2l0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFTyxJQUFNQSx3QkFBd0IsR0FBR0Msb0RBQUgsbUJBQTlCLEMsQ0FhUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMscUJBQXFCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUEzQjtLQUFNRCxxQjtBQVNOLElBQU1FLGNBQWMsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQXBCO01BQU1DLGM7QUFPUyxTQUFTQyxPQUFULE9BQTJCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLFNBQVMsR0FBR0Msd0RBQVEsQ0FBQ1Isd0JBQUQsRUFBMkI7QUFDbkRTLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUVKLElBQUksR0FBR0ssNENBQVAsR0FBaUJBLDRDQURkO0FBRVRDLFdBQUssRUFBRUQsNENBQU9BO0FBRkw7QUFEd0MsR0FBM0IsQ0FBMUIsQ0FSd0MsQ0FleEM7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUosU0FBUyxDQUFDTSxPQUFkLEVBQXVCLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0ExQ2lCLENBMkN4Qzs7QUFDQSxNQUFJTixTQUFTLENBQUNPLEtBQWQsRUFBcUIsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDs7QUFFckIsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLHdCQUM5Qiw4REFBQyxxQkFBRDtBQUFBLDhCQUNFLDhEQUFDLGNBQUQ7QUFBZ0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFdBQVcsRUFBakI7QUFBQSxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ4QjtBQUFBLEdBQWhDOztBQVVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxXQUN6QlYsU0FBUyxDQUFDVyxJQUFWLENBQWVDLGdCQUFmLENBQWdDQyxHQUFoQyxDQUFvQyxVQUFDQyxLQUFEO0FBQUEsMEJBQ2xDLDhEQUFDLDRDQUFEO0FBQXVCLGFBQUssRUFBRUE7QUFBOUIsU0FBYUEsS0FBSyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGtDO0FBQUEsS0FBcEMsQ0FEeUI7QUFBQSxHQUEzQjs7QUFLQSxzQkFDRTtBQUFBLGVBQ0dQLHVCQUF1QixFQUQxQixFQUVHRSxrQkFBa0IsRUFGckI7QUFBQSxrQkFERjtBQVFEOztHQXJFdUJaLE87VUFRSkcsb0Q7OztNQVJJSCxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWNvcmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgUmVjb3JkIGZyb20gJy4vUmVjb3JkJztcbmltcG9ydCBBZHZhbmNlZFNlYXJjaCBmcm9tICcuL0FkdmFuY2VkU2VhcmNoJztcblxuLy8gTkVYVDogc29ydCBieSBtcm4sIGNwdCwgcnZ1LFxuLy8gb25seSByZXRyaWV2ZSByZWNvcmRzIHdpdGggc3BlY2lmaWMgbXJuLCBjcHQsIHJ2dVxuXG5leHBvcnQgY29uc3QgQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XG4gICAgYWxsUGF0aWVudFZpc2l0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIG1yblxuICAgICAgdmlzaXRUeXBlXG4gICAgICB2aXNpdERhdGVcbiAgICAgIGNwdFxuICAgICAgcnZ1XG4gICAgfVxuICB9XG5gO1xuXG4vLyBjb25zdCBTT1JUX1ZJU0lUUyA9IGdxbGBcbi8vICAgcXVlcnkgU09SVF9WSVNJVFMge1xuLy8gICAgIGFsbFBhdGllbnRWaXNpdHMoc29ydEJ5OiBtcm5fQVNDKSB7XG4vLyAgICAgICBpZFxuLy8gICAgICAgbXJuXG4vLyAgICAgICB2aXNpdFR5cGVcbi8vICAgICAgIHZpc2l0RGF0ZVxuLy8gICAgICAgY3B0XG4vLyAgICAgICBydnVcbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbiAgZmxleDogMSAxIDBweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzKHsgcGFnZSB9KSB7XG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSwge1xuICAvLyAgIHZhcmlhYmxlczoge1xuICAvLyAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxuICAvLyAgICAgZmlyc3Q6IHBlclBhZ2UsXG4gIC8vICAgfSxcbiAgLy8gfSk7XG5cbiAgY29uc3QgYWxsVmlzaXRzID0gdXNlUXVlcnkoQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2UsXG4gICAgICBmaXJzdDogcGVyUGFnZSxcbiAgICB9LFxuICB9KTtcblxuICAvLyBTVEFSVCBIRVJFXG4gIC8vIHVzZUxhenlRdWVyeSBzZWVtcyB0byBmaXJlIGF1dG9tYXRpY2FsbHksXG4gIC8vIHNlZSB0aGlzIHRocmVhZDogaHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvYXBvbGxvLWNsaWVudC9pc3N1ZXMvNzQ4NFxuICAvLyB1c2Ugc2tpcCB0byBmaXg/IFNlZSBjb21tZW50IGJ5IFwicHJvbm92YXNvIFwiLlxuXG4gIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gIC8vICAgZmlsdGVyVmlzaXRzTXJuKCk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIC8vICAgcmVmZXRjaCgpO1xuICAvLyB9O1xuXG4gIC8vIE5FWFQ6XG4gIC8vIGhvdyB0byBzb3J0IGRhdGEgYnkgTVJOLCBhbmQgb3RoZXIgdmFyaWFibGVzIChDUFQsIFJWVSwgdmlzaXQgdHlwZSwgZGF0ZSlcbiAgLy8gZG8geW91IGp1c3QgbWFudWFsbHkgc29ydCB0aGUgZGF0YT8gaS5lLiBkbyBOT1QgcnVuIGFub3RoZXIgcXVlcnksIGp1c3Qgc29ydCB0aGUgZGF0YVxuICAvLyB0aGF0IHdhcyBhbHJlYWR5IHJldHJpZXZlZCBmcm9tIHRoZSBmaXJzdCBxdWVyeT8gVGhpcyBtaWdodCBiZSB0aGUgYW5zd2VyXG4gIC8vIEluIGRvaW5nIHNvLCBob3cgdG8gbGFiZWwgJ2RhdGEnLCAnZXJyb3InLCBhbmQgJ2xvYWRpbmcnXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyMzQwNjk3L3JlYWN0LXF1ZXJ5LWhvdy10by11c2VxdWVyeS13aGVuLWJ1dHRvbi1pcy1jbGlja2VkXG5cbiAgLy8gVEhFTiwgc29ydCBieSBhbGwgaW5wdXQgdHlwZXMgKE1STiwgQ1BULCBSVlUsIERhdGUpXG4gIC8vIFRIRU4sIGFkdmFuY2VkIHNlYXJjaDogZmlsdGVyIGZvciB2aXNpdHMgd2l0aGluIGNlcnRhaW4gZGF0ZSByYW5nZXMsIG9yIGp1c3Qgb25lIG1ybiwgb3IganVzdCBvbmUgdmlzaXQgdHlwZVxuICAvLyBUSEVOLCB1cGRhdGUgYW5kIGRlbGV0ZSByZWNvcmRzXG4gIC8vIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZywgcmVmZXRjaCB9ID0gdXNlUXVlcnkoU09SVF9WSVNJVFMpO1xuXG4gIGlmIChhbGxWaXNpdHMubG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgaWYgKGFsbFZpc2l0cy5lcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcblxuICBjb25zdCByZW5kZXJWaXNpdFJlY29yZExhYmVscyA9ICgpID0+IChcbiAgICA8VmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9Pk1STjwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+VmlzaXQgVHlwZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+Q1BUPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5SVlU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPkRhdGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgIDwvVmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICApO1xuXG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkcyA9ICgpID0+XG4gICAgYWxsVmlzaXRzLmRhdGEuYWxsUGF0aWVudFZpc2l0cy5tYXAoKHZpc2l0KSA9PiAoXG4gICAgICA8UmVjb3JkIGtleT17dmlzaXQuaWR9IHZpc2l0PXt2aXNpdH0gLz5cbiAgICApKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyVmlzaXRSZWNvcmRMYWJlbHMoKX1cbiAgICAgIHtyZW5kZXJWaXNpdFJlY29yZHMoKX1cblxuICAgICAgey8qIDxQcm9kdWN0c0xpc3RTdHlsZXM+e2Rpc3BsYXlQcm9kdWN0cygpfTwvUHJvZHVjdHNMaXN0U3R5bGVzPiAqL31cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ })

});