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
exports.id = "pages/records";
exports.ids = ["pages/records"];
exports.modules = {

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PAGINATION_QUERY\": function() { return /* binding */ PAGINATION_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ \"./components/styles/PaginationStyles.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Pagination.js\";\n\n\n\n\n\n\n\n\nconst PaginationLabels = styled_components__WEBPACK_IMPORTED_MODULE_5___default().p.withConfig({\n  displayName: \"Pagination__PaginationLabels\",\n  componentId: \"sc-w8etnd-0\"\n})([\"border:1px solid black;padding:10px;margin:10px;border-radius:10px;\"]);\nconst PaginationArrows = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({\n  displayName: \"Pagination__PaginationArrows\",\n  componentId: \"sc-w8etnd-1\"\n})([\"font-size:3rem;\"]);\nconst PAGINATION_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query PAGINATION_QUERY {\n    _allPatientVisitsMeta {\n      count\n    }\n  }\n`;\nfunction Pagination({\n  page\n}) {\n  const {\n    error,\n    loading,\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(PAGINATION_QUERY);\n  if (loading) return 'Loading...'; //   if (error) return <DisplayError error={error} />;\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 21\n  }, this);\n  const {\n    count\n  } = data._allPatientVisitsMeta;\n  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_8__.perPage);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/records/${page - 1}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrows, {\n        \"aria-disabled\": page <= 1,\n        children: \"\\u2190\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationLabels, {\n      children: [\"Page \", page, \" of \", pageCount]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationLabels, {\n      children: [count, \" Items Total\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/records/${page + 1}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrows, {\n        \"aria-disabled\": page >= pageCount,\n        children: \"\\u2192\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanM/MmIzMyJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uTGFiZWxzIiwic3R5bGVkIiwiUGFnaW5hdGlvbkFycm93cyIsIlBBR0lOQVRJT05fUVVFUlkiLCJncWwiLCJQYWdpbmF0aW9uIiwicGFnZSIsImVycm9yIiwibG9hZGluZyIsImRhdGEiLCJ1c2VRdWVyeSIsImNvdW50IiwiX2FsbFBhdGllbnRWaXNpdHNNZXRhIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwyRUFBdEI7QUFPQSxNQUFNQyxnQkFBZ0IsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQXRCO0FBSU8sTUFBTUUsZ0JBQWdCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBUVEsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQThCO0FBQzNDLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUEyQkMsd0RBQVEsQ0FBQ1AsZ0JBQUQsQ0FBekM7QUFDQSxNQUFJSyxPQUFKLEVBQWEsT0FBTyxZQUFQLENBRjhCLENBRzNDOztBQUNBLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsUUFBTTtBQUFFSTtBQUFGLE1BQVlGLElBQUksQ0FBQ0cscUJBQXZCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxHQUFHSyw0Q0FBbEIsQ0FBbEI7QUFDQSxzQkFDRSw4REFBQyw2REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLFlBQVdWLElBQUksR0FBRyxDQUFFLEVBQWpDO0FBQUEsNkJBQ0UsOERBQUMsZ0JBQUQ7QUFBa0IseUJBQWVBLElBQUksSUFBSSxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLGdCQUFEO0FBQUEsMEJBQ1FBLElBRFIsVUFDa0JPLFNBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBT0UsOERBQUMsZ0JBQUQ7QUFBQSxpQkFBbUJGLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUcsWUFBV0wsSUFBSSxHQUFHLENBQUUsRUFBakM7QUFBQSw2QkFDRSw4REFBQyxnQkFBRDtBQUFrQix5QkFBZUEsSUFBSSxJQUFJTyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IFBhZ2luYXRpb25MYWJlbHMgPSBzdHlsZWQucGBcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbmA7XG5cbmNvbnN0IFBhZ2luYXRpb25BcnJvd3MgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAzcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFBBR0lOQVRJT05fUVVFUlkge1xuICAgIF9hbGxQYXRpZW50VmlzaXRzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2UgfSkge1xuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShQQUdJTkFUSU9OX1FVRVJZKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiAnTG9hZGluZy4uLic7XG4gIC8vICAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8aDE+RXJyb3I8L2gxPjtcbiAgY29uc3QgeyBjb3VudCB9ID0gZGF0YS5fYWxsUGF0aWVudFZpc2l0c01ldGE7XG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChjb3VudCAvIHBlclBhZ2UpO1xuICByZXR1cm4gKFxuICAgIDxQYWdpbmF0aW9uU3R5bGVzPlxuICAgICAgPExpbmsgaHJlZj17YC9yZWNvcmRzLyR7cGFnZSAtIDF9YH0+XG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dzIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPD0gMX0+4oaQPC9QYWdpbmF0aW9uQXJyb3dzPlxuICAgICAgPC9MaW5rPlxuICAgICAgPFBhZ2luYXRpb25MYWJlbHM+XG4gICAgICAgIFBhZ2Uge3BhZ2V9IG9mIHtwYWdlQ291bnR9XG4gICAgICA8L1BhZ2luYXRpb25MYWJlbHM+XG4gICAgICA8UGFnaW5hdGlvbkxhYmVscz57Y291bnR9IEl0ZW1zIFRvdGFsPC9QYWdpbmF0aW9uTGFiZWxzPlxuICAgICAgPExpbmsgaHJlZj17YC9yZWNvcmRzLyR7cGFnZSArIDF9YH0+XG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dzIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPj0gcGFnZUNvdW50fT7ihpI8L1BhZ2luYXRpb25BcnJvd3M+XG4gICAgICA8L0xpbms+XG4gICAgPC9QYWdpbmF0aW9uU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pagination.js\n");

/***/ }),

/***/ "./components/Record.js":
/*!******************************!*\
  !*** ./components/Record.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Record; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Record.js\";\n\n\nconst VisitRecord = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({\n  displayName: \"Record__VisitRecord\",\n  componentId: \"sc-1wi8xkh-0\"\n})([\"display:flex;justify-content:space-around;border:3px solid lightgray;margin:5px 0px;border-radius:10px;padding:5px;:hover{text-decoration:none;background-color:gray;color:white;cursor:pointer;}\"]);\nconst VisitRecordItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"Record__VisitRecordItem\",\n  componentId: \"sc-1wi8xkh-1\"\n})([\"flex:1 1 0px;display:flex;justify-content:center;align-items:center;justify-content:center;\"]);\nfunction Record(props) {\n  const {\n    mrn,\n    cpt,\n    rvu,\n    visitType,\n    id\n  } = props.visit;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n    href: `/record/${id}`,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecord, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n        children: mrn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n        children: visitType\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n        children: cpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitRecordItem, {\n        children: rvu\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1JlY29yZC5qcz85N2Q0Il0sIm5hbWVzIjpbIlZpc2l0UmVjb3JkIiwic3R5bGVkIiwiVmlzaXRSZWNvcmRJdGVtIiwiUmVjb3JkIiwicHJvcHMiLCJtcm4iLCJjcHQiLCJydnUiLCJ2aXNpdFR5cGUiLCJpZCIsInZpc2l0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx5TUFBakI7QUFlQSxNQUFNQyxlQUFlLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFyQjtBQVFlLFNBQVNFLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3BDLFFBQU07QUFBRUMsT0FBRjtBQUFPQyxPQUFQO0FBQVlDLE9BQVo7QUFBaUJDLGFBQWpCO0FBQTRCQztBQUE1QixNQUFtQ0wsS0FBSyxDQUFDTSxLQUEvQztBQUNBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLFdBQVVELEVBQUcsRUFBMUI7QUFBQSwyQkFDRSw4REFBQyxXQUFEO0FBQUEsOEJBQ0UsOERBQUMsZUFBRDtBQUFBLGtCQUFrQko7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsZUFBRDtBQUFBLGtCQUFrQkc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsZUFBRDtBQUFBLGtCQUFrQkY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUsOERBQUMsZUFBRDtBQUFBLGtCQUFrQkM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWNvcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFZpc2l0UmVjb3JkID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICA6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFZpc2l0UmVjb3JkSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29yZChwcm9wcykge1xuICBjb25zdCB7IG1ybiwgY3B0LCBydnUsIHZpc2l0VHlwZSwgaWQgfSA9IHByb3BzLnZpc2l0O1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvcmVjb3JkLyR7aWR9YH0+XG4gICAgICA8VmlzaXRSZWNvcmQ+XG4gICAgICAgIDxWaXNpdFJlY29yZEl0ZW0+e21ybn08L1Zpc2l0UmVjb3JkSXRlbT5cbiAgICAgICAgPFZpc2l0UmVjb3JkSXRlbT57dmlzaXRUeXBlfTwvVmlzaXRSZWNvcmRJdGVtPlxuICAgICAgICA8VmlzaXRSZWNvcmRJdGVtPntjcHR9PC9WaXNpdFJlY29yZEl0ZW0+XG4gICAgICAgIDxWaXNpdFJlY29yZEl0ZW0+e3J2dX08L1Zpc2l0UmVjb3JkSXRlbT5cbiAgICAgIDwvVmlzaXRSZWNvcmQ+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Record.js\n");

/***/ }),

/***/ "./components/Records.js":
/*!*******************************!*\
  !*** ./components/Records.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\";\n\n\n\n\n\n // NEXT: PAGINATION\n// NEXT: sort by mrn, cpt, rvu,\n// only retrieve records with specific mrn, cpt, rvu\n\nconst ALL_PATIENT_VISITS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\n    allPatientVisits(first: $first, skip: $skip) {\n      id\n      mrn\n      visitType\n      cpt\n      rvu\n    }\n  }\n`;\nconst SORT_VISITS = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query SORT_VISITS {\n    allPatientVisits(sortBy: mrn_ASC) {\n      mrn\n      cpt\n      rvu\n      id\n    }\n  }\n`;\nconst VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"Records__VisitTypeLabelWrapper\",\n  componentId: \"sc-bxqmhb-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\nconst VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({\n  displayName: \"Records__VisitTypeLabel\",\n  componentId: \"sc-bxqmhb-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\nfunction Records({\n  page\n}) {\n  const handleClick = () => {\n    refetch();\n  }; // NEXT: how to sort data by MRN, and other variables (CPT, RVU, visit type)\n  // In doing so, how to label 'data', 'error', and 'loading'\n  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked\n  //   const {data, error, loading, refetch } = useQuery(SORT_VISITS);\n\n\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_5__.perPage - _config__WEBPACK_IMPORTED_MODULE_5__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_5__.perPage\n    }\n  });\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 23\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 21\n  }, this);\n\n  const renderVisitRecordLabels = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      onClick: () => handleClick(),\n      children: \"MRN\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"Visit Type\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"CPT\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"RVU\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, this);\n\n  const renderVisitRecords = () => data.allPatientVisits.map(visit => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_6__.default, {\n    visit: visit\n  }, visit.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 7\n  }, this));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1JlY29yZHMuanM/MWJhMCJdLCJuYW1lcyI6WyJBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkiLCJncWwiLCJTT1JUX1ZJU0lUUyIsIlZpc2l0VHlwZUxhYmVsV3JhcHBlciIsInN0eWxlZCIsIlZpc2l0VHlwZUxhYmVsIiwiUmVjb3JkcyIsInBhZ2UiLCJoYW5kbGVDbGljayIsInJlZmV0Y2giLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJza2lwIiwicGVyUGFnZSIsImZpcnN0IiwicmVuZGVyVmlzaXRSZWNvcmRMYWJlbHMiLCJyZW5kZXJWaXNpdFJlY29yZHMiLCJhbGxQYXRpZW50VmlzaXRzIiwibWFwIiwidmlzaXQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsd0JBQXdCLEdBQUdDLG9EQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7QUFZQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBV0EsTUFBTUUscUJBQXFCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUEzQjtBQVNBLE1BQU1DLGNBQWMsR0FBR0QsMEVBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQXBCO0FBT2UsU0FBU0UsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQTJCO0FBQ3hDLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCQyxXQUFPO0FBQ1IsR0FGRCxDQUR3QyxDQUt4QztBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUEyQkMsd0RBQVEsQ0FBQ2Isd0JBQUQsRUFBMkI7QUFDbEVjLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUVSLElBQUksR0FBR1MsNENBQVAsR0FBaUJBLDRDQURkO0FBRVRDLFdBQUssRUFBRUQsNENBQU9BO0FBRkw7QUFEdUQsR0FBM0IsQ0FBekM7QUFNQSxNQUFJSixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQWpCMkIsQ0FrQnhDOztBQUNBLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUVYLFFBQU1PLHVCQUF1QixHQUFHLG1CQUM5Qiw4REFBQyxxQkFBRDtBQUFBLDRCQUNFLDhEQUFDLGNBQUQ7QUFBZ0IsYUFBTyxFQUFFLE1BQU1WLFdBQVcsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFTQSxRQUFNVyxrQkFBa0IsR0FBRyxNQUN6QlQsSUFBSSxDQUFDVSxnQkFBTCxDQUFzQkMsR0FBdEIsQ0FBMkJDLEtBQUQsaUJBQ3hCLDhEQUFDLDRDQUFEO0FBQXVCLFNBQUssRUFBRUE7QUFBOUIsS0FBYUEsS0FBSyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERjs7QUFLQSxzQkFDRTtBQUFBLGVBQ0dMLHVCQUF1QixFQUQxQixFQUVHQyxrQkFBa0IsRUFGckI7QUFBQSxrQkFERjtBQVFEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWNvcmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IFJlY29yZCBmcm9tICcuL1JlY29yZCc7XG5cbi8vIE5FWFQ6IFBBR0lOQVRJT05cbi8vIE5FWFQ6IHNvcnQgYnkgbXJuLCBjcHQsIHJ2dSxcbi8vIG9ubHkgcmV0cmlldmUgcmVjb3JkcyB3aXRoIHNwZWNpZmljIG1ybiwgY3B0LCBydnVcblxuY29uc3QgQUxMX1BBVElFTlRfVklTSVRTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XG4gICAgYWxsUGF0aWVudFZpc2l0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIG1yblxuICAgICAgdmlzaXRUeXBlXG4gICAgICBjcHRcbiAgICAgIHJ2dVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU09SVF9WSVNJVFMgPSBncWxgXG4gIHF1ZXJ5IFNPUlRfVklTSVRTIHtcbiAgICBhbGxQYXRpZW50VmlzaXRzKHNvcnRCeTogbXJuX0FTQykge1xuICAgICAgbXJuXG4gICAgICBjcHRcbiAgICAgIHJ2dVxuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbiAgZmxleDogMSAxIDBweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzKHsgcGFnZSB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHJlZmV0Y2goKTtcbiAgfTtcblxuICAvLyBORVhUOiBob3cgdG8gc29ydCBkYXRhIGJ5IE1STiwgYW5kIG90aGVyIHZhcmlhYmxlcyAoQ1BULCBSVlUsIHZpc2l0IHR5cGUpXG4gIC8vIEluIGRvaW5nIHNvLCBob3cgdG8gbGFiZWwgJ2RhdGEnLCAnZXJyb3InLCBhbmQgJ2xvYWRpbmcnXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyMzQwNjk3L3JlYWN0LXF1ZXJ5LWhvdy10by11c2VxdWVyeS13aGVuLWJ1dHRvbi1pcy1jbGlja2VkXG5cbiAgLy8gICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmcsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFNPUlRfVklTSVRTKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IHBhZ2UgKiBwZXJQYWdlIC0gcGVyUGFnZSxcbiAgICAgIGZpcnN0OiBwZXJQYWdlLFxuICAgIH0sXG4gIH0pO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I8L3A+O1xuXG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkTGFiZWxzID0gKCkgPT4gKFxuICAgIDxWaXNpdFR5cGVMYWJlbFdyYXBwZXI+XG4gICAgICA8VmlzaXRUeXBlTGFiZWwgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+TVJOPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5WaXNpdCBUeXBlPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbD5DUFQ8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsPlJWVTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgPC9WaXNpdFR5cGVMYWJlbFdyYXBwZXI+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyVmlzaXRSZWNvcmRzID0gKCkgPT5cbiAgICBkYXRhLmFsbFBhdGllbnRWaXNpdHMubWFwKCh2aXNpdCkgPT4gKFxuICAgICAgPFJlY29yZCBrZXk9e3Zpc2l0LmlkfSB2aXNpdD17dmlzaXR9IC8+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlbmRlclZpc2l0UmVjb3JkTGFiZWxzKCl9XG4gICAgICB7cmVuZGVyVmlzaXRSZWNvcmRzKCl9XG5cbiAgICAgIHsvKiA8UHJvZHVjdHNMaXN0U3R5bGVzPntkaXNwbGF5UHJvZHVjdHMoKX08L1Byb2R1Y3RzTGlzdFN0eWxlcz4gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"PaginationStyles\",\n  componentId: \"sc-aduuar-0\"\n})([\"display:flex;align-items:center;justify-content:center;a[aria-disabled='true']{color:grey;pointer-events:none;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PaginationStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzLmpzPzFmYjkiXSwibmFtZXMiOlsiUGFnaW5hdGlvblN0eWxlcyIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUhBQXRCO0FBMkJBLCtEQUFlRCxnQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGFnaW5hdGlvblN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICB9Ki9cbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/styles/PaginationStyles.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": function() { return /* binding */ endpoint; },\n/* harmony export */   \"prodEndpoint\": function() { return /* binding */ prodEndpoint; },\n/* harmony export */   \"perPage\": function() { return /* binding */ perPage; }\n/* harmony export */ });\n// This is client side config only - don't put anything in here that shouldn't be public!\nconst endpoint = `http://localhost:3000/api/graphql`;\nconst prodEndpoint = `fill me in when we deploy`;\nconst perPage = 10;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsInBlclBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ08sTUFBTUEsUUFBUSxHQUFJLG1DQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBSSwyQkFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsRUFBaEIiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbGA7XG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGZpbGwgbWUgaW4gd2hlbiB3ZSBkZXBsb3lgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSAxMDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/records/index.js":
/*!********************************!*\
  !*** ./pages/records/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OrderPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n/* harmony import */ var _components_Records__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Records */ \"./components/Records.js\");\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/pages/records/index.js\";\n\n\n\nfunction OrderPage() {\n  const {\n    query\n  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const page = parseInt(query.page);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Records__WEBPACK_IMPORTED_MODULE_3__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9yZWNvcmRzL2luZGV4LmpzP2JmMWYiXSwibmFtZXMiOlsiT3JkZXJQYWdlIiwicXVlcnkiLCJ1c2VSb3V0ZXIiLCJwYWdlIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBWUMsa0VBQVMsRUFBM0I7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDRSxJQUFQLENBQXJCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFZLFVBQUksRUFBRUEsSUFBSSxJQUFJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQVMsVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBWSxVQUFJLEVBQUVBLElBQUksSUFBSTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCIsImZpbGUiOiIuL3BhZ2VzL3JlY29yZHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZWNvcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJQYWdlKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgICA8UmVjb3JkcyBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/records/index.js\n");

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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/records/index.js"); });
module.exports = __webpack_exports__;

})();