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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PATIENT_VISITS_QUERY\": function() { return /* binding */ ALL_PATIENT_VISITS_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* harmony import */ var _AdvancedSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdvancedSearch */ \"./components/AdvancedSearch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject2() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\n  query MRN_QUERY($mrn: Int!) {\\n    allPatientVisits(where: { mrn: $mrn }) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\\n    allPatientVisits(first: $first, skip: $skip) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n // NEXT: sort by mrn, cpt, rvu,\n// only retrieve records with specific mrn, cpt, rvu\n\nvar ALL_PATIENT_VISITS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject()); // const SORT_VISITS = gql`\n//   query SORT_VISITS {\n//     allPatientVisits(sortBy: mrn_ASC) {\n//       id\n//       mrn\n//       visitType\n//       visitDate\n//       cpt\n//       rvu\n//     }\n//   }\n// `;\n\nvar MRN_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject2());\nvar VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({\n  displayName: \"Records__VisitTypeLabelWrapper\",\n  componentId: \"sc-bxqmhb-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\n_c = VisitTypeLabelWrapper;\nvar VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.button.withConfig({\n  displayName: \"Records__VisitTypeLabel\",\n  componentId: \"sc-bxqmhb-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\n_c2 = VisitTypeLabel;\nfunction Records(_ref) {\n  _s();\n\n  var _this = this;\n\n  var page = _ref.page;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    mrn: 0\n  }),\n      search = _useState[0],\n      setSearch = _useState[1]; // const { data, error, loading } = useQuery(ALL_PATIENT_VISITS_QUERY, {\n  //   variables: {\n  //     skip: page * perPage - perPage,\n  //     first: perPage,\n  //   },\n  // });\n\n\n  var allVisits = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_6__.perPage - _config__WEBPACK_IMPORTED_MODULE_6__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_6__.perPage\n    }\n  });\n\n  var doStuff = function doStuff() {\n    console.log('hi');\n  }; // START HERE\n  // useLazyQuery seems to fire automatically,\n  // see this thread: https://github.com/apollographql/apollo-client/issues/7484\n  // use skip to fix? See comment by \"pronovaso \".\n\n\n  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useLazyQuery)(MRN_QUERY, {\n    variables: {\n      mrn: search.mrn,\n      fetchPolicy: 'no-cache',\n      onCompleted: doStuff() // skip: page * perPage - perPage,\n      // first: perPage,\n\n    }\n  }),\n      _useLazyQuery2 = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useLazyQuery, 2),\n      mrnFilter = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      filterVisitsMrnData = _useLazyQuery2$.data,\n      filterVisitsMrnError = _useLazyQuery2$.error,\n      filterVisitsMrnLoading = _useLazyQuery2$.loading;\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value,\n        type = _e$target.type;\n    if (type === 'number') value = parseInt(value);\n    setSearch(_objectSpread(_objectSpread({}, search), {}, (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));\n  }; // const handleClick = (e) => {\n  //   e.preventDefault();\n  //   console.log('click');\n  //   filterVisitsMrn();\n  // };\n  // const handleClick = () => {\n  //   refetch();\n  // };\n  // NEXT:\n  // how to sort data by MRN, and other variables (CPT, RVU, visit type, date)\n  // do you just manually sort the data? i.e. do NOT run another query, just sort the data\n  // that was already retrieved from the first query? This might be the answer\n  // In doing so, how to label 'data', 'error', and 'loading'\n  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked\n  // THEN, sort by all input types (MRN, CPT, RVU, Date)\n  // THEN, advanced search: filter for visits within certain date ranges, or just one mrn, or just one visit type\n  // THEN, update and delete records\n  // const {data, error, loading, refetch } = useQuery(SORT_VISITS);\n\n\n  if (allVisits.loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 139,\n    columnNumber: 33\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (allVisits.error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 141,\n    columnNumber: 31\n  }, this);\n\n  var renderVisitRecordLabels = function renderVisitRecordLabels() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        onClick: function onClick() {\n          return handleClick();\n        },\n        children: \"MRN\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Visit Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"CPT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"RVU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderVisitRecords = function renderVisitRecords() {\n    return allVisits.data.allPatientVisits.map(function (visit) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_7__.default, {\n        visit: visit\n      }, visit.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 7\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AdvancedSearch__WEBPACK_IMPORTED_MODULE_8__.default, {\n      handleChange: handleChange,\n      handleClick: mrnFilter,\n      search: search\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 7\n    }, this), renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}\n\n_s(Records, \"m+zHkAfBdGxwvoZjwqgdSxQkcBY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useLazyQuery];\n});\n\n_c3 = Records;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitTypeLabelWrapper\");\n$RefreshReg$(_c2, \"VisitTypeLabel\");\n$RefreshReg$(_c3, \"Records\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRzLmpzPzFiYTAiXSwibmFtZXMiOlsiQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZIiwiZ3FsIiwiTVJOX1FVRVJZIiwiVmlzaXRUeXBlTGFiZWxXcmFwcGVyIiwic3R5bGVkIiwiVmlzaXRUeXBlTGFiZWwiLCJSZWNvcmRzIiwicGFnZSIsInVzZVN0YXRlIiwibXJuIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiYWxsVmlzaXRzIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJza2lwIiwicGVyUGFnZSIsImZpcnN0IiwiZG9TdHVmZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsIm9uQ29tcGxldGVkIiwibXJuRmlsdGVyIiwiZmlsdGVyVmlzaXRzTXJuRGF0YSIsImRhdGEiLCJmaWx0ZXJWaXNpdHNNcm5FcnJvciIsImVycm9yIiwiZmlsdGVyVmlzaXRzTXJuTG9hZGluZyIsImxvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBhcnNlSW50IiwicmVuZGVyVmlzaXRSZWNvcmRMYWJlbHMiLCJoYW5kbGVDbGljayIsInJlbmRlclZpc2l0UmVjb3JkcyIsImFsbFBhdGllbnRWaXNpdHMiLCJtYXAiLCJ2aXNpdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRU8sSUFBTUEsd0JBQXdCLEdBQUdDLG9EQUFILG1CQUE5QixDLENBYVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFNBQVMsR0FBR0Qsb0RBQUgsb0JBQWY7QUFhQSxJQUFNRSxxQkFBcUIsR0FBR0Msc0VB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ4QjtBQUFBLEdBQWhDOztBQVVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxXQUN6QjVCLFNBQVMsQ0FBQ2MsSUFBVixDQUFlZSxnQkFBZixDQUFnQ0MsR0FBaEMsQ0FBb0MsVUFBQ0MsS0FBRDtBQUFBLDBCQUNsQyw4REFBQyw0Q0FBRDtBQUF1QixhQUFLLEVBQUVBO0FBQTlCLFNBQWFBLEtBQUssQ0FBQ0MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURrQztBQUFBLEtBQXBDLENBRHlCO0FBQUEsR0FBM0I7O0FBS0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUNFLGtCQUFZLEVBQUViLFlBRGhCO0FBRUUsaUJBQVcsRUFBRVAsU0FGZjtBQUdFLFlBQU0sRUFBRWQ7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFNRzRCLHVCQUF1QixFQU4xQixFQU9HRSxrQkFBa0IsRUFQckI7QUFBQSxrQkFERjtBQWFEOztHQXZHdUJsQyxPO1VBV0pPLHFELEVBc0JkUSx5RDs7O01BakNrQmYsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVjb3Jkcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IFJlY29yZCBmcm9tICcuL1JlY29yZCc7XG5pbXBvcnQgQWR2YW5jZWRTZWFyY2ggZnJvbSAnLi9BZHZhbmNlZFNlYXJjaCc7XG5cbi8vIE5FWFQ6IHNvcnQgYnkgbXJuLCBjcHQsIHJ2dSxcbi8vIG9ubHkgcmV0cmlldmUgcmVjb3JkcyB3aXRoIHNwZWNpZmljIG1ybiwgY3B0LCBydnVcblxuZXhwb3J0IGNvbnN0IEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCkge1xuICAgIGFsbFBhdGllbnRWaXNpdHMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIGlkXG4gICAgICBtcm5cbiAgICAgIHZpc2l0VHlwZVxuICAgICAgdmlzaXREYXRlXG4gICAgICBjcHRcbiAgICAgIHJ2dVxuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgU09SVF9WSVNJVFMgPSBncWxgXG4vLyAgIHF1ZXJ5IFNPUlRfVklTSVRTIHtcbi8vICAgICBhbGxQYXRpZW50VmlzaXRzKHNvcnRCeTogbXJuX0FTQykge1xuLy8gICAgICAgaWRcbi8vICAgICAgIG1yblxuLy8gICAgICAgdmlzaXRUeXBlXG4vLyAgICAgICB2aXNpdERhdGVcbi8vICAgICAgIGNwdFxuLy8gICAgICAgcnZ1XG4vLyAgICAgfVxuLy8gICB9XG4vLyBgO1xuXG5jb25zdCBNUk5fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IE1STl9RVUVSWSgkbXJuOiBJbnQhKSB7XG4gICAgYWxsUGF0aWVudFZpc2l0cyh3aGVyZTogeyBtcm46ICRtcm4gfSkge1xuICAgICAgaWRcbiAgICAgIG1yblxuICAgICAgdmlzaXRUeXBlXG4gICAgICB2aXNpdERhdGVcbiAgICAgIGNwdFxuICAgICAgcnZ1XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBWaXNpdFR5cGVMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG5gO1xuXG5jb25zdCBWaXNpdFR5cGVMYWJlbCA9IHN0eWxlZC5idXR0b25gXG4gIGZsZXg6IDEgMSAwcHg7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb3Jkcyh7IHBhZ2UgfSkge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoe1xuICAgIG1ybjogMCxcbiAgfSk7XG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSwge1xuICAvLyAgIHZhcmlhYmxlczoge1xuICAvLyAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxuICAvLyAgICAgZmlyc3Q6IHBlclBhZ2UsXG4gIC8vICAgfSxcbiAgLy8gfSk7XG5cbiAgY29uc3QgYWxsVmlzaXRzID0gdXNlUXVlcnkoQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2UsXG4gICAgICBmaXJzdDogcGVyUGFnZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkb1N0dWZmID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoaScpO1xuICB9O1xuXG4gIC8vIFNUQVJUIEhFUkVcbiAgLy8gdXNlTGF6eVF1ZXJ5IHNlZW1zIHRvIGZpcmUgYXV0b21hdGljYWxseSxcbiAgLy8gc2VlIHRoaXMgdGhyZWFkOiBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9hcG9sbG8tY2xpZW50L2lzc3Vlcy83NDg0XG4gIC8vIHVzZSBza2lwIHRvIGZpeD8gU2VlIGNvbW1lbnQgYnkgXCJwcm9ub3Zhc28gXCIuXG4gIGNvbnN0IFtcbiAgICBtcm5GaWx0ZXIsXG4gICAge1xuICAgICAgZGF0YTogZmlsdGVyVmlzaXRzTXJuRGF0YSxcbiAgICAgIGVycm9yOiBmaWx0ZXJWaXNpdHNNcm5FcnJvcixcbiAgICAgIGxvYWRpbmc6IGZpbHRlclZpc2l0c01ybkxvYWRpbmcsXG4gICAgfSxcbiAgXSA9IHVzZUxhenlRdWVyeShNUk5fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIG1ybjogc2VhcmNoLm1ybixcbiAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgICAgb25Db21wbGV0ZWQ6IGRvU3R1ZmYoKSxcbiAgICAgIC8vIHNraXA6IHBhZ2UgKiBwZXJQYWdlIC0gcGVyUGFnZSxcbiAgICAgIC8vIGZpcnN0OiBwZXJQYWdlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHsgbmFtZSwgdmFsdWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgc2V0U2VhcmNoKHsgLi4uc2VhcmNoLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gIC8vICAgZmlsdGVyVmlzaXRzTXJuKCk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIC8vICAgcmVmZXRjaCgpO1xuICAvLyB9O1xuXG4gIC8vIE5FWFQ6XG4gIC8vIGhvdyB0byBzb3J0IGRhdGEgYnkgTVJOLCBhbmQgb3RoZXIgdmFyaWFibGVzIChDUFQsIFJWVSwgdmlzaXQgdHlwZSwgZGF0ZSlcbiAgLy8gZG8geW91IGp1c3QgbWFudWFsbHkgc29ydCB0aGUgZGF0YT8gaS5lLiBkbyBOT1QgcnVuIGFub3RoZXIgcXVlcnksIGp1c3Qgc29ydCB0aGUgZGF0YVxuICAvLyB0aGF0IHdhcyBhbHJlYWR5IHJldHJpZXZlZCBmcm9tIHRoZSBmaXJzdCBxdWVyeT8gVGhpcyBtaWdodCBiZSB0aGUgYW5zd2VyXG4gIC8vIEluIGRvaW5nIHNvLCBob3cgdG8gbGFiZWwgJ2RhdGEnLCAnZXJyb3InLCBhbmQgJ2xvYWRpbmcnXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyMzQwNjk3L3JlYWN0LXF1ZXJ5LWhvdy10by11c2VxdWVyeS13aGVuLWJ1dHRvbi1pcy1jbGlja2VkXG5cbiAgLy8gVEhFTiwgc29ydCBieSBhbGwgaW5wdXQgdHlwZXMgKE1STiwgQ1BULCBSVlUsIERhdGUpXG4gIC8vIFRIRU4sIGFkdmFuY2VkIHNlYXJjaDogZmlsdGVyIGZvciB2aXNpdHMgd2l0aGluIGNlcnRhaW4gZGF0ZSByYW5nZXMsIG9yIGp1c3Qgb25lIG1ybiwgb3IganVzdCBvbmUgdmlzaXQgdHlwZVxuICAvLyBUSEVOLCB1cGRhdGUgYW5kIGRlbGV0ZSByZWNvcmRzXG4gIC8vIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZywgcmVmZXRjaCB9ID0gdXNlUXVlcnkoU09SVF9WSVNJVFMpO1xuXG4gIGlmIChhbGxWaXNpdHMubG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgaWYgKGFsbFZpc2l0cy5lcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcblxuICBjb25zdCByZW5kZXJWaXNpdFJlY29yZExhYmVscyA9ICgpID0+IChcbiAgICA8VmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9Pk1STjwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+VmlzaXQgVHlwZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+Q1BUPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5SVlU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPkRhdGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgIDwvVmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICApO1xuXG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkcyA9ICgpID0+XG4gICAgYWxsVmlzaXRzLmRhdGEuYWxsUGF0aWVudFZpc2l0cy5tYXAoKHZpc2l0KSA9PiAoXG4gICAgICA8UmVjb3JkIGtleT17dmlzaXQuaWR9IHZpc2l0PXt2aXNpdH0gLz5cbiAgICApKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWR2YW5jZWRTZWFyY2hcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGhhbmRsZUNsaWNrPXttcm5GaWx0ZXJ9XG4gICAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgICAgLz5cbiAgICAgIHtyZW5kZXJWaXNpdFJlY29yZExhYmVscygpfVxuICAgICAge3JlbmRlclZpc2l0UmVjb3JkcygpfVxuXG4gICAgICB7LyogPFByb2R1Y3RzTGlzdFN0eWxlcz57ZGlzcGxheVByb2R1Y3RzKCl9PC9Qcm9kdWN0c0xpc3RTdHlsZXM+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ })

});