/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/record/[id]",{

/***/ "./components/SingleRecord.js":
/*!************************************!*\
  !*** ./components/SingleRecord.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleRecord; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_record_id___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/record/[id] */ \"./pages/record/[id].js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/SingleRecord.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query SINGLE_ITEM_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      name\\n      price\\n      description\\n      id\\n      photo {\\n        id\\n        altText\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n // const ProductStyles = styled.div`\n//   display: grid;\n//   grid-auto-columns: 1fr;\n//   grid-auto-flow: column;\n//   max-width: var(--maxWidth);\n//   justify-content: center;\n//   align-items: top;\n//   gap: 2rem;\n//   img {\n//     width: 100%;\n//     object-fit: contain;\n//   }\n// `;\n\nvar SINGLE_ITEM_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nfunction SingleRecord(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 23\n  }, this); //   if (error) return <DisplayError error={error} />;\n\n  var Product = data.Product;\n  console.log(Product);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Single Product\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 10\n  }, this);\n} // export default function SingleRecord({ id }) {\n// //   const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {\n// //     variables: {\n// //       id,\n// //     },\n// //   });\n// //   if (loading) return <p>Loading...</p>;\n// //   if (error) return <DisplayError error={error} />;\n// //   const { Product } = data;\n// //   console.log(Product);\n//   return (\n//     <ProductStyles>\n//       <Head>\n//         <title>Sick Fits | {Product.name}</title>\n//       </Head>\n//       <img\n//         src={Product.photo.image.publicUrlTransformed}\n//         alt={Product.photo.altText}\n//       />\n//       <div className=\"details\">\n//         <h2>{Product.name}</h2>\n//         <p>{Product.description}</p>\n//       </div>\n//     </ProductStyles>\n//   );\n// }\n\n_s(SingleRecord, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n_c = SingleRecord;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleRecord\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVSZWNvcmQuanM/MzBmOSJdLCJuYW1lcyI6WyJTSU5HTEVfSVRFTV9RVUVSWSIsImdxbCIsIlNpbmdsZVJlY29yZCIsImlkIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiUHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msb0RBQUgsbUJBQXZCO0FBa0JlLFNBQVNDLFlBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1ZDLHdEQUFRLENBQUNKLGlCQUFELEVBQW9CO0FBQzNESyxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGO0FBRGdELEdBQXBCLENBREU7QUFBQSxNQUNuQ0csSUFEbUMsYUFDbkNBLElBRG1DO0FBQUEsTUFDN0JDLE9BRDZCLGFBQzdCQSxPQUQ2QjtBQUFBLE1BQ3BCQyxLQURvQixhQUNwQkEsS0FEb0I7O0FBSTNDLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBSjhCLENBSzNDOztBQUwyQyxNQU1uQ0UsT0FObUMsR0FNdkJILElBTnVCLENBTW5DRyxPQU5tQztBQU8zQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBcEN3QlAsWTtVQUNXRSxvRDs7O0tBRFhGLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZVJlY29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU2luZ2xlUmVjb3JkUGFnZSBmcm9tICcuLi9wYWdlcy9yZWNvcmQvW2lkXSc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuLy8gY29uc3QgUHJvZHVjdFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4vLyAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4vLyAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4vLyAgIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgYWxpZ24taXRlbXM6IHRvcDtcbi8vICAgZ2FwOiAycmVtO1xuLy8gICBpbWcge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4vLyAgIH1cbi8vIGA7XG5cbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTSU5HTEVfSVRFTV9RVUVSWSgkaWQ6IElEISkge1xuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBuYW1lXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGlkXG4gICAgICBwaG90byB7XG4gICAgICAgIGlkXG4gICAgICAgIGFsdFRleHRcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVJlY29yZCh7IGlkIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIC8vICAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICBjb25zdCB7IFByb2R1Y3QgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKFByb2R1Y3QpO1xuICByZXR1cm4gPHA+U2luZ2xlIFByb2R1Y3Q8L3A+O1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVSZWNvcmQoeyBpZCB9KSB7XG4vLyAvLyAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9JVEVNX1FVRVJZLCB7XG4vLyAvLyAgICAgdmFyaWFibGVzOiB7XG4vLyAvLyAgICAgICBpZCxcbi8vIC8vICAgICB9LFxuLy8gLy8gICB9KTtcbi8vIC8vICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbi8vIC8vICAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuLy8gLy8gICBjb25zdCB7IFByb2R1Y3QgfSA9IGRhdGE7XG4vLyAvLyAgIGNvbnNvbGUubG9nKFByb2R1Y3QpO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxQcm9kdWN0U3R5bGVzPlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT5TaWNrIEZpdHMgfCB7UHJvZHVjdC5uYW1lfTwvdGl0bGU+XG4vLyAgICAgICA8L0hlYWQ+XG4vLyAgICAgICA8aW1nXG4vLyAgICAgICAgIHNyYz17UHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbi8vICAgICAgICAgYWx0PXtQcm9kdWN0LnBob3RvLmFsdFRleHR9XG4vLyAgICAgICAvPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4vLyAgICAgICAgIDxoMj57UHJvZHVjdC5uYW1lfTwvaDI+XG4vLyAgICAgICAgIDxwPntQcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvUHJvZHVjdFN0eWxlcz5cbi8vICAgKTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleRecord.js\n");

/***/ })

});