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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\\n    allPatientVisits(first: $first, skip: $skip) {\\n      id\\n      mrn\\n      visitType\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar ALL_PATIENT_VISITS_QUERYY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject());\nfunction Records(_ref) {\n  _s();\n\n  var page = _ref.page;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_2__.perPage - _config__WEBPACK_IMPORTED_MODULE_2__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_2__.perPage\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 23\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 21\n  }, this); //   const displayProducts = () =>\n  //     data.allProducts.map((product) => (\n  //       <Product key={product.id} product={product} />\n  //     ));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: console.log(data)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Records, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = Records;\n\nvar _c;\n\n$RefreshReg$(_c, \"Records\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRzLmpzPzFiYTAiXSwibmFtZXMiOlsiQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZWSIsImdxbCIsIlJlY29yZHMiLCJwYWdlIiwidXNlUXVlcnkiLCJBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkiLCJ2YXJpYWJsZXMiLCJza2lwIiwicGVyUGFnZSIsImZpcnN0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHlCQUF5QixHQUFHQyxvREFBSCxtQkFBL0I7QUFZZSxTQUFTQyxPQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNQQyx3REFBUSxDQUFDQyx3QkFBRCxFQUEyQjtBQUNsRUMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRUosSUFBSSxHQUFHSyw0Q0FBUCxHQUFpQkEsNENBRGQ7QUFFVEMsV0FBSyxFQUFFRCw0Q0FBT0E7QUFGTDtBQUR1RCxHQUEzQixDQUREO0FBQUEsTUFDaENFLElBRGdDLGFBQ2hDQSxJQURnQztBQUFBLE1BQzFCQyxLQUQwQixhQUMxQkEsS0FEMEI7QUFBQSxNQUNuQkMsT0FEbUIsYUFDbkJBLE9BRG1COztBQU94QyxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQVAyQixDQVF4Qzs7QUFDQSxNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQVQ2QixDQVd4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFBLGNBQ0dFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBdEJ1QlIsTztVQUNXRSxvRDs7O0tBRFhGLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY29yZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWVkgPSBncWxgXG4gIHF1ZXJ5IEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSgkc2tpcDogSW50ID0gMCwgJGZpcnN0OiBJbnQpIHtcbiAgICBhbGxQYXRpZW50VmlzaXRzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgbXJuXG4gICAgICB2aXNpdFR5cGVcbiAgICAgIGNwdFxuICAgICAgcnZ1XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzKHsgcGFnZSB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxuICAgICAgZmlyc3Q6IHBlclBhZ2UsXG4gICAgfSxcbiAgfSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjwvcD47XG5cbiAgLy8gICBjb25zdCBkaXNwbGF5UHJvZHVjdHMgPSAoKSA9PlxuICAvLyAgICAgZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgLy8gICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAvLyAgICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxuICAgICAgey8qIDxQcm9kdWN0c0xpc3RTdHlsZXM+e2Rpc3BsYXlQcm9kdWN0cygpfTwvUHJvZHVjdHNMaXN0U3R5bGVzPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ })

});