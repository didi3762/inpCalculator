function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./comps/Administration/cal-page/cal-page.component */
    "./src/app/comps/Administration/cal-page/cal-page.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'inpCalculator';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cal-page");
        }
      },
      directives: [_comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_1__["CalPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_Administration_cal_details_cal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/Administration/cal-details/cal-details.component */
    "./src/app/comps/Administration/cal-details/cal-details.component.ts");
    /* harmony import */


    var _comps_Administration_cal_item_cal_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/Administration/cal-item/cal-item.component */
    "./src/app/comps/Administration/cal-item/cal-item.component.ts");
    /* harmony import */


    var _comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/Administration/cal-page/cal-page.component */
    "./src/app/comps/Administration/cal-page/cal-page.component.ts");
    /* harmony import */


    var _comps_Administration_label_span_label_span_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/Administration/label-span/label-span.component */
    "./src/app/comps/Administration/label-span/label-span.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_Administration_cal_details_cal_details_component__WEBPACK_IMPORTED_MODULE_3__["CalDetailsComponent"], _comps_Administration_cal_item_cal_item_component__WEBPACK_IMPORTED_MODULE_4__["CalItemComponent"], _comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_5__["CalPageComponent"], _comps_Administration_label_span_label_span_component__WEBPACK_IMPORTED_MODULE_6__["LabelSpanComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_Administration_cal_details_cal_details_component__WEBPACK_IMPORTED_MODULE_3__["CalDetailsComponent"], _comps_Administration_cal_item_cal_item_component__WEBPACK_IMPORTED_MODULE_4__["CalItemComponent"], _comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_5__["CalPageComponent"], _comps_Administration_label_span_label_span_component__WEBPACK_IMPORTED_MODULE_6__["LabelSpanComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_5__["CalPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_Administration_cal_details_cal_details_component__WEBPACK_IMPORTED_MODULE_3__["CalDetailsComponent"], _comps_Administration_cal_item_cal_item_component__WEBPACK_IMPORTED_MODULE_4__["CalItemComponent"], _comps_Administration_cal_page_cal_page_component__WEBPACK_IMPORTED_MODULE_5__["CalPageComponent"], _comps_Administration_label_span_label_span_component__WEBPACK_IMPORTED_MODULE_6__["LabelSpanComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/comps/Administration/cal-details/cal-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comps/Administration/cal-details/cal-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CalDetailsComponent */

  /***/
  function srcAppCompsAdministrationCalDetailsCalDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalDetailsComponent", function () {
      return CalDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _label_span_label_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../label-span/label-span.component */
    "./src/app/comps/Administration/label-span/label-span.component.ts");

    function CalDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("client-item" + (ctx_r0.client.isPositive ? " positive" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("clientId", ctx_r0.client.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.client.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.client.sum);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.client.color);
      }
    }

    var CalDetailsComponent = /*#__PURE__*/function () {
      function CalDetailsComponent() {
        _classCallCheck(this, CalDetailsComponent);
      }

      _createClass(CalDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalDetailsComponent;
    }();

    CalDetailsComponent.ɵfac = function CalDetailsComponent_Factory(t) {
      return new (t || CalDetailsComponent)();
    };

    CalDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalDetailsComponent,
      selectors: [["cal-details"]],
      inputs: {
        client: "client"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], ["label", "sum", 3, "val"], ["label", "color", 3, "val"]],
      template: function CalDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalDetailsComponent_div_0_Template, 5, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.client);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _label_span_label_span_component__WEBPACK_IMPORTED_MODULE_2__["LabelSpanComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL0FkbWluaXN0cmF0aW9uL2NhbC1kZXRhaWxzL2NhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cal-details',
          templateUrl: './cal-details.component.html',
          styleUrls: ['./cal-details.component.css']
        }]
      }], function () {
        return [];
      }, {
        client: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/Administration/cal-item/cal-item.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comps/Administration/cal-item/cal-item.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CalItemComponent */

  /***/
  function srcAppCompsAdministrationCalItemCalItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalItemComponent", function () {
      return CalItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _label_span_label_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../label-span/label-span.component */
    "./src/app/comps/Administration/label-span/label-span.component.ts");

    var CalItemComponent = /*#__PURE__*/function () {
      function CalItemComponent() {
        _classCallCheck(this, CalItemComponent);

        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dbclickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rendomColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CalItemComponent, [{
        key: "clickNoteFn",
        value: function clickNoteFn() {
          console.log('clicked' + this.client.name);
          this.clickNote.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.rendomColor.emit(_this.client.color);
          }, 1000 * this.client.id);
        }
      }, {
        key: "deleteNoteFN",
        value: function deleteNoteFN() {
          this.deleteNote.emit(this.client.id);
        }
      }]);

      return CalItemComponent;
    }();

    CalItemComponent.ɵfac = function CalItemComponent_Factory(t) {
      return new (t || CalItemComponent)();
    };

    CalItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalItemComponent,
      selectors: [["cal-item"]],
      inputs: {
        client: "client"
      },
      outputs: {
        clickNote: "clickNote",
        dbclickNote: "dbclickNote",
        deleteNote: "deleteNote",
        rendomColor: "rendomColor"
      },
      decls: 7,
      vars: 6,
      consts: [[3, "click", "dbclick"], ["label", "sum", 3, "val"], ["label", "color", 3, "val"], [3, "click"]],
      template: function CalItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalItemComponent_Template_div_click_0_listener() {
            return ctx.clickNoteFn();
          })("dbclick", function CalItemComponent_Template_div_dbclick_0_listener() {
            return ctx.dbclickNote.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalItemComponent_Template_button_click_5_listener() {
            return ctx.deleteNoteFN();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("client-item" + (ctx.client.isPositive ? " positive" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("clientId", ctx.client.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.client.sum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.client.color);
        }
      },
      directives: [_label_span_label_span_component__WEBPACK_IMPORTED_MODULE_1__["LabelSpanComponent"]],
      styles: [".client-item[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border: 5px solid goldenrod;\r\n    margin:4px;\r\n}\r\n\r\n.client-item.positive[_ngcontent-%COMP%]{\r\n    background-color: pink;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvQWRtaW5pc3RyYXRpb24vY2FsLWl0ZW0vY2FsLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvQWRtaW5pc3RyYXRpb24vY2FsLWl0ZW0vY2FsLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQtaXRlbXtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdvbGRlbnJvZDtcclxuICAgIG1hcmdpbjo0cHg7XHJcbn1cclxuXHJcbi5jbGllbnQtaXRlbS5wb3NpdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cal-item',
          templateUrl: './cal-item.component.html',
          styleUrls: ['./cal-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        client: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dbclickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rendomColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/Administration/cal-page/cal-page.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comps/Administration/cal-page/cal-page.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CalPageComponent, Client */

  /***/
  function srcAppCompsAdministrationCalPageCalPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalPageComponent", function () {
      return CalPageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Client", function () {
      return Client;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function CalPageComponent_cal_item_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cal-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNote", function CalPageComponent_cal_item_4_Template_cal_item_clickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var client_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selected = client_r1;
        })("dbclickNote", function CalPageComponent_cal_item_4_Template_cal_item_dbclickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var client_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.selected = client_r1;
        })("deleteNote", function CalPageComponent_cal_item_4_Template_cal_item_deleteNote_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.deleteClient($event);
        })("rendomColor", function CalPageComponent_cal_item_4_Template_cal_item_rendomColor_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.bgRND = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("client", client_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", client_r1.name, " ");
      }
    }

    var CalPageComponent = /*#__PURE__*/function () {
      function CalPageComponent() {
        _classCallCheck(this, CalPageComponent);

        this.clientsArr = [{
          id: 1,
          name: 'yosi',
          sum: 5550.8,
          color: 'blue',
          isPositive: true
        }, {
          id: 2,
          name: 'dudi',
          sum: 1200,
          color: 'red',
          isPositive: true
        }, {
          id: 3,
          name: 'moshe',
          sum: 821.7,
          color: 'brown',
          isPositive: false
        }, {
          id: 4,
          name: 'nani',
          sum: 4379.1,
          color: 'violet',
          isPositive: true
        }, {
          id: 5,
          name: 'yoni',
          sum: 2091.3,
          color: 'black',
          isPositive: false
        }, {
          id: 6,
          name: 'igal',
          sum: 3986.5,
          color: 'orangered',
          isPositive: true
        }, {
          id: 7,
          name: 'shuki',
          sum: 550.8,
          color: 'gold',
          isPositive: true
        }, {
          id: 8,
          name: 'avi',
          sum: 1297.3,
          color: 'tomato',
          isPositive: true
        }, {
          id: 9,
          name: 'inon',
          sum: 4401.2,
          color: 'drakviolet',
          isPositive: false
        }, {
          id: 10,
          name: 'levy',
          sum: 1145.6,
          color: 'indigo',
          isPositive: false
        }, {
          id: 11,
          name: 'efrat',
          sum: 9872,
          color: 'green',
          isPositive: true
        }, {
          id: 12,
          name: 'esti',
          sum: 550.8,
          color: 'yelow',
          isPositive: true
        }];
      }

      _createClass(CalPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteClient",
        value: function deleteClient(_clientid) {
          var index = this.clientsArr.findIndex(function (client) {
            return client.id == _clientid;
          });
          this.clientsArr.splice(index, 1);
        }
      }]);

      return CalPageComponent;
    }();

    CalPageComponent.ɵfac = function CalPageComponent_Factory(t) {
      return new (t || CalPageComponent)();
    };

    CalPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalPageComponent,
      selectors: [["cal-page"]],
      decls: 6,
      vars: 4,
      consts: [[1, "flex"], [1, "force-item"], ["class", "client-list", 3, "client", "clickNote", "dbclickNote", "deleteNote", "rendomColor", 4, "ngFor", "ngForOf"], [3, "client"], [1, "client-list", 3, "client", "clickNote", "dbclickNote", "deleteNote", "rendomColor"]],
      template: function CalPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wellcome to Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalPageComponent_cal_item_4_Template, 2, 2, "cal-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "cal-details", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bgRND, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientsArr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("client", ctx.selected);
        }
      },
      styles: [".client-list[_ngcontent-%COMP%]{\r\n    display: list-item;\r\n}\r\n.force-item[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n}\r\n.flex[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvQWRtaW5pc3RyYXRpb24vY2FsLXBhZ2UvY2FsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvQWRtaW5pc3RyYXRpb24vY2FsLXBhZ2UvY2FsLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQtbGlzdHtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxufVxyXG4uZm9yY2UtaXRlbXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cal-page',
          templateUrl: './cal-page.component.html',
          styleUrls: ['./cal-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var Client = function Client() {
      _classCallCheck(this, Client);
    };
    /***/

  },

  /***/
  "./src/app/comps/Administration/label-span/label-span.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/comps/Administration/label-span/label-span.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LabelSpanComponent */

  /***/
  function srcAppCompsAdministrationLabelSpanLabelSpanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelSpanComponent", function () {
      return LabelSpanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LabelSpanComponent = /*#__PURE__*/function () {
      function LabelSpanComponent() {
        _classCallCheck(this, LabelSpanComponent);

        this.label = '';
        this.val = '';
      }

      _createClass(LabelSpanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LabelSpanComponent;
    }();

    LabelSpanComponent.ɵfac = function LabelSpanComponent_Factory(t) {
      return new (t || LabelSpanComponent)();
    };

    LabelSpanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LabelSpanComponent,
      selectors: [["label-span"]],
      inputs: {
        label: "label",
        val: "val"
      },
      decls: 5,
      vars: 2,
      template: function LabelSpanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.val);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL0FkbWluaXN0cmF0aW9uL2xhYmVsLXNwYW4vbGFiZWwtc3Bhbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelSpanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'label-span',
          templateUrl: './label-span.component.html',
          styleUrls: ['./label-span.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        val: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\angular\inpCalculator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map