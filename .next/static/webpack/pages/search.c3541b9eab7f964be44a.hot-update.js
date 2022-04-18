/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdvancedSearch */ \"./components/AdvancedSearch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\n  query MRN_QUERY($mrn: Int!) {\\n    allPatientVisits(where: { mrn: $mrn }) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar MRN_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject());\nfunction Search() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n    mrn: 0\n  }),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(MRN_QUERY, {\n    variables: {\n      mrn: search.mrn,\n      onCompleted: doStuff() // skip: page * perPage - perPage,\n      // first: perPage,\n\n    }\n  }),\n      _useLazyQuery2 = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useLazyQuery, 2),\n      mrnFilter = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      filterVisitsMrnData = _useLazyQuery2$.data,\n      filterVisitsMrnError = _useLazyQuery2$.error,\n      filterVisitsMrnLoading = _useLazyQuery2$.loading;\n\n  var onCompleted = function onCompleted() {\n    console.log('hi');\n  };\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value,\n        type = _e$target.type;\n    if (type === 'number') value = parseInt(value);\n    setSearch(_objectSpread(_objectSpread({}, search), {}, (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));\n  };\n\n  var handleSubmit = function handleSubmit() {\n    mrnFilter();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__.default, {\n    handleChange: handleChange,\n    handleSubmit: handleSubmit,\n    search: search\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"i6SNNa6pbCMsqYW+w9ySiEJMfFA=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJNUk5fUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VTdGF0ZSIsIm1ybiIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZUxhenlRdWVyeSIsInZhcmlhYmxlcyIsIm9uQ29tcGxldGVkIiwiZG9TdHVmZiIsIm1ybkZpbHRlciIsImZpbHRlclZpc2l0c01ybkRhdGEiLCJkYXRhIiwiZmlsdGVyVmlzaXRzTXJuRXJyb3IiLCJlcnJvciIsImZpbHRlclZpc2l0c01ybkxvYWRpbmciLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJoYW5kbGVTdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0RBQUgsbUJBQWY7QUFhZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLENBQUM7QUFDbkNDLE9BQUcsRUFBRTtBQUQ4QixHQUFELENBREw7QUFBQSxNQUN4QkMsTUFEd0I7QUFBQSxNQUNoQkMsU0FEZ0I7O0FBQUEsc0JBVzNCQyw0REFBWSxDQUFDUCxTQUFELEVBQVk7QUFDMUJRLGFBQVMsRUFBRTtBQUNUSixTQUFHLEVBQUVDLE1BQU0sQ0FBQ0QsR0FESDtBQUVUSyxpQkFBVyxFQUFFQyxPQUFPLEVBRlgsQ0FHVDtBQUNBOztBQUpTO0FBRGUsR0FBWixDQVhlO0FBQUE7QUFBQSxNQUs3QkMsU0FMNkI7QUFBQTtBQUFBLE1BT3JCQyxtQkFQcUIsbUJBTzNCQyxJQVAyQjtBQUFBLE1BUXBCQyxvQkFSb0IsbUJBUTNCQyxLQVIyQjtBQUFBLE1BU2xCQyxzQkFUa0IsbUJBUzNCQyxPQVQyQjs7QUFvQi9CLE1BQU1SLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUFBLG9CQUNFQSxDQUFDLENBQUNDLE1BREo7QUFBQSxRQUNwQkMsSUFEb0IsYUFDcEJBLElBRG9CO0FBQUEsUUFDZEMsS0FEYyxhQUNkQSxLQURjO0FBQUEsUUFDUEMsSUFETyxhQUNQQSxJQURPO0FBRTFCLFFBQUlBLElBQUksS0FBSyxRQUFiLEVBQXVCRCxLQUFLLEdBQUdFLFFBQVEsQ0FBQ0YsS0FBRCxDQUFoQjtBQUN2QmxCLGFBQVMsaUNBQU1ELE1BQU4sa0xBQWVrQixJQUFmLEVBQXNCQyxLQUF0QixHQUFUO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCaEIsYUFBUztBQUNWLEdBRkQ7O0FBR0Esc0JBQ0UsOERBQUMsb0RBQUQ7QUFDRSxnQkFBWSxFQUFFUyxZQURoQjtBQUVFLGdCQUFZLEVBQUVPLFlBRmhCO0FBR0UsVUFBTSxFQUFFdEI7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0F4Q3VCSCxNO1VBV2xCSyx3RDs7O0tBWGtCTCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgQWR2YW5jZWRTZWFyY2ggZnJvbSAnLi9BZHZhbmNlZFNlYXJjaCc7XG5cbmNvbnN0IE1STl9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgTVJOX1FVRVJZKCRtcm46IEludCEpIHtcbiAgICBhbGxQYXRpZW50VmlzaXRzKHdoZXJlOiB7IG1ybjogJG1ybiB9KSB7XG4gICAgICBpZFxuICAgICAgbXJuXG4gICAgICB2aXNpdFR5cGVcbiAgICAgIHZpc2l0RGF0ZVxuICAgICAgY3B0XG4gICAgICBydnVcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHtcbiAgICBtcm46IDAsXG4gIH0pO1xuICBjb25zdCBbXG4gICAgbXJuRmlsdGVyLFxuICAgIHtcbiAgICAgIGRhdGE6IGZpbHRlclZpc2l0c01ybkRhdGEsXG4gICAgICBlcnJvcjogZmlsdGVyVmlzaXRzTXJuRXJyb3IsXG4gICAgICBsb2FkaW5nOiBmaWx0ZXJWaXNpdHNNcm5Mb2FkaW5nLFxuICAgIH0sXG4gIF0gPSB1c2VMYXp5UXVlcnkoTVJOX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBtcm46IHNlYXJjaC5tcm4sXG4gICAgICBvbkNvbXBsZXRlZDogZG9TdHVmZigpLFxuICAgICAgLy8gc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxuICAgICAgLy8gZmlyc3Q6IHBlclBhZ2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgb25Db21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBzZXRTZWFyY2goeyAuLi5zZWFyY2gsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIG1ybkZpbHRlcigpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxBZHZhbmNlZFNlYXJjaFxuICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgIC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

});