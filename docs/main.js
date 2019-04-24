(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer-key/answer-key.component.html":
/*!******************************************************!*\
  !*** ./src/app/answer-key/answer-key.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Answer Key</div>\r\n<ng-container *ngIf=\"answer.displayKey\">\r\n  <br>\r\n  <ng-container *ngIf=\"answer.reactant1Coefficient > 1\">{{ answer.reactant1Coefficient }}</ng-container>{{ answer.reactant1 }}{{ answer.reactant1Solubility }} + <ng-container *ngIf=\"answer.reactant2Coefficient > 1\">{{ answer.reactant2Coefficient }}</ng-container>{{ answer.reactant2 }}{{ answer.reactant2Solubility }} => <ng-container *ngIf=\"answer.product1Coefficient > 1\">{{ answer.product1Coefficient }}</ng-container>{{ answer.product1 }}{{ answer.product1Solubility }} + <ng-container *ngIf=\"answer.product2Coefficient > 1\">{{ answer.product2Coefficient }}</ng-container>{{ answer.product2 }}{{ answer.product2Solubility }}\r\n  <br><br>\r\n  mole ratio of {{ answer.product1 }} to {{ answer.reactant1 }} is: {{ answer.moleRatioP1toR1Out }}\r\n  <br>\r\n  mole ratio of {{ answer.product1 }} to {{ answer.reactant2 }} is: {{ answer.moleRatioP1toR2Out }}\r\n  <br>\r\n  mole ratio of {{ answer.product2 }} to {{ answer.reactant1 }} is: {{ answer.moleRatioP2toR1Out }}\r\n  <br>\r\n  mole ratio of {{ answer.product2 }} to {{ answer.reactant2 }} is: {{ answer.moleRatioP2toR2Out }}\r\n  <br><br>\r\n  The formula weight for {{ answer.product1 }} is: {{ answer.product1WeightOut }}\r\n  <br>\r\n  The formula weight for {{ answer.product2 }} is: {{ answer.product2WeightOut }}\r\n  <br><br>\r\n  {{ answer.molesReactant1Out }} moles of {{ answer.reactant1 }} yields {{ answer.molesP2FromR1Out }} moles of {{ answer.product2 }}\r\n  <br>\r\n  {{ answer.molesReactant1Out }} moles of {{ answer.reactant1 }} yields {{ answer.molesP1FromR1Out }} moles of {{ answer.product1 }}\r\n  <br>\r\n  {{ answer.molesReactant2Out }} moles of {{ answer.reactant2 }} yields {{ answer.molesP2FromR2Out }} moles of {{ answer.product2 }}\r\n  <br>\r\n  {{ answer.molesReactant2Out }} moles of {{ answer.reactant2 }} yields {{ answer.molesP1FromR2Out }} moles of {{ answer.product1 }}\r\n  <br><br>\r\n  The limiting reactant is: {{ answer.limitingReactant }}\r\n  <br>\r\n  {{ answer.limitingReactant }} yields {{ answer.yieldProduct1Out }} grams of {{ answer.product1 }} and {{ answer.yieldProduct2Out }} grams of {{ answer.product2 }}\r\n  <br>\r\n  The grams used up is: {{ answer.gramsUsedOut }} g\r\n  <br>\r\n  The remaining amount of {{ answer.nonLimitingReactant }} is {{ answer.gramsRemainingOut }} g\r\n  <br>\r\n  the sum of excess plus used reagents ( {{ answer.sumOfAllOut }} g) ought to equal the grams of compound 1 ({{ answer.grams1 }} g) and grams of compound 2 ({{ answer.grams2 }} g)\r\n</ng-container>"

/***/ }),

/***/ "./src/app/answer-key/answer-key.component.scss":
/*!******************************************************!*\
  !*** ./src/app/answer-key/answer-key.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 120%; }\n\napp-answer-key {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5zd2VyLWtleS9DOlxcVXNlcnNcXE1hdHRoZXdcXERlc2t0b3BcXEdpdEh1YlxcQ2hlbVF1aXpHZW4vc3JjXFxhcHBcXGFuc3dlci1rZXlcXGFuc3dlci1rZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYW5zd2VyLWtleS9hbnN3ZXIta2V5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIDtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5hcHAtYW5zd2VyLWtleXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/answer-key/answer-key.component.ts":
/*!****************************************************!*\
  !*** ./src/app/answer-key/answer-key.component.ts ***!
  \****************************************************/
/*! exports provided: AnswerKeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerKeyComponent", function() { return AnswerKeyComponent; });
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

var AnswerKeyComponent = /** @class */ (function () {
    function AnswerKeyComponent() {
    }
    AnswerKeyComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerKeyComponent.prototype, "answer", void 0);
    AnswerKeyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-key',
            template: __webpack_require__(/*! ./answer-key.component.html */ "./src/app/answer-key/answer-key.component.html"),
            styles: [__webpack_require__(/*! ./answer-key.component.scss */ "./src/app/answer-key/answer-key.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerKeyComponent);
    return AnswerKeyComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  justify-content: space-around; }\n\nbody {\n  padding-left: 25px; }\n\nh1 {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-bottom: 20px;\n  height: 50px;\n  font-size: 3em;\n  background-color: #1f881f;\n  border-style: solid;\n  border-color: black;\n  background-image: url('gluick.png');\n  background-repeat: no-repeat;\n  background-position: left; }\n\ndiv {\n  padding-left: 15px;\n  padding-right: 10px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-color: black;\n  border-style: solid;\n  background-color: #ecdfc6;\n  font-size: 125%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxHaXRIdWJcXENoZW1RdWl6R2VuL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFFcEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQ0FBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbmJvZHl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuaDEge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMTM2LCAzMSlcdDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9nbHVpY2sucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbn1cclxuXHJcbmRpdntcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMjMsIDE5OCk7XHJcbiAgICBmb250LXNpemU6MTI1JTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(router) {
        this.router = router;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stoichiometry_form_stoichiometry_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stoichiometry-form/stoichiometry-form.component */ "./src/app/stoichiometry-form/stoichiometry-form.component.ts");
/* harmony import */ var _answer_key_answer_key_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answer-key/answer-key.component */ "./src/app/answer-key/answer-key.component.ts");
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/elements.service */ "./src/app/services/elements.service.ts");
/* harmony import */ var _molarity_molarity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./molarity/molarity.component */ "./src/app/molarity/molarity.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        // this will direct the website's generic URL to our home page, the main app component.
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"]
    },
    {
        // this will redirect to the stoichiometry form.
        path: 'stoichiometry',
        component: _stoichiometry_form_stoichiometry_form_component__WEBPACK_IMPORTED_MODULE_5__["StoichiometryFormComponent"]
    },
    {
        // this will redirect to the molarity form.
        path: 'molarity',
        component: _molarity_molarity_component__WEBPACK_IMPORTED_MODULE_8__["MolarityComponent"]
    },
    {
        // this will redirect any unknown URLs to the index page.
        path: '**',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _stoichiometry_form_stoichiometry_form_component__WEBPACK_IMPORTED_MODULE_5__["StoichiometryFormComponent"],
                _answer_key_answer_key_component__WEBPACK_IMPORTED_MODULE_6__["AnswerKeyComponent"],
                _molarity_molarity_component__WEBPACK_IMPORTED_MODULE_8__["MolarityComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
            providers: [_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["ElementsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Chemistry Quiz Key Generator</h1>\r\n\r\n<br>\r\n\r\n<div class=\"form-container\">\r\n  <a routerLink=\"/stoichiometry\"><button class=\"btn btn-success pull-right\">Stoichiometry Equations</button></a>\r\n  <a routerLink=\"/molarity\"><button class=\"btn btn-success pull-right\">Molarity Equations</button></a>\r\n</div>\r\n\r\n<footer>\r\n  <small><em>Copyright &copy; 2019 Catalyst Quartet</em></small><br>\r\n  <script>\r\n    document.write(\"This page was last modified on: \" + document.lastModified)\r\n  </script>\r\n</footer>"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  justify-content: space-around; }\n\nbody {\n  padding-left: 25px; }\n\nh1 {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-bottom: 20px;\n  height: 50px;\n  font-size: 3em;\n  background-color: #1f881f;\n  border-style: solid;\n  border-color: black;\n  background-image: url('gluick.png');\n  background-repeat: no-repeat;\n  background-position: left; }\n\ndiv {\n  padding-left: 15px;\n  padding-right: 10px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-color: black;\n  border-style: solid;\n  background-color: #ecdfc6;\n  font-size: 125%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxHaXRIdWJcXENoZW1RdWl6R2VuL3NyY1xcYXBwXFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFFcEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQ0FBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuYm9keXtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG5oMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAxMzYsIDMxKVx0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2dsdWljay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxufVxyXG5cclxuZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIyMywgMTk4KTtcclxuICAgIGZvbnQtc2l6ZToxMjUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/models/answer-key.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/answer-key.model.ts ***!
  \********************************************/
/*! exports provided: AnswerKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerKey", function() { return AnswerKey; });
// Answer key to be used to hold the data inputed by the professors
// and the answers calculated by the application
var AnswerKey = /** @class */ (function () {
    // Runs at the beginning (obviously)
    function AnswerKey() {
        // Make sure the display is off by default
        this.displayKey = false;
        // Display the solubility when loaded by default
        this.findSolubility = true;
        // Default the Coefficients to 1
        this.reactant1Coefficient = 1;
        this.reactant2Coefficient = 1;
        this.product1Coefficient = 1;
        this.product2Coefficient = 1;
        // Default the sigFigs to 4
        this.sigFigs = 4;
    }
    // Sets the subscripts of the elements
    AnswerKey.prototype.setSubScript = function (subscript) {
        switch (subscript) {
            case 1: // if the subscript is 1
                return ''; // send back a blank field
            case 2: // if the subscript is 2
                return '\u2082'; // send back the unicode for subscript 2
            case 3: // if the subscript is 3
                return '\u2083'; // send back the unicode for subscript 3
            default: // otherwise
                return '!!!!! ERROR: SUBSCRIPT VALUE NOT HANDLED !!!!!'; // send back an error so that we can add more cases (potentially)
        }
    };
    // Groups the cations, anions, and subscripts to create the molecules as a string
    AnswerKey.prototype.setMolecules = function () {
        // This block determines the correct way to load Reactant 1
        if (this.cation1Polyatomic && (this.reactant1CationSubscript > 1)) {
            // If cation1 is polyatomic and has a reactant 1 subscript of greater than 1...
            if (this.anion1Polyatomic && (this.reactant1AnionSubscript > 1)) {
                // and anion1 is polyatomic and has a reactant 1 subscript greater than 1...
                // add parenthesis around all ions
                this.reactant1 = '(' + this.cation1 + ')' + this.setSubScript(this.reactant1CationSubscript) +
                    '(' + this.anion1 + ')' + this.setSubScript(this.reactant1AnionSubscript);
            }
            else {
                // and anion1 isn't polyatomic OR doesn't have a reactant1 subscript greather than 1...
                // only put parenthesis around the cation
                this.reactant1 = '(' + this.cation1 + ')' + this.setSubScript(this.reactant1CationSubscript) +
                    this.anion1 + this.setSubScript(this.reactant1AnionSubscript);
            }
        }
        else {
            // If cation1 isn't plyatomic OR doesn't have a reactant 1 subscript greater than 1...
            if (this.anion1Polyatomic && (this.reactant1AnionSubscript > 1)) {
                // and anion1 is polyatomic and has a reactant 1 subscript greater than 1...
                // add parenthesis around all ions
                this.reactant1 = '' + this.cation1 + this.setSubScript(this.reactant1CationSubscript) +
                    '(' + this.anion1 + ')' + this.setSubScript(this.reactant1AnionSubscript);
            }
            else {
                // and anion1 isn't polyatomic OR doesn't have a reactant1 subscript greather than 1...
                // only put parenthesis around the cation
                this.reactant1 = '' + this.cation1 + this.setSubScript(this.reactant1CationSubscript) +
                    this.anion1 + this.setSubScript(this.reactant1AnionSubscript);
            }
        }
        // This block determines the correct way to load Reactant 2
        if (this.cation2Polyatomic && (this.reactant2CationSubscript > 1)) {
            // If cation2 is polyatomic and has a reactant 2 subscript of greater than 1...
            if (this.anion2Polyatomic && (this.reactant2AnionSubscript > 1)) {
                // and anion2 is polyatomic and has a reactant 2 subscript greater than 1...
                // add parenthesis around all ions
                this.reactant2 = '(' + this.cation2 + ')' + this.setSubScript(this.reactant2CationSubscript) +
                    '(' + this.anion2 + ')' + this.setSubScript(this.reactant2AnionSubscript);
            }
            else {
                // and anion2 isn't polyatomic OR doesn't have a reactant 2 subscript greather than 1...
                // only put parenthesis around the cation
                this.reactant2 = '(' + this.cation2 + ')' + this.setSubScript(this.reactant2CationSubscript) +
                    this.anion2 + this.setSubScript(this.reactant2AnionSubscript);
            }
        }
        else {
            // If cation2 isn't plyatomic OR doesn't have a reactant 2 subscript greater than 1...
            if (this.anion2Polyatomic && (this.reactant2AnionSubscript > 1)) {
                // and anion2 is polyatomic and has a reactant 2 subscript greater than 1...
                // add parenthesis around all ions
                this.reactant2 = '' + this.cation2 + this.setSubScript(this.reactant2CationSubscript) +
                    '(' + this.anion2 + ')' + this.setSubScript(this.reactant2AnionSubscript);
            }
            else {
                // and anion2 isn't polyatomic OR doesn't have a reactant 2 subscript greather than 1...
                // only put parenthesis around the cation
                this.reactant2 = '' + this.cation2 + this.setSubScript(this.reactant2CationSubscript) +
                    this.anion2 + this.setSubScript(this.reactant2AnionSubscript);
            }
        }
        // This block determines the correct way to load Product 1
        if (this.cation1Polyatomic && (this.product1CationSubscript > 1)) {
            // If cation1 is polyatomic and has a product 1 subscript of greater than 1...
            if (this.anion2Polyatomic && (this.product1AnionSubscript > 1)) {
                // and anion2 is polyatomic and has a product 1 subscript greater than 1...
                // add parenthesis around all ions
                this.product1 = '(' + this.cation1 + ')' + this.setSubScript(this.product1CationSubscript) +
                    '(' + this.anion2 + ')' + this.setSubScript(this.product1AnionSubscript);
            }
            else {
                // and anion2 isn't polyatomic OR doesn't have a product 1 subscript greather than 1...
                // only put parenthesis around the cation
                this.product1 = '(' + this.cation1 + ')' + this.setSubScript(this.product1CationSubscript) +
                    this.anion2 + this.setSubScript(this.product1AnionSubscript);
            }
        }
        else {
            // If cation1 isn't plyatomic OR doesn't have a product 1 subscript greater than 1...
            if (this.anion2Polyatomic && (this.product1AnionSubscript > 1)) {
                // and anion2 is polyatomic and has a product 1 subscript greater than 1...
                // add parenthesis around all ions
                this.product1 = '' + this.cation1 + this.setSubScript(this.product1CationSubscript) +
                    '(' + this.anion2 + ')' + this.setSubScript(this.product1AnionSubscript);
            }
            else {
                // and anion2 isn't polyatomic OR doesn't have a product 1 subscript greather than 1...
                // only put parenthesis around the cation
                this.product1 = '' + this.cation1 + this.setSubScript(this.product1CationSubscript) +
                    this.anion2 + this.setSubScript(this.product1AnionSubscript);
            }
        }
        // This block determines the correct way to load Product 2
        if (this.cation2Polyatomic && (this.product2CationSubscript > 1)) {
            // If cation2 is polyatomic and has a product 2 subscript of greater than 1...
            if (this.anion1Polyatomic && (this.product2AnionSubscript > 1)) {
                // and anion1 is polyatomic and has a product 2 subscript greater than 1...
                // add parenthesis around all ions
                this.product2 = '(' + this.cation2 + ')' + this.setSubScript(this.product2CationSubscript) +
                    '(' + this.anion1 + ')' + this.setSubScript(this.product2AnionSubscript);
            }
            else {
                // and anion1 isn't polyatomic OR doesn't have a product 2 subscript greather than 1...
                // only put parenthesis around the cation
                this.product2 = '(' + this.cation2 + ')' + this.setSubScript(this.product2CationSubscript) +
                    this.anion1 + this.setSubScript(this.product2AnionSubscript);
            }
        }
        else {
            // If cation2 isn't plyatomic OR doesn't have a product 2 subscript greater than 1...
            if (this.anion1Polyatomic && (this.product2AnionSubscript > 1)) {
                // and anion1 is polyatomic and has a product 2 subscript greater than 1...
                // add parenthesis around all ions
                this.product2 = '' + this.cation2 + this.setSubScript(this.product2CationSubscript) +
                    '(' + this.anion1 + ')' + this.setSubScript(this.product2AnionSubscript);
            }
            else {
                // and anion1 isn't polyatomic OR doesn't have a product 2 subscript greather than 1...
                // only put parenthesis around the cation
                this.product2 = '' + this.cation2 + this.setSubScript(this.product2CationSubscript) +
                    this.anion1 + this.setSubScript(this.product2AnionSubscript);
            }
        }
        /* Original code (without the polyatomic parenthesis)
        this.reactant1 = '' + this.cation1 + this.setSubScript(this.reactant1CationSubscript) + this.anion1 +
          this.setSubScript(this.reactant1AnionSubscript);
    
        this.reactant2 = '' + this.cation2 + this.setSubScript(this.reactant2CationSubscript) + this.anion2 +
          this.setSubScript(this.reactant2AnionSubscript);
        
        this.product1 = '' + this.cation1 + this.setSubScript(this.product1CationSubscript) + this.anion2 +
          this.setSubScript(this.product1AnionSubscript);
    
        this.product2 = '' + this.cation2 + this.setSubScript(this.product2CationSubscript) + this.anion1 +
          this.setSubScript(this.product2AnionSubscript);
        */
    };
    // Calulates formula weights based on charges of opposite bonded element
    AnswerKey.prototype.calculateFormulaWeight = function () {
        this.product1Weight = (this.cation1Weight * this.product1CationSubscript) +
            (this.anion2Weight * this.product1AnionSubscript);
        this.product2Weight = (this.cation2Weight * this.product2CationSubscript) +
            (this.anion1Weight * this.product2AnionSubscript);
        this.reactant1Weight = (this.anion1Weight * this.reactant1AnionSubscript) +
            (this.cation1Weight * this.reactant1CationSubscript);
        this.reactant2Weight = (this.anion2Weight * this.reactant2AnionSubscript) +
            (this.cation2Weight * this.reactant2CationSubscript);
        // Set the String output values for display with the correct number of sigfigs
        this.product1WeightOut = this.precision(this.product1Weight);
        this.product2WeightOut = this.precision(this.product2Weight);
    };
    // Determnes the subscript based on opposing charges
    AnswerKey.prototype.determineSubscript = function () {
        this.reactant1AnionSubscript = (this.cation1Charge === Math.abs(this.anion1Charge)) ?
            1 : this.cation1Charge;
        this.reactant1CationSubscript = (this.cation1Charge === Math.abs(this.anion1Charge)) ?
            1 : Math.abs(this.anion1Charge);
        this.reactant2AnionSubscript = (this.cation2Charge === Math.abs(this.anion2Charge)) ?
            1 : this.cation2Charge;
        this.reactant2CationSubscript = (this.cation2Charge === Math.abs(this.anion2Charge)) ?
            1 : Math.abs(this.anion2Charge);
        this.product1AnionSubscript = (this.cation1Charge === Math.abs(this.anion2Charge)) ?
            1 : this.cation1Charge;
        this.product1CationSubscript = (this.cation1Charge === Math.abs(this.anion2Charge)) ?
            1 : Math.abs(this.anion2Charge);
        this.product2AnionSubscript = (this.cation2Charge === Math.abs(this.anion1Charge)) ?
            1 : this.cation2Charge;
        this.product2CationSubscript = (this.cation2Charge === Math.abs(this.anion1Charge)) ?
            1 : Math.abs(this.anion1Charge);
    };
    // Balances equation based on subscripts and default coefficients
    AnswerKey.prototype.balanceEquation = function () {
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in answer-key.model.ts if you are not debugging the system.");
        console.log("Began Balance Equation");
        /* */
        // Default the Coefficients to 1
        this.reactant1Coefficient = 1;
        this.reactant2Coefficient = 1;
        this.product1Coefficient = 1;
        this.product2Coefficient = 1;
        // Determines the amount of cations and anions in each molecule based on subscript and coefficient
        // This keeps track of how many there are in each molecule, and checks that they all are the same.
        var reactant1CationAmount = this.reactant1CationSubscript * this.reactant1Coefficient;
        var product1CationAmount = this.product1CationSubscript * this.product1Coefficient;
        var reactant1AnionAmount = this.reactant1AnionSubscript * this.reactant1Coefficient;
        var product1AnionAmount = this.product1AnionSubscript * this.product1Coefficient;
        var reactant2CationAmount = this.reactant2CationSubscript * this.reactant2Coefficient;
        var product2CationAmount = this.product2CationSubscript * this.product2Coefficient;
        var reactant2AnionAmount = this.reactant2AnionSubscript * this.reactant2Coefficient;
        var product2AnionAmount = this.product2AnionSubscript * this.product2Coefficient;
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in answer-key.model.ts if you are not debugging the system.");
        console.log("Finished assigning variables and beginning while loop");
        */
        var x = 0;
        // While loops tests that the amounts on either side of the equation are equal
        while (reactant1CationAmount !== product1CationAmount ||
            reactant1AnionAmount !== product2AnionAmount ||
            reactant2CationAmount !== product2CationAmount ||
            reactant2AnionAmount !== product1AnionAmount) {
            /* Debug, add/remove the here to enable/disable the code ->
            console.log("The following data is printed for debug purposes, please disable this block in answer-key.model.ts if you are not debugging the system.");
            */ /*
            if (x <= 10) {
            console.log("Beginning loop itteration " + x);
            console.log("Stored Data: ");
            console.log("reactant1CationAmount: " + reactant1CationAmount);
            console.log("product1CationAmount: " + product1CationAmount);
            console.log("reactant2CationAmount: " + reactant2CationAmount);
            console.log("product2CationAmount: " + product2CationAmount);
            console.log("reactant1AnionAmount: " + reactant1AnionAmount);
            console.log("product1AnionAmount: " + product1AnionAmount);
            console.log("reactant2AnionAmount: " + reactant2AnionAmount);
            console.log("product2AnionAmount: " + product2AnionAmount);
            x++;
            }
            else
              break;
            */
            // Tests if cation amounts are the same
            if (reactant1CationAmount !== product1CationAmount) {
                // If not the same test which is bigger and increase the appropriate coefficient
                if (reactant1CationAmount > product1CationAmount) {
                    this.product1Coefficient *= reactant1CationAmount / product1CationAmount;
                    product1CationAmount = this.product1CationSubscript * this.product1Coefficient;
                    product1AnionAmount = this.product1AnionSubscript * this.product1Coefficient;
                }
                else {
                    this.reactant1Coefficient *= product1CationAmount / reactant1CationAmount;
                    reactant1CationAmount = this.reactant1CationSubscript * this.reactant1Coefficient;
                    reactant1AnionAmount = this.reactant1AnionSubscript * this.reactant1Coefficient;
                }
            }
            // Tests if anion amounts are the same
            if (reactant1AnionAmount !== product2AnionAmount) {
                // If not the same test which is bigger and increase the appropriate coefficient
                if (reactant1AnionAmount > product2AnionAmount) {
                    this.product2Coefficient *= reactant1AnionAmount / product2AnionAmount;
                    product2CationAmount = this.product2CationSubscript * this.product2Coefficient;
                    product2AnionAmount = this.product2AnionSubscript * this.product2Coefficient;
                }
                else {
                    this.reactant1Coefficient *= product1CationAmount / reactant1CationAmount;
                    reactant1CationAmount = this.reactant1CationSubscript * this.reactant1Coefficient;
                    reactant1AnionAmount = this.reactant1AnionSubscript * this.reactant1Coefficient;
                }
            }
            // Tests if cation amounts are the same
            if (reactant2CationAmount !== product2CationAmount) {
                // If not the same test which is bigger and increase the appropriate coefficient
                if (reactant2CationAmount > product2CationAmount) {
                    this.product2Coefficient *= reactant2CationAmount / product2CationAmount;
                    product2CationAmount = this.reactant2CationSubscript * this.reactant2Coefficient;
                    product2AnionAmount = this.product2AnionSubscript * this.product2Coefficient;
                }
                else {
                    this.reactant2Coefficient *= product2CationAmount / reactant2CationAmount;
                    reactant2CationAmount = this.reactant2CationSubscript * this.reactant2Coefficient;
                    reactant2AnionAmount = this.reactant2AnionSubscript * this.reactant2Coefficient;
                }
            }
            // Tests if anion amounts are the same
            if (reactant2AnionAmount !== product1AnionAmount) {
                // If not the same test which is bigger and increase the appropriate coefficient
                if (reactant2AnionAmount > product1AnionAmount) {
                    this.product1Coefficient *= reactant2AnionAmount / product1AnionAmount;
                    product1CationAmount = this.product1CationSubscript * this.product1Coefficient;
                    product1AnionAmount = this.product1AnionSubscript * this.product1Coefficient;
                }
                else {
                    this.reactant2Coefficient *= product1AnionAmount / reactant2AnionAmount;
                    reactant2CationAmount = this.reactant2CationSubscript * this.reactant2Coefficient;
                    reactant2AnionAmount = this.reactant2AnionSubscript * this.reactant2Coefficient;
                }
            }
            /* Debug, add/remove the * / here to enable/disable the code -> * /
            console.log("The following data is printed for debug purposes, please disable this block in answer-key.model.ts if you are not debugging the system.");
            console.log("Finished loop itteration " + x);
            /* */
        }
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in answer-key.model.ts if you are not debugging the system.");
        console.log("Finished main loop and beginning fixDecimalCoefficients");
        /* */
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("End Loop");
        console.log("Stored Data: ");
        console.log("reactant1CationAmount: " + reactant1CationAmount);
        console.log("product1CationAmount: " + product1CationAmount);
        console.log("reactant2CationAmount: " + reactant2CationAmount);
        console.log("product2CationAmount: " + product2CationAmount);
        console.log("reactant1AnionAmount: " + reactant1AnionAmount);
        console.log("product1AnionAmount: " + product1AnionAmount);
        console.log("reactant2AnionAmount: " + reactant2AnionAmount);
        console.log("product2AnionAmount: " + product2AnionAmount);
        /* */
        // As there may be decimal coefficients, this needs to be corrected right after balancing.
        this.fixDecimalCoefficients();
    };
    // This method runs after the balanceEquation() method
    // It corrects the possibility of decimal coefficients
    AnswerKey.prototype.fixDecimalCoefficients = function () {
        // This number will store the decimal to be divided by
        var coefficientDecimal;
        // Runs for as long as there is a coefficient that isn't an integer (should only be once though)
        if ((this.reactant1Coefficient % 1) !== 0 ||
            (this.reactant2Coefficient % 1) !== 0 ||
            (this.product1Coefficient % 1) !== 0 ||
            (this.product2Coefficient % 1) !== 0) {
            // If reactant1Coefficient has a decimal
            if ((coefficientDecimal = this.reactant1Coefficient % 1) !== 0) {
                // divide all Coefficients by the decimal (effectively multiplying by the inverse of the decimal)
                this.reactant1Coefficient /= coefficientDecimal;
                this.reactant2Coefficient /= coefficientDecimal;
                this.product1Coefficient /= coefficientDecimal;
                this.product2Coefficient /= coefficientDecimal;
            }
            // If reactant1Coefficient has a decimal
            if ((coefficientDecimal = this.reactant2Coefficient % 1) !== 0) {
                // divide all Coefficients by the decimal (effectively multiplying by the inverse of the decimal)
                this.reactant1Coefficient /= coefficientDecimal;
                this.reactant2Coefficient /= coefficientDecimal;
                this.product1Coefficient /= coefficientDecimal;
                this.product2Coefficient /= coefficientDecimal;
            }
            // If reactant1Coefficient has a decimal
            if ((coefficientDecimal = this.product1Coefficient % 1) !== 0) {
                // divide all Coefficients by the decimal (effectively multiplying by the inverse of the decimal)
                this.reactant1Coefficient /= coefficientDecimal;
                this.reactant2Coefficient /= coefficientDecimal;
                this.product1Coefficient /= coefficientDecimal;
                this.product2Coefficient /= coefficientDecimal;
            }
            // If reactant1Coefficient has a decimal
            if ((coefficientDecimal = this.product2Coefficient % 1) !== 0) {
                // divide all Coefficients by the decimal (effectively multiplying by the inverse of the decimal)
                this.reactant1Coefficient /= coefficientDecimal;
                this.reactant2Coefficient /= coefficientDecimal;
                this.product1Coefficient /= coefficientDecimal;
                this.product2Coefficient /= coefficientDecimal;
            }
        }
        this.simplifyCoefficients();
    };
    // This method takes coefficients like 2 2 4 2 and simplifies them to coefficients like 1 1 2 1
    AnswerKey.prototype.simplifyCoefficients = function () {
        if (this.reactant1Coefficient % this.product2Coefficient === 0 &&
            this.reactant2Coefficient % this.product2Coefficient === 0 &&
            this.product1Coefficient % this.product2Coefficient === 0) { // Checking everything against product 2's coefficient
            this.reactant1Coefficient /= this.product2Coefficient;
            this.reactant2Coefficient /= this.product2Coefficient;
            this.product1Coefficient /= this.product2Coefficient;
            this.product2Coefficient /= this.product2Coefficient;
        }
        else if (this.reactant1Coefficient % this.product1Coefficient === 0 &&
            this.reactant2Coefficient % this.product1Coefficient === 0 &&
            this.product2Coefficient % this.product1Coefficient === 0) { // Checking everything against product 1's coefficient
            this.reactant1Coefficient /= this.product1Coefficient;
            this.reactant2Coefficient /= this.product1Coefficient;
            this.product1Coefficient /= this.product1Coefficient;
            this.product2Coefficient /= this.product1Coefficient;
        }
        else if (this.reactant1Coefficient % this.reactant2Coefficient === 0 &&
            this.product1Coefficient % this.reactant2Coefficient === 0 &&
            this.product2Coefficient % this.reactant2Coefficient === 0) { // Checking everything against reactant 2's coefficient
            this.reactant1Coefficient /= this.reactant2Coefficient;
            this.reactant2Coefficient /= this.reactant2Coefficient;
            this.product1Coefficient /= this.reactant2Coefficient;
            this.product2Coefficient /= this.reactant2Coefficient;
        }
        else if (this.reactant2Coefficient % this.reactant1Coefficient === 0 &&
            this.product1Coefficient % this.reactant1Coefficient === 0 &&
            this.product2Coefficient % this.reactant1Coefficient === 0) { // Checking everything against reactant 1's coefficient
            this.reactant1Coefficient /= this.reactant1Coefficient;
            this.reactant2Coefficient /= this.reactant1Coefficient;
            this.product1Coefficient /= this.reactant1Coefficient;
            this.product2Coefficient /= this.reactant1Coefficient;
        }
        else {
            // DO NOTHING, CAUSE IT'S SIMPLIFIED AS IS
        }
    };
    // This method calculates the mole rations of the products to the reactants
    AnswerKey.prototype.calculateMoleRatios = function () {
        // Since the coefficients are the moles of each molecule present in the reaction, this works
        this.moleRatioP1toR1 = this.product1Coefficient / this.reactant1Coefficient;
        this.moleRatioP1toR2 = this.product1Coefficient / this.reactant2Coefficient;
        this.moleRatioP2toR1 = this.product2Coefficient / this.reactant1Coefficient;
        this.moleRatioP2toR2 = this.product2Coefficient / this.reactant2Coefficient;
        // Set the String outputs of them so that they can have the correct number of sigfigs:
        this.moleRatioP1toR1Out = this.precision(this.moleRatioP1toR1);
        this.moleRatioP1toR2Out = this.precision(this.moleRatioP1toR2);
        this.moleRatioP2toR1Out = this.precision(this.moleRatioP2toR1);
        this.moleRatioP2toR2Out = this.precision(this.moleRatioP2toR2);
        // These are the ratios between reactants
        this.moleRatioR1toR2 = this.reactant1Coefficient / this.reactant2Coefficient;
        this.moleRatioR2toR1 = this.reactant2Coefficient / this.reactant1Coefficient;
    };
    // Rewrite to modularize the methods more.  
    // Retrieves each ion's charge and saves it
    AnswerKey.prototype.setCharges = function () {
        // Charge data, hard coded.  Please adapt to call data from backend
        var charge_table = { Li: 1, Na: 1, K: 1, NH4: 1, Mg: 2, Ca: 2, Ba: 2, Zn: 2, 'Fe(II)': 2,
            Cu: 2, Al: 3, 'Fe(III)': 3, Pb: 2, Ag: 1, Br: -1, I: -1, Cl: -1, NO3: -1, CO3: -2, ClO3: -1,
            OH: -1, O2: -2, PO4: -3, SO4: -2, Cr2O7: -2 };
        // Set the charge variables based on the data provided
        this.cation1Charge = charge_table[this.cation1 + ''];
        this.cation2Charge = charge_table[this.cation2 + ''];
        this.anion1Charge = charge_table[this.anion1 + ''];
        this.anion2Charge = charge_table[this.anion2 + ''];
    };
    // This method is meant to function like his reaction_solubility(a) function
    // It generates each item's solubility information.
    AnswerKey.prototype.solubilityGeneration = function () {
        /* Debug add/remove the space in the * / to enable/disable the debug code -> * /
        console.log("solubilityGeneration() Began");
        console.log(this.findSolubility);
        console.log("Cation1 " + this.cation1SolubilityData);
        console.log("Cation2 " + this.cation2SolubilityData);
        /* */
        if (this.findSolubility) { // If the data was loaded, then figure out each molecule's solubility
            /*
            0 = aqueous = (aq)
            1 = solid = (s)
            */
            // Reactant 1
            if (this.cation1SolubilityData[this.anion1 + ''] === 1) {
                this.reactant1Solubility = "(s)";
            }
            else if (this.cation1SolubilityData[this.anion1 + ''] === 0) {
                this.reactant1Solubility = "(aq)";
            }
            else {
                this.reactant1Solubility = "?";
            }
            // Reactant 2
            if (this.cation2SolubilityData[this.anion2 + ''] === 1) {
                this.reactant2Solubility = "(s)";
            }
            else if (this.cation2SolubilityData[this.anion2 + ''] === 0) {
                this.reactant2Solubility = "(aq)";
            }
            else {
                this.reactant2Solubility = "?";
            }
            // Product 1
            if (this.cation1SolubilityData[this.anion2 + ''] === 1) {
                this.product1Solubility = "(s)";
            }
            else if (this.cation1SolubilityData[this.anion2 + ''] === 0) {
                this.product1Solubility = "(aq)";
            }
            else {
                this.product1Solubility = "?";
            }
            // Product 2
            if (this.cation2SolubilityData[this.anion1 + ''] === 1) {
                this.product2Solubility = "(s)";
            }
            else if (this.cation2SolubilityData[this.anion1 + ''] === 0) {
                this.product2Solubility = "(aq)";
            }
            else {
                this.product2Solubility = "?";
            }
        }
        else { // Otherwise, set the solubility to empty values to avoid issues (probably)
            this.reactant1Solubility = '';
            this.reactant2Solubility = '';
            this.product1Solubility = '';
            this.product2Solubility = '';
        }
    };
    // This method calculates the moles of each and determines the limiting reactant
    AnswerKey.prototype.determineLimitingReactant = function () {
        // check if product moles from R1 are less than R2
        if (this.molesP1FromR1 < this.molesP1FromR2 &&
            this.molesP2FromR1 < this.molesP2FromR2) { // if so
            // Calculate the mass yield
            this.yieldProduct1 = this.molesP1FromR1 * this.product1Weight;
            this.yieldProduct2 = this.molesP2FromR1 * this.product2Weight;
            // calculate the grams used, remaining, and the sum of all masses
            this.gramsUsed = (this.moleRatioR2toR1 * this.molesReactant1) * this.reactant2Weight;
            this.gramsRemaining = this.grams2 - this.gramsUsed;
            this.sumOfAll = (this.gramsRemaining + this.yieldProduct1 + this.yieldProduct2);
            // set the limiting reactant to reactant 1
            this.limitingReactant = this.reactant1;
            this.nonLimitingReactant = this.reactant2;
            // Set the String outputs so that the correct number of sigfigs can be used
            this.gramsUsedOut = this.precision(this.gramsUsed);
            this.gramsRemainingOut = this.precision(this.gramsRemaining);
            this.sumOfAllOut = this.precision(this.sumOfAll);
            this.yieldProduct1Out = this.precision(this.yieldProduct1);
            this.yieldProduct2Out = this.precision(this.yieldProduct2);
        }
        else { // otherwise
            // Calculate the mass yield
            this.yieldProduct1 = this.molesP1FromR2 * this.product1Weight;
            this.yieldProduct2 = this.molesP2FromR2 * this.product2Weight;
            // calculate the grams used, remaining, and the sum of all masses
            this.gramsUsed = (this.moleRatioR1toR2 * this.molesReactant2) * this.reactant1Weight;
            this.gramsRemaining = this.grams1 - this.gramsUsed;
            this.sumOfAll = (this.gramsRemaining + this.yieldProduct1 + this.yieldProduct2);
            // set the limiting reactant
            this.limitingReactant = this.reactant2;
            this.nonLimitingReactant = this.reactant1;
            // Set the String outputs so that the correct number of sigfigs can be used
            this.gramsUsedOut = this.precision(this.gramsUsed);
            this.gramsRemainingOut = this.precision(this.gramsRemaining);
            this.sumOfAllOut = this.precision(this.sumOfAll);
            this.yieldProduct1Out = this.precision(this.yieldProduct1);
            this.yieldProduct2Out = this.precision(this.yieldProduct2);
        }
    };
    // This method calculates the actual moles of the reactants
    // NOTE: This is separate from saveProductmoles(), as it is necessary to calculate the limiting reactant, which is necessary to get the actual value of the reactant moles.
    // tldr; more needed before product moles
    AnswerKey.prototype.calculateMoles = function () {
        // Mole calculations of the reactants
        this.molesReactant1 = this.grams1 / ((this.cation1Weight * this.reactant1CationSubscript) + (this.anion1Weight * this.reactant1AnionSubscript));
        this.molesReactant2 = this.grams2 / ((this.cation2Weight * this.reactant2CationSubscript) + (this.anion2Weight * this.reactant2AnionSubscript));
        // Mole *Potential* calculations of the products
        // Product 1
        this.molesP1FromR1 = this.molesReactant1 * this.moleRatioP1toR1;
        this.molesP1FromR2 = this.molesReactant2 * this.moleRatioP1toR2;
        // Product 2
        this.molesP2FromR1 = this.molesReactant1 * this.moleRatioP2toR1;
        this.molesP2FromR2 = this.molesReactant2 * this.moleRatioP2toR2;
        // Set the String output variables so that the correct number of sigfigs can be used.
        this.molesReactant1Out = this.precision(this.molesReactant1);
        this.molesReactant2Out = this.precision(this.molesReactant2);
        this.molesP1FromR1Out = this.precision(this.molesP1FromR1);
        this.molesP1FromR2Out = this.precision(this.molesP1FromR2);
        this.molesP2FromR1Out = this.precision(this.molesP2FromR1);
        this.molesP2FromR2Out = this.precision(this.molesP2FromR2);
    };
    // This method is used to generate the strings using the percision
    // required of a chemistry numbers app
    AnswerKey.prototype.precision = function (value) {
        // console.log(value.toPrecision(this.sigFigs));
        return value.toPrecision(this.sigFigs);
    };
    // This method is a log method used purely to print out the current state of the class
    // Any calls to this method are to be used only for debug purposes.
    // It prints out ALL class-wide variables, and therefore floods the console when used.
    // Please disable this method after debug is over.
    AnswerKey.prototype.printVariablesDEBUG = function () {
        console.log("printVariablesDEBUG() called, printing answer-key.model.ts class variable values: ");
        console.log();
        // Boolean data for searching purposes.
        console.log("Display Key: " + this.displayKey);
        console.log("Find Solubility: " + this.findSolubility);
        console.log();
        // Reactant 1
        console.log("Anion 1: " + this.anion1);
        console.log("Cation 1: " + this.cation1);
        console.log("Grams 1: " + this.grams1);
        console.log();
        // Reactant 2
        console.log("Anion 2: " + this.anion2);
        console.log("Cation 2: " + this.cation2);
        console.log("Grams 2: " + this.grams2);
        console.log();
        // Calculated Data
        console.log("Cation 1 Weight: " + this.cation1Weight);
        console.log("Anion 1 Weight: " + this.anion1Weight);
        console.log("Cation 2 Weight: " + this.cation2Weight);
        console.log("Anion 2 Weight: " + this.anion2Weight);
        console.log();
        // Charges of Ions
        console.log("Cation 1 Charge: " + this.cation1Charge);
        console.log("Anion 1 Charge: " + this.anion1Charge);
        console.log("Cation 2 Charge: " + this.cation2Charge);
        console.log("Anion 2 Charge: " + this.anion2Charge);
        console.log();
        // Coalesced Molecular Data (includes substrings, but not the solubility)
        console.log("Reactant 1: " + this.reactant1);
        console.log("Reactant 2: " + this.reactant2);
        console.log("Product 1: " + this.product1);
        console.log("Product 2: " + this.product2);
        console.log();
        // Reactant Subscripts
        console.log("Reactant 1 Anion Subscript: " + this.reactant1AnionSubscript);
        console.log("Reactant 1 Cation Subscript: " + this.reactant1CationSubscript);
        console.log("Reactant 2 Anion Subscript: " + this.reactant2AnionSubscript);
        console.log("Reactant 2 Cation Subscript: " + this.reactant2CationSubscript);
        console.log();
        // Product Subscripts
        console.log("Product 1 Anion Subscript: " + this.product1AnionSubscript);
        console.log("Product 1 Cation Subscript: " + this.product1CationSubscript);
        console.log("Product 2 Anion Subscript: " + this.product2AnionSubscript);
        console.log("Product 2 Cation Subscript: " + this.product2CationSubscript);
        console.log();
        // Reactant Coefficients
        console.log("Reactant 1 Coefficient: " + this.reactant1Coefficient);
        console.log("Reactant 2 Coefficient: " + this.reactant2Coefficient);
        console.log();
        // Product Coefficients
        console.log("Product 1 Coefficient: " + this.product1Coefficient);
        console.log("Product 2 Coefficient: " + this.product2Coefficient);
        console.log();
        // Formula Weights (Molar Mass)
        // Reactants
        console.log("Reactant 1 Formula Weight: " + this.reactant1Weight);
        console.log("Reactant 2 Formula Weight: " + this.reactant2Weight);
        console.log();
        // Products
        console.log("Product 1 Formula Weight: " + this.product1Weight);
        console.log("Product 2 Formula Weight: " + this.product2Weight);
        console.log();
        // Mole Ratios of Products to Reactants
        console.log("Mole Ratio Product 1 to Reactant 1: " + this.moleRatioP1toR1);
        console.log("Mole Ratio Product 1 to Reactant 2: " + this.moleRatioP1toR2);
        console.log("Mole Ratio Product 2 to Reactant 1: " + this.moleRatioP2toR1);
        console.log("Mole Ratio Product 2 to Reactant 2: " + this.moleRatioP2toR2);
        console.log();
        // Reactant Mole Rations
        console.log("Mole Ratio Reactant 1 to Reactant 2: " + this.moleRatioR1toR2);
        console.log("Mole Ratio Reactant 2 to Reactant 1: " + this.moleRatioR2toR1);
        console.log();
        // Limiting Reactant Information
        console.log("Limiting Reactant: " + this.limitingReactant);
        console.log("Non Limiting Reactant: " + this.nonLimitingReactant);
        console.log();
        // Reaction Yeilds
        console.log("Yield of Product 1: " + this.yieldProduct1);
        console.log("Yield of Product 2: " + this.yieldProduct2);
        console.log();
        // Grams
        console.log("Grams Used of Non Limiting Reactant: " + this.gramsUsed);
        console.log("Grams Remaining of Non Limiting Reactant: " + this.gramsRemaining);
        console.log("Sum of All: " + this.sumOfAll);
        console.log();
        // Moles of each Reactant
        console.log("Moles of Reactant 1: " + this.molesReactant1);
        console.log("Moles of Reactant 2: " + this.molesReactant2);
        console.log();
        // Potential moles of Products from each reactant
        console.log("Moles of Product 1 from Reactant 1: " + this.molesP1FromR1);
        console.log("Moles of Product 1 from Reactant 2: " + this.molesP1FromR2);
        console.log("Moles of Product 2 from Reactant 1: " + this.molesP2FromR1);
        console.log("Moles of Product 2 from Reactant 2: " + this.molesP2FromR2);
        console.log();
        // Solubility Data input
        console.log("Cation 1 Solubility Data: " + this.cation1SolubilityData);
        console.log("Cation 2 Solubility Data: " + this.cation2SolubilityData);
        console.log();
        // Saved Solubility Output
        console.log("Reactant 1 Solubility: " + this.reactant1Solubility);
        console.log("Reactant 2 Solubility: " + this.reactant2Solubility);
        console.log("Product 1 Solubility: " + this.product1Solubility);
        console.log("Product 2 Solubility: " + this.product2Solubility);
        console.log();
    };
    return AnswerKey;
}());



/***/ }),

/***/ "./src/app/molarity/molarity.component.html":
/*!**************************************************!*\
  !*** ./src/app/molarity/molarity.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Chemistry Quiz Key Generator</h1>\r\n<h2 align=\"center\">Molarity Form</h2>\r\n\r\n<div>\r\n    Input a conjugate base-acid pair, volumes, and molarity values of each, then press \"Calculate\".\r\n</div>\r\n\r\n<div class=\"form-container\">\r\n  <form [formGroup]=\"formGroup\">\r\n    <select formControlName=\"base\">\r\n      <option *ngFor=\"let base of bases\" value=\"{{ base }}\">{{ base }}</option>\r\n    </select>\r\n    <input formControlName=\"baseVol\" placeholder=\"Volume of Base\">\r\n    <input formControlName=\"baseMol\" placeholder=\"Molarity of Base\">\r\n    <br><br>\r\n    <select formControlName=\"acid\">\r\n      <option *ngFor=\"let acid of acids\" value=\"{{ acid }}\">{{ acid }}</option>\r\n    </select>\r\n    <input formControlName=\"acidVol\" placeholder=\"Volume of Acid\">\r\n    <input formControlName=\"acidMol\" placeholder=\"Molarity of Acid\">\r\n    <br><br>\r\n    <button mat-raised-button (click)=\"calculate()\">Calculate</button>\r\n  </form>\r\n  <ng-container *ngIf=\"calculated\">\r\n    {{ limiter }} is the limiting reactant giving {{ mSalt }} moles, {{ gWater }} grams of water, and {{ gSalt }} grams of salt.\r\n  </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/molarity/molarity.component.scss":
/*!**************************************************!*\
  !*** ./src/app/molarity/molarity.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  justify-content: space-around; }\n\nbody {\n  padding-left: 25px; }\n\nh1 {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-bottom: 20px;\n  height: 50px;\n  font-size: 3em;\n  background-color: #1f881f;\n  border-style: solid;\n  border-color: black;\n  background-image: url('gluick.png');\n  background-repeat: no-repeat;\n  background-position: left; }\n\ndiv {\n  padding-left: 15px;\n  padding-right: 10px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-color: black;\n  border-style: solid;\n  background-color: #ecdfc6;\n  font-size: 125%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9sYXJpdHkvQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxHaXRIdWJcXENoZW1RdWl6R2VuL3NyY1xcYXBwXFxtb2xhcml0eVxcbW9sYXJpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFFcEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQ0FBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2xhcml0eS9tb2xhcml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuYm9keXtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG5oMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAxMzYsIDMxKVx0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2dsdWljay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxufVxyXG5cclxuZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIyMywgMTk4KTtcclxuICAgIGZvbnQtc2l6ZToxMjUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/molarity/molarity.component.ts":
/*!************************************************!*\
  !*** ./src/app/molarity/molarity.component.ts ***!
  \************************************************/
/*! exports provided: MolarityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MolarityComponent", function() { return MolarityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/elements.service */ "./src/app/services/elements.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MolarityComponent = /** @class */ (function () {
    function MolarityComponent(formBuilder, elements) {
        this.formBuilder = formBuilder;
        this.elements = elements;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            base: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            baseVol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            baseMol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            acid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            acidVol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            acidMol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.bases = [
            "Cl",
            "Br",
            "F",
            "I",
            "NO3",
            "ClO",
            "SO4",
            "PO4"
        ];
        this.acids = [
            'Na',
            'K',
            'Rb',
            'Li',
            'Mg',
            'Ca',
            'Al'
        ];
        this.calculated = false;
        this.createForm();
    }
    MolarityComponent.prototype.ngOnInit = function () {
        //WM don't think we need anything here, on the other document, this is pulling outside information to this page,
        //and all the data needed is self contained.
    };
    MolarityComponent.prototype.calculate = function () {
        var ConjugateBase = this.formGroup.get("base").value;
        var ConjugateAcid = this.formGroup.get("acid").value;
        var volR1 = this.formGroup.get("baseVol").value;
        var volR2 = this.formGroup.get("baseMol").value;
        var molR1 = this.formGroup.get("acidVol").value;
        var molR2 = this.formGroup.get("acidMol").value;
        //discover Acid
        var acid, base;
        switch (ConjugateBase) {
            case "Cl":
                acid = "HCl";
                break;
            case "Br":
                acid = "HBr";
                break;
            case "F":
                acid = "HF";
                break;
            case "I":
                acid = "HI";
                break;
            case "NO3":
                acid = "HNO3";
                break;
            case "ClO":
                acid = "HClO";
                break;
            case "SO4":
                acid = "H2SO4";
                break;
            case "PO4":
                acid = "H3PO4";
                break;
        }
        //debug, activate if needed
        /*
        console.log(ConjugateBase, acid);
         */
        //discover Base
        switch (ConjugateAcid) {
            case 'Na':
                base = 'NaOH';
                break;
            case 'K':
                base = 'KOH';
                break;
            case 'Rb':
                base = 'RbOH';
                break;
            case 'Li':
                base = 'LiOH';
                break;
            case 'Mg':
                base = 'Mg(OH)2';
                break;
            case 'Ca':
                base = 'Ca(OH)2';
                break;
            case 'Al':
                base = 'Al(OH)3';
                break;
        }
        //debug, activate if needed
        /*
        console.log(ConjugateAcid, base;
         */
        var water = [];
        switch (acid) {
            case "HCl":
                water.push(1);
                break;
            case "HBr":
                water.push(1);
                break;
            case "HF":
                water.push(1);
                break;
            case "HI":
                water.push(1);
                break;
            case "HNO3":
                water.push(1);
                break;
            case "HClO":
                water.push(1);
                break;
            case "H2SO4":
                water.push(2);
                break;
            case "H3PO4":
                water.push(3);
                break;
        }
        //debug, activate if needed
        /*
        console.log(acid, water[]);
         */
        switch (base) {
            case "NaOH":
                water.push(1);
                break;
            case "KOH":
                water.push(1);
                break;
            case "RbOH":
                water.push(1);
                break;
            case "LiOH":
                water.push(1);
                break;
            case "Mg(OH)2":
                water.push(2);
                break;
            case "Ca(OH)2":
                water.push(2);
                break;
            case "Al(OH)3":
                water.push(3);
                break;
        }
        //debug, activate if needed
        /*
        console.log(base, water[]);
         */
        var cation;
        if (base.indexOf("(OH)3") != -1) {
            cation = base.substring(0, base.indexOf("(OH)3"));
        }
        if (base.indexOf("(OH)2") != -1) {
            cation = base.substring(0, base.indexOf("(OH)2"));
        }
        if (base.indexOf("OH") != -1) {
            cation = base.substring(0, base.indexOf("OH"));
        }
        if (base.indexOf("OH") != -1) {
            cation = base.substring(0, base.indexOf("OH)"));
        }
        switch (acid) {
            case "HCl":
                water.push("Cl");
                break;
            case "HBr":
                water.push("Br");
                break;
            case "HF":
                water.push("F");
                break;
            case "HI":
                water.push("I");
                break;
            case "HNO3":
                water.push("NO3");
                break;
            case "HClO":
                water.push("ClO");
                break;
            case "H2SO4":
                water.push("SO4");
                break;
            case "H3PO4":
                water.push("PO4");
                break;
        }
        if (water[0] > water[1]) {
            var acidCoeff = 1;
            var baseCoeff = water[0] / water[1];
            var saltCoeff = acidCoeff;
            var waterCoeff = baseCoeff;
            water.push(acidCoeff);
            water.push(baseCoeff);
            water.push(saltCoeff);
            water.push(waterCoeff);
        }
        else if (water[0] < water[1]) {
            var acidCoeff = water[1] / water[0];
            var baseCoeff = 1;
            var saltCoeff = baseCoeff;
            var waterCoeff = acidCoeff;
            water.push(acidCoeff);
            water.push(baseCoeff);
            water.push(saltCoeff);
            water.push(waterCoeff);
        }
        else {
            water.push(water[0] / water[1]);
            water.push(1);
            water.push(1);
            water.push(1);
            water.push(1);
        }
        if (water[6] == 1.5) {
            water[6] = 4 * water[6];
            water[5] = water[5];
            water[4] = 2 * water[4];
            water[3] = 2 * water[3];
        }
        //output this properly later with proper formating
        //console.log("The balanced reactions is: \n\n {0}{1}  + {2}{3} --> {6}{4}{2}{5}{0} + {7}H2O" .format(water[3], Acid, water[4], Base, cation, water[2],water[5], water[6] )) # --> {}{}{}{}   +  H2O"
        molR1 = molR1 * volR1 / 1000;
        molR2 = molR2 * volR2 / 1000;
        var molSaltGivenR1 = molR1 * water[5] / water[3];
        var molWaterGivenR1 = molR1 * water[6] / water[3];
        var molSaltGivenR2 = molR2 * water[5] / water[4];
        var molWaterGivenR2 = molR2 * water[6] / water[4];
        var atomic_weights = {
            "He": 4.002, "Li": 6.94, "Be": 9.012,
            "B": 10.81, "C": 12.011, "N": 14.007, "O": 15.999, "F": 19.00,
            "Ne": 20.1797, "Na": 22.989, "Mg": 24.305, "Al": 26.981, "Si": 28.085,
            "P": 30.973, "S": 32.06, "Cl": 35.45, "Ar": 39.948, "K": 39.0983, "Ca": 40.078,
            "Sc": 44.955, "Ti": 47.867, "V": 50.941, "Cr": 51.996, "Mn": 54.938, "Fe": 55.845,
            "Co": 58.933, "Ni": 58.693, "Cu": 63.546, "Zn": 65.38, "Ga": 69.723, "Ge": 72.630,
            "As": 74.921, "Se": 78.971, "Br": 79.904, "Kr": 83.798, "Rb": 85.4678, "Sr": 87.62,
            "Y": 88.905, "Zr": 91.224, "Nb": 92.906, "Mo": 95.95, "Tc": 97, "Ru": 101.07, "Rh": 102.905,
            "Pd": 106.42, "Ag": 107.868, "Cd": 112.414, "In": 114.818, "Sn": 118.710, "Sb": 121.760, "Te": 127.760,
            "I": 126.904, "Xe": 131.293, "Cs": 132.905, "Ba": 137.327, "La": 138.905, "Ce": 140.116, "Pr": 140.907,
            "Nd": 144.242, "Pm": 145, "Sm": 150.36, "Eu": 151.964, "Gd": 157.25, "Tb": 158.925, "Dy": 162.500, "Ho": 164.930,
            "Er": 167.259, "Tm": 168.934, "Yb": 173.045, "Lu": 174.9668, "Hf": 178.49, "Ta": 180.947, "W": 183.84, "Re": 186.207,
            "Os": 190.23, "Ir": 192.21, "Pt": 195.084, "Au": 196.966, "Hg": 200.592, "Tl": 204.38, "Pb": 207.2, "Bi": 208.980,
            "Po": 209, "At": 210, "Rn": 222, "Fr": 223, "Ra": 222, "Ac": 227, "Th": 232.0377, "Pa": 231.035, "U": 238.028, "(NO3)": 62.00,
            "O2": 32.00, "(CO3)": 60.01, "(ClO3)": 83.447, "OH": 17.01, "(PO4)": 94.9714, "SO4": 96.06, "(Cr2O7)": 215.985, "(NH4)": 18.00
        };
        var formula_weight_acid = water[0] * 1.008 + atomic_weights[ConjugateBase];
        var formula_weight_base = water[1] * atomic_weights["OH"] + atomic_weights[ConjugateAcid];
        var formula_weight_water = 2 * 1.008 + 15.999;
        var formula_weight_salt = water[1] * atomic_weights[ConjugateBase] + water[0] * atomic_weights[ConjugateAcid];
        console.log(formula_weight_acid);
        console.log(formula_weight_base);
        console.log(formula_weight_water);
        console.log(formula_weight_salt);
        if (molSaltGivenR1 < molSaltGivenR2) {
            this.limiter = acid;
            this.mSalt = molSaltGivenR1;
            this.gSalt = molSaltGivenR2 * formula_weight_salt;
            //print("{} is the limiting reactant giving {} moles and {} grams of salt". format(Acid,mol_salt_given_R1, grams_of_salt))
        }
        else {
            this.limiter = base;
            this.mSalt = molSaltGivenR2;
            this.gSalt = molSaltGivenR2 * formula_weight_salt;
            //print("{} is the limiting reactant giving {} moles and {} grams of salt". format(Base,mol_salt_given_R2, grams_of_salt))
        }
        if (molWaterGivenR1 < molWaterGivenR1) {
            this.limiter = acid;
            this.mWater = molWaterGivenR1;
            this.gWater = molWaterGivenR1 * formula_weight_water;
            //print("{} is the limiting reactant giving {} moles and {} grams of water". format(Acid,mol_water_given_R1, grams_of_water))
        }
        else {
            this.limiter = base;
            this.mWater = molWaterGivenR2;
            this.gWater = molWaterGivenR2 * formula_weight_water;
            //print("{} is the limiting reactant giving {} moles and {} grams of water". format(Base,mol_water_given_R2, grams_of_water))
        }
        this.calculated = true;
    };
    MolarityComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            base: ["SO4"],
            baseVol: '',
            baseMol: '',
            acid: ["Na"],
            acidVol: '',
            acidMol: ''
        });
    };
    MolarityComponent.prototype.simpleTest1 = function () {
        if (ConjugateBase == "S04" && ConjugateAcid == "Na") {
            if (grams_of_salt != 0.1775475)
                console.log("Error, proper number not reached");
        }
    };
    MolarityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-molarity',
            template: __webpack_require__(/*! ./molarity.component.html */ "./src/app/molarity/molarity.component.html"),
            styles: [__webpack_require__(/*! ./molarity.component.scss */ "./src/app/molarity/molarity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_elements_service__WEBPACK_IMPORTED_MODULE_2__["ElementsService"]])
    ], MolarityComponent);
    return MolarityComponent;
}());



/***/ }),

/***/ "./src/app/services/elements.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/elements.service.ts ***!
  \**********************************************/
/*! exports provided: ElementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsService", function() { return ElementsService; });
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


var ElementsService = /** @class */ (function () {
    function ElementsService(http) {
        this.http = http;
    }
    ElementsService.prototype.getCations = function () {
        //  return this.http.get('http://localhost:4000/cations');
        return this.http.get('assets/UpdatedCationsTest.json');
    };
    ElementsService.prototype.getAnions = function () {
        //return this.http.get('http://localhost:4000/anions');
        return this.http.get('assets/UpdatedAnionsTest.json');
    };
    // This is to grab data that is in a test format so that we can verify different setups.
    ElementsService.prototype.getSolubilityTest = function () {
        //return this.http.get('http://localhost:4000/solubility1');
        return this.http.get('assets/SolubilityTest.json');
    };
    ElementsService.prototype.getSolubility = function () {
        //return this.http.get('http://localhost:4000/solubility');
        return this.http.get('assets/SolubilityTest2.json');
    };
    ElementsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ElementsService);
    return ElementsService;
}());



/***/ }),

/***/ "./src/app/stoichiometry-form/stoichiometry-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/stoichiometry-form/stoichiometry-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Chemistry Quiz Key Generator</h1>\r\n<h2 align=\"center\">Stoichiometry Form</h2>\r\n\r\n<div>\r\n  At the moment, this program calculates stoichiometry, to be used in limiting-reactant problems, involving monoatomic\r\n  and\r\n  polyatomic ions peforming replacement reactions. Input the data into the form and click Calculate to generate the\r\n  answer key.\r\n  (Combustion and gas-evolution reactions using metals and acids may be added in a future update.)\r\n</div>\r\n\r\n<div class=\"form-container\">\r\n  <form [formGroup]=\"formGroup\">\r\n    <select formControlName=\"cation1\">\r\n      <option *ngFor=\"let cation of cations\" value=\"{{ cation.symbol }}\">{{ cation.symbol }}</option>\r\n    </select>\r\n    <select formControlName=\"anion1\">\r\n      <option *ngFor=\"let anion of anions\" value=\"{{ anion.symbol }}\">{{ anion.symbol }}</option>\r\n    </select>\r\n    <input formControlName=\"grams1\" placeholder=\"Grams of First Compound\">\r\n    <br><br>\r\n    <select formControlName=\"cation2\">\r\n      <option *ngFor=\"let cation of cations\" value=\"{{ cation.symbol }}\">{{ cation.symbol }}</option>\r\n    </select>\r\n    <select formControlName=\"anion2\">\r\n      <option *ngFor=\"let anion of anions\" value=\"{{ anion.symbol }}\">{{ anion.symbol }}</option>\r\n    </select>\r\n    <input formControlName=\"grams2\" placeholder=\"Grams of Second Compound\">\r\n    <br><br>\r\n    <button mat-raised-button (click)=\"setAnswerKey()\">Calculate</button>\r\n  </form>\r\n  <app-answer-key [answer]=\"answer\"></app-answer-key>\r\n  \r\n  <ng-container *ngIf=\"answer.displayKey\"> \r\n    Calculate the limiting reactant, excess reactant and theoretical yield in grams when:\r\n    {{ answer.grams1 }} g of {{ answer.reactant1 }} reacts with {{ answer.grams2 }} g of {{ answer.reactant2 }}\r\n     according to the following equation: <ng-container *ngIf=\"answer.reactant1Coefficient > 1\">{{ answer.reactant1Coefficient }}</ng-container>{{ answer.reactant1 }}{{ answer.reactant1Solubility }} + <ng-container *ngIf=\"answer.reactant2Coefficient > 1\">{{ answer.reactant2Coefficient }}</ng-container>{{ answer.reactant2 }}{{ answer.reactant2Solubility }} => <ng-container *ngIf=\"answer.product1Coefficient > 1\">{{ answer.product1Coefficient }}</ng-container>{{ answer.product1 }}{{ answer.product1Solubility }} + <ng-container *ngIf=\"answer.product2Coefficient > 1\">{{ answer.product2Coefficient }}</ng-container>{{ answer.product2 }}{{ answer.product2Solubility }}</ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/stoichiometry-form/stoichiometry-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/stoichiometry-form/stoichiometry-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  justify-content: space-around; }\n\nbody {\n  padding-left: 25px; }\n\nh1 {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-bottom: 20px;\n  height: 50px;\n  font-size: 3em;\n  background-color: #1f881f;\n  border-style: solid;\n  border-color: black;\n  background-image: url('gluick.png');\n  background-repeat: no-repeat;\n  background-position: left; }\n\ndiv {\n  padding-left: 15px;\n  padding-right: 10px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  border-color: black;\n  border-style: solid;\n  background-color: #ecdfc6;\n  font-size: 125%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvaWNoaW9tZXRyeS1mb3JtL0M6XFxVc2Vyc1xcTWF0dGhld1xcRGVza3RvcFxcR2l0SHViXFxDaGVtUXVpekdlbi9zcmNcXGFwcFxcc3RvaWNoaW9tZXRyeS1mb3JtXFxzdG9pY2hpb21ldHJ5LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFFcEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQ0FBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdG9pY2hpb21ldHJ5LWZvcm0vc3RvaWNoaW9tZXRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5ib2R5e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcbmgxIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDEzNiwgMzEpXHQ7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvZ2x1aWNrLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjIzLCAxOTgpO1xyXG4gICAgZm9udC1zaXplOjEyNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/stoichiometry-form/stoichiometry-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/stoichiometry-form/stoichiometry-form.component.ts ***!
  \********************************************************************/
/*! exports provided: StoichiometryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoichiometryFormComponent", function() { return StoichiometryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_answer_key_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/answer-key.model */ "./src/app/models/answer-key.model.ts");
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/elements.service */ "./src/app/services/elements.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { timingSafeEqual } from 'crypto';
var StoichiometryFormComponent = /** @class */ (function () {
    function StoichiometryFormComponent(formBuilder, elements) {
        this.formBuilder = formBuilder;
        this.elements = elements;
        // @Input needed so answer can be seen by both components
        // here, we create the new answer key object in order for it to be filled.
        this.answer = new _models_answer_key_model__WEBPACK_IMPORTED_MODULE_2__["AnswerKey"]();
        // Declares form group attached to form
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cation1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            anion1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            grams1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cation2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            anion2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            grams2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.anions = [];
        this.cations = [];
        this.solubilityTest = [];
        this.createForm();
    }
    StoichiometryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Tells the elements object to retrieve the anion data and save it to this.cations
        this.elements.getAnions().subscribe(function (anions) {
            _this.anions = anions;
        });
        // Tells the elements object to retrieve the cation data and save it to this.cations
        this.elements.getCations().subscribe(function (cations) {
            _this.cations = cations;
        });
        // Tells the elements object to retrieve the solubility test data and save it to this.solubilityTest
        this.elements.getSolubilityTest().subscribe(function (solubilityTest) {
            _this.solubilityTest = solubilityTest;
        });
    };
    // Gets the form input and sets the answer key properties
    StoichiometryFormComponent.prototype.setAnswerKey = function () {
        // Gets symbol, weight and charge of anion1
        this.answer.anion1 = this.formGroup.get('anion1').value;
        for (var i = 0; i < this.anions.length; i++) {
            if (this.answer.anion1 === this.anions[i].symbol) {
                this.answer.anion1Weight = this.anions[i].mass;
                this.answer.anion1Charge = this.anions[i].charge;
                this.answer.anion1Polyatomic = this.anions[i].polyatomic;
            }
        }
        // Gets symbol, weight and charge of cation1
        this.answer.cation1 = this.formGroup.get('cation1').value;
        for (var i = 0; i < this.cations.length; i++) {
            if (this.answer.cation1 === this.cations[i].symbol) {
                this.answer.cation1Weight = this.cations[i].mass;
                this.answer.cation1Charge = this.cations[i].charge;
                this.answer.cation1Polyatomic = this.cations[i].polyatomic;
            }
        }
        this.answer.grams1 = this.formGroup.get('grams1').value;
        // Gets symbol, weight and charge of anion2
        this.answer.anion2 = this.formGroup.get('anion2').value;
        for (var i = 0; i < this.anions.length; i++) {
            if (this.answer.anion2 === this.anions[i].symbol) {
                this.answer.anion2Weight = this.anions[i].mass;
                this.answer.anion2Charge = this.anions[i].charge;
                this.answer.anion2Polyatomic = this.anions[i].polyatomic;
            }
        }
        // Gets symbol, weight and charge of cation2
        this.answer.cation2 = this.formGroup.get('cation2').value;
        for (var i = 0; i < this.cations.length; i++) {
            if (this.answer.cation2 === this.cations[i].symbol) {
                this.answer.cation2Weight = this.cations[i].mass;
                this.answer.cation2Charge = this.cations[i].charge;
                this.answer.cation2Polyatomic = this.cations[i].polyatomic;
            }
        }
        this.answer.grams2 = this.formGroup.get('grams2').value;
        // Saves the cation1 solubility if it can find it ( sets find solubility to false otherwise, defaulting to no display )
        if (this.solubilityTest[this.answer.cation1 + ''] === null) {
            this.answer.findSolubility = false;
        }
        else {
            // Saves the data
            this.answer.cation1SolubilityData = this.solubilityTest[this.answer.cation1 + ''];
            // Saves the cation2 solubility data if it can find it, sets the findSolubility variable to false otherwise, not loading solubility data then.
            if (this.solubilityTest[this.answer.cation2 + ''] === null) {
                this.answer.findSolubility = false;
            }
            else {
                // Saves the data
                this.answer.cation2SolubilityData = this.solubilityTest[this.answer.cation2 + ''];
            }
        }
        /* Debug, add/remove a space in the * / here to enable/disable the code -> * /
        console.log("Solubility Test: " + this.solubilityTest);
        console.log("Beginning Solubility Generation");
        /* */
        // Loads the solubility
        this.answer.solubilityGeneration();
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
        console.log("Finished gathering data from form");
        /* */
        // calculate the subscripts
        this.answer.determineSubscript();
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
        console.log("Finished determineSubscript()");
        /* */
        // calculate the coefficients
        this.answer.balanceEquation();
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
        console.log("Finished balanceEquation()");
        /* */
        // put together the molecules (using subscripts)
        this.answer.setMolecules();
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
        console.log("Finished setMolecules()");
        /* */
        // calculate the formula weights (molar masses)
        this.answer.calculateFormulaWeight();
        // calculate the molar ratios of everything
        this.answer.calculateMoleRatios();
        // calculates actual moles of everything
        this.answer.calculateMoles();
        // determines the limiting reactant
        this.answer.determineLimitingReactant();
        // Prints all variables stored in answer into the console. DEBUG COMMAND, PLEASE COMMENT OUT IF NOT IN USE
        // this.answer.printVariablesDEBUG();
        // display the answer key
        this.answer.displayKey = true;
        // TODO: add functionality to update HTML file here.
        // this.answer.stoichiometryGeneration();
        // this.answer.molecularNotationGeneration();
        /* Debug, add/remove the * / here to enable/disable the code -> * /
        console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
        console.log("Cations: " + this.cations);
        console.log("Anions: " + this.anions);
        console.log("Cation 1: " + this.answer.cation1);
        console.log("Anion 1: " + this.answer.anion1);
        console.log("Grams 1: " + this.answer.grams1);
        console.log("Cation 2: " + this.answer.cation2);
        console.log("Anion 2: " + this.answer.anion2);
        console.log("Grams 2: " + this.answer.grams2);
        /**/
    };
    // Creates the form and sets default prioperties
    StoichiometryFormComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            cation1: ['Li'],
            anion1: ['Br'],
            grams1: '',
            cation2: ['Na'],
            anion2: ['I'],
            grams2: ''
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_answer_key_model__WEBPACK_IMPORTED_MODULE_2__["AnswerKey"])
    ], StoichiometryFormComponent.prototype, "answer", void 0);
    StoichiometryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stoichiometry-form',
            template: __webpack_require__(/*! ./stoichiometry-form.component.html */ "./src/app/stoichiometry-form/stoichiometry-form.component.html"),
            styles: [__webpack_require__(/*! ./stoichiometry-form.component.scss */ "./src/app/stoichiometry-form/stoichiometry-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_elements_service__WEBPACK_IMPORTED_MODULE_3__["ElementsService"]])
    ], StoichiometryFormComponent);
    return StoichiometryFormComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Matthew\Desktop\GitHub\ChemQuizGen\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map