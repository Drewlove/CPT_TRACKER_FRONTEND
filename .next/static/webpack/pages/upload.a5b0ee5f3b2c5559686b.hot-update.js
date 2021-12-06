/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./components/Upload.js":
/*!******************************!*\
  !*** ./components/Upload.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ upload; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tesseract.js */ \"./node_modules/tesseract.js/src/index.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Products */ \"./components/Products.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Upload.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation CREATE_PRODUCT_MUTATION(\\n    # Which variables are getting passed in? And What types are they\\n    $name: String!\\n    $description: String!\\n    $price: Int!\\n    $image: Upload\\n  ) {\\n    createProduct(\\n      data: {\\n        name: $name\\n        description: $description\\n        price: $price\\n        status: \\\"AVAILABLE\\\"\\n        photo: { create: { image: $image, altText: $name } }\\n      }\\n    ) {\\n      id\\n      price\\n      description\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n // TODO\n// add Loading screen while Tesseract is converting image to text\n\nvar CREATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_11__.default)(_templateObject());\nfunction upload() {\n  _s();\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)({\n    image: '',\n    text: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation)(CREATE_PRODUCT_MUTATION, {\n    variables: inputs,\n    refetchQueries: [{\n      query: _Products__WEBPACK_IMPORTED_MODULE_9__.ALL_PRODUCTS_QUERY\n    }]\n  }),\n      _useMutation2 = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      createProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error,\n      data = _useMutation2$.data; // const cptCodes = [\n  //   {type: ''}\n  // ]\n\n\n  var handleClick = /*#__PURE__*/function () {\n    var _ref = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              tesseract_js__WEBPACK_IMPORTED_MODULE_6___default().recognize(inputs.image, 'eng', {\n                logger: function logger(m) {\n                  return console.log(m);\n                }\n              })[\"catch\"](function (err) {\n                console.error(err);\n              }).then(function (result) {\n                var lines = result.data.lines;\n                var thing = {};\n                var schedule = lines.map(function (key, i) {\n                  // const obj = { mrn: 0, type: '' };\n                  var words = key.text.split(' ');\n                  console.log(words);\n                  var obj = {\n                    mrn: words[2],\n                    type: words[4].replace('\\n', '')\n                  }; // text = text.replace(\"\\n\", \" \")\n\n                  return obj; // if (i !== 0) {\n                  //   const words = schedule[key].text.split(' ');\n                  //   return {\n                  //     mrn: words[2],\n                  //     type: words[4],\n                  //   };\n                  // }\n                  // return lines[key];\n                });\n                console.log(schedule); // MRN, Visit Type, Level, CPT, RVU\n                // console.log(text);\n                // setText(text);\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleClick() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_10__.default, {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var res;\n        return _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                e.preventDefault();\n                console.log(inputs); // Submit the inputfields to the backend:\n\n                _context2.next = 4;\n                return createProduct();\n\n              case 4:\n                res = _context2.sent;\n                clearForm();\n                next_router__WEBPACK_IMPORTED_MODULE_5___default().push({\n                  pathname: \"/product/\".concat(res.data.createProduct.id)\n                });\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          required: true,\n          type: \"file\",\n          id: \"image\",\n          name: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: handleClick,\n        children: \"Convert to Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, this);\n}\n\n_s(upload, \"RYAKW67IL5YWm7+bUw0UMSOGLYw=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWQuanM/NTYzZiJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsInVwbG9hZCIsInVzZUZvcm0iLCJpbWFnZSIsInRleHQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJBTExfUFJPRFVDVFNfUVVFUlkiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImhhbmRsZUNsaWNrIiwiVGVzc2VyYWN0IiwibG9nZ2VyIiwibSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ0aGVuIiwicmVzdWx0IiwibGluZXMiLCJ0aGluZyIsInNjaGVkdWxlIiwibWFwIiwia2V5IiwiaSIsIndvcmRzIiwic3BsaXQiLCJvYmoiLCJtcm4iLCJ0eXBlIiwicmVwbGFjZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsIlJvdXRlciIsInBhdGhuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVBLElBQU1BLHVCQUF1QixHQUFHQyxxREFBSCxtQkFBN0I7QUF5QmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUN3QkMscURBQU8sQ0FBQztBQUM3REMsU0FBSyxFQUFFLEVBRHNEO0FBRTdEQyxRQUFJLEVBQUU7QUFGdUQsR0FBRCxDQUQvQjtBQUFBLE1BQ3ZCQyxNQUR1QixZQUN2QkEsTUFEdUI7QUFBQSxNQUNmQyxZQURlLFlBQ2ZBLFlBRGU7QUFBQSxNQUNEQyxTQURDLFlBQ0RBLFNBREM7QUFBQSxNQUNVQyxTQURWLFlBQ1VBLFNBRFY7O0FBQUEscUJBS21CQyw0REFB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QkFBUSxFQUFFVDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRVksV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7R0ExRnVCakIsTTtVQUNpQ0MsaUQsRUFJTE8sd0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwbG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBUZXNzZXJhY3QgZnJvbSAndGVzc2VyYWN0LmpzJztcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcblxuLy8gVE9ET1xuLy8gYWRkIExvYWRpbmcgc2NyZWVuIHdoaWxlIFRlc3NlcmFjdCBpcyBjb252ZXJ0aW5nIGltYWdlIHRvIHRleHRcblxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENSRUFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICMgV2hpY2ggdmFyaWFibGVzIGFyZSBnZXR0aW5nIHBhc3NlZCBpbj8gQW5kIFdoYXQgdHlwZXMgYXJlIHRoZXlcbiAgICAkbmFtZTogU3RyaW5nIVxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nIVxuICAgICRwcmljZTogSW50IVxuICAgICRpbWFnZTogVXBsb2FkXG4gICkge1xuICAgIGNyZWF0ZVByb2R1Y3QoXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICRuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2U6ICRwcmljZVxuICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCJcbiAgICAgICAgcGhvdG86IHsgY3JlYXRlOiB7IGltYWdlOiAkaW1hZ2UsIGFsdFRleHQ6ICRuYW1lIH0gfVxuICAgICAgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBsb2FkKCkge1xuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XG4gICAgaW1hZ2U6ICcnLFxuICAgIHRleHQ6ICcnLFxuICB9KTtcbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3QsIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZIH1dLFxuICAgIH1cbiAgKTtcblxuICAvLyBjb25zdCBjcHRDb2RlcyA9IFtcbiAgLy8gICB7dHlwZTogJyd9XG4gIC8vIF1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBUZXNzZXJhY3QucmVjb2duaXplKGlucHV0cy5pbWFnZSwgJ2VuZycsIHtcbiAgICAgIGxvZ2dlcjogKG0pID0+IGNvbnNvbGUubG9nKG0pLFxuICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCB7IGxpbmVzIH0gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgY29uc3QgdGhpbmcgPSB7fTtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGUgPSBsaW5lcy5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnN0IG9iaiA9IHsgbXJuOiAwLCB0eXBlOiAnJyB9O1xuICAgICAgICAgIGNvbnN0IHdvcmRzID0ga2V5LnRleHQuc3BsaXQoJyAnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh3b3Jkcyk7XG4gICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgbXJuOiB3b3Jkc1syXSxcbiAgICAgICAgICAgIHR5cGU6IHdvcmRzWzRdLnJlcGxhY2UoJ1xcbicsICcnKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIHRleHQgPSB0ZXh0LnJlcGxhY2UoXCJcXG5cIiwgXCIgXCIpXG5cbiAgICAgICAgICByZXR1cm4gb2JqO1xuXG4gICAgICAgICAgLy8gaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAvLyAgIGNvbnN0IHdvcmRzID0gc2NoZWR1bGVba2V5XS50ZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgICAgIC8vICAgICBtcm46IHdvcmRzWzJdLFxuICAgICAgICAgIC8vICAgICB0eXBlOiB3b3Jkc1s0XSxcbiAgICAgICAgICAvLyAgIH07XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIHJldHVybiBsaW5lc1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzY2hlZHVsZSk7XG5cbiAgICAgICAgLy8gTVJOLCBWaXNpdCBUeXBlLCBMZXZlbCwgQ1BULCBSVlVcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgICAgLy8gc2V0VGV4dCh0ZXh0KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1cbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgICAgIC8vIFN1Ym1pdCB0aGUgaW5wdXRmaWVsZHMgdG8gdGhlIGJhY2tlbmQ6XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gLFxuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cbiAgICAgICAgICBJbWFnZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIENvbnZlcnQgdG8gVGV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgQWRkIFNjaGVkdWxlPC9idXR0b24+ICovfVxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Upload.js\n");

/***/ })

});