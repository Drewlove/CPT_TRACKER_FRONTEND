/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./components/Test.js":
/*!****************************!*\
  !*** ./components/Test.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Test.js\";\n\n\nconst MRN_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query MRN_QUERY($mrn: Int!) {\n    filterVisitsMrn(where: { mrn: $mrn }) {\n      id\n      mrn\n      visitType\n      visitDate\n      cpt\n      rvu\n    }\n  }\n`;\nfunction Test() {\n  const test = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(MRN_QUERY, {\n    variables: {\n      mrn: 223456789 // skip: page * perPage - perPage,\n      // first: perPage,\n\n    }\n  });\n  console.log(test.data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"Test Stuff\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Rlc3QuanM/ZTE4ZiJdLCJuYW1lcyI6WyJNUk5fUVVFUlkiLCJncWwiLCJUZXN0IiwidGVzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwibXJuIiwiY29uc29sZSIsImxvZyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLG9EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtBQWFlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTUMsSUFBSSxHQUFHQyx3REFBUSxDQUFDSixTQUFELEVBQVk7QUFDL0JLLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsU0FESSxDQUVUO0FBQ0E7O0FBSFM7QUFEb0IsR0FBWixDQUFyQjtBQU9BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxJQUFqQjtBQUVBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgTVJOX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBNUk5fUVVFUlkoJG1ybjogSW50ISkge1xuICAgIGZpbHRlclZpc2l0c01ybih3aGVyZTogeyBtcm46ICRtcm4gfSkge1xuICAgICAgaWRcbiAgICAgIG1yblxuICAgICAgdmlzaXRUeXBlXG4gICAgICB2aXNpdERhdGVcbiAgICAgIGNwdFxuICAgICAgcnZ1XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KCkge1xuICBjb25zdCB0ZXN0ID0gdXNlUXVlcnkoTVJOX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBtcm46IDIyMzQ1Njc4OSxcbiAgICAgIC8vIHNraXA6IHBhZ2UgKiBwZXJQYWdlIC0gcGVyUGFnZSxcbiAgICAgIC8vIGZpcnN0OiBwZXJQYWdlLFxuICAgIH0sXG4gIH0pO1xuICBjb25zb2xlLmxvZyh0ZXN0LmRhdGEpO1xuXG4gIHJldHVybiA8aDE+VGVzdCBTdHVmZjwvaDE+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Test.js\n");

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Test */ \"./components/Test.js\");\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/pages/test.js\";\n\nfunction TestPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Test__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy90ZXN0LmpzPzE0MmIiXSwibmFtZXMiOlsiVGVzdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxzQkFBTyw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVzdCBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0UGFnZSgpIHtcbiAgcmV0dXJuIDxUZXN0IC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();