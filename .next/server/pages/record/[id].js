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
exports.id = "pages/record/[id]";
exports.ids = ["pages/record/[id]"];
exports.modules = {

/***/ "./components/SingleRecord.js":
/*!************************************!*\
  !*** ./components/SingleRecord.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleRecord; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/cache */ \"@apollo/client/cache\");\n/* harmony import */ var _apollo_client_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_record_id___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/record/[id] */ \"./pages/record/[id].js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/SingleRecord.js\";\n\n\n\n\n\n\n\n // NEXT:\n// Update single visit\n// Delete single visit\n// AddVisitForm should have date field\n\nconst SINGLE_RECORD_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`\n  query SINGLE_RECORD_QUERY($id: ID!) {\n    PatientVisit(where: { id: $id }) {\n      id\n      mrn\n      visitType\n      cpt\n      rvu\n    }\n  }\n`;\nfunction SingleRecord({\n  id\n}) {\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_RECORD_QUERY, {\n    variables: {\n      id\n    }\n  });\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 23\n  }, this); //   if (error) return <DisplayError error={error} />;\n  //   const { PatientVisit } = data;\n\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Single Product\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpbmdsZVJlY29yZC5qcz8zMGY5Il0sIm5hbWVzIjpbIlNJTkdMRV9SRUNPUkRfUVVFUlkiLCJncWwiLCJTaW5nbGVSZWNvcmQiLCJpZCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFHQyxvREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZBO0FBWWUsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQThCO0FBQzNDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsd0RBQVEsQ0FBQ1AsbUJBQUQsRUFBc0I7QUFDN0RRLGFBQVMsRUFBRTtBQUFFTDtBQUFGO0FBRGtELEdBQXRCLENBQXpDO0FBR0EsTUFBSUUsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FKOEIsQ0FLM0M7QUFDQTs7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZVJlY29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgZmllbGROYW1lRnJvbVN0b3JlTmFtZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NhY2hlJztcbmltcG9ydCB7IHZpc2l0IH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTaW5nbGVSZWNvcmRQYWdlIGZyb20gJy4uL3BhZ2VzL3JlY29yZC9baWRdJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuXG4vLyBORVhUOlxuLy8gVXBkYXRlIHNpbmdsZSB2aXNpdFxuLy8gRGVsZXRlIHNpbmdsZSB2aXNpdFxuLy8gQWRkVmlzaXRGb3JtIHNob3VsZCBoYXZlIGRhdGUgZmllbGRcblxuY29uc3QgU0lOR0xFX1JFQ09SRF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgU0lOR0xFX1JFQ09SRF9RVUVSWSgkaWQ6IElEISkge1xuICAgIFBhdGllbnRWaXNpdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcbiAgICAgIGlkXG4gICAgICBtcm5cbiAgICAgIHZpc2l0VHlwZVxuICAgICAgY3B0XG4gICAgICBydnVcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVJlY29yZCh7IGlkIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX1JFQ09SRF9RVUVSWSwge1xuICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICB9KTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gICBpZiAoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XG4gIC8vICAgY29uc3QgeyBQYXRpZW50VmlzaXQgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gPHA+U2luZ2xlIFByb2R1Y3Q8L3A+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleRecord.js\n");

/***/ }),

/***/ "./pages/record/[id].js":
/*!******************************!*\
  !*** ./pages/record/[id].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleRecordPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleRecord */ \"./components/SingleRecord.js\");\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/pages/record/[id].js\";\n // export default function SingleRecordPage() {\n//   return <SingleRecord />;\n// }\n\nfunction SingleRecordPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleRecord__WEBPACK_IMPORTED_MODULE_1__.default, {\n    id: query.id\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9yZWNvcmQvW2lkXS5qcz8wZTVhIl0sIm5hbWVzIjpbIlNpbmdsZVJlY29yZFBhZ2UiLCJxdWVyeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsZ0JBQVQsQ0FBMEI7QUFBRUM7QUFBRixDQUExQixFQUFxQztBQUNsRCxzQkFBTyw4REFBQyw2REFBRDtBQUFjLE1BQUUsRUFBRUEsS0FBSyxDQUFDQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL3JlY29yZC9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZVJlY29yZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZVJlY29yZCc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVJlY29yZFBhZ2UoKSB7XG4vLyAgIHJldHVybiA8U2luZ2xlUmVjb3JkIC8+O1xuLy8gfVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUmVjb3JkUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIDxTaW5nbGVSZWNvcmQgaWQ9e3F1ZXJ5LmlkfSAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/record/[id].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/cache":
/*!***************************************!*\
  !*** external "@apollo/client/cache" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/cache");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/record/[id].js"); });
module.exports = __webpack_exports__;

})();