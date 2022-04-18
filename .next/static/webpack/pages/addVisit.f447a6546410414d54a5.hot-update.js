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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PATIENT_VISITS_QUERY\": function() { return /* binding */ ALL_PATIENT_VISITS_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\\n    allPatientVisits(first: $first, skip: $skip) {\\n      id\\n      mrn\\n      visitType\\n      visitDate\\n      cpt\\n      rvu\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n // NEXT: sort by mrn, cpt, rvu,\n// only retrieve records with specific mrn, cpt, rvu\n\nvar ALL_PATIENT_VISITS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nvar VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"Records__VisitTypeLabelWrapper\",\n  componentId: \"sc-bxqmhb-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\n_c = VisitTypeLabelWrapper;\nvar VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button.withConfig({\n  displayName: \"Records__VisitTypeLabel\",\n  componentId: \"sc-bxqmhb-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\n_c2 = VisitTypeLabel;\nfunction Records(_ref) {\n  _s();\n\n  var _this = this;\n\n  var page = _ref.page;\n  var allVisits = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_3__.perPage - _config__WEBPACK_IMPORTED_MODULE_3__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_3__.perPage\n    }\n  }); // START HERE\n  // useLazyQuery seems to fire automatically,\n  // see this thread: https://github.com/apollographql/apollo-client/issues/7484\n  // use skip to fix? See comment by \"pronovaso \".\n  // NEXT:\n  // how to sort data by MRN, and other variables (CPT, RVU, visit type, date)\n  // do you just manually sort the data? i.e. do NOT run another query, just sort the data\n  // that was already retrieved from the first query? This might be the answer\n  // In doing so, how to label 'data', 'error', and 'loading'\n  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked\n\n  if (allVisits.loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 33\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (allVisits.error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 31\n  }, this);\n\n  var renderVisitRecordLabels = function renderVisitRecordLabels() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        onClick: function onClick() {\n          return handleClick();\n        },\n        children: \"MRN\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Visit Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"CPT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"RVU\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n        children: \"Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var renderVisitRecords = function renderVisitRecords() {\n    return allVisits.data.allPatientVisits.map(function (visit) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_4__.default, {\n        visit: visit\n      }, visit.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}\n\n_s(Records, \"0hqKTNwlN/7CLWSPkKqdX+QWXAc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery];\n});\n\n_c3 = Records;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"VisitTypeLabelWrapper\");\n$RefreshReg$(_c2, \"VisitTypeLabel\");\n$RefreshReg$(_c3, \"Records\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvcmRzLmpzPzFiYTAiXSwibmFtZXMiOlsiQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZIiwiZ3FsIiwiVmlzaXRUeXBlTGFiZWxXcmFwcGVyIiwic3R5bGVkIiwiVmlzaXRUeXBlTGFiZWwiLCJSZWNvcmRzIiwicGFnZSIsImFsbFZpc2l0cyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsInBlclBhZ2UiLCJmaXJzdCIsImxvYWRpbmciLCJlcnJvciIsInJlbmRlclZpc2l0UmVjb3JkTGFiZWxzIiwiaGFuZGxlQ2xpY2siLCJyZW5kZXJWaXNpdFJlY29yZHMiLCJkYXRhIiwiYWxsUGF0aWVudFZpc2l0cyIsIm1hcCIsInZpc2l0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVPLElBQU1BLHdCQUF3QixHQUFHQyxvREFBSCxtQkFBOUI7QUFhUCxJQUFNQyxxQkFBcUIsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkdBQTNCO0tBQU1ELHFCO0FBU04sSUFBTUUsY0FBYyxHQUFHRCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw2Q0FBcEI7TUFBTUMsYztBQU9TLFNBQVNDLE9BQVQsT0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDeEMsTUFBTUMsU0FBUyxHQUFHQyx3REFBUSxDQUFDUix3QkFBRCxFQUEyQjtBQUNuRFMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRUosSUFBSSxHQUFHSyw0Q0FBUCxHQUFpQkEsNENBRGQ7QUFFVEMsV0FBSyxFQUFFRCw0Q0FBT0E7QUFGTDtBQUR3QyxHQUEzQixDQUExQixDQUR3QyxDQVF4QztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJSixTQUFTLENBQUNNLE9BQWQsRUFBdUIsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQXBCaUIsQ0FxQnhDOztBQUNBLE1BQUlOLFNBQVMsQ0FBQ08sS0FBZCxFQUFxQixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUVyQixNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCO0FBQUEsd0JBQzlCLDhEQUFDLHFCQUFEO0FBQUEsOEJBQ0UsOERBQUMsY0FBRDtBQUFnQixlQUFPLEVBQUU7QUFBQSxpQkFBTUMsV0FBVyxFQUFqQjtBQUFBLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDhCO0FBQUEsR0FBaEM7O0FBVUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFdBQ3pCVixTQUFTLENBQUNXLElBQVYsQ0FBZUMsZ0JBQWYsQ0FBZ0NDLEdBQWhDLENBQW9DLFVBQUNDLEtBQUQ7QUFBQSwwQkFDbEMsOERBQUMsNENBQUQ7QUFBdUIsYUFBSyxFQUFFQTtBQUE5QixTQUFhQSxLQUFLLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEa0M7QUFBQSxLQUFwQyxDQUR5QjtBQUFBLEdBQTNCOztBQUtBLHNCQUNFO0FBQUEsZUFDR1AsdUJBQXVCLEVBRDFCLEVBRUdFLGtCQUFrQixFQUZyQjtBQUFBLGtCQURGO0FBTUQ7O0dBN0N1QlosTztVQUNKRyxvRDs7O01BRElILE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY29yZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBSZWNvcmQgZnJvbSAnLi9SZWNvcmQnO1xuXG4vLyBORVhUOiBzb3J0IGJ5IG1ybiwgY3B0LCBydnUsXG4vLyBvbmx5IHJldHJpZXZlIHJlY29yZHMgd2l0aCBzcGVjaWZpYyBtcm4sIGNwdCwgcnZ1XG5cbmV4cG9ydCBjb25zdCBBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSgkc2tpcDogSW50ID0gMCwgJGZpcnN0OiBJbnQpIHtcbiAgICBhbGxQYXRpZW50VmlzaXRzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgbXJuXG4gICAgICB2aXNpdFR5cGVcbiAgICAgIHZpc2l0RGF0ZVxuICAgICAgY3B0XG4gICAgICBydnVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbiAgZmxleDogMSAxIDBweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzKHsgcGFnZSB9KSB7XG4gIGNvbnN0IGFsbFZpc2l0cyA9IHVzZVF1ZXJ5KEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxuICAgICAgZmlyc3Q6IHBlclBhZ2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gU1RBUlQgSEVSRVxuICAvLyB1c2VMYXp5UXVlcnkgc2VlbXMgdG8gZmlyZSBhdXRvbWF0aWNhbGx5LFxuICAvLyBzZWUgdGhpcyB0aHJlYWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcG9sbG9ncmFwaHFsL2Fwb2xsby1jbGllbnQvaXNzdWVzLzc0ODRcbiAgLy8gdXNlIHNraXAgdG8gZml4PyBTZWUgY29tbWVudCBieSBcInByb25vdmFzbyBcIi5cblxuICAvLyBORVhUOlxuICAvLyBob3cgdG8gc29ydCBkYXRhIGJ5IE1STiwgYW5kIG90aGVyIHZhcmlhYmxlcyAoQ1BULCBSVlUsIHZpc2l0IHR5cGUsIGRhdGUpXG4gIC8vIGRvIHlvdSBqdXN0IG1hbnVhbGx5IHNvcnQgdGhlIGRhdGE/IGkuZS4gZG8gTk9UIHJ1biBhbm90aGVyIHF1ZXJ5LCBqdXN0IHNvcnQgdGhlIGRhdGFcbiAgLy8gdGhhdCB3YXMgYWxyZWFkeSByZXRyaWV2ZWQgZnJvbSB0aGUgZmlyc3QgcXVlcnk/IFRoaXMgbWlnaHQgYmUgdGhlIGFuc3dlclxuICAvLyBJbiBkb2luZyBzbywgaG93IHRvIGxhYmVsICdkYXRhJywgJ2Vycm9yJywgYW5kICdsb2FkaW5nJ1xuICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MjM0MDY5Ny9yZWFjdC1xdWVyeS1ob3ctdG8tdXNlcXVlcnktd2hlbi1idXR0b24taXMtY2xpY2tlZFxuXG4gIGlmIChhbGxWaXNpdHMubG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgaWYgKGFsbFZpc2l0cy5lcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcblxuICBjb25zdCByZW5kZXJWaXNpdFJlY29yZExhYmVscyA9ICgpID0+IChcbiAgICA8VmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9Pk1STjwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+VmlzaXQgVHlwZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWw+Q1BUPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5SVlU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPkRhdGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgIDwvVmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICApO1xuXG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkcyA9ICgpID0+XG4gICAgYWxsVmlzaXRzLmRhdGEuYWxsUGF0aWVudFZpc2l0cy5tYXAoKHZpc2l0KSA9PiAoXG4gICAgICA8UmVjb3JkIGtleT17dmlzaXQuaWR9IHZpc2l0PXt2aXNpdH0gLz5cbiAgICApKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyVmlzaXRSZWNvcmRMYWJlbHMoKX1cbiAgICAgIHtyZW5kZXJWaXNpdFJlY29yZHMoKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ })

});