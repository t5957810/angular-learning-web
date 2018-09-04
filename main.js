(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./angular/angular.module": [
		"./src/app/angular/angular.module.ts",
		"angular-angular-module"
	],
	"./typescript-page/typescript-page.module": [
		"./src/app/typescript-page/typescript-page.module.ts",
		"typescript-page-typescript-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/components/layout/layout.component */ "./src/app/layout/components/layout/layout.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    {
        path: '',
        component: _layout_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'angular', pathMatch: 'full' },
            {
                path: 'typescript',
                loadChildren: './typescript-page/typescript-page.module#TypescriptPageModule'
            },
            {
                path: 'angular',
                loadChildren: './angular/angular.module#AngularModule'
            }
        ]
    },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translateService) {
        // 設定預設語系
        translateService.setDefaultLang('zh-tw');
        // 設定目前要使用的語系
        translateService.use('zh-tw');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_modules_common_share_common_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-modules/common-share/common-share.module */ "./src/app/shared-modules/common-share/common-share.module.ts");
/* harmony import */ var _go_top_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./go-top.directive */ "./src/app/go-top.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                _go_top_directive__WEBPACK_IMPORTED_MODULE_8__["GoTopDirective"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_modules_common_share_common_share_module__WEBPACK_IMPORTED_MODULE_7__["CommonShareModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/go-top.directive.ts":
/*!*************************************!*\
  !*** ./src/app/go-top.directive.ts ***!
  \*************************************/
/*! exports provided: GoTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoTopDirective", function() { return GoTopDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GoTopDirective = /** @class */ (function () {
    function GoTopDirective(document) {
        this.document = document;
        this.myColor = 'black';
    }
    GoTopDirective.prototype.myClick = function ($event) {
        console.log('$event= ', $event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.color'),
        __metadata("design:type", Object)
    ], GoTopDirective.prototype, "myColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoTopDirective.prototype, "myClick", null);
    GoTopDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appGoTop]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], GoTopDirective);
    return GoTopDirective;
}());



/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  position: relative;\r\n  line-height: 24px;\r\n  flex: 1;\r\n  padding: 20px;\r\n  z-index: 0;\r\n  background-color: #467b94;\r\n  color: #fafafa;\r\n  font-weight: 300;\r\n}\r\n\r\nfooter a {\r\n  color: #fafafa;\r\n  font-weight: 300;\r\n  text-decoration: none;\r\n  z-index: 20;\r\n  position: relative;\r\n}\r\n\r\nfooter a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter div.grid-fluid {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: left;\r\n  margin: 0 0 40px;\r\n}\r\n\r\nfooter .footer-block {\r\n  margin: 0 24px;\r\n  vertical-align: top;\r\n}\r\n\r\nfooter div.grid-fluid ul {\r\n  list-style-position: inside;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nfooter div.grid-fluid ul li {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n  margin: 10px 0 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"grid-fluid\">\n      <div class=\"footer-block ng-star-inserted\"><h3>Resources</h3>\n        <ul>\n          <li class=\"ng-star-inserted\">\n            <a class=\"link\" href=\"https://github.com/doggy8088\" target=\"_blank\">保哥的Github</a>\n          </li>\n          <li class=\"ng-star-inserted\">\n            <a class=\"link\" href=\"https://blog.miniasp.com/\" target=\"_blank\">保哥的Blog</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"footer-block ng-star-inserted\"><h3>Typescript</h3>\n        <ul>\n          <li class=\"ng-star-inserted\">\n            <a class=\"link\" href=\"https://www.typescriptlang.org/play/index.html\" target=\"_blank\">Typescript線上轉換</a>\n          </li>\n          <li class=\"ng-star-inserted\">\n            <a class=\"link\" href=\"http://microsoft.github.io/TypeSearch/\" target=\"_blank\">Typescript尋找模組定義檔</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"footer-block ng-star-inserted\"><h3>Angular</h3>\n        <ul>\n          <li class=\"ng-star-inserted\">\n            <a class=\"link\" href=\"https://angular.io/guide/quickstart\" target=\"_blank\">Angular官網</a>\n          </li>\n          <li class=\"ng-star-inserted\">\n            <a class=\"link\" href=\"https://github.com/angular/angular-cli/wiki\" target=\"_blank\">Angular CLI </a>\n          </li>\n          <li class=\"ng-star-inserted\">\n              <a class=\"link\" href=\"https://material.angular.io/\" target=\"_blank\">Angular Material </a>\n          </li>\n          <li class=\"ng-star-inserted\">\n              <a class=\"link\" href=\"https://www.primefaces.org/primeng/#/responsive\" target=\"_blank\">PrimeNG </a>\n          </li>\n          <li class=\"ng-star-inserted\">\n              <a class=\"link\" href=\"http://www.css88.com/doc/lodash/\" target=\"_blank\">lodash</a>\n          </li>\n        </ul>\n      </div>\n  </div>\n  <p> Powered by <a href=\"https://github.com/t5957810\" target=\"_blank\">鄒錦翔</a> ©2018.</p>\n  <p><a href=\"http://edwardzou.blogspot.tw/\" target=\"_blank\">鄒錦翔的Blog</a></p>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/layout/layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layout/components/layout/layout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/* 漢堡menu 樣式 */\r\n\r\n.hamburger.mat-button {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  transition-duration: .4s;\r\n}\r\n\r\n/* header 樣式 */\r\n\r\nmat-toolbar-row{\r\n  background: #455A64;\r\n  color: #fff;\r\n  padding: 0; /* 讓漢堡menu左側不會有多的距離 */\r\n}\r\n\r\n/* LOGO */\r\n\r\n.nav-link.home {\r\n  cursor: pointer;\r\n  margin: 0 16px 0 0;\r\n  padding: 21px 0;\r\n}\r\n\r\n/* header 中間的空白 */\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/* header 連結樣式 */\r\n\r\nmat-toolbar-row a.nav-link {\r\n  margin: 0;\r\n  padding: 15px;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  text-decoration:none;\r\n}\r\n\r\n@media (max-width: 599px){\r\n  mat-toolbar-row a.nav-link {\r\n      height: 56px;\r\n      padding:10px;\r\n  }\r\n}\r\n\r\n/* 左側選單樣式 */\r\n\r\nmat-sidenav{\r\n  position: fixed;\r\n  top: 64px;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 0;\r\n  min-width: 200px;\r\n  box-shadow: 6px 0 6px rgba(0,0,0,.1);\r\n}\r\n\r\n.sidenav-content {\r\n  min-height: 100vh;\r\n    padding: 5px 2rem 1rem;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);\r\n}\r\n\r\n/* 網頁大小時改成只有內容scrollbar */\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  flex: 1;\r\n}\r\n\r\n/* 手機大小時改成全版scrollbar */\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.gotop {\r\n    position:fixed;\r\n    z-index:90;\r\n    right:30px;\r\n    bottom:31px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/components/layout/layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/layout/layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" >\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n      <mat-toolbar-row>\n          <button class=\"hamburger mat-button\" mat-button=\"\" (click)=\"snav.toggle()\">\n            <span class=\"mat-button-wrapper\">\n            <mat-icon class=\"mat-icon\" >\n            menu\n            </mat-icon></span>\n            <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n            <div class=\"mat-button-focus-overlay\"></div>\n          </button>\n          <a class=\"nav-link home\" [routerLink]=\"['/']\">\n            <img alt=\"Home\" height=\"40\" src=\"assets/images/logos/logo-nav@2x.png\" title=\"Home\" width=\"150\" class=\"ng-star-inserted\">\n          </a>\n          <h1 class=\"example-app-name\">Learning</h1>\n          <span class=\"example-spacer\"></span>\n\n          <a mat-button class=\"hamburger nav-link\" [matMenuTriggerFor]=\"menu\"  microsoft-font>\n            <span  class=\"mat-button-wrapper\">\n                回登入頁面</span>\n            <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item [routerLink]=\"['/login']\">登出</button>\n              </mat-menu>\n          </a>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\" >\n        {{ mobileQuery.matches }}\n        <!-- 左側選單 -->\n        <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n          [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n\n            <mat-nav-list style=\"padding-top:0px;\">\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Typescript\n                            </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/typescript/basic']\" >基本觀念與開發環境</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/typescript/feature']\" >語言特性</a>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Angular\n                            </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/cli']\" >Angular CLI</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/basic']\" >基本架構介紹</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/advance']\" >進階應用介紹</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/dynamicComponent']\" >動態載入元件</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/dynamicForms']\" >動態載入表單</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/translate']\" >多語系</a>\n                    <a mat-list-item microsoft-font [routerLink]=\"['/angular/test']\" >單元測試</a>\n                </mat-expansion-panel>\n            </mat-nav-list>\n        </mat-sidenav>\n\n        <!-- 右側內容 -->\n        <mat-sidenav-content>\n            <section class=\"sidenav-content\" >\n              <button mat-raised-button *ngFor=\"let item of hccg\">\n                  {{ item['監測站名(地點)'] }}\n              </button>\n\n                <router-outlet></router-outlet>\n            </section>\n             <!-- <button mat-flat-button color=\"warn\" class=\"gotop\" (click)=\"goTop()\" appGoTop>Warn</button> -->\n            <app-footer></app-footer>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/components/layout/layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/layout.service */ "./src/app/layout/service/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(changeDetectorRef, media, layoutService) {
        this.layoutService = layoutService;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutService.getApiData().subscribe(function (data) {
            console.log('getApiData= ', data);
            _this.hccg = data;
        });
        this.layoutService.getTaipeiApiData().subscribe(function (data) {
            console.log('getTaipeiApiData= ', data);
        });
    };
    LayoutComponent.prototype.goTop = function () {
        $('section').animate({ scrollTop: 0 }, 'slow');
        return false;
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/components/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
            _service_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modules_common_share_common_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-modules/common-share/common-share.module */ "./src/app/shared-modules/common-share/common-share.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/layout/components/footer/footer.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/layout/components/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_modules_common_share_common_share_module__WEBPACK_IMPORTED_MODULE_1__["CommonShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/service/layout.service.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/service/layout.service.ts ***!
  \**************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutService = /** @class */ (function () {
    function LayoutService(httpClient) {
        this.httpClient = httpClient;
    }
    LayoutService.prototype.getApiData = function () {
        return this.httpClient
            .get('/dataset/6360f2bd-e43e-4584-a3d8-970c4872f071/resource/c9485ba6-b291-44c6-a3d3-5f530941d4d9/download/20180807171825760.json');
    };
    LayoutService.prototype.getTaipeiApiData = function () {
        // return this.httpClient.get('/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5');
        return this.httpClient
            .get('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5');
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Leave a comment\"></textarea>\n    </mat-form-field>\n  </form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Page not found.\n</h1>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared-modules/AngularMaterial/angular-material.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared-modules/AngularMaterial/angular-material.module.ts ***!
  \***************************************************************************/
/*! exports provided: TW_FORMATS, AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TW_FORMATS", function() { return TW_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var TW_FORMATS = {
    parse: {
        dateInput: 'YYYY/MM/DD'
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'YYYY MMM',
        dateA11yLabel: 'YYYY/MM/DD',
        monthYearA11yLabel: 'YYYY MMM'
    }
};
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_LABEL_GLOBAL_OPTIONS"], useValue: { float: 'auto' } },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], useValue: 'zh-TW' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: TW_FORMATS }]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared-modules/common-share/common-share.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared-modules/common-share/common-share.module.ts ***!
  \********************************************************************/
/*! exports provided: CommonShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonShareModule", function() { return CommonShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AngularMaterial_angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AngularMaterial/angular-material.module */ "./src/app/shared-modules/AngularMaterial/angular-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommonShareModule = /** @class */ (function () {
    function CommonShareModule() {
    }
    CommonShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _AngularMaterial_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            exports: [
                _AngularMaterial_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ]
        })
    ], CommonShareModule);
    return CommonShareModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    envName: 'dev'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\githubWeb\dev\angular-learning\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map