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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ upload; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tesseract.js */ \"./node_modules/tesseract.js/src/index.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Products */ \"./components/Products.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Drew/Projects/CPT_Tracker/CPT_Tracker_Frontend/components/Upload.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation CREATE_PRODUCT_MUTATION(\\n    # Which variables are getting passed in? And What types are they\\n    $name: String!\\n    $description: String!\\n    $price: Int!\\n    $image: Upload\\n  ) {\\n    createProduct(\\n      data: {\\n        name: $name\\n        description: $description\\n        price: $price\\n        status: \\\"AVAILABLE\\\"\\n        photo: { create: { image: $image, altText: $name } }\\n      }\\n    ) {\\n      id\\n      price\\n      description\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n // TODO\n// add Loading screen while Tesseract is converting image to text\n\nvar CREATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_11__.default)(_templateObject());\nfunction upload() {\n  _s();\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)({\n    image: '',\n    text: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation)(CREATE_PRODUCT_MUTATION, {\n    variables: inputs,\n    refetchQueries: [{\n      query: _Products__WEBPACK_IMPORTED_MODULE_9__.ALL_PRODUCTS_QUERY\n    }]\n  }),\n      _useMutation2 = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      createProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error,\n      data = _useMutation2$.data;\n\n  var cptCodes = {};\n\n  var handleClick = /*#__PURE__*/function () {\n    var _ref = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              tesseract_js__WEBPACK_IMPORTED_MODULE_6___default().recognize(inputs.image, 'eng', {\n                logger: function logger(m) {\n                  return console.log(m);\n                }\n              })[\"catch\"](function (err) {\n                console.error(err);\n              }).then(function (result) {\n                var lines = result.data.lines;\n                var thing = {};\n                var schedule = lines.map(function (key, i) {\n                  // const obj = { mrn: 0, type: '' };\n                  var words = key.text.split(' ');\n                  console.log(words);\n                  var obj = {\n                    mrn: words[2],\n                    type: words[4]\n                  }; // obj.mrn = words[2];\n                  // obj.type = words[4];\n\n                  return obj; // if (i !== 0) {\n                  //   const words = schedule[key].text.split(' ');\n                  //   return {\n                  //     mrn: words[2],\n                  //     type: words[4],\n                  //   };\n                  // }\n                  // return lines[key];\n                });\n                console.log(schedule); // MRN, Visit Type, Level, CPT, RVU\n                // console.log(text);\n                // setText(text);\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleClick() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_10__.default, {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var res;\n        return _Users_Drew_Projects_CPT_Tracker_CPT_Tracker_Frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                e.preventDefault();\n                console.log(inputs); // Submit the inputfields to the backend:\n\n                _context2.next = 4;\n                return createProduct();\n\n              case 4:\n                res = _context2.sent;\n                clearForm();\n                next_router__WEBPACK_IMPORTED_MODULE_5___default().push({\n                  pathname: \"/product/\".concat(res.data.createProduct.id)\n                });\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          required: true,\n          type: \"file\",\n          id: \"image\",\n          name: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: handleClick,\n        children: \"Convert to Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, this);\n}\n\n_s(upload, \"RYAKW67IL5YWm7+bUw0UMSOGLYw=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWQuanM/NTYzZiJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsInVwbG9hZCIsInVzZUZvcm0iLCJpbWFnZSIsInRleHQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJBTExfUFJPRFVDVFNfUVVFUlkiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNwdENvZGVzIiwiaGFuZGxlQ2xpY2siLCJUZXNzZXJhY3QiLCJsb2dnZXIiLCJtIiwiY29uc29sZSIsImxvZyIsImVyciIsInRoZW4iLCJyZXN1bHQiLCJsaW5lcyIsInRoaW5nIiwic2NoZWR1bGUiLCJtYXAiLCJrZXkiLCJpIiwid29yZHMiLCJzcGxpdCIsIm9iaiIsIm1ybiIsInR5cGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJSb3V0ZXIiLCJwYXRobmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MscURBQUgsbUJBQTdCO0FBeUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxpQkFDd0JDLHFEQUFPLENBQUM7QUFDN0RDLFNBQUssRUFBRSxFQURzRDtBQUU3REMsUUFBSSxFQUFFO0FBRnVELEdBQUQsQ0FEL0I7QUFBQSxNQUN2QkMsTUFEdUIsWUFDdkJBLE1BRHVCO0FBQUEsTUFDZkMsWUFEZSxZQUNmQSxZQURlO0FBQUEsTUFDREMsU0FEQyxZQUNEQSxTQURDO0FBQUEsTUFDVUMsU0FEVixZQUNVQSxTQURWOztBQUFBLHFCQUttQkMsNERB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QUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFYSxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXhGdUJsQixNO1VBQ2lDQyxpRCxFQUlMTyx3RCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFRlc3NlcmFjdCBmcm9tICd0ZXNzZXJhY3QuanMnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUlkgfSBmcm9tICcuL1Byb2R1Y3RzJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG4vLyBUT0RPXG4vLyBhZGQgTG9hZGluZyBzY3JlZW4gd2hpbGUgVGVzc2VyYWN0IGlzIGNvbnZlcnRpbmcgaW1hZ2UgdG8gdGV4dFxuXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgIyBXaGljaCB2YXJpYWJsZXMgYXJlIGdldHRpbmcgcGFzc2VkIGluPyBBbmQgV2hhdCB0eXBlcyBhcmUgdGhleVxuICAgICRuYW1lOiBTdHJpbmchXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgJHByaWNlOiBJbnQhXG4gICAgJGltYWdlOiBVcGxvYWRcbiAgKSB7XG4gICAgY3JlYXRlUHJvZHVjdChcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxuICAgICAgICBwcmljZTogJHByaWNlXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIlxuICAgICAgICBwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XG4gICAgICB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgcHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGxvYWQoKSB7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcbiAgICBpbWFnZTogJycsXG4gICAgdGV4dDogJycsXG4gIH0pO1xuICBjb25zdCBbY3JlYXRlUHJvZHVjdCwgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9XSA9IHVzZU11dGF0aW9uKFxuICAgIENSRUFURV9QUk9EVUNUX01VVEFUSU9OLFxuICAgIHtcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUlkgfV0sXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGNwdENvZGVzID0ge31cblxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBUZXNzZXJhY3QucmVjb2duaXplKGlucHV0cy5pbWFnZSwgJ2VuZycsIHtcbiAgICAgIGxvZ2dlcjogKG0pID0+IGNvbnNvbGUubG9nKG0pLFxuICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCB7IGxpbmVzIH0gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgY29uc3QgdGhpbmcgPSB7fTtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGUgPSBsaW5lcy5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnN0IG9iaiA9IHsgbXJuOiAwLCB0eXBlOiAnJyB9O1xuICAgICAgICAgIGNvbnN0IHdvcmRzID0ga2V5LnRleHQuc3BsaXQoJyAnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh3b3Jkcyk7XG4gICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgbXJuOiB3b3Jkc1syXSxcbiAgICAgICAgICAgIHR5cGU6IHdvcmRzWzRdLFxuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gb2JqLm1ybiA9IHdvcmRzWzJdO1xuICAgICAgICAgIC8vIG9iai50eXBlID0gd29yZHNbNF07XG4gICAgICAgICAgcmV0dXJuIG9iajtcblxuICAgICAgICAgIC8vIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgLy8gICBjb25zdCB3b3JkcyA9IHNjaGVkdWxlW2tleV0udGV4dC5zcGxpdCgnICcpO1xuICAgICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgICAvLyAgICAgbXJuOiB3b3Jkc1syXSxcbiAgICAgICAgICAvLyAgICAgdHlwZTogd29yZHNbNF0sXG4gICAgICAgICAgLy8gICB9O1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyByZXR1cm4gbGluZXNba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2NoZWR1bGUpO1xuXG4gICAgICAgIC8vIE1STiwgVmlzaXQgVHlwZSwgTGV2ZWwsIENQVCwgUlZVXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGV4dCk7XG4gICAgICAgIC8vIHNldFRleHQodGV4dCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xuICAgICAgICAvLyBTdWJtaXQgdGhlIGlucHV0ZmllbGRzIHRvIHRoZSBiYWNrZW5kOlxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Jlcy5kYXRhLmNyZWF0ZVByb2R1Y3QuaWR9YCxcbiAgICAgICAgfSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XG4gICAgICAgICAgSW1hZ2VcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICBDb252ZXJ0IHRvIFRleHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4rIEFkZCBTY2hlZHVsZTwvYnV0dG9uPiAqL31cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Upload.js\n");

/***/ })

});