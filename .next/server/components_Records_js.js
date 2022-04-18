/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Records_js";
exports.ids = ["components_Records_js"];
exports.modules = {

/***/ "./components/RecordList.js":
/*!**********************************!*\
  !*** ./components/RecordList.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecordList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/RecordList.js\";\n\n\n\n\n\nconst VisitTypeLabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"RecordList__VisitTypeLabelWrapper\",\n  componentId: \"sc-ee059e-0\"\n})([\"display:flex;justify-content:space-around;position:sticky;top:0px;background-color:white;height:50px;\"]);\nconst VisitTypeLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({\n  displayName: \"RecordList__VisitTypeLabel\",\n  componentId: \"sc-ee059e-1\"\n})([\"flex:1 1 0px;&:hover{cursor:pointer;}\"]);\nfunction RecordList(props) {\n  const renderVisitRecordLabels = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabelWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"MRN\"\n    }, \"mrn\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"Visit Type\"\n    }, \"visit\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"CPT\"\n    }, \"cpt\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"RVU\"\n    }, \"rvu\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VisitTypeLabel, {\n      children: \"Date\"\n    }, \"date\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n\n  const renderVisitRecords = () => {\n    const {\n      data\n    } = props;\n    console.log(data);\n    return data.map(key => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Record__WEBPACK_IMPORTED_MODULE_5__.default, {\n      visit: key,\n      id: key.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 30\n    }, this));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [renderVisitRecordLabels(), renderVisitRecords()]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1JlY29yZExpc3QuanM/Yzg5YiJdLCJuYW1lcyI6WyJWaXNpdFR5cGVMYWJlbFdyYXBwZXIiLCJzdHlsZWQiLCJWaXNpdFR5cGVMYWJlbCIsIlJlY29yZExpc3QiLCJwcm9wcyIsInJlbmRlclZpc2l0UmVjb3JkTGFiZWxzIiwicmVuZGVyVmlzaXRSZWNvcmRzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJrZXkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEscUJBQXFCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUEzQjtBQVNBLE1BQU1DLGNBQWMsR0FBR0QsMEVBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQXBCO0FBT2UsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDeEMsUUFBTUMsdUJBQXVCLEdBQUcsbUJBQzlCLDhEQUFDLHFCQUFEO0FBQUEsNEJBQ0UsOERBQUMsY0FBRDtBQUFBO0FBQUEsT0FBb0IsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsY0FBRDtBQUFBO0FBQUEsT0FBb0IsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsY0FBRDtBQUFBO0FBQUEsT0FBb0IsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsY0FBRDtBQUFBO0FBQUEsT0FBb0IsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UsOERBQUMsY0FBRDtBQUFBO0FBQUEsT0FBb0IsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQVVBLFFBQU1DLGtCQUFrQixHQUFHLE1BQU07QUFDL0IsVUFBTTtBQUFFQztBQUFGLFFBQVdILEtBQWpCO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsV0FBT0EsSUFBSSxDQUFDRyxHQUFMLENBQVVDLEdBQUQsaUJBQVMsOERBQUMsNENBQUQ7QUFBUSxXQUFLLEVBQUVBLEdBQWY7QUFBb0IsUUFBRSxFQUFFQSxHQUFHLENBQUNDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBbEIsQ0FBUDtBQUNELEdBSkQ7O0FBS0Esc0JBQ0U7QUFBQSxlQUNHUCx1QkFBdUIsRUFEMUIsRUFFR0Msa0JBQWtCLEVBRnJCO0FBQUEsa0JBREY7QUFNRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVjb3JkTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IFJlY29yZCBmcm9tICcuL1JlY29yZCc7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbmA7XG5cbmNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbiAgZmxleDogMSAxIDBweDtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkTGFiZWxzID0gKCkgPT4gKFxuICAgIDxWaXNpdFR5cGVMYWJlbFdyYXBwZXI+XG4gICAgICA8VmlzaXRUeXBlTGFiZWwga2V5PVwibXJuXCI+TVJOPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbCBrZXk9XCJ2aXNpdFwiPlZpc2l0IFR5cGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAgICAgPFZpc2l0VHlwZUxhYmVsIGtleT1cImNwdFwiPkNQVDwvVmlzaXRUeXBlTGFiZWw+XG4gICAgICA8VmlzaXRUeXBlTGFiZWwga2V5PVwicnZ1XCI+UlZVPC9WaXNpdFR5cGVMYWJlbD5cbiAgICAgIDxWaXNpdFR5cGVMYWJlbCBrZXk9XCJkYXRlXCI+RGF0ZTwvVmlzaXRUeXBlTGFiZWw+XG4gICAgPC9WaXNpdFR5cGVMYWJlbFdyYXBwZXI+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyVmlzaXRSZWNvcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGEubWFwKChrZXkpID0+IDxSZWNvcmQgdmlzaXQ9e2tleX0gaWQ9e2tleS5pZH0gLz4pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyVmlzaXRSZWNvcmRMYWJlbHMoKX1cbiAgICAgIHtyZW5kZXJWaXNpdFJlY29yZHMoKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RecordList.js\n");

/***/ }),

/***/ "./components/Records.js":
/*!*******************************!*\
  !*** ./components/Records.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PATIENT_VISITS_QUERY\": function() { return /* binding */ ALL_PATIENT_VISITS_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Records; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Record */ \"./components/Record.js\");\n/* harmony import */ var _RecordList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RecordList */ \"./components/RecordList.js\");\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Records.js\";\n\n\n\n\n\n\nconst ALL_PATIENT_VISITS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {\n    allPatientVisits(first: $first, skip: $skip) {\n      id\n      mrn\n      visitType\n      visitDate\n      cpt\n      rvu\n    }\n  }\n`; // const VisitTypeLabelWrapper = styled.div`\n//   display: flex;\n//   justify-content: space-around;\n//   position: sticky;\n//   top: 0px;\n//   background-color: white;\n//   height: 50px;\n// `;\n// const VisitTypeLabel = styled.button`\n//   flex: 1 1 0px;\n//   &:hover {\n//     cursor: pointer;\n//   }\n// `;\n\nfunction Records({\n  page\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PATIENT_VISITS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_4__.perPage - _config__WEBPACK_IMPORTED_MODULE_4__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_4__.perPage\n    }\n  });\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 23\n  }, this); // if (error) return <p>Error: {error.message}</p>;\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 21\n  }, this); // const renderVisitRecordLabels = () => (\n  //   <VisitTypeLabelWrapper>\n  //     <VisitTypeLabel onClick={() => handleClick()}>MRN</VisitTypeLabel>\n  //     <VisitTypeLabel>Visit Type</VisitTypeLabel>\n  //     <VisitTypeLabel>CPT</VisitTypeLabel>\n  //     <VisitTypeLabel>RVU</VisitTypeLabel>\n  //     <VisitTypeLabel>Date</VisitTypeLabel>\n  //   </VisitTypeLabelWrapper>\n  // );\n  // const renderVisitRecords = () =>\n  //   allVisits.data.allPatientVisits.map((visit) => (\n  //     <Record key={visit.id} visit={visit} />\n  //   ));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RecordList__WEBPACK_IMPORTED_MODULE_6__.default, {\n      data: data.allPatientVisits\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 8\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1JlY29yZHMuanM/MWJhMCJdLCJuYW1lcyI6WyJBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkiLCJncWwiLCJSZWNvcmRzIiwicGFnZSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInNraXAiLCJwZXJQYWdlIiwiZmlyc3QiLCJhbGxQYXRpZW50VmlzaXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsd0JBQXdCLEdBQUdDLG9EQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYTyxDLENBYVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQyxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBMkI7QUFDeEMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUEyQkMsd0RBQVEsQ0FBQ1Asd0JBQUQsRUFBMkI7QUFDbEVRLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUVOLElBQUksR0FBR08sNENBQVAsR0FBaUJBLDRDQURkO0FBRVRDLFdBQUssRUFBRUQsNENBQU9BO0FBRkw7QUFEdUQsR0FBM0IsQ0FBekM7QUFPQSxNQUFJSixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQVIyQixDQVN4Qzs7QUFDQSxNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQVY2QixDQVl4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFBLDJCQUNHLDhEQUFDLGdEQUFEO0FBQVksVUFBSSxFQUFFRCxJQUFJLENBQUNRO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxtQkFERjtBQVFEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWNvcmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgUmVjb3JkIGZyb20gJy4vUmVjb3JkJztcbmltcG9ydCBSZWNvcmRMaXN0IGZyb20gJy4vUmVjb3JkTGlzdCc7XG5cbmV4cG9ydCBjb25zdCBBTExfUEFUSUVOVF9WSVNJVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSgkc2tpcDogSW50ID0gMCwgJGZpcnN0OiBJbnQpIHtcbiAgICBhbGxQYXRpZW50VmlzaXRzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgbXJuXG4gICAgICB2aXNpdFR5cGVcbiAgICAgIHZpc2l0RGF0ZVxuICAgICAgY3B0XG4gICAgICBydnVcbiAgICB9XG4gIH1cbmA7XG5cbi8vIGNvbnN0IFZpc2l0VHlwZUxhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuLy8gICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICB0b3A6IDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vIGA7XG5cbi8vIGNvbnN0IFZpc2l0VHlwZUxhYmVsID0gc3R5bGVkLmJ1dHRvbmBcbi8vICAgZmxleDogMSAxIDBweDtcbi8vICAgJjpob3ZlciB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG4vLyBgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmRzKHsgcGFnZSB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QQVRJRU5UX1ZJU0lUU19RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxuICAgICAgZmlyc3Q6IHBlclBhZ2UsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcblxuICAvLyBjb25zdCByZW5kZXJWaXNpdFJlY29yZExhYmVscyA9ICgpID0+IChcbiAgLy8gICA8VmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAvLyAgICAgPFZpc2l0VHlwZUxhYmVsIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9Pk1STjwvVmlzaXRUeXBlTGFiZWw+XG4gIC8vICAgICA8VmlzaXRUeXBlTGFiZWw+VmlzaXQgVHlwZTwvVmlzaXRUeXBlTGFiZWw+XG4gIC8vICAgICA8VmlzaXRUeXBlTGFiZWw+Q1BUPC9WaXNpdFR5cGVMYWJlbD5cbiAgLy8gICAgIDxWaXNpdFR5cGVMYWJlbD5SVlU8L1Zpc2l0VHlwZUxhYmVsPlxuICAvLyAgICAgPFZpc2l0VHlwZUxhYmVsPkRhdGU8L1Zpc2l0VHlwZUxhYmVsPlxuICAvLyAgIDwvVmlzaXRUeXBlTGFiZWxXcmFwcGVyPlxuICAvLyApO1xuXG4gIC8vIGNvbnN0IHJlbmRlclZpc2l0UmVjb3JkcyA9ICgpID0+XG4gIC8vICAgYWxsVmlzaXRzLmRhdGEuYWxsUGF0aWVudFZpc2l0cy5tYXAoKHZpc2l0KSA9PiAoXG4gIC8vICAgICA8UmVjb3JkIGtleT17dmlzaXQuaWR9IHZpc2l0PXt2aXNpdH0gLz5cbiAgLy8gICApKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7PFJlY29yZExpc3QgZGF0YT17ZGF0YS5hbGxQYXRpZW50VmlzaXRzfSAvPn1cbiAgICAgIHsvKiA8UmVjb3JkTGlzdCBkYXRhPXthbGxWaXNpdHMuZGF0YS5hbGxQYXRpZW50VmlzaXRzfSAvPiAqL31cbiAgICAgIHsvKiB7Lyoge3JlbmRlclZpc2l0UmVjb3JkTGFiZWxzKCl9ICovfVxuICAgICAgey8qIHtyZW5kZXJWaXNpdFJlY29yZHMoKX0gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Records.js\n");

/***/ })

};
;