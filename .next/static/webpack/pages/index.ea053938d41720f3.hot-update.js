"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.ts\");\n/* harmony import */ var _styles_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Alert */ \"./styles/Alert.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import useStateWithStorage from '../../hooks/useStateWithStorage';\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), order = ref[0], setOrder = ref[1];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_ORDER), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            var ref;\n            setOrder(data === null || data === void 0 ? void 0 : (ref = data.activeOrder) === null || ref === void 0 ? void 0 : ref.subTotal);\n        }\n    }, [\n        data,\n        setOrder\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"./img/e-commerce.png\",\n                alt: \"e-commerce\"\n            }, void 0, false, {\n                fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"order-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"My cart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"$0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"$\",\n                            order\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, _this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Alert__WEBPACK_IMPORTED_MODULE_3__.Alert, {\n                        error: true,\n                        children: \"Ups, looks like there is an error\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 20\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cecialbero/Documents/projects/santex-fe-challenge-basic/components/Header/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"4Hm6UEaKQmE8rkMst2EoycfrRrY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ0Y7QUFDVztBQUNWO0FBQzNDLHFFQUFxRTtBQUVyRSxJQUFNSyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBMEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJLLEtBQUssR0FBY0wsR0FBVyxHQUF6QixFQUFFTSxRQUFRLEdBQUlOLEdBQVcsR0FBZjtJQUN0QixJQUErQkMsSUFBc0IsR0FBdEJBLHdEQUFRLENBQUNDLDBEQUFZLENBQUMsRUFBOUNLLE9BQU8sR0FBaUJOLElBQXNCLENBQTlDTSxPQUFPLEVBQUVDLEtBQUssR0FBVVAsSUFBc0IsQ0FBckNPLEtBQUssRUFBRUMsSUFBSSxHQUFJUixJQUFzQixDQUE5QlEsSUFBSTtJQUUzQlYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBR1UsSUFBSSxFQUFFO2dCQUNFQSxHQUFpQjtZQUExQkgsUUFBUSxDQUFDRyxJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVDLFdBQVcsY0FBakJELEdBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRUUsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ0YsSUFBSTtRQUFFSCxRQUFRO0tBQUMsQ0FBQztJQUVwQixxQkFDRSw4REFBQ00sUUFBTTs7MEJBQ0wsOERBQUNDLEtBQUc7Z0JBQ0ZDLEdBQUcsRUFBQyxzQkFBc0I7Z0JBQzFCQyxHQUFHLEVBQUMsWUFBWTs7Ozs7cUJBQ2hCOzBCQUNGLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOztrQ0FDOUIsOERBQUNDLEdBQUM7a0NBQUMsU0FBTzs7Ozs7NkJBQUk7b0JBRVpYLE9BQU8saUJBQ0wsOERBQUNXLEdBQUM7a0NBQUMsSUFBRTs7Ozs7NkJBQUksaUJBQ1QsOERBQUNBLEdBQUM7OzRCQUFDLEdBQUM7NEJBQUNiLEtBQUs7Ozs7Ozs2QkFBSztvQkFHakJHLEtBQUssa0JBQUksOERBQUNMLGdEQUFLO3dCQUFDSyxLQUFLO2tDQUFDLG1DQUFpQzs7Ozs7NkJBQVE7Ozs7OztxQkFFN0Q7Ozs7OzthQUNDLENBQ1Q7QUFDSixDQUFDO0dBN0JLSixNQUFNOztRQUVxQkgsb0RBQVE7OztBQUZuQ0csS0FBQUEsTUFBTTtBQStCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBBQ1RJVkVfT1JERVIgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3F1ZXJpZXMnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8uLi9zdHlsZXMvQWxlcnQnO1xuLy8gaW1wb3J0IHVzZVN0YXRlV2l0aFN0b3JhZ2UgZnJvbSAnLi4vLi4vaG9va3MvdXNlU3RhdGVXaXRoU3RvcmFnZSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KEFDVElWRV9PUkRFUilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRhdGEpIHtcbiAgICAgIHNldE9yZGVyKGRhdGE/LmFjdGl2ZU9yZGVyPy5zdWJUb3RhbClcbiAgICB9XG4gIH0sIFtkYXRhLCBzZXRPcmRlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9Jy4vaW1nL2UtY29tbWVyY2UucG5nJ1xuICAgICAgICBhbHQ9J2UtY29tbWVyY2UnXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J29yZGVyLWNvbnRhaW5lcic+XG4gICAgICAgIDxwPk15IGNhcnQ8L3A+XG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgPyA8cD4kMDwvcD5cbiAgICAgICAgICA6IDxwPiR7b3JkZXJ9PC9wPlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvciAmJiA8QWxlcnQgZXJyb3I+VXBzLCBsb29rcyBsaWtlIHRoZXJlIGlzIGFuIGVycm9yPC9BbGVydD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJBQ1RJVkVfT1JERVIiLCJBbGVydCIsIkhlYWRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiYWN0aXZlT3JkZXIiLCJzdWJUb3RhbCIsImhlYWRlciIsImltZyIsInNyYyIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});