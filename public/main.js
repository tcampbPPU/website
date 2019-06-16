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
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_listen_listen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/listen/listen.component */ "./src/app/components/listen/listen.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'education', component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'experience', component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'listen', component: _components_listen_listen_component__WEBPACK_IMPORTED_MODULE_11__["ListenComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_15__["RoleGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

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
        this.title = 'angular-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_listen_listen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/listen/listen.component */ "./src/app/components/listen/listen.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_speech_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/speech.service */ "./src/app/services/speech.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_14__["EducationComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"],
                _components_listen_listen_component__WEBPACK_IMPORTED_MODULE_17__["ListenComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_21__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"],
                _guards_role_guard__WEBPACK_IMPORTED_MODULE_27__["RoleGuard"],
                _services_speech_service__WEBPACK_IMPORTED_MODULE_23__["SpeechService"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_24__["LocalStorageService"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_25__["MessageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messages\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">First Name</th>\n        <th scope=\"col\">Last Name</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Created At</th>\n        <th scope=\"col\">Message</th>\n        <th scope='col'>Mark as Read</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let message of messages\">\n        <td>{{message.id}}</td>\n        <td>{{message.first_name}}</td>\n        <td>{{message.last_name}}</td>\n        <td>{{message.email}}</td>\n        <td>{{message.created_at}}</td>\n        <td>{{message.message}}</td>\n        <td><button (click)=\"markedRead(message.id)\" type=\"button\" class=\"btn btn-danger btn-sm\" name=\"button\">Read</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

 // ViewChild



// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(flashMessage, messageService, router) {
        this.flashMessage = flashMessage;
        this.messageService = messageService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages().subscribe(function (data) {
            _this.messages = data.messages;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AdminComponent.prototype.markedRead = function (id) {
        // remove from UI
        this.messages = this.messages.filter(function (msg) { return msg.id !== id; });
        // Update DB mark as read
        this.messageService.markedAsRead(id).subscribe();
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header text-center\">Leave me a message</h2>\n  <form (submit)=\"onContactSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"first_name\">First Name</label>\n          <input type=\"text\" [(ngModel)]=\"user.first_name\" name=\"first_name\" class=\"form-control\" [value]=\"user.first_name\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"last_name\">Last Name</label>\n          <input type=\"text\" [(ngModel)]=\"user.last_name\" name=\"last_name\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"message\">Message</label>\n          <textarea id=\"form_message\" [(ngModel)]=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Message for me\" rows=\"4\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Send message\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ContactComponent = /** @class */ (function () {
    function ContactComponent(validateService, flashMessage, messageService, localStorageService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.messageService = messageService;
        this.localStorageService = localStorageService;
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.user = this.localStorageService.get('user');
    };
    ContactComponent.prototype.onContactSubmit = function () {
        var _this = this;
        var form = {
            user_id: this.user.user_id,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            message: this.message
        };
        // Validate Email
        if (!this.validateService.validateEmail(form.email)) {
            this.flashMessage.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateContactMessage(form)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Send form to Message service
        this.messageService.leaveMessage(form).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/contact']);
            }
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header text-center\">Welcome {{user.first_name}}</h2>\n  <p class=\"text-center\">Thank you for successfully creating an account. Now you can explore my information and learn more about me!</p>\n  <div class=\"jumbotron text-center\">\n    <a class=\"btn btn-info\" [routerLink]=\"['/education']\">Education</a>\n    <a class=\"btn btn-info\" [routerLink]=\"['/experience']\">Experience</a>\n    <a class=\"btn btn-info\" [routerLink]=\"['/projects']\">Projects</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1.5rem;\n}\np {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbnAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/education/education.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h2>Point Park University</h2>\n      <p class=\"lead\">Bachelor's of Science in Information Technology</p>\n      <p class=\"lead\">Attended from 08/2015 - 04/2019</p>\n      <p class=\"lead\">Overal GPA: 3.1</p>\n      <p class=\"lead\">Curriculum GPA: 3.8</p>\n    </div>\n    <div class=\"col-md\">\n      <ul class=\"list-group\">Courses Studied:\n        <li class=\"list-group-item border-0\">Databases</li>\n        <li class=\"list-group-item border-0\">Networking and Security</li>\n        <li class=\"list-group-item border-0\">Intro to Programming</li>\n        <li class=\"list-group-item border-0\">Business Analytics</li>\n        <li class=\"list-group-item border-0\">Data Structures</li>\n        <li class=\"list-group-item border-0\">Advanced Programming</li>\n        <li class=\"list-group-item border-0\">Digital Security</li>\n        <li class=\"list-group-item border-0\">Sever Management</li>\n        <li class=\"list-group-item border-0\">Web Development Applications</li>\n        <li class=\"list-group-item border-0\">Advanced Networking</li>\n        <li class=\"list-group-item border-0\">Mobile Application Development</li>\n        <li class=\"list-group-item border-0\">Senior Project</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/experience/experience.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h3>Tutor</h3>\n      <p class=\"lead\">Point Park University</p>\n      <p>From 10/2018 - 05/2019</p>\n      <!-- ... -->\n      <!-- Add Job Descriptions -->\n    </div>\n    <div class=\"col-sm\">\n      <h3>Business Analyst</h3>\n      <p class=\"lead\">Reading Hospital Tower Health</p>\n      <p>From 05/2018 - 08/2018</p>\n      <!-- ... -->\n      <!-- Add Job Descriptions -->\n    </div>\n    <div class=\"col-sm\">\n      <h3>Jr. Web Developer</h3>\n      <p class=\"lead\"> Target Freight Management</p>\n      <p>From 05/2017 - 08/2017</p>\n      <!-- ... -->\n      <!-- Add Job Descriptions -->      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  color: black;\n  text-align: center;\n}\n\n.fa {\n  padding: 20px;\n  margin: 5px 2px;\n}\n\n.fa:hover{\n  opacity: 0.75;\n}\n\n.fa-linkedin {\n  background: #007bb5;\n  color: white;\n}\n\n.fa-github {\n  background: #464b51;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA1cHggMnB4O1xufVxuXG4uZmE6aG92ZXJ7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5mYS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWdpdGh1YiB7XG4gIGJhY2tncm91bmQ6ICM0NjRiNTE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <p class=\"text-muted\">Click an Icon below to follow me!</p>\n  <a href=\"https://github.com/tcampbPPU\" target=\"_blank\" class=\"fa fa-github\"></a>\n  <a href=\"https://www.linkedin.com/in/tanner-campbell-773a90103\" target=\"_blank\" class=\"fa fa-linkedin\"></a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Welcome To My Website!</h1>\n  <p class=\"lead\">In order to view my personal info Log in or Register an account.</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Education</h3>\n    <p>Learn more about my education and background.</p>\n  </div>\n\n  <div class=\"col-md-4\">\n    <h3>Work Experience</h3>\n    <p>View my work and intership experiences.</p>\n  </div>\n\n  <div class=\"col-md-4\">\n    <h3>Personal Projects</h3>\n    <p>Applications I have created. This highlights programming languages I am proficient in.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/listen/listen.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/listen/listen.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGVuL2xpc3Rlbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/listen/listen.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/listen/listen.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listen works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/listen/listen.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/listen/listen.component.ts ***!
  \*******************************************************/
/*! exports provided: ListenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenComponent", function() { return ListenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListenComponent = /** @class */ (function () {
    function ListenComponent() {
    }
    ListenComponent.prototype.ngOnInit = function () {
    };
    ListenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listen',
            template: __webpack_require__(/*! ./listen.component.html */ "./src/app/components/listen/listen.component.html"),
            styles: [__webpack_require__(/*! ./listen.component.css */ "./src/app/components/listen/listen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListenComponent);
    return ListenComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 1.5rem;\n}\n\ninput {\n  max-width: 90%;\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // Try to log in the user
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                // AuthService to store user's data in local storage
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in!', {
                    cssClass: 'alert-success',
                    timeout: 1000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-default\">\n  <a class=\"navbar-brand\">Tanner Campbell's Website</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/education']\">Education</a></li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/experience']\">Experiences</a></li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/projects']\">Projects</a></li>\n    </ul>\n\n    <ul class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\n      <!-- <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/listen']\">Listen</a></li> -->\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a></li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a></li>\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 1000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-top: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <p>This is the information you registered your account with.</p>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">First Name: {{user.first_name}}</li>\n    <li class=\"list-group-item\">Last Name: {{user.last_name}}</li>\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { FlashMessagesService } from 'angular2-flash-messages';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router
    // private flashMessage: FlashMessagesService
    ) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            // private flashMessage: FlashMessagesService
        ])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <p class=\"text-align\">As of now go to my GitHub to view my projects. I am transitioning all my projects here shortly.</p>\n  <button class=\"btn btn-primary\" name=\"button\" onclick=\"window.location.href='https://github.com/tcampbPPU'\">GitHub</button>\n  <!-- ... -->\n  <!-- Will add the descriptions for each project I've worked on. -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 1.5rem;\n}\n\ninput {\n  max-width: 90%;\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"first_name\">First Name</label>\n    <input type=\"text\" [(ngModel)]=\"first_name\" name=\"first_name\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"last_name\">Last Name</label>\n    <input type=\"text\" [(ngModel)]=\"last_name\" name=\"last_name\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessage.show('You are now registered, now you can log in.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var RoleGuard = /** @class */ (function () {
    function RoleGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn() || !this.authService.isAdmin()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    RoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post('http://localhost:3000/users/register', user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post('http://localhost:3000/users/authenticate', user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get('http://localhost:3000/users/profile', headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isAdmin = function () {
        return JSON.parse(localStorage.getItem('user')).is_admin == 1 ? true : false;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        console.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            console.error("Error getting data from localStorage. " + e);
            return null;
        }
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


// import { Observable } from 'rxjs';


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var MessageService = /** @class */ (function () {
    // id: ID;
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.leaveMessage = function (form) {
        return this.http.post('http://localhost:3000/users/contact', form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/users/messages', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    MessageService.prototype.markedAsRead = function (id) {
        var data = {
            id: id
        };
        return this.http.post('http://localhost:3000/users/read', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/speech.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/speech.service.ts ***!
  \********************************************/
/*! exports provided: SpeechService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechService", function() { return SpeechService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpeechService = /** @class */ (function () {
    function SpeechService() {
    }
    SpeechService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SpeechService);
    return SpeechService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // To make user completes the form fully
    ValidateService.prototype.validateRegister = function (user) {
        if (user.first_name == undefined || user.last_name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateContactMessage = function (form) {
        if (form.first_name == undefined || form.last_name == undefined || form.email == undefined || form.message == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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

module.exports = __webpack_require__(/*! /home/tanner/Documents/projects/my_app/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map