webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/kennyto/TRIRIGA/training/learnNextJS/hello-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var PostLink = function PostLink(_ref) {
  var show = _ref.show;
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(show.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, show.name)));
};

var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1468407906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Batman TV Shows"), __jsx("ul", {
    className: "jsx-1468407906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.shows.map(function (show) {
    return __jsx(PostLink, {
      key: show.id,
      show: show,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1468407906",
    __self: this
  }, "h1.jsx-1468407906,a.jsx-1468407906{font-family:'Arial';}ul.jsx-1468407906{padding:0;}li.jsx-1468407906{list-style:none;margin:5px 0;}a.jsx-1468407906{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1468407906:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueXRvL1RSSVJJR0EvdHJhaW5pbmcvbGVhcm5OZXh0SlMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmMsQUFJeUIsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJiLEVBY0EsSUFWYyxJQVJkLFNBU0EscUJBSVksV0FDWiIsImZpbGUiOiIvVXNlcnMva2Vubnl0by9UUklSSUdBL3RyYWluaW5nL2xlYXJuTmV4dEpTL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQb3N0TGluayA9ICh7IHNob3cgfSkgPT4gKFxuXHQ8bGk+XG5cdCAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cblx0XHQ8YT57c2hvdy5uYW1lfTwvYT5cblx0ICA8L0xpbms+XG5cdDwvbGk+XG4gICk7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuXHRcdDx1bD5cblx0XHRcdHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG5cdFx0XHRcdDxQb3N0TGluayBrZXk9e3Nob3cuaWR9IHNob3c9e3Nob3d9IC8+XG5cdFx0XHQpKX1cblx0XHQ8L3VsPlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGgxLFxuXHRcdFx0YSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuXHRcdFx0fVxuXHRcblx0XHRcdHVsIHtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdH1cblx0XG5cdFx0XHRsaSB7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHR9XG5cdFxuXHRcdFx0YSB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Y29sb3I6IGJsdWU7XG5cdFx0XHR9XG5cdFxuXHRcdFx0YTpob3ZlciB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cdFxuXHRyZXR1cm4ge1xuXHRcdHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/kennyto/TRIRIGA/training/learnNextJS/hello-next/pages/index.js */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2421df28943fad802185.hot-update.js.map