(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/components/Backend/UI/List/List.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/List/List.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var timeout;

var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List() {
    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: 10,
      search: '',
      page: 1,
      pageFirst: 1,
      pageSecond: 2,
      pageLast: 3
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      var _this$state = _this.state,
          page = _this$state.page,
          show = _this$state.show,
          search = _this$state.search;
      firstPageHandler();

      if (name === 'show') {
        get(page, value, search);
        return setShow(value);
      }

      if (name === 'search') {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function () {
          get(page, show, value);
          clearTimeout(timeout);
        }, 1000);
        return setSearch(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "previousPageHandler", function () {
      var page = _this.state.page;
      if (page <= 1) return;
      pageChangeHandler(page - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "nextPageHandler", function () {
      var page = _this.state.page;
      var lastPage = pageNumber;
      if (page >= lastPage) return;
      pageChangeHandler(page + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "firstPageHandler", function () {
      var page = _this.state.page;
      if (page <= 1) return;
      pageChangeHandler(1);
    });

    _defineProperty(_assertThisInitialized(_this), "lastPageHandler", function () {
      var page = _this.state.page;
      var lastPage = pageNumber;
      if (page >= lastPage) return;
      pageChangeHandler(lastPage);
    });

    _defineProperty(_assertThisInitialized(_this), "pageChangeHandler", function (page) {
      var _this$state2 = _this.state,
          show = _this$state2.show,
          search = _this$state2.search;
      var lastPage = pageNumber;
      var pageFirst;
      if (page === 1) pageFirst = 1;else if (page === lastPage) pageFirst = lastPage - 2;else pageFirst = page - 1;
      get(page, show, search);
      setPage(page);
      setPageFirst(pageFirst);
      setPageSecond(pageFirst + 1);
      setPageLast(pageFirst + 2);
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.preventDefault();
      var url = e.target.href;
      exportData(url);
    });

    _defineProperty(_assertThisInitialized(_this), "exportData", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
        var data, format, name, token, formData, res, resData, downloadLink, a;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _this.props.data;
                format = url.split('/')[url.split('/').length - 1];
                name = title + '.' + format;
                token = localStorage.getItem('token');
                _context.prev = 4;
                formData = new FormData();
                formData.append('data', data);
                formData.append('name', name);
                _context.next = 10;
                return fetch(url, {
                  method: 'POST',
                  mode: 'cors',
                  body: formData,
                  headers: {
                    Authorization: token
                  }
                });

              case 10:
                res = _context.sent;
                _context.next = 13;
                return res.blob();

              case 13:
                resData = _context.sent;
                downloadLink = URL.createObjectURL(resData);
                a = document.createElement('a');
                a.style.display = 'none';
                a.href = downloadLink;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(downloadLink);
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 24]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fields = _this$props.fields,
          array = _this$props.array,
          _this$props$loading = _this$props.loading,
          loading = _this$props$loading === void 0 ? false : _this$props$loading,
          _this$props$total = _this$props.total,
          total = _this$props$total === void 0 ? 0 : _this$props$total,
          limit = _this$props.limit,
          bordered = _this$props.bordered,
          _this$props$xs = _this$props.xs,
          xs = _this$props$xs === void 0 ? 12 : _this$props$xs,
          _this$props$sm = _this$props.sm,
          sm = _this$props$sm === void 0 ? 12 : _this$props$sm,
          _this$props$md = _this$props.md,
          md = _this$props$md === void 0 ? 12 : _this$props$md,
          _this$props$lg = _this$props.lg,
          lg = _this$props$lg === void 0 ? 12 : _this$props$lg,
          _this$props$xl = _this$props.xl,
          xl = _this$props$xl === void 0 ? 12 : _this$props$xl,
          icon = _this$props.icon,
          title = _this$props.title,
          add = _this$props.add,
          link = _this$props.link,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          dark = _this$props.dark,
          borderless = _this$props.borderless,
          _this$props$innerClas = _this$props.innerClassName,
          innerClassName = _this$props$innerClas === void 0 ? '' : _this$props$innerClas,
          _this$props$outerClas = _this$props.outerClassName,
          outerClassName = _this$props$outerClas === void 0 ? '' : _this$props$outerClas,
          p0 = _this$props.p0,
          select = _this$props.select,
          children = _this$props.children,
          selectHandler = _this$props.selectHandler,
          style = _this$props.style,
          _this$props$content$c = _this$props.content.cms.pages.components.list,
          all = _this$props$content$c.all,
          first = _this$props$content$c.first,
          last = _this$props$content$c.last,
          loading_ = _this$props$content$c.loading,
          print = _this$props$content$c.print,
          pdf = _this$props$content$c.pdf,
          csv = _this$props$content$c.csv,
          excel = _this$props$content$c.excel,
          search_ = _this$props$content$c.search,
          show_ = _this$props$content$c.show,
          sl = _this$props$content$c.sl,
          showing = _this$props$content$c.showing,
          from = _this$props$content$c.from,
          _this$props$content$c2 = _this$props$content$c.entries,
          singular = _this$props$content$c2.singular,
          plural = _this$props$content$c2.plural;
      var _this$state3 = this.state,
          show = _this$state3.show,
          search = _this$state3.search,
          page = _this$state3.page,
          pageFirst = _this$state3.pageFirst,
          pageSecond = _this$state3.pageSecond,
          pageLast = _this$state3.pageLast;
      var titles = fields.map(function (_ref2) {
        var name = _ref2.name,
            fixed = _ref2.fixed;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "align-middle text-nowrap bg-soft",
          style: fixed ? {
            position: 'sticky',
            right: 0
          } : {},
          key: name
        }, name);
      });
      titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "text-center align-middle",
        key: "#"
      }, sl));
      if (select) titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "align-middle text-center",
        key: "select_all"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        onClick: selectHandler,
        className: "select_all"
      })));
      var filteredArray = array;
      var limitedArray = filteredArray;
      var pageNumber = Math.ceil(total / show);
      var content = limitedArray.map(function (item, index) {
        if (limit && index >= limit) return null;
        var inside = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "text-center align-middle",
          key: 'primary' + index
        }, (show === 'All' ? 0 : (page - 1) * show) + index + 1)];
        if (select) inside.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "text-center align-middle",
          key: 'secondary' + index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "checkbox",
          value: item._id
        })));
        fields.forEach(function (_ref3) {
          var key = _ref3.key,
              minWidth = _ref3.minWidth,
              fixed = _ref3.fixed;
          inside.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
            className: "align-middle text-nowrap",
            style: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_6__["updateObject"])({
              minWidth: minWidth,
              borderColor: '#DEE2E6'
            }, fixed ? {
              position: 'sticky',
              right: 0,
              backgroundColor: '#F4F4F4'
            } : {}),
            key: key
          }, item[key]));
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          className: "align-middle",
          key: index + 1
        }, inside);
      });
      var modulo = total % show;
      var entries = total === 0 ? total : modulo !== 0 ? modulo : show;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
        className: outerClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        id: "table-show",
        value: show
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        id: "table-page",
        value: page
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        id: "table-search",
        value: search
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rounded-4 d-flex justify-content-between align-items-center mb-5 mt-3 py-4 px-4 text-large bg-orange-10 ".concat(className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "d-inline-flex align-items-center text-700 text-brown"
      }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        fixedWidth: true,
        className: "mr-2",
        icon: icon,
        size: "lg"
      }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "text-dark"
      }, title)), add ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: link
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "orange",
        size: "lg",
        className: "rounded-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
        fixedWidth: true,
        className: "mr-2"
      }), add)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "d-flex flex-column " + (dark ? "text-light " : " ") + className,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-4 border-bottom border-soft text-orange text-700 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "align-items-center justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 pb-2 pb-lg-0 col-lg-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "d-flex align-items-center text-secondary rounded-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "px-3 py-2 font-weight-bold h-100 border-bottom border-soft bg-soft"
      }, show_), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "select",
        name: "show",
        onChange: this.inputChangedHandler,
        className: "px-3 py-2 text-center rounded-0 h-100 d-block text-reset border-top-0 border-right-0 border-bottom-0 border-black-20 bg-soft",
        style: {
          width: '5rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "10"
      }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "25"
      }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "50"
      }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "100"
      }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "All"
      }, all)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 d-lg-none pb-2 pb-lg-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "search",
        name: "search",
        onChange: this.inputChangedHandler,
        className: "bg-soft border-0 rounded-2",
        placeholder: "Search..."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-lg-4 pb-2 pb-lg-0 rounded-2 overflow-hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bg-soft d-flex text-secondary justify-content-around align-items-center font-weight-bold py-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/api/export/xlsx",
        onClick: this.onClick,
        className: "px-2 export text-decoration-none text-reset"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileExcel"],
        className: "text-darkblue mr-2"
      }), excel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/api/export/pdf",
        onClick: this.onClick,
        className: "px-2 export text-decoration-none text-reset"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFilePdf"],
        className: "text-danger mr-2"
      }), pdf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/api/export/csv",
        onClick: this.onClick,
        className: "px-2 export text-decoration-none text-reset"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileCsv"],
        className: "text-green mr-2"
      }), csv), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/api/export/pdf",
        onClick: this.onClick,
        className: "px-2 export text-decoration-none text-reset"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPrint"],
        className: "text-primary mr-2"
      }), print))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-lg-2 d-none d-lg-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "search",
        name: "search",
        onChange: this.inputChangedHandler,
        className: "bg-soft border-0 rounded-2",
        placeholder: "".concat(search_, "...")
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex-fill d-flex flex-column " + (!p0 ? "p-4" : "p-0")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "table-responsive flex-fill"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        dark: dark,
        bordered: bordered,
        hover: true,
        borderless: borderless,
        className: innerClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "bg-soft text-secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, titles)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "bg-soft-50 text-secondary"
      }, !loading && content))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 12,
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-center py-3"
      }, loading_, "...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, showing, " ", +page !== pageNumber && +page > 1 ? show : entries, " ", from, " ", total, " ", total > 1 ? plural : singular, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-2 d-flex justify-content-end"
      }, show === 'All' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "pagination btn-group"
      }, page === 1 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-yellow",
        onClick: this.firstPageHandler
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDoubleLeft"],
        className: "mr-2"
      }), first), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-darkblue text-secondary",
        onClick: this.previousPageHandler
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronLeft"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-darkblue " + (page === pageFirst ? 'text-700 active' : 'secondary'),
        onClick: function onClick() {
          return _this2.pageChangeHandler(pageFirst);
        }
      }, pageFirst), pageNumber > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-darkblue " + (page === pageSecond ? 'text-700 active' : 'secondary'),
        onClick: function onClick() {
          return _this2.pageChangeHandler(pageSecond);
        }
      }, pageSecond), pageNumber > 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-darkblue " + (page === pageLast ? 'text-700 active' : 'secondary'),
        onClick: function onClick() {
          return _this2.pageChangeHandler(pageLast);
        }
      }, pageLast) : null, page === pageNumber ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-darkblue text-secondary",
        onClick: this.nextPageHandler
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "btn btn-myprimary",
        onClick: this.lastPageHandler
      }, last, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDoubleRight"],
        className: "ml-2"
      })))) : null))))));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(List));

/***/ }),

/***/ "./resources/js/src/components/Feedback/Feedback.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Feedback/Feedback.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    color: message.type
  }, message.content) : null;
});

/***/ })

}]);