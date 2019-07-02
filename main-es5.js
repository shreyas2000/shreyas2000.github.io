(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #e3f2fd;\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"Login\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"Register\">Register</a>\n      </li>\n      \n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<app-newcomponent>\n  <h1>This is heading</h1>\n</app-newcomponent>\n<app-newcomponent>\n  <ng-container class=\"heading\">This is heading</ng-container>\n  <ng-container class=\"body\">This is body</ng-container>\n</app-newcomponent>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container bg-color\" style=\"width: 18rem;\">\n    Name:     <input class=\"form-control\" type=\"text\" #name><br>\n    E-mail:   <input class=\"form-control\" type=\"text\" #email><br>\n    Password: <input class=\"form-control\" type=\"password\" #password>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login(name.vlaue,email.value,password.value)\">LOG IN</button>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/newcomponent/newcomponent.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newcomponent/newcomponent.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ng-content></ng-content> -->\n<div class=\"card\">\n    <div class=\"card-header\">\n        <ng-content select=\".heading\"></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container bg-color\" style=\"width: 18rem;\">\n  \n        <img src=\"../download.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Profile</h5>\n          \n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Name:{{uname}}</li>\n          <li class=\"list-group-item\">E-mail:{{uemail}}</li>\n          <li class=\"list-group-item\">Password:{{upass}}</li>\n          <li class=\"list-group-item\">City:{{ucity}}</li>\n          <li class=\"list-group-item\">State:{{ustate}}</li>\n        </ul>\n       \n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container bg-color\" >\n      <h3 >Register </h3>\n      <p class=\"lead  form-group\">\n\n          Name:     <input class=\"form-control\" type=\"text\" #name><br>\n          E-mail:   <input class=\"form-control\" type=\"text\" #email><br>\n          Password: <input class=\"form-control\" type=\"password\" #password><br>\n          City:     <input class=\"form-control\" type=\"text\" #city><br>\n          State:    <input class=\"form-control\" type=\"text\" #state><br>\n          \n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"profile(name.value,email.value,password.value,city.value,state.value)\">Register</button>\n      </p>\n    </div>\n    <router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






var routes = [
    { path: "Register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: "Profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: "Login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _newcomponent_newcomponent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newcomponent/newcomponent.component */ "./src/app/newcomponent/newcomponent.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _newcomponent_newcomponent_component__WEBPACK_IMPORTED_MODULE_9__["NewcomponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.setdata = function (a, b, c, d, e) {
        this.uname = a;
        this.uemail = b;
        this.upass = c;
        this.ucity = d;
        this.ustate = e;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color{\r\n    background-color: rgb(225, 233, 233);\r\n     \r\n}\r\n.container{\r\n    width: 400px;\r\n    margin:10px auto;\r\n    padding: 10px;\r\n    height : auto;\r\n}\r\n.btn{\r\n    margin: 5px auto;\r\n    width:150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjMzLCAyMzMpO1xyXG4gICAgIFxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodCA6IGF1dG87XHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB3aWR0aDoxNTBweDtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dt) {
        this.dt = dt;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/newcomponent/newcomponent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/newcomponent/newcomponent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2NvbXBvbmVudC9uZXdjb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/newcomponent/newcomponent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/newcomponent/newcomponent.component.ts ***!
  \********************************************************/
/*! exports provided: NewcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcomponentComponent", function() { return NewcomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewcomponentComponent = /** @class */ (function () {
    function NewcomponentComponent() {
    }
    NewcomponentComponent.prototype.ngOnInit = function () {
    };
    NewcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newcomponent',
            template: __webpack_require__(/*! raw-loader!./newcomponent.component.html */ "./node_modules/raw-loader/index.js!./src/app/newcomponent/newcomponent.component.html"),
            styles: [__webpack_require__(/*! ./newcomponent.component.css */ "./src/app/newcomponent/newcomponent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewcomponentComponent);
    return NewcomponentComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color{\r\n    background-color: rgb(225, 233, 233);\r\n     \r\n}\r\n.container{\r\n    width: 400px;\r\n    margin:10px auto;\r\n    height : auto;\r\n}\r\nul{\r\n    margin: 10px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7O0FBRXhDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjMzLCAyMzMpO1xyXG4gICAgIFxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0IDogYXV0bztcclxufVxyXG51bHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dt) {
        this.dt = dt;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.uname = this.dt.uname;
        this.uemail = this.dt.uemail;
        this.upass = this.dt.upass;
        this.ucity = this.dt.ucity;
        this.ustate = this.dt.ustate;
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color{\r\n    background-color: rgb(225, 233, 233);\r\n     \r\n}\r\n.container{\r\n    width: 400px;\r\n    margin:10px auto;\r\n    height : auto;\r\n}\r\n.btn{\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIzMywgMjMzKTtcclxuICAgICBcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOjEwcHggYXV0bztcclxuICAgIGhlaWdodCA6IGF1dG87XHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dt, router) {
        this.dt = dt;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.profile = function (a, b, c, d, e) {
        this.dt.setdata(a, b, c, d, e);
        this.router.navigateByUrl("/Profile");
        //  window.location.href="Profile";
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\project\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map