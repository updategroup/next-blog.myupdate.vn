"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/SideNav/index.tsx":
/*!**********************************************!*\
  !*** ./components/layouts/SideNav/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"./node_modules/@mui/material/ListItemButton/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction SideNav() {\n    var _this = this;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), category = ref[0], setCategory = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        fetch(\"\".concat(\"http://127.0.0.1:8000/api\", \"/category/\")).then(function(res) {\n            return res.json();\n        }).then(function(result) {\n            setCategory(result);\n        }, function(error) {\n            console.log(error);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            width: \"100%\",\n            bgcolor: \"background.paper\"\n        },\n        __source: {\n            fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n            \"aria-label\": \"main mailbox folders\",\n            __source: {\n                fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: category.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        disablePadding: true,\n                        __source: {\n                            fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        width: \"25px\",\n                                        src: item.icon,\n                                        __source: {\n                                            fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    primary: item.name,\n                                    __source: {\n                                        fileName: \"/Users/quoc/Developer/frontend/next-blog.myupdate.vn/components/layouts/SideNav/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        })\n                    }, item.id);\n                })\n            })\n        })\n    }));\n}\n_s1(SideNav, \"a0Gkw7L/pIBVFZ2SGhI61pCkZ9s=\");\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvU2lkZU5hdi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNVO0FBQ0U7QUFDUTtBQUNZO0FBQ0o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBUzVDTyxPQUFPLEdBQUcsQ0FBQzs7O0lBQ2xCLEdBQUssQ0FBMkJQLEdBQThCLGtCQUE5QkEscURBQWMsQ0FBYSxDQUFDLENBQUMsT0FBdERTLFFBQVEsR0FBaUJULEdBQThCLEtBQTdDVSxXQUFXLEdBQUlWLEdBQThCO0lBRTlEQSxzREFBZSxDQUFDLFFBQ2hCLEdBRG9CLENBQUM7UUFDbkJZLEtBQUssQ0FBRSxHQUFzQixNQUFVLENBQTlCQywyQkFBbUIsRUFBQyxDQUFVLGNBQ3RDRyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztZQUFJQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTtXQUNwQkYsSUFBSSxDQUNILFFBQVEsQ0FBUEcsTUFBTSxFQUFLLENBQUM7WUFDWFQsV0FBVyxDQUFDUyxNQUFNO1FBQ3BCLENBQUMsRUFDRCxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO1FBQ25CLENBQUM7SUFFTCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osTUFBTSxzRUFDSG5CLHlEQUFHO1FBQUNzQixFQUFFLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBTTtZQUFFQyxPQUFPLEVBQUUsQ0FBa0I7UUFBQyxDQUFDOzs7Ozs7O3VGQUNwREMsQ0FBRztZQUFDQyxDQUFVLGFBQUMsQ0FBc0I7Ozs7Ozs7MkZBQ25DekIsMERBQUk7Ozs7Ozs7MEJBRURPLFFBQVEsQ0FBQ21CLEdBQUcsQ0FBQ0MsUUFDeEIsQ0FEd0JBLElBQUk7a0NBQ2YsTUFBTSx3REFBTDFCLDhEQUFRO3dCQUFDMkIsY0FBYzs7Ozs7Ozt3R0FDdkIxQixvRUFBYzs7Ozs7Ozs7cUdBQ1pDLGtFQUFZOzs7Ozs7O21IQUNWMEIsQ0FBRzt3Q0FBQ1AsS0FBSyxFQUFDLENBQU07d0NBQUNRLEdBQUcsRUFBRUgsSUFBSSxDQUFDSSxJQUFJOzs7Ozs7Ozs7cUdBRWpDM0Isa0VBQVk7b0NBQUM0QixPQUFPLEVBQUVMLElBQUksQ0FBQ00sSUFBSTs7Ozs7Ozs7Ozt1QkFMSk4sSUFBSSxDQUFDTyxFQUFFOzs7OztBQWNuRCxDQUFDO0lBbkNRN0IsT0FBTztLQUFQQSxPQUFPO0FBcUNoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9TaWRlTmF2L2luZGV4LnRzeD85ZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUJ1dHRvblwiO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb25cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgRHJhZnRzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9EcmFmdHNcIjtcblxudHlwZSBDYXRlZ29yeT17XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBzbHVnOiBzdHJpbmc7XG59XG5mdW5jdGlvbiBTaWRlTmF2KCkge1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlPENhdGVnb3J5W10+KFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfS0VZfS9jYXRlZ29yeS9gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKFxuICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICBzZXRDYXRlZ29yeShyZXN1bHQpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIClcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIgfX0+XG4gICAgICA8bmF2IGFyaWEtbGFiZWw9XCJtYWluIG1haWxib3ggZm9sZGVyc1wiPlxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeS5tYXAoaXRlbT0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlUGFkZGluZyBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyNXB4XCIgc3JjPXtpdGVtLmljb259IC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpdGVtLm5hbWV9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L25hdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiU2lkZU5hdiIsInVzZVN0YXRlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInVzZUVmZmVjdCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN4Iiwid2lkdGgiLCJiZ2NvbG9yIiwibmF2IiwiYXJpYS1sYWJlbCIsIm1hcCIsIml0ZW0iLCJkaXNhYmxlUGFkZGluZyIsImltZyIsInNyYyIsImljb24iLCJwcmltYXJ5IiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/SideNav/index.tsx\n");

/***/ })

});