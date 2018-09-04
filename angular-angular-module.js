(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-angular-module"],{

/***/ "./src/app/angular/angular-advance/angular-advance.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/angular/angular-advance/angular-advance.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-advance/angular-advance.component.html":
/*!************************************************************************!*\
  !*** ./src/app/angular/angular-advance/angular-advance.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular 的元件種類</h1>\n<ul>\n  <li>\n      <h4>@Component：</h4><p>含有樣板的指令。</p>\n  </li>\n  <li>\n    <h4>@Directive：</h4><p>與@Component差異在於Directive沒有template，通常用在取得DOM來修改元素外觀或元素。</p>\n  </li>\n  <li>\n      <h4>@Pipe：</h4><p>只能在樣版html使用此元件。</p>\n  </li>\n  <li>\n      <h4>@Injectable：</h4><p>只能在元件ts中使用此元件，任意元件皆可透過DI注入。</p>\n  </li>\n  <li>\n    <h4>@ViewChild</h4>\n    <img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a8.png\" />\n    <br>\n    <button #btn mat-raised-button (click)=\"getViewChild()\" color=\"warn\">使用ViewChild取得這個按鈕物件</button>\n  </li>\n</ul>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/angular/angular-advance/angular-advance.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/angular/angular-advance/angular-advance.component.ts ***!
  \**********************************************************************/
/*! exports provided: AngularAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularAdvanceComponent", function() { return AngularAdvanceComponent; });
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

var AngularAdvanceComponent = /** @class */ (function () {
    function AngularAdvanceComponent() {
    }
    AngularAdvanceComponent.prototype.ngOnInit = function () {
    };
    AngularAdvanceComponent.prototype.getViewChild = function () {
        console.log('btn = ', this.btn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AngularAdvanceComponent.prototype, "btn", void 0);
    AngularAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-advance',
            template: __webpack_require__(/*! ./angular-advance.component.html */ "./src/app/angular/angular-advance/angular-advance.component.html"),
            styles: [__webpack_require__(/*! ./angular-advance.component.css */ "./src/app/angular/angular-advance/angular-advance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularAdvanceComponent);
    return AngularAdvanceComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-basic/angular-basic.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/angular/angular-basic/angular-basic.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button.mat-primary{\r\n  background-color: #a0f055;\r\n}\r\n"

/***/ }),

/***/ "./src/app/angular/angular-basic/angular-basic.component.html":
/*!********************************************************************!*\
  !*** ./src/app/angular/angular-basic/angular-basic.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h2>首頁html與Angular主程式</h2>\n<ul>\n    <li><p>src/index.html：預設網站首頁</p></li>\n    <li><p>src/style.css：預設全站共用的css</p></li>\n    <li><p>src/main.ts：Angular啟動時程式進入點</p></li>\n    <li><p>src/polyfills.ts：瀏覽器相容設定，IE預設不支援Angular，要去打開註解IE才能正確運行。</p></li>\n    <li><p>src/assets：網站相關的靜態檔案資源(如css, images, js..)。</p></li>\n    <hr>\n    <h4>應用程式原始碼</h4>\n    <li><p>src/app/app.module.ts：應用程式的全域模組。</p></li>\n    <li><p>src/app/app.component.ts：根元件主程式。</p></li>\n    <li><p>src/app/app.component.html：根元件模板。</p></li>\n    <li><p>src/app/app.component.css：根元件模板的css。</p></li>\n    <li><p>src/app/app.component.spec.ts：根元件單元測試程式。</p></li>\n    <hr>\n    <h4>共用的環境變數</h4>\n    <li><p>src/environments/environment.ts：預設的環境變數設定。</p></li>\n    <li><p>src/environments/environment.prod.ts：正式產品環境設定(<span red>Angular 6 使用 ng build -c prod/ Angular 5 以前使用: ng build --env=prod </span>)。</p></li>\n    <h4>如何新增環境變數?</h4>\n    <p>例如要新增一個uat環境，在environments資料夾下新增environment.uat.ts，</p>\n    <p>然後在angular.json中build找到configurations，加上：</p>\n    <pre>\n        \"uat\": {{'{'}}\n          \"fileReplacements\": [\n          {{'{'}}\n              \"replace\": \"src/environments/environment.ts\",\n              \"with\": \"src/environments/environment.uat.ts\"\n          {{'}'}}\n          ],\n          \"optimization\": true,\n          \"outputHashing\": \"all\",\n          \"sourceMap\": true,\n          \"extractCss\": true,\n          \"namedChunks\": false,\n          \"aot\": true,\n          \"extractLicenses\": true,\n          \"vendorChunk\": false,\n          \"buildOptimizer\": true\n      {{'}'}}\n    </pre>\n    <p>如果想在ng serve啟動時測試，在angular.json中serve底下的configurations也要新增：</p>\n    <pre>\n        \"uat\": {{'{'}}\n          \"browserTarget\": \"angular-learning:build:uat\"\n          {{'}'}}\n    </pre>\n    <p>目前環境變數：{{ environmentName }}</p>\n    <hr>\n    <img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a1.png\" />\n    <h3>app.module介紹：</h3>\n    <img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a2.png\" />\n    <h3>app.component介紹：</h3>\n    <img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a3.png\" />\n  </ul>\n\n<h2>資料繫結的四種方法</h2>\n<ul>\n  <li>\n    <p>內嵌繫結(interpolation)：</p>\n    <p>{{ '{' }}{{ '{' }} property {{ '}' }}{{ '}' }}</p>\n  </li>\n  <li>\n    <p>屬性繫結(property binding)：</p>\n    <p>[property-name] = \"statement\"</p>\n    <p> property-name = \"expression\"</p>\n  </li>\n  <li>\n    <p>事件繫結(event binding)：</p>\n    <p> (eventName) = \"method($event)\"</p>\n  </li>\n  <li>\n    <p>雙向繫結(two-way binding)：</p>\n    <p>[(ngModel)]=\"property\"</p>\n  </li>\n</ul>\n\n<h2>範本參考變數(template reference variables)</h2>\n<p>在html上使用 #name語法，會在該template上建立名為name的區域變數，且該變數會儲存該標籤上的DOM物件。</p>\n<p>可以透過事件繫結將DOM物件的屬性傳回component的ts中。</p>\n\n<h2>三種Angular 指令(directives)</h2>\n<ul>\n    <li>\n      <p>元件型指令(component directives)：</p>\n      <p>例如：< app-xxx >< /app-xxx>  </p>\n    </li>\n    <li>\n      <p>屬性型指令(attribute directives)：</p>\n      <p>這種指令會修改元素的外觀或行為。</p>\n      <p> 例如：ngStyle, ngClass。</p>\n    </li>\n    <li>\n      <p>結構型指令(structural directives)：</p>\n      <p>這種指令會透過新增和刪除DOM元素來改變DOM結構。</p>\n      <p> 例如：ngIf, ngFor, ngSwitch。</p>\n      <p> ngSwitch前面不加*星號。</p>\n    </li>\n  </ul>\n<h2>Angular component之間的溝通方式@Input/@Output</h2>\n<h4>父Component 傳資料給子Component</h4>\n<p>傳入屬性，兒子接值的ts用@input</p>\n< app-兒子 [data]=\"父的data\">\n<p>兒子ts:\n@Input() data;</p>\n\n<hr>\n<p>Demo：</p>\n<h4>以下藍色部分為兒子app-angular-detail component：</h4>\n<p>將陣列資料傳入在兒子app-angular-detail，使用ngFor跑出資料，點擊按鈕後回傳給父angular-basic選擇的值。</p>\n<app-angular-detail (chooseValue)=\"doChoose($event)\" [data]=\"fatherArray\"></app-angular-detail>\n<h4>兒子app-angular-detail的html(接收來自父的資料，並使用emit將事件發射給父component)：</h4>\n< button mat-raised-button color=\"accent\" *ngFor=\"let item of data\" (click)=\"chooseValue.emit(item)\">  item.name  < /button>\n<h4>兒子app-angular-detail的ts：</h4>\n<pre>\n  @Input() data;\n  @Output() chooseValue = new EventEmitter{{ '<' }}any{{'>'}}();\n\n</pre>\n\n<h4>父angular-basic 的html(將兒子寫上去)：</h4>\n{{ '<' }}app-angular-detail (chooseValue)=\"doChoose($event)\" [data]=\"fatherArray\" {{'>'}}{{ '<' }}/app-angular-detail{{'>'}}\n<h4>父angular-basic 的ts：</h4>\n<pre>\nfatherArray = [\n{{ '{' }}id: 1, name: '園丁'{{ '}' }},\n{{ '{' }}id: 2, name: '律師'{{ '}' }},\n{{ '{' }}id: 3, name: '祭司'{{ '}' }},\n{{ '{' }}id: 4, name: '盲女'{{ '}' }},\n{{ '{' }}id: 5, name: '前鋒'{{ '}' }},\n{{ '{' }}id: 6, name: '傭兵'{{ '}' }},\n{{ '{' }}id: 7, name: '空軍'{{ '}' }},\n{{ '{' }}id: 8, name: '魔術師'{{ '}' }},\n{{ '{' }}id: 9, name: '冒險家'{{ '}' }},\n{{ '{' }}id: 10, name: '機械師'{{ '}' }},\n{{ '{' }}id: 11, name: '慈善家'{{ '}' }},\n{{ '{' }}id: 12, name: '醫生'{{ '}' }},\n{{ '{' }}id: 13, name: '幸運兒'{{ '}' }}\n];\n\ndoChoose($event) {{ '{' }}\n  this.openSnackBar($event.name);\n{{ '}' }}\n</pre>\n\n<h1>生命週期</h1>\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a4.png\" />\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a5.png\" />\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a6.png\" />\n<p>以上面子元件和父元件做例子：</p>\n<p>AngularBasicComponent 父元件發生ngOnInit</p>\n<p>AngularBasicComponent 父元件發生ngAfterContentInit</p>\n<p>AngularDetailComponent 子元件發生ngOnInit</p>\n<p>AngularDetailComponent 子元件發生ngAfterContentInit</p>\n<p>AngularDetailComponent 子元件發生ngAfterViewInit</p>\n<p>如果兒子裡面還有兒子，就會繼續孫子的ngOnInit和ngAfterViewInit下去....</p>\n<p>AngularBasicComponent 父元件發生ngAfterViewInit</p>\n\n<h1>封裝樣式 View Encapsulation</h1>\n<ul>\n  <li><p>ViewEncapsulation.None：所有從元件註冊的樣式都會加入整份網頁。</p></li>\n  <li><p>ViewEncapsulation.Emulated(預設)：元件的樣式只套用到該元件的html。</p></li>\n  <li><p>ViewEncapsulation.Native：元件以Shadow DOM 技術將元素網頁封裝Web 元件。</p></li>\n</ul>\n<button mat-raised-button color=\"primary\" >強迫更改按鈕顏色，但只會影響AngularBasicComponent</button>\n<br>\n</div>\n"

/***/ }),

/***/ "./src/app/angular/angular-basic/angular-basic.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/angular/angular-basic/angular-basic.component.ts ***!
  \******************************************************************/
/*! exports provided: AngularBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBasicComponent", function() { return AngularBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularBasicComponent = /** @class */ (function () {
    function AngularBasicComponent(snackBar) {
        this.snackBar = snackBar;
        this.environmentName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].envName;
        this.fatherArray = [
            { id: 1, name: '園丁' },
            { id: 2, name: '律師' },
            { id: 3, name: '祭司' },
            { id: 4, name: '盲女' },
            { id: 5, name: '前鋒' },
            { id: 6, name: '傭兵' },
            { id: 7, name: '空軍' },
            { id: 8, name: '魔術師' },
            { id: 9, name: '冒險家' },
            { id: 10, name: '機械師' },
            { id: 11, name: '慈善家' },
            { id: 12, name: '醫生' },
            { id: 13, name: '幸運兒' }
        ];
    }
    AngularBasicComponent.prototype.ngAfterContentInit = function () {
        console.log('AngularBasicComponent 父元件發生ngAfterContentInit');
    };
    AngularBasicComponent.prototype.ngAfterViewInit = function () {
        console.log('AngularBasicComponent 父元件發生ngAfterViewInit');
    };
    AngularBasicComponent.prototype.doChoose = function ($event) {
        this.openSnackBar($event.name);
    };
    AngularBasicComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open('兒子傳回選擇值: ' + message, '', {
            duration: 2000
        });
    };
    AngularBasicComponent.prototype.ngOnInit = function () {
        console.log('AngularBasicComponent 父元件發生ngOnInit');
    };
    AngularBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-basic',
            template: __webpack_require__(/*! ./angular-basic.component.html */ "./src/app/angular/angular-basic/angular-basic.component.html"),
            styles: [__webpack_require__(/*! ./angular-basic.component.css */ "./src/app/angular/angular-basic/angular-basic.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AngularBasicComponent);
    return AngularBasicComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-basic/angular-detail/angular-detail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/angular/angular-basic/angular-detail/angular-detail.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo {\r\n  background: #82B1FF;\r\n}\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/angular/angular-basic/angular-detail/angular-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/angular/angular-basic/angular-detail/angular-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  mat-elevation-z8 class=\"demo\" padding shadow>\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"accent\" *ngFor=\"let item of data\" (click)=\"chooseValue.emit(item)\">{{ item.name }}</button>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/angular/angular-basic/angular-detail/angular-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/angular/angular-basic/angular-detail/angular-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AngularDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDetailComponent", function() { return AngularDetailComponent; });
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

var AngularDetailComponent = /** @class */ (function () {
    function AngularDetailComponent() {
        this.chooseValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AngularDetailComponent.prototype.ngAfterContentInit = function () {
        console.log('AngularDetailComponent 子元件發生ngAfterContentInit');
    };
    AngularDetailComponent.prototype.ngAfterViewInit = function () {
        console.log('AngularDetailComponent 子元件發生ngAfterViewInit');
    };
    AngularDetailComponent.prototype.ngOnInit = function () {
        console.log('AngularDetailComponent 子元件發生ngOnInit');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AngularDetailComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AngularDetailComponent.prototype, "chooseValue", void 0);
    AngularDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-detail',
            template: __webpack_require__(/*! ./angular-detail.component.html */ "./src/app/angular/angular-basic/angular-detail/angular-detail.component.html"),
            styles: [__webpack_require__(/*! ./angular-detail.component.css */ "./src/app/angular/angular-basic/angular-detail/angular-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularDetailComponent);
    return AngularDetailComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-cli/angular-cli.component.css":
/*!***************************************************************!*\
  !*** ./src/app/angular/angular-cli/angular-cli.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-cli/angular-cli.component.html":
/*!****************************************************************!*\
  !*** ./src/app/angular/angular-cli/angular-cli.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>AngularCLI</h2>\n<table style=\"width: 100%;\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"use\">\n        <th mat-header-cell *matHeaderCellDef> 型別種類 </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.use}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"cli\">\n        <th mat-header-cell *matHeaderCellDef> JavaScript </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.cli}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<p>如果是dev模式，ng build是使用environment.ts設定檔。</p>\n<p>如果是prod模式，ng build是使用environment.prod.ts設定檔，JavaScript 與 CSS 都會壓縮，且不提供 source map，因此最後的 JavaScript 與 CSS 會較小。</p>\n\n"

/***/ }),

/***/ "./src/app/angular/angular-cli/angular-cli.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/angular/angular-cli/angular-cli.component.ts ***!
  \**************************************************************/
/*! exports provided: AngularCLIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCLIComponent", function() { return AngularCLIComponent; });
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

var ELEMENT_DATA = [
    { use: '查看目前Angular版本資訊', cli: 'ng v' },
    { use: '使用別的埠號啟動', cli: 'ng serve --port 8080' },
    { use: '建立一個Angular專案', cli: 'ng new project-name' },
    { use: '建立包含css,html,spec.ts,ts等四隻檔案的Component，預設會自動將component import到app.module.ts裡',
        cli: 'ng g c component-name， 不想自動import可以多加--skip-import' },
    { use: '建立一個Service', cli: 'ng g s service-name' },
    { use: '建立一個Module', cli: 'ng g m module-name，使用ng g m module-name --routing可建立有routing的Module' },
    { use: '建立一個Pipe', cli: 'ng g pipe pipe-name' },
    { use: '建立一個Class', cli: 'ng g class class-name' },
    { use: '建立一個interface', cli: 'ng g i interface-name' },
    { use: '建立一個Directive', cli: 'ng g d directive-name' },
    { use: '建立一個Enum', cli: 'ng g enum enum-name' },
    { use: '打包程式，預設會將程式放到dist目錄下', cli: 'ng build，可以加--prod切換成prod模式' },
];
var AngularCLIComponent = /** @class */ (function () {
    function AngularCLIComponent() {
        this.displayedColumns = ['use', 'cli'];
        this.dataSource = ELEMENT_DATA;
    }
    AngularCLIComponent.prototype.ngOnInit = function () {
    };
    AngularCLIComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-cli',
            template: __webpack_require__(/*! ./angular-cli.component.html */ "./src/app/angular/angular-cli/angular-cli.component.html"),
            styles: [__webpack_require__(/*! ./angular-cli.component.css */ "./src/app/angular/angular-cli/angular-cli.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularCLIComponent);
    return AngularCLIComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  動態載入表單\n</h1>\n\n<form [formGroup]=\"form\">\n\n    <div *ngFor=\"let question of questionModel\">\n      <label [for]=\"question.key\">{{ question.label}}</label>\n\n      <div [ngSwitch]=\"question.controlType\">\n        <mat-form-field *ngSwitchCase=\"'textbox'\" >\n          <input matInput [formControlName]=\"question.key\" [id]=\"question.key\" [type]=\"textboxQuestion(question.key).type\">\n\n          <mat-error *ngIf=\"getFormControl(question.key).invalid\">\n              {{ question.label }} 資料有誤\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field *ngSwitchCase=\"'dropdown'\">\n          <mat-select  [formControlName]=\"question.key\">\n          <mat-option *ngFor=\"let option of dropdownQuestion(question.key).options\" [value]=\"option.key\">\n            {{ option.value }}\n          </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <button mat-raised-button type=\"button\" (click)=\"submitData()\" color=\"primary\" [disabled]=\"form.invalid\">送出</button>\n    <pre>{{ form.value | json }}</pre>\n  </form>\n"

/***/ }),

/***/ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuestionBase, TextboxQuestion, DropdownQuestion, AngularDynamicFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDynamicFormsComponent", function() { return AngularDynamicFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-dynamic-forms.service */ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        this.key = options.key;
        this.label = options.label;
        this.controlType = options.controlType;
        this.value = options.value;
        this.required = options.required;
    }
    return QuestionBase;
}());

var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.type = 'text';
        _this.placeholder = '';
        _this.type = options.type;
        _this.placeholder = options.placeholder;
        return _this;
    }
    return TextboxQuestion;
}(QuestionBase));

var DropdownQuestion = /** @class */ (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.options = [];
        _this.options = options.options;
        return _this;
    }
    return DropdownQuestion;
}(QuestionBase));

var AngularDynamicFormsComponent = /** @class */ (function () {
    function AngularDynamicFormsComponent(fb, angularDynamicFormsService) {
        this.fb = fb;
        this.angularDynamicFormsService = angularDynamicFormsService;
        this.questionModel = [
            new TextboxQuestion({
                key: 'name',
                label: '姓名',
                value: null,
                controlType: 'textbox',
                required: true,
                type: 'text',
                placeholder: '請輸入姓名'
            }),
            new DropdownQuestion({
                key: 'interest',
                label: '興趣',
                value: 1,
                controlType: 'dropdown',
                required: false,
                options: [{ key: 0, value: 'Angular' }, { key: 1, value: 'React' }, { key: 2, value: 'Vue' }]
            })
        ];
    }
    AngularDynamicFormsComponent.prototype.ngOnInit = function () {
        this.form = this.angularDynamicFormsService.convertQuestionToFormGroup(this.questionModel);
    };
    AngularDynamicFormsComponent.prototype.textboxQuestion = function (key) {
        return this.questionModel.filter(function (question) { return question.key === key; })[0];
    };
    AngularDynamicFormsComponent.prototype.getFormControl = function (key) {
        return this.form.get(key);
    };
    AngularDynamicFormsComponent.prototype.dropdownQuestion = function (key) {
        return this.questionModel.filter(function (question) { return question.key === key; })[0];
    };
    AngularDynamicFormsComponent.prototype.submitData = function () {
        console.log(this.form.value);
    };
    AngularDynamicFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-dynamic-forms',
            template: __webpack_require__(/*! ./angular-dynamic-forms.component.html */ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.html"),
            styles: [__webpack_require__(/*! ./angular-dynamic-forms.component.css */ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["AngularDynamicFormsService"]])
    ], AngularDynamicFormsComponent);
    return AngularDynamicFormsComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.service.ts ***!
  \********************************************************************************/
/*! exports provided: AngularDynamicFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDynamicFormsService", function() { return AngularDynamicFormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularDynamicFormsService = /** @class */ (function () {
    function AngularDynamicFormsService() {
    }
    AngularDynamicFormsService.prototype.convertQuestionToFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '', question.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    AngularDynamicFormsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AngularDynamicFormsService);
    return AngularDynamicFormsService;
}());



/***/ }),

/***/ "./src/app/angular/angular-dynamic/ad-host.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/ad-host.directive.ts ***!
  \**************************************************************/
/*! exports provided: AdHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdHostDirective", function() { return AdHostDirective; });
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

var AdHostDirective = /** @class */ (function () {
    function AdHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AdHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAdHost]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AdHostDirective);
    return AdHostDirective;
}());



/***/ }),

/***/ "./src/app/angular/angular-dynamic/angular-dynamic.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/angular-dynamic.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-dynamic/angular-dynamic.component.html":
/*!************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/angular-dynamic.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>動態載入元件 </h1>\n<h2>Angular Dynamic Component Loader</h2>\n<ul>\n    <li><p>1：建立元件容器 @Directive。</p>\n    <img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a9.png\" />\n    </li>\n    <li>\n      <p>2：要使用動態元件的地方裝上下面這個元件容器。</p>\n      <p> < ng-template appAdHost>< /ng-template> </p>\n    </li>\n    <li>\n        <p>3：使用ComponentFactoryResolver動態建立元件。</p>\n        <img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-basic/a10.png\" />\n    </li>\n</ul>\n\n<h1>關於EntryComponents</h1>\n<ul>\n    <li><p>@NgModule的bootstrap[]：用來設定預設啟動的元件，註冊在bootstrap的元件同時也是EntryComponents。</p>\n    <li><p>entryComponents：用來設定需要動態載入的元件，如果宣告在declarations裡但在任何html裡沒使用的話，會被Tree Shaking機制過濾掉。</p>\n    <li><p>路由中設定的元件也屬於entryComponents。</p>\n</li>\n<hr>\n<h4>Demo：</h4>\n<p>按下按鈕後動態載入Component，並設定初始內容為</p>\n<button mat-raised-button (click)=\"loadComponent()\" color=\"warn\">動態載入Component</button>\n<ng-template appAdHost></ng-template>\n\n<h2>使用ngComponentOutlet</h2>\n<p>缺點為沒辦法直接傳值進去，但也可以用service來傳值。</p>\n<div *ngIf=\"isLoad\">\n  <ng-container *ngComponentOutlet=\"dynamicAdComponent\"></ng-container>\n</div>\n\n"

/***/ }),

/***/ "./src/app/angular/angular-dynamic/angular-dynamic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/angular-dynamic.component.ts ***!
  \**********************************************************************/
/*! exports provided: AngularDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDynamicComponent", function() { return AngularDynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ad_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-host.directive */ "./src/app/angular/angular-dynamic/ad-host.directive.ts");
/* harmony import */ var _dynamic_ad_dynamic_ad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-ad/dynamic-ad.component */ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularDynamicComponent = /** @class */ (function () {
    function AngularDynamicComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dynamicAdComponent = _dynamic_ad_dynamic_ad_component__WEBPACK_IMPORTED_MODULE_2__["DynamicAdComponent"];
        this.isLoad = false;
        this.fatherArray = [
            { id: 1, name: '園丁' },
            { id: 2, name: '律師' },
            { id: 3, name: '祭司' },
            { id: 4, name: '盲女' },
            { id: 5, name: '前鋒' },
            { id: 6, name: '傭兵' },
            { id: 7, name: '空軍' },
            { id: 8, name: '魔術師' },
            { id: 9, name: '冒險家' },
            { id: 10, name: '機械師' },
            { id: 11, name: '慈善家' },
            { id: 12, name: '醫生' },
            { id: 13, name: '幸運兒' }
        ];
    }
    AngularDynamicComponent.prototype.ngOnInit = function () {
    };
    AngularDynamicComponent.prototype.loadComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dynamic_ad_dynamic_ad_component__WEBPACK_IMPORTED_MODULE_2__["DynamicAdComponent"]);
        var viewContainerRef = this.appAdHost.viewContainerRef;
        // viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.fatherArray;
        this.isLoad = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ad_host_directive__WEBPACK_IMPORTED_MODULE_1__["AdHostDirective"]),
        __metadata("design:type", _ad_host_directive__WEBPACK_IMPORTED_MODULE_1__["AdHostDirective"])
    ], AngularDynamicComponent.prototype, "appAdHost", void 0);
    AngularDynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-dynamic',
            template: __webpack_require__(/*! ./angular-dynamic.component.html */ "./src/app/angular/angular-dynamic/angular-dynamic.component.html"),
            styles: [__webpack_require__(/*! ./angular-dynamic.component.css */ "./src/app/angular/angular-dynamic/angular-dynamic.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AngularDynamicComponent);
    return AngularDynamicComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #FFF59D;\" margin-top padding shadow>\n  <p>\n      DynamicComponent\n  </p>\n  <button mat-raised-button style=\"margin:1px;\" *ngFor=\"let item of data\" color=\"primary\">\n    {{ item.name }}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAdComponent", function() { return DynamicAdComponent; });
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

var DynamicAdComponent = /** @class */ (function () {
    function DynamicAdComponent() {
    }
    DynamicAdComponent.prototype.ngOnInit = function () {
    };
    DynamicAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-ad',
            template: __webpack_require__(/*! ./dynamic-ad.component.html */ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-ad.component.css */ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicAdComponent);
    return DynamicAdComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/angular/angular-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AngularRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularRoutingModule", function() { return AngularRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cli_angular_cli_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-cli/angular-cli.component */ "./src/app/angular/angular-cli/angular-cli.component.ts");
/* harmony import */ var _angular_basic_angular_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-basic/angular-basic.component */ "./src/app/angular/angular-basic/angular-basic.component.ts");
/* harmony import */ var _angular_advance_angular_advance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-advance/angular-advance.component */ "./src/app/angular/angular-advance/angular-advance.component.ts");
/* harmony import */ var _angular_dynamic_angular_dynamic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-dynamic/angular-dynamic.component */ "./src/app/angular/angular-dynamic/angular-dynamic.component.ts");
/* harmony import */ var _angular_dynamic_forms_angular_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-dynamic-forms/angular-dynamic-forms.component */ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.ts");
/* harmony import */ var _angular_translate_angular_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-translate/angular-translate.component */ "./src/app/angular/angular-translate/angular-translate.component.ts");
/* harmony import */ var _angular_test_angular_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-test/angular-test.component */ "./src/app/angular/angular-test/angular-test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    { path: 'basic', component: _angular_basic_angular_basic_component__WEBPACK_IMPORTED_MODULE_3__["AngularBasicComponent"] },
    { path: 'cli', component: _angular_cli_angular_cli_component__WEBPACK_IMPORTED_MODULE_2__["AngularCLIComponent"] },
    { path: 'advance', component: _angular_advance_angular_advance_component__WEBPACK_IMPORTED_MODULE_4__["AngularAdvanceComponent"] },
    { path: 'dynamicComponent', component: _angular_dynamic_angular_dynamic_component__WEBPACK_IMPORTED_MODULE_5__["AngularDynamicComponent"] },
    { path: 'dynamicForms', component: _angular_dynamic_forms_angular_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_6__["AngularDynamicFormsComponent"] },
    { path: 'translate', component: _angular_translate_angular_translate_component__WEBPACK_IMPORTED_MODULE_7__["AngularTranslateComponent"] },
    { path: 'test', component: _angular_test_angular_test_component__WEBPACK_IMPORTED_MODULE_8__["AngularTestComponent"] },
];
var AngularRoutingModule = /** @class */ (function () {
    function AngularRoutingModule() {
    }
    AngularRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AngularRoutingModule);
    return AngularRoutingModule;
}());



/***/ }),

/***/ "./src/app/angular/angular-test/angular-test.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/angular/angular-test/angular-test.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-test/angular-test.component.html":
/*!******************************************************************!*\
  !*** ./src/app/angular/angular-test/angular-test.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>單元測試：</h1>\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-test/a14.png\" />\n"

/***/ }),

/***/ "./src/app/angular/angular-test/angular-test.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/angular/angular-test/angular-test.component.ts ***!
  \****************************************************************/
/*! exports provided: AngularTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTestComponent", function() { return AngularTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-test.service */ "./src/app/angular/angular-test/angular-test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularTestComponent = /** @class */ (function () {
    function AngularTestComponent(angularTestService) {
        this.angularTestService = angularTestService;
    }
    AngularTestComponent.prototype.ngOnInit = function () {
    };
    AngularTestComponent.prototype.addTwoNumbers = function (num1, num2) {
        return num1 + num2;
    };
    AngularTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-test',
            template: __webpack_require__(/*! ./angular-test.component.html */ "./src/app/angular/angular-test/angular-test.component.html"),
            styles: [__webpack_require__(/*! ./angular-test.component.css */ "./src/app/angular/angular-test/angular-test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_test_service__WEBPACK_IMPORTED_MODULE_1__["AngularTestService"]])
    ], AngularTestComponent);
    return AngularTestComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular-test/angular-test.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/angular/angular-test/angular-test.service.ts ***!
  \**************************************************************/
/*! exports provided: AngularTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTestService", function() { return AngularTestService; });
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


var AngularTestService = /** @class */ (function () {
    function AngularTestService(httpClient) {
        this.httpClient = httpClient;
    }
    AngularTestService.prototype.addTwoNumbers = function (num1, num2) {
        return num1 + num2;
    };
    AngularTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AngularTestService);
    return AngularTestService;
}());



/***/ }),

/***/ "./src/app/angular/angular-translate/angular-translate.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/angular/angular-translate/angular-translate.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/angular-translate/angular-translate.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/angular/angular-translate/angular-translate.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>多語系</h1>\n<h2>使用ngx-translate</h2>\n<p>安裝：</p>\n<p>npm install @ngx-translate/core --save</p>\n<p>npm install @ngx-translate/http-loader --save</p>\n<hr>\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-translate/a11.png\" />\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-translate/a12.png\" />\n<img style=\"max-width: 850px;\" responsive-img src=\"assets/images/angular-translate/a13.png\" />\n<hr>\n<h4>在樣板中使用</h4>\n\n{{ 'title' | translate }}\n{{ name | translate }}\n<button mat-raised-button (click)=\"translate()\" color=\"warn\">切換語系</button>\n"

/***/ }),

/***/ "./src/app/angular/angular-translate/angular-translate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/angular/angular-translate/angular-translate.component.ts ***!
  \**************************************************************************/
/*! exports provided: AngularTranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTranslateComponent", function() { return AngularTranslateComponent; });
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


var AngularTranslateComponent = /** @class */ (function () {
    function AngularTranslateComponent(translateService) {
        this.translateService = translateService;
        this.name = '名字';
    }
    AngularTranslateComponent.prototype.ngOnInit = function () {
    };
    AngularTranslateComponent.prototype.translate = function () {
        var _this = this;
        this.translateService.get('title').subscribe(function (title) {
            console.log(title);
        });
        this.translateService.get('name').subscribe(function (name) {
            _this.name = 'name';
        });
        this.translateService.use('en');
    };
    AngularTranslateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-translate',
            template: __webpack_require__(/*! ./angular-translate.component.html */ "./src/app/angular/angular-translate/angular-translate.component.html"),
            styles: [__webpack_require__(/*! ./angular-translate.component.css */ "./src/app/angular/angular-translate/angular-translate.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AngularTranslateComponent);
    return AngularTranslateComponent;
}());



/***/ }),

/***/ "./src/app/angular/angular.module.ts":
/*!*******************************************!*\
  !*** ./src/app/angular/angular.module.ts ***!
  \*******************************************/
/*! exports provided: AngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularModule", function() { return AngularModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-routing.module */ "./src/app/angular/angular-routing.module.ts");
/* harmony import */ var _angular_cli_angular_cli_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-cli/angular-cli.component */ "./src/app/angular/angular-cli/angular-cli.component.ts");
/* harmony import */ var _angular_basic_angular_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-basic/angular-basic.component */ "./src/app/angular/angular-basic/angular-basic.component.ts");
/* harmony import */ var _shared_modules_common_share_common_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-modules/common-share/common-share.module */ "./src/app/shared-modules/common-share/common-share.module.ts");
/* harmony import */ var _react_form_react_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react-form/react-form.component */ "./src/app/angular/react-form/react-form.component.ts");
/* harmony import */ var _angular_basic_angular_detail_angular_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-basic/angular-detail/angular-detail.component */ "./src/app/angular/angular-basic/angular-detail/angular-detail.component.ts");
/* harmony import */ var _angular_advance_angular_advance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-advance/angular-advance.component */ "./src/app/angular/angular-advance/angular-advance.component.ts");
/* harmony import */ var _angular_dynamic_angular_dynamic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-dynamic/angular-dynamic.component */ "./src/app/angular/angular-dynamic/angular-dynamic.component.ts");
/* harmony import */ var _angular_dynamic_ad_host_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-dynamic/ad-host.directive */ "./src/app/angular/angular-dynamic/ad-host.directive.ts");
/* harmony import */ var _angular_dynamic_dynamic_ad_dynamic_ad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-dynamic/dynamic-ad/dynamic-ad.component */ "./src/app/angular/angular-dynamic/dynamic-ad/dynamic-ad.component.ts");
/* harmony import */ var _angular_dynamic_forms_angular_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-dynamic-forms/angular-dynamic-forms.component */ "./src/app/angular/angular-dynamic-forms/angular-dynamic-forms.component.ts");
/* harmony import */ var _angular_translate_angular_translate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./angular-translate/angular-translate.component */ "./src/app/angular/angular-translate/angular-translate.component.ts");
/* harmony import */ var _angular_test_angular_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./angular-test/angular-test.component */ "./src/app/angular/angular-test/angular-test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AngularModule = /** @class */ (function () {
    function AngularModule() {
    }
    AngularModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_modules_common_share_common_share_module__WEBPACK_IMPORTED_MODULE_4__["CommonShareModule"],
                _angular_routing_module__WEBPACK_IMPORTED_MODULE_1__["AngularRoutingModule"],
            ],
            declarations: [
                _angular_cli_angular_cli_component__WEBPACK_IMPORTED_MODULE_2__["AngularCLIComponent"],
                _angular_basic_angular_basic_component__WEBPACK_IMPORTED_MODULE_3__["AngularBasicComponent"],
                _react_form_react_form_component__WEBPACK_IMPORTED_MODULE_5__["ReactFormComponent"],
                _angular_basic_angular_detail_angular_detail_component__WEBPACK_IMPORTED_MODULE_6__["AngularDetailComponent"],
                _angular_advance_angular_advance_component__WEBPACK_IMPORTED_MODULE_7__["AngularAdvanceComponent"],
                _angular_dynamic_angular_dynamic_component__WEBPACK_IMPORTED_MODULE_8__["AngularDynamicComponent"],
                _angular_dynamic_ad_host_directive__WEBPACK_IMPORTED_MODULE_9__["AdHostDirective"],
                _angular_dynamic_dynamic_ad_dynamic_ad_component__WEBPACK_IMPORTED_MODULE_10__["DynamicAdComponent"],
                _angular_dynamic_forms_angular_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_11__["AngularDynamicFormsComponent"],
                _angular_translate_angular_translate_component__WEBPACK_IMPORTED_MODULE_12__["AngularTranslateComponent"],
                _angular_test_angular_test_component__WEBPACK_IMPORTED_MODULE_13__["AngularTestComponent"]
            ],
            entryComponents: [_angular_dynamic_dynamic_ad_dynamic_ad_component__WEBPACK_IMPORTED_MODULE_10__["DynamicAdComponent"]]
        })
    ], AngularModule);
    return AngularModule;
}());



/***/ }),

/***/ "./src/app/angular/react-form/react-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/angular/react-form/react-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular/react-form/react-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/angular/react-form/react-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  react-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular/react-form/react-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/angular/react-form/react-form.component.ts ***!
  \************************************************************/
/*! exports provided: ReactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactFormComponent", function() { return ReactFormComponent; });
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

var ReactFormComponent = /** @class */ (function () {
    function ReactFormComponent() {
    }
    ReactFormComponent.prototype.ngOnInit = function () {
    };
    ReactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-react-form',
            template: __webpack_require__(/*! ./react-form.component.html */ "./src/app/angular/react-form/react-form.component.html"),
            styles: [__webpack_require__(/*! ./react-form.component.css */ "./src/app/angular/react-form/react-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReactFormComponent);
    return ReactFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=angular-angular-module.js.map