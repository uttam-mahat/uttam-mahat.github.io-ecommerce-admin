(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./brief-introduction/brief-introduction.module": [
		"./src/app/brief-introduction/brief-introduction.module.ts",
		"brief-introduction-brief-introduction-module"
	],
	"./incident-facts-detial/incident-facts-detial.module": [
		"./src/app/incident-facts-detial/incident-facts-detial.module.ts",
		"incident-facts-detial-incident-facts-detial-module"
	],
	"./news-notice/news-notice.module": [
		"./src/app/news-notice/news-notice.module.ts",
		"news-notice-news-notice-module"
	],
	"./reports/reports.module": [
		"./src/app/reports/reports.module.ts",
		"reports-reports-module"
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
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_helpers/loader.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_helpers/loader.interceptor.ts ***!
  \************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(ngxService) {
        this.ngxService = ngxService;
    }
    LoaderInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.ngxService.start();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (evt) {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.ngxService.stop();
                return request;
            }
        }));
    };
    LoaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/language.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/language.service.ts ***!
  \***********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/_services/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageService = /** @class */ (function () {
    // private subject = new Subject<any>();
    function LanguageService(http, localStorageService) {
        var _this = this;
        this.http = http;
        this.localStorageService = localStorageService;
        this.onLanguageChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onLanguageChange.subscribe(function (value) {
            _this.languageValue = value;
        });
        //Set english language if languaue is empty or undefined
        if (!(!!this.localStorageService.getLanguage())) {
            this.localStorageService.setLanguage('en');
        }
    }
    LanguageService.prototype.setLanguageValue = function (lan) {
        this.languageValue = lan;
        this.localStorageService.setLanguage(this.languageValue);
        this.onLanguageChange.next(this.languageValue);
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/_services/localstorage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/localstorage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
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


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(localStorage) {
        this.localStorage = localStorage;
        this.language = 'language';
    }
    LocalStorageService.prototype.getLanguage = function () {
        var lan;
        lan = this.localStorage.get(this.language);
        return lan;
    };
    LocalStorageService.prototype.setLanguage = function (language) {
        this.localStorage.set(this.language, language);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [Object])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-ui-loader></ngx-ui-loader>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'khumbu';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _helpers_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/loader.interceptor */ "./src/app/_helpers/loader.interceptor.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var ngx_multi_line_ellipsis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-multi-line-ellipsis */ "./node_modules/ngx-multi-line-ellipsis/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organization-structure/organization-structure.component */ "./src/app/organization-structure/organization-structure.component.ts");
/* harmony import */ var _committees_committees_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./committees/committees.component */ "./src/app/committees/committees.component.ts");
/* harmony import */ var _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./central-act-law-and-directives/act-law.component */ "./src/app/central-act-law-and-directives/act-law.component.ts");
/* harmony import */ var _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./local-act-law-and-directives/local-act-law-and-directives.component */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts");
/* harmony import */ var _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trekking/trekking.component */ "./src/app/trekking/trekking.component.ts");
/* harmony import */ var _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./password-and-visa/password-and-visa.component */ "./src/app/password-and-visa/password-and-visa.component.ts");
/* harmony import */ var _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./travel-and-tourism-information/travel-and-tourism-information.component */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts");
/* harmony import */ var _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mountain/mountain.component */ "./src/app/mountain/mountain.component.ts");
/* harmony import */ var _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./egov-services/egov-service.component */ "./src/app/egov-services/egov-service.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _travel_and_tourism_travel_and_tourism_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./travel-and-tourism/travel-and-tourism.component */ "./src/app/travel-and-tourism/travel-and-tourism.component.ts");
/* harmony import */ var _mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mountain-list/mountain-list.component */ "./src/app/mountain-list/mountain-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_12__["OrganizationStructureComponent"],
                _committees_committees_component__WEBPACK_IMPORTED_MODULE_13__["CommitteesComponent"],
                _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_14__["ActLawComponent"],
                _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_15__["LocalActLawAndDirectivesComponent"],
                _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_16__["TrekkingComponent"],
                _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_17__["PasswordAndVisaComponent"],
                _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_18__["TravelAndTourismInformationComponent"],
                _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_19__["MountainComponent"],
                _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_20__["EgovServiceComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_22__["MediaComponent"],
                _travel_and_tourism_travel_and_tourism_component__WEBPACK_IMPORTED_MODULE_25__["TravelAndTourismComponent"],
                _mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_26__["MountainListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderModule"],
                ngx_multi_line_ellipsis__WEBPACK_IMPORTED_MODULE_7__["NgxMultiLineEllipsisModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _helpers_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoaderInterceptor"], multi: true },
                { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_24__["RECAPTCHA_V3_SITE_KEY"], useValue: '6LddHaYZAAAAAAvDJgO8qBHfefPkTPxEwVm0qhTb' },
                _services_localstorage_service__WEBPACK_IMPORTED_MODULE_23__["LocalStorageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-structure/organization-structure.component */ "./src/app/organization-structure/organization-structure.component.ts");
/* harmony import */ var _committees_committees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./committees/committees.component */ "./src/app/committees/committees.component.ts");
/* harmony import */ var _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./central-act-law-and-directives/act-law.component */ "./src/app/central-act-law-and-directives/act-law.component.ts");
/* harmony import */ var _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-act-law-and-directives/local-act-law-and-directives.component */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts");
/* harmony import */ var _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trekking/trekking.component */ "./src/app/trekking/trekking.component.ts");
/* harmony import */ var _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-and-visa/password-and-visa.component */ "./src/app/password-and-visa/password-and-visa.component.ts");
/* harmony import */ var _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-and-tourism-information/travel-and-tourism-information.component */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts");
/* harmony import */ var _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mountain/mountain.component */ "./src/app/mountain/mountain.component.ts");
/* harmony import */ var _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./egov-services/egov-service.component */ "./src/app/egov-services/egov-service.component.ts");
/* harmony import */ var _travel_and_tourism_travel_and_tourism_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./travel-and-tourism/travel-and-tourism.component */ "./src/app/travel-and-tourism/travel-and-tourism.component.ts");
/* harmony import */ var _mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mountain-list/mountain-list.component */ "./src/app/mountain-list/mountain-list.component.ts");













var router = [
    { path: 'organization-structure', component: _organization_structure_organization_structure_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationStructureComponent"] },
    { path: 'committees', component: _committees_committees_component__WEBPACK_IMPORTED_MODULE_3__["CommitteesComponent"] },
    { path: 'act-law/:id', component: _central_act_law_and_directives_act_law_component__WEBPACK_IMPORTED_MODULE_4__["ActLawComponent"] },
    { path: 'local-act-law-and-directives', component: _local_act_law_and_directives_local_act_law_and_directives_component__WEBPACK_IMPORTED_MODULE_5__["LocalActLawAndDirectivesComponent"] },
    { path: 'trekking', component: _trekking_trekking_component__WEBPACK_IMPORTED_MODULE_6__["TrekkingComponent"] },
    { path: 'password-and-visa', component: _password_and_visa_password_and_visa_component__WEBPACK_IMPORTED_MODULE_7__["PasswordAndVisaComponent"] },
    { path: 'travel-and-tourism-information/:id', component: _travel_and_tourism_information_travel_and_tourism_information_component__WEBPACK_IMPORTED_MODULE_8__["TravelAndTourismInformationComponent"] },
    { path: 'mountain/:id', component: _mountain_mountain_component__WEBPACK_IMPORTED_MODULE_9__["MountainComponent"] },
    { path: 'egov-service/:id', component: _egov_services_egov_service_component__WEBPACK_IMPORTED_MODULE_10__["EgovServiceComponent"] },
    { path: 'travel-and-tourism', component: _travel_and_tourism_travel_and_tourism_component__WEBPACK_IMPORTED_MODULE_11__["TravelAndTourismComponent"] },
    { path: 'mountain-list', component: _mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_12__["MountainListComponent"] },
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"],
        pathMatch: 'full'
    },
    {
        path: 'news-notice',
        loadChildren: './news-notice/news-notice.module#NewsNoticeModule',
    },
    {
        path: 'introduction',
        loadChildren: './brief-introduction/brief-introduction.module#BriefIntroductionModule',
    },
    {
        path: 'incident-facts-detail',
        loadChildren: './incident-facts-detial/incident-facts-detial.module#IncidentFactsDetialModule',
    },
    {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule',
    },
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router, { useHash: true });


/***/ }),

/***/ "./src/app/central-act-law-and-directives/act-law.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/act-law.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Central Act Law and Directives Section Start -->\n\n<section class=\"act-law-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngIf=\"lanValue == 'en'\">\n              Law and Directives\n            </div>\n\n            <div class=\"title\" *ngIf=\"lanValue == 'np'\">\n              कानुन तथा नियमावली\n            </div>\n\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-12 col-md-12\" *ngFor=\"let data of actLaw\">\n                <div class=\"blurb-title\" *ngIf=\"lanValue == 'en'\">\n                  {{ data.titleInEnglish }}\n                </div>\n                <div class=\"blurb-title\"\n                  *ngIf=\"lanValue == 'np' && data.titleInNepali != 'null' && data.titleInNepali != ''\">\n                  {{ data.titleInNepali }}\n                </div>\n                <div class=\"blurb-title\"\n                  *ngIf=\"lanValue == 'np' && (data.titleInNepali == 'null' || data.titleInNepali == '')\">\n                  -\n                </div>\n                <div class=\"blurb-detail\">\n                  <p *ngIf=\"lanValue == 'en'\" [innerHTML]=\"data.descriptionInEnglish\"></p>\n                  <p *ngIf=\"lanValue == 'np' && data.descriptionInNepali != 'null' && data.descriptionInNepali != ''\"\n                    [innerHTML]=\"data.descriptionInNepali\">\n                  </p>\n                  <p *ngIf=\"lanValue == 'np' && (data.descriptionInNepali == 'null' || data.descriptionInNepali == '')\">\n                    -\n                  </p>\n\n                  <p *ngIf=\"lanValue == 'en'\"> Link:\n                    <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\"> {{ data.titleInEnglish }}\n                    </a>\n                  </p>\n\n                  <p *ngIf=\"lanValue == 'np' && data.titleInNepali != 'null' && data.titleInNepali != ''\"> Link:\n                    <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\"> {{ data.titleInNepali }}\n                    </a>\n                  </p>\n\n                  <p *ngIf=\"lanValue == 'np' && (data.titleInNepali == 'null' || data.titleInNepali == '')\"> Link:\n                    <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\"> -\n                    </a>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Central Act Law and Directives Section Closed -->\n"

/***/ }),

/***/ "./src/app/central-act-law-and-directives/act-law.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/act-law.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-blurb .blurb-card .blurb-detail {\n  border-bottom: 1px solid #e8e8e8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9jZW50cmFsLWFjdC1sYXctYW5kLWRpcmVjdGl2ZXMvYWN0LWxhdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2VudHJhbC1hY3QtbGF3LWFuZC1kaXJlY3RpdmVzL2FjdC1sYXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1ibHVyYiAuYmx1cmItY2FyZCAuYmx1cmItZGV0YWlsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/central-act-law-and-directives/act-law.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/act-law.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActLawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActLawComponent", function() { return ActLawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _actlaw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actlaw-service */ "./src/app/central-act-law-and-directives/actlaw-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActLawComponent = /** @class */ (function () {
    function ActLawComponent(http, service, activatedRoute, router, localStorageService) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localStorageService = localStorageService;
        this.actLaw = [];
        this.centralact = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getActLawById(id).subscribe(function (data) {
                _this.actLaw = data.reverse();
            });
        });
    }
    ActLawComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ActLawComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    ActLawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-act-law',
            template: __webpack_require__(/*! ./act-law.component.html */ "./src/app/central-act-law-and-directives/act-law.component.html"),
            providers: [_actlaw_service__WEBPACK_IMPORTED_MODULE_2__["ActLawService"]],
            styles: [__webpack_require__(/*! ./act-law.component.scss */ "./src/app/central-act-law-and-directives/act-law.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _actlaw_service__WEBPACK_IMPORTED_MODULE_2__["ActLawService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], ActLawComponent);
    return ActLawComponent;
}());



/***/ }),

/***/ "./src/app/central-act-law-and-directives/actlaw-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/central-act-law-and-directives/actlaw-service.ts ***!
  \******************************************************************/
/*! exports provided: ActLawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActLawService", function() { return ActLawService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActLawService = /** @class */ (function () {
    function ActLawService(http) {
        this.http = http;
    }
    ActLawService.prototype.getActLawById = function (actLawId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/act-law-files/' + actLawId);
    };
    ActLawService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActLawService);
    return ActLawService;
}());



/***/ }),

/***/ "./src/app/committees/committees-service.ts":
/*!**************************************************!*\
  !*** ./src/app/committees/committees-service.ts ***!
  \**************************************************/
/*! exports provided: Committeeservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Committeeservice", function() { return Committeeservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Committeeservice = /** @class */ (function () {
    function Committeeservice(http) {
        this.http = http;
    }
    Committeeservice.prototype.getCommittees = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/committees');
    };
    Committeeservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Committeeservice);
    return Committeeservice;
}());



/***/ }),

/***/ "./src/app/committees/committees.component.html":
/*!******************************************************!*\
  !*** ./src/app/committees/committees.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Committees Section Start -->\n\n<section class=\"committees-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\" *ngFor=\"let data of committees\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              {{ data.titleInEnglish }}\n            </div>\n          </div>\n          <div class=\"section-blurb mx-h-none mn-h-auto h-auto\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-12 col-md-12\">\n                <div class=\"blurb-detail\">\n                  {{ data.descriptionInEnglish }}\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Committees Section Closed -->\n"

/***/ }),

/***/ "./src/app/committees/committees.component.scss":
/*!******************************************************!*\
  !*** ./src/app/committees/committees.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1pdHRlZXMvY29tbWl0dGVlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/committees/committees.component.ts":
/*!****************************************************!*\
  !*** ./src/app/committees/committees.component.ts ***!
  \****************************************************/
/*! exports provided: CommitteesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteesComponent", function() { return CommitteesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _committees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./committees-service */ "./src/app/committees/committees-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommitteesComponent = /** @class */ (function () {
    function CommitteesComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.committees = [];
        this.service.getCommittees().subscribe(function (data) {
            _this.committees = data;
        });
    }
    CommitteesComponent.prototype.ngOnInit = function () {
    };
    CommitteesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-committees',
            template: __webpack_require__(/*! ./committees.component.html */ "./src/app/committees/committees.component.html"),
            providers: [_committees_service__WEBPACK_IMPORTED_MODULE_2__["Committeeservice"]],
            styles: [__webpack_require__(/*! ./committees.component.scss */ "./src/app/committees/committees.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _committees_service__WEBPACK_IMPORTED_MODULE_2__["Committeeservice"]])
    ], CommitteesComponent);
    return CommitteesComponent;
}());



/***/ }),

/***/ "./src/app/egov-services/egov-service-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/egov-services/egov-service-service.ts ***!
  \*******************************************************/
/*! exports provided: EgovService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgovService", function() { return EgovService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EgovService = /** @class */ (function () {
    function EgovService(http) {
        this.http = http;
    }
    EgovService.prototype.getEgovServicesFile = function (egovServiceId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services-file/' + egovServiceId);
    };
    EgovService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EgovService);
    return EgovService;
}());



/***/ }),

/***/ "./src/app/egov-services/egov-service.component.html":
/*!***********************************************************!*\
  !*** ./src/app/egov-services/egov-service.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Vital Registration Section Start -->\n\n<section class=\"vital-registration-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngIf=\"lanValue == 'en'\">\n              E-Government Services\n            </div>\n\n            <div class=\"title\" *ngIf=\"lanValue == 'np'\">\n              ई सेवाहरू \n            </div>\n\n          </div>\n          <!-- <div class=\"section-blurb vital-registration-links\">\n                        <div class=\"blurb-detail\">\n                            <p>\n                            </p>\n                            <ol class=\"list-style-type\">\n                                <li *ngFor=\"let data of egovServices\">\n                                    <a [href]=\"environment.url +'/' +data.file\"\n                                        target=\"_blank\" *ngIf=\"lanValue == 'en'\">{{ data.titleInEnglish }}</a>\n                                    <a [href]=\"environment.url +'/' +data.file\"\n                                    target=\"_blank\" *ngIf=\"lanValue == 'np'\">{{ data.titleInNepali }}</a>\n                                </li>\n                            </ol>\n                        </div>\n                    </div> -->\n\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-12 col-md-12\" *ngFor=\"let data of egovServices\">\n                <div class=\"blurb-title\" *ngIf=\"lanValue == 'en'\">\n                  {{ data.titleInEnglish }}\n                </div>\n                <div class=\"blurb-title\"\n                  *ngIf=\"lanValue == 'np' && data.titleInNepali != 'null' && data.titleInNepali != ''\">\n                  {{ data.titleInNepali }}\n                </div>\n                <div class=\"blurb-title\"\n                  *ngIf=\"lanValue == 'np' && (data.titleInNepali == 'null' || data.titleInNepali == '')\">\n                  -\n                </div>\n                <div class=\"blurb-detail\">\n                  <p *ngIf=\"lanValue == 'en'\" [innerHTML]=\"data.descriptionInEnglish\"></p>\n                  <p *ngIf=\"lanValue == 'np' && data.descriptionInNepali != 'null' && data.descriptionInNepali != ''\"\n                    [innerHTML]=\"data.descriptionInNepali\"></p>\n                  <p *ngIf=\"lanValue == 'np' && (data.descriptionInNepali == 'null' || data.descriptionInNepali == '')\"\n                    [innerHTML]=\"data.descriptionInNepali\">-</p>\n                  <p *ngIf=\"lanValue == 'en'\"> File:\n                    <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\"> {{ data.titleInEnglish }}\n                    </a>\n                  </p>\n                  <p *ngIf=\"lanValue == 'np' && data.titleInNepali != 'null' && data.titleInNepali != ''\"> File:\n                    <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\"> {{ data.titleInNepali }}\n                    </a>\n                  </p>\n                  <p *ngIf=\"lanValue == 'np' && (data.titleInNepali == 'null' || data.titleInNepali == '')\"> File:\n                    <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\">-\n                    </a>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Vital Registration Section Closed -->\n"

/***/ }),

/***/ "./src/app/egov-services/egov-service.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/egov-services/egov-service.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-blurb .blurb-card .blurb-detail {\n  border-bottom: 1px solid #e8e8e8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9lZ292LXNlcnZpY2VzL2Vnb3Ytc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWdvdi1zZXJ2aWNlcy9lZ292LXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1ibHVyYiAuYmx1cmItY2FyZCAuYmx1cmItZGV0YWlsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/egov-services/egov-service.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/egov-services/egov-service.component.ts ***!
  \*********************************************************/
/*! exports provided: EgovServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgovServiceComponent", function() { return EgovServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _egov_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egov-service-service */ "./src/app/egov-services/egov-service-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EgovServiceComponent = /** @class */ (function () {
    function EgovServiceComponent(http, service, activatedRoute, router, localStorageService) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localStorageService = localStorageService;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.egovServices = [];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getEgovServicesFile(id).subscribe(function (data) {
                _this.egovServices = data.reverse();
            });
        });
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    EgovServiceComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EgovServiceComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    EgovServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-egov-service',
            template: __webpack_require__(/*! ./egov-service.component.html */ "./src/app/egov-services/egov-service.component.html"),
            providers: [_egov_service_service__WEBPACK_IMPORTED_MODULE_2__["EgovService"]],
            styles: [__webpack_require__(/*! ./egov-service.component.scss */ "./src/app/egov-services/egov-service.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _egov_service_service__WEBPACK_IMPORTED_MODULE_2__["EgovService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], EgovServiceComponent);
    return EgovServiceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer-service.ts":
/*!******************************************!*\
  !*** ./src/app/footer/footer-service.ts ***!
  \******************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterService = /** @class */ (function () {
    function FooterService(http) {
        this.http = http;
    }
    FooterService.prototype.getContactDetails = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/contact-details');
    };
    FooterService.prototype.getSocialMedia = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/social-media');
    };
    FooterService.prototype.getCopyright = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/copyright');
    };
    FooterService.prototype.getNews = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/news-notices');
    };
    FooterService.prototype.getEgovServices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services');
    };
    FooterService.prototype.getReports = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/reports');
    };
    FooterService.prototype.getIntroductions = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/introduction');
    };
    FooterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FooterService);
    return FooterService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-top-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-2 col-md-4\">\n          <div class=\"section-wrapper mb-4 introduction\">\n            <div class=\"section-title\">\n              <div class=\"title\"> परिचय </div>\n            </div>\n            <div class=\"section-blurb blurb-overflow\">\n              <div class=\"blurb-item\">\n                <a>\n                  <div class=\"blurb-title\"> बिपत ब्यवस्थापन प्रनाली </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-4\">\n          <div class=\"section-wrapper mb-4 travelTourism-wrapper\">\n            <div class=\"section-title\">\n              <div class=\"title\">समाचार र सुचनाहरु </div>\n            </div>\n            <div class=\"section-blurb blurb-overflow\">\n              <div class=\"blurb-item\">\n                <a>\n                  <div class=\"blurb-title\"> समाचार</div>\n                </a>\n              </div>\n              <div class=\"blurb-item\">\n                <a>\n                  <div class=\"blurb-title\"> सुचनाहरु </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-4\">\n          <div class=\"section-wrapper mb-4 noticeReports-wrapper\">\n            <div class=\"section-title\">\n              <div class=\"title\"> प्रतिबेदन्हरु </div>\n            </div>\n            <div class=\"section-blurb blurb-overflow\">\n              <div class=\"blurb-item\">\n                <a>\n                  <div class=\"blurb-title\"> बिपत घटना प्रतिबेदन </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-4\">\n          <div class=\"section-wrapper mb-4 eGovServices-wrapper\">\n            <div class=\"section-title\">\n              <div class=\"title\"> बिपत ब्यवस्थापन </div>\n            </div>\n            <div class=\"section-blurb blurb-overflow\">\n\n              <div class=\"blurb-item\">\n                <a>\n                  <div class=\"blurb-title\"> घटना रेपोर्तिङ </div>\n                </a>\n              </div>\n              <div class=\"blurb-item\">\n                <a>\n                  <div class=\"blurb-title\"> बिपत घटना विवरण</div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-4\">\n          <div class=\"section-wrapper mb-4\">\n            <div class=\"section-title\">\n              <div class=\"title\"> सम्पर्क </div>\n            </div>\n            <div class=\"section-blurb blurb-overflow\">\n              <div class=\"blurb-item\">\n                <div class=\"blurb-title\"> boudha, tusal, nepal </div>\n              </div>\n              <div class=\"blurb-item\">\n                <div class=\"blurb-title\"> Phone no: <a href=\"tel:9833436853\">9833436853</a></div>\n              </div>\n              <div class=\"blurb-item\">\n                <div class=\"blurb-title\"> Email: <a href=\"mailto:example@gmail.com\">example@gmail.com</a></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-4\">\n          <div class=\"section-wrapper mb-4\">\n            <div class=\"section-title\">\n              <div class=\"title\"> Social Site </div>\n            </div>\n            <div class=\"section-blurb blurb-overflow\">\n              <div class=\"social-media-area\">\n                <ul>\n                  <li><a target=\"_blank\" href=\"https://www.facebook.com/\"><img alt=\"khumbu\" class=\"img-circle \"\n                        id=\"nav-profile-image\" src=\"https://khumbuwebapi.paisamanager.com/image-1591960724508.jpeg\"></a>\n                  </li>\n                  <li><a target=\"_blank\" href=\"https://twitter.com/explore\"><img alt=\"khumbu\" class=\"img-circle \"\n                        id=\"nav-profile-image\" src=\"https://khumbuwebapi.paisamanager.com/image-1593159101516.png\"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-media-area ul li a img {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%; }\n\n.social-media-area ul li a {\n  overflow: hidden; }\n\nfooter .section-blurb.blurb-overflow .blurb-item {\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLW1lZGlhLWFyZWEgdWwgbGkgYSBpbWcge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zb2NpYWwtbWVkaWEtYXJlYSB1bCBsaSBhIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZm9vdGVyIC5zZWN0aW9uLWJsdXJiLmJsdXJiLW92ZXJmbG93IC5ibHVyYi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4vLyAuc2VjdGlvbi13cmFwcGVyLm5vdGljZXMgLnNlY3Rpb24tYmx1cmIuYmx1cmItb3ZlcmZsb3cgLmJsdXJiLWl0ZW0ge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyB9XG5cbi8vIC5zZWN0aW9uLXdyYXBwZXIubm90aWNlcyAuc2VjdGlvbi1ibHVyYi5ibHVyYi1vdmVyZmxvdyAuYmx1cmItaXRlbTo6YWZ0ZXIge1xuLy8gICBjb250ZW50OiAnLi4uJztcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-service */ "./src/app/footer/footer-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
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
    function FooterComponent(http, service, router, localStorageService) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.localStorageService = localStorageService;
        this.contactDetails = [];
        this.socialMedia = [];
        this.copyright = [];
        this.news = [];
        this.egovServices = [];
        this.reports = [];
        this.introductions = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.service.getIntroductions().subscribe(function (data) {
            _this.introductions = data;
        });
        this.service.getContactDetails().subscribe(function (data) {
            _this.contactDetails = data;
        });
        this.service.getSocialMedia().subscribe(function (data) {
            _this.socialMedia = data;
        });
        this.service.getCopyright().subscribe(function (data) {
            _this.copyright = data;
        });
        this.service.getNews().subscribe(function (data) {
            _this.news = data.reverse();
        });
        this.service.getEgovServices().subscribe(function (data) {
            _this.egovServices = data;
        });
        this.service.getReports().subscribe(function (data) {
            _this.reports = data;
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FooterComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    FooterComponent.prototype.displayEgovServices = function (event, id) {
        event.preventDefault();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/egov-service', id]);
    };
    FooterComponent.prototype.displayIntroduction = function (event, id) {
        event.preventDefault();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/brief-introduction', id]);
    };
    FooterComponent.prototype.displayWard = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/ward-structure']);
    };
    FooterComponent.prototype.displayVillage = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/village-profile']);
    };
    FooterComponent.prototype.displayTravelAndTourism = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/travel-and-tourism']);
    };
    FooterComponent.prototype.displayMountain = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/mountain-list']);
    };
    FooterComponent.prototype.displayNotices = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/news-notice']);
    };
    FooterComponent.prototype.displayReports = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/reports']);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            providers: [_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"]],
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header-service.ts":
/*!******************************************!*\
  !*** ./src/app/header/header-service.ts ***!
  \******************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
    }
    HeaderService.prototype.getMountains = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/mountains');
    };
    HeaderService.prototype.getIntroductions = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/introduction');
    };
    HeaderService.prototype.getReports = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/reports');
    };
    HeaderService.prototype.getActLaw = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/act-law');
    };
    HeaderService.prototype.getTravelAndTourism = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/travel-and-tourism');
    };
    HeaderService.prototype.getEgovServices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services');
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar-blue bg-blue\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"header-top-area\">\n        <div class=\"header-left\">\n          <a class=\"navbar-brand logo-left\" href=\"#\">\n            <img alt=\"\" class=\"logo\" src=\"../../assets/img/logo_0.png\"></a>\n        </div>\n\n        <div class=\"header-right ml-auto\">\n          <button type=\"submit\" class=\"btn btn-white btn-transparent btn-outline\">DRR Portal Login</button>\n\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\">\n              <svg viewBox='0 0 30 30'>\n                <path stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'\n                  d='M4 7h22M4 15h22M4 23h22' /></svg>\n            </span>\n          </button>\n        </div>\n\n      </div>\n\n      <nav class=\"navbar navbar-expand-lg header-bottom-area\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mrl-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/\">Home</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/introduction\">Introduction</a>\n            </li>\n\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/news-notice\">News & Notice</a>\n            </li>\n\n            <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/reports\">Reports</a>\n            </li> -->\n\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a class=\"nav-link\" routerLink=\"/contact-us\">Contact Us</a>\n            </li>\n\n            <!-- <ng-container *ngIf=\"lanValue == 'en'\">\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"/reports\">Reports</a>\n              </li>\n            </ng-container>\n\n            <ng-container *ngIf=\"lanValue == 'np'\">\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" routerLink=\"/reports\">रिपोर्टहरू</a>\n              </li>\n            </ng-container>\n\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <ng-container *ngIf=\"lanValue == 'en'\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownServices\">\n                  eGov Services\n                </a>\n              </ng-container>\n\n              <ng-container *ngIf=\"lanValue == 'np'\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownServices\">\n                  ई सेवाहरू\n                </a>\n              </ng-container>\n\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownServices\">\n                <ng-container *ngIf=\"lanValue == 'en'\">\n                  <a *ngFor=\"let data of egovServices\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayEgovServices($event, data.id)\">\n                    {{ data.titleInEnglish }}\n                  </a>\n                </ng-container>\n                <ng-container *ngIf=\"lanValue == 'np'\">\n                  <a *ngFor=\"let data of egovServices\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayEgovServices($event, data.id)\">\n                    {{ data.titleInNepali }}\n                  </a>\n                </ng-container>\n              </div>\n            </li>\n\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <ng-container *ngIf=\"lanValue == 'en'\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownActLaw\">\n                  Law and Directives\n                </a>\n              </ng-container>\n\n              <ng-container *ngIf=\"lanValue == 'np'\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownActLaw\">\n                  कानुन तथा नियमावली\n                </a>\n              </ng-container>\n\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownActLaw\">\n                <ng-container *ngIf=\"lanValue == 'en'\">\n                  <a *ngFor=\"let data of acts\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayActLaw($event, data.id)\">\n                    {{ data.titleInEnglish }}\n                  </a>\n                </ng-container>\n                <ng-container *ngIf=\"lanValue == 'np'\">\n                  <a *ngFor=\"let data of acts\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayActLaw($event, data.id)\">\n                    {{ data.titleInNepali }}\n                  </a>\n                </ng-container>\n              </div>\n            </li>\n\n            <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <ng-container *ngIf=\"lanValue == 'en'\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownTravelTourism\">\n                  Travel And Tourism\n                </a>\n              </ng-container>\n\n              <ng-container *ngIf=\"lanValue == 'np'\">\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownTravelTourism\">\n                  यात्रा र पर्यटन\n                </a>\n              </ng-container>\n\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownTravelTourism\">\n                <ng-container *ngIf=\"lanValue == 'en'\">\n                  <a routerLink=\"/travel-and-tourism\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\">\n                    Travel & Tourism\n                  </a>\n                </ng-container>\n                <ng-container *ngIf=\"lanValue == 'np'\">\n                  <a routerLink=\"/travel-and-tourism\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\">\n                    यात्रा र पर्यटन\n                  </a>\n                </ng-container>\n\n                <ng-container *ngIf=\"lanValue == 'en'\">\n                  <a routerLink=\"/mountain-list\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\">\n                    Mountains\n                  </a>\n                </ng-container>\n\n                <ng-container *ngIf=\"lanValue == 'np'\">\n                  <a routerLink=\"/mountain-list\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact:true}\">\n                    हिम श्रृङ्खला\n                  </a>\n                </ng-container>\n\n\n              </div>\n            </li> -->\n\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</header>\n\n<!-- <header class=\"navbar-blue bg-blue\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"header-top-area\">\n      <div class=\"header-left\">\n        <a class=\"navbar-brand logo-left\" href=\"#\">\n          <img src=\"../../assets/img/logo_0.png\" class=\"logo\" alt=\"\">\n        </a>\n\n        <div class=\"header-title\">\n          <h1>\n            Khumbu Pasang Lhamu Rural Muncipality, Ward 4 Office\n          </h1>\n          <span>\n            Khumjung, Solukhumbu,Nepal\n          </span>\n        </div>\n      </div>\n\n      <div class=\"header-right ml-auto\">\n        <div class=\"search-lng-wrapper\">\n          <div class=\"lng-wrapper\">\n            <span>English</span>\n            <span>|</span>\n            <span>Nepali</span>\n          </div>\n          <form action=\"\" class=\"form-inline my-2 my-lg-0\" [formGroup]=\"searchForm\">\n            <div class=\"input-group mb-3\">\n              <input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-label=\"Search\"\n                aria-describedby=\"basic-addon2\" formControlName=\"searchQuery\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"basic-addon2\">\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n            </div>\n          </form>\n        </div>\n\n        <a class=\"navbar-brand logo-right\" [routerLink]=\"['/']\">\n          <img src=\"assets/img/khumbu_pasang_logo.png\" class=\"logo\" alt=\"\">\n        </a>\n      </div>\n\n\n    </div>\n\n    <nav class=\"navbar navbar-expand-lg header-bottom-area\">\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\">\n          <svg viewBox='0 0 30 30'>\n            <path stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'\n              d='M4 7h22M4 15h22M4 23h22' /></svg>\n        </span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mrl-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n          </li>\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownIntro\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Introduction\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownIntro\">\n              <a *ngFor=\"let data of introductions\" (click)=\"displayIntroduction($event, data.id)\" class=\"dropdown-item\"\n                [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                {{ data.titleInEnglish }}\n              </a>\n              <a class=\"dropdown-item\" routerLink=\"/village-profile\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">\n                Village Profile\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownReports\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Reports\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownReports\">\n              <a *ngFor=\"let data of reports\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" [href]=\"environment.url +'/' +data.file\" target=\"_blank\">\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownServices\" role=\"button\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              eGov Services\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownServices\">\n              <a *ngFor=\"let data of egovServices\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayEgovServices($event, data.id)\" >\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownActLaw\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Act, Law and Directives\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownActLaw\">\n              <a *ngFor=\"let data of acts\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayActLaw($event, data.id)\">\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownTravelTourism\" role=\"button\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Travel And Tourism\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownTravelTourism\">\n              <a *ngFor=\"let data of travelTourism\" class=\"dropdown-item\" [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"displayTravelAndTourism($event, data.id)\">\n                {{ data.titleInEnglish }}\n              </a>\n            </div>\n          </li>\n\n          <li class=\"nav-item dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMountains\" role=\"button\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Mountains\n            </a>\n\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMountains\">\n\n              <a *ngFor=\"let data of mountains\" (click)=\"displayMountain($event, data.id)\" class=\"dropdown-item\"\n                [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                {{ data.mountainNameInEnglish }}\n              </a>\n            </div>\n\n          </li>\n\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/contact-us']\">Contact Us</a>\n          </li>\n\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header> -->\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header.navbar-blue.bg-blue {\n  background: #0062cc;\n  position: relative; }\n\n.navbar-wrapper {\n  max-width: unset;\n  width: unset;\n  margin: 0 auto; }\n\nheader.header-top-area {\n  display: block; }\n\n.header-left .header-title {\n  display: block;\n  margin-bottom: 12px;\n  padding-top: 34px; }\n\n.header-left .header-title h1 {\n  font-size: 20px;\n  letter-spacing: 0.5px; }\n\n.header-left .header-title span {\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  display: block; }\n\n.header-top-area {\n  display: flex;\n  flex-direction: revert;\n  align-items: center;\n  justify-content: space-between; }\n\n.header-right {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.navbar-expand-lg .navbar-nav .nav-link {\n  padding: 6px 14px; }\n\n.left {\n  margin-right: 30px; }\n\n.dropdown-menu.show.lvl2 {\n  top: calc(100% - 40px);\n  left: unset !important;\n  right: calc(100% - 4px); }\n\n.navbar-collapse.collapse.show {\n  z-index: 999; }\n\n.header-right .lng-wrapper {\n  color: #fff; }\n\n.header-right .lng-wrapper img:hover {\n  cursor: pointer; }\n\n.lng-wrapper img.nepali-language {\n  height: 10px; }\n\n.header-right .lng-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin: 0 4px; }\n\n/* navigationBar Start */\n\n.navbar .navbar-toggler {\n  color: white;\n  border-color: white;\n  border-radius: 0;\n  margin-bottom: 10px; }\n\nheader {\n  padding: 20px 20px 0;\n  box-shadow: 0px 8px 14px -4px rgba(23, 131, 202, 0.16); }\n\n.navbar-brand .logo {\n  width: 60px;\n  height: 54px; }\n\n.header-title {\n  color: #fff;\n  margin-right: 10px; }\n\n.header-title h1 {\n  font-size: 2.4rem;\n  margin-top: 10px;\n  margin-bottom: 4px; }\n\n.header-title span {\n  font-size: 1.8rem; }\n\n.header-right .search-lng-wrapper {\n  font-size: 1.2rem;\n  color: #fff;\n  margin-right: 14px; }\n\n.header-right .lng-wrapper {\n  text-align: right;\n  margin-bottom: 6px;\n  font-size: 1.4rem; }\n\n.header-right input.form-control {\n  font-size: 1.2rem; }\n\n.header-right .input-group-append i {\n  color: #808080; }\n\n.navbar-blue.bg-blue {\n  background: #1e56b1; }\n\nnav.navbar {\n  padding-bottom: 0; }\n\nnav .nav-item .nav-link {\n  font-size: 1.6rem;\n  color: #ebebeb;\n  opacity: 0.9; }\n\n.navbar-expand-lg .navbar-nav .nav-link {\n  transition: all 0.4s ease; }\n\nnav .nav-item.active .nav-link {\n  color: #fff;\n  opacity: 1; }\n\nnav .nav-item .nav-link:hover {\n  color: #fff;\n  opacity: 1;\n  cursor: pointer; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.dropdown-menu a:hover {\n  cursor: pointer; }\n\n.navbar-nav .dropdown-menu {\n  border: 0;\n  box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3); }\n\n.navbar-nav .dropdown-menu .dropdown-item {\n  font-size: 1.6rem; }\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #e0e0e0; }\n\n.dropdown-item.active,\n.dropdown-item:active {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #e0e0e0; }\n\n.navbar-expand-lg .navbar-nav {\n  margin: 0 auto;\n  flex-wrap: wrap; }\n\nli.nav-item:hover > .dropdown-menu {\n  display: block;\n  top: calc(100% - 1px); }\n\nli.nav-item .dropdown-wrapper:hover > .dropdown-menu.lvl2 {\n  display: block; }\n\nli.nav-item .dropdown-wrapper {\n  position: relative; }\n\nli.nav-item .dropdown-menu.lvl2 {\n  top: 0;\n  right: calc(100% - 4px);\n  left: unset; }\n\n@media (max-width: 991.98px) {\n  .header-top-area {\n    margin-bottom: 14px; }\n  button.btn.btn-white.btn-outline {\n    margin-right: 14px; }\n  .header-left .header-title h1 {\n    font-size: 18px; }\n  .header-left .header-title {\n    padding-top: 14px; }\n  .navbar .navbar-toggler + .navbar-collapse.collapse.show {\n    margin-top: 44px; }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    background: #fff; }\n  .navbar-nav .dropdown-menu {\n    margin-bottom: 8px; }\n  nav .nav-item .nav-link {\n    color: #707070; }\n  nav .nav-item.active .nav-link {\n    color: #212121; }\n  nav .nav-item .nav-link:hover {\n    background: #e4e4e4;\n    color: #585858; }\n  nav.navbar.navbar-expand-lg.header-bottom-area {\n    width: 100%;\n    left: 0;\n    right: 0;\n    padding: 0; }\n  .navbar .navbar-toggler + .navbar-collapse.collapse.show {\n    box-shadow: 0px 8px 14px -4px rgba(0, 0, 0, 0.3); }\n  button.navbar-toggler {\n    margin-right: 14px;\n    display: block; }\n  .header-right {\n    right: 60px; }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-left: 14px; } }\n\n@media (max-width: 768.98px) {\n  #anim_mountain {\n    display: none; }\n  .navbar-brand .logo {\n    width: 60px;\n    height: 50px; }\n  .header-title h1 {\n    font-size: 1.8rem; }\n  .header-title span {\n    font-size: 1.4rem; }\n  .header-right .lng-wrapper {\n    font-size: 1.2rem; }\n  .dropdown-menu.show.lvl2 {\n    left: 0;\n    margin-left: 34px;\n    right: unset;\n    min-width: unset;\n    width: calc(100% - 80px); } }\n\n@media (max-width: 480px) {\n  button.btn.btn-white.btn-outline {\n    padding: 8px 10px; }\n  button.navbar-toggler {\n    margin-right: 0; }\n  header {\n    padding: 14px; }\n  button.btn.btn-white.btn-outline {\n    margin-right: 4px; } }\n\n@media (min-width: 991.98px) {\n  .navbar-expand-lg .navbar-nav .nav-link.br-1.pr-10 {\n    border-right: 1px solid #ddd;\n    padding-right: 10px; }\n  .navbar-expand-lg .navbar-nav .nav-link.pl-10 {\n    border-left: 1px solid #ddd;\n    padding-left: 10px; }\n  button.navbar-toggler {\n    display: none; } }\n\n/* navigationBar Closed */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFRaEI7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQWFyQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsWUFBWSxFQUFBOztBQVNkO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZSxFQUFBOztBQUlqQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQU1mLHdCQUFBOztBQUNBO0VBQ0UsWUFBeUI7RUFDekIsbUJBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFTckI7RUFDRSxvQkFBb0I7RUFFcEIsc0RBQXNELEVBQUE7O0FBV3hEO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQWVuQjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFFZCxZQUFZLEVBQUE7O0FBR2Q7RUFFRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUVYLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFNBQVM7RUFDVCxnREFBZ0QsRUFBQTs7QUFHbEQ7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFHM0I7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBSUUsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBR2I7RUFFRTtJQUNFLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGNBQWMsRUFBQTtFQUdoQjtJQUNFLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFHaEI7SUFDRSxXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVLEVBQUE7RUFHWjtJQUNFLGdEQUFnRCxFQUFBO0VBR2xEO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQUdoQjtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0Usa0JBQWtCLEVBQUEsRUFDbkI7O0FBSUg7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHdCQUF3QixFQUFBLEVBQ3pCOztBQUlIO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGVBQWUsRUFBQTtFQUdqQjtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsaUJBQWlCLEVBQUEsRUFDbEI7O0FBR0g7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdILHlCQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlci5uYXZiYXItYmx1ZS5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2YmFyLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xuICB3aWR0aDogdW5zZXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIuaGVhZGVyLXRvcC1hcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXItbGVmdCB7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICAvLyBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uaGVhZGVyLWxlZnQgLmhlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMzRweDtcbn1cblxuLmhlYWRlci1sZWZ0IC5oZWFkZXItdGl0bGUgaDEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmhlYWRlci1sZWZ0IC5oZWFkZXItdGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlci10b3AtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByZXZlcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5oZWFkZXItYm90dG9tLWFyZWEge1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIHRvcDogMDtcbiAgLy8gcmlnaHQ6IDgwcHg7XG4gIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8vIHBhZGRpbmc6IDA7XG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbn1cblxuLmxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5kcm9wZG93bi1tZW51LnNob3cubHZsMiB7XG4gIHRvcDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLnNob3cge1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIHRvcDogMTBweDtcbiAgLy8gcmlnaHQ6IDEwcHg7XG59XG5cbi5oZWFkZXItcmlnaHQgLmxuZy13cmFwcGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXItcmlnaHQgLmxuZy13cmFwcGVyIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4ubG5nLXdyYXBwZXIgaW1nLm5lcGFsaS1sYW5ndWFnZSB7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmhlYWRlci1yaWdodCAubG5nLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIDRweDtcbn1cblxuXG5cblxuLyogbmF2aWdhdGlvbkJhciBTdGFydCAqL1xuLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm5hdmJhci13cmFwcGVyIHtcbiAgLy8gICBtYXgtd2lkdGg6IDExNDBweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XG4gIC8vICAgYm94LXNoYWRvdzogMHB4IDhweCAxNHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNHB4IC00cHggcmdiYSgyMywgMTMxLCAyMDIsIDAuMTYpO1xuXG59XG5cbi5oZWFkZXItdG9wLWFyZWEge1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5uYXZiYXItYnJhbmQgLmxvZ28ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1NHB4O1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlci10aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5oZWFkZXItdGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uaGVhZGVyLWxlZnQge1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1yaWdodCAuc2VhcmNoLWxuZy13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG59XG5cbi5oZWFkZXItcmlnaHQgLmxuZy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5oZWFkZXItcmlnaHQgaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5oZWFkZXItcmlnaHQgLmlucHV0LWdyb3VwLWFwcGVuZCBpIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5uYXZiYXItYmx1ZS5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzFlNTZiMTtcbn1cblxubmF2Lm5hdmJhciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ViZWJlYjtcbiAgLy8gY29sb3I6ICM0NDQ0NDQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgLy8gICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG5cbm5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAxO1xufVxuXG5uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICAvLyBjb2xvcjogIzIxMjEyMTtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5kcm9wZG93bi1pdGVtOmZvY3VzLFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBjb2xvcjogIzE2MTgxYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsXG4uZHJvcGRvd24taXRlbTphY3RpdmUge1xuICBjb2xvcjogIzE2MTgxYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmxpLm5hdi1pdGVtOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogY2FsYygxMDAlIC0gMXB4KTtcbn1cblxubGkubmF2LWl0ZW0gLmRyb3Bkb3duLXdyYXBwZXI6aG92ZXI+LmRyb3Bkb3duLW1lbnUubHZsMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5saS5uYXYtaXRlbSAuZHJvcGRvd24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubGkubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUubHZsMiB7XG4gIC8vIHRvcDogY2FsYygxMDAlIC0gNDBweCk7XG4gIC8vIHJpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICAvLyBsZWZ0OiB1bnNldDtcbiAgdG9wOiAwO1xuICByaWdodDogY2FsYygxMDAlIC0gNHB4KTtcbiAgbGVmdDogdW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuXG4gIC5oZWFkZXItdG9wLWFyZWEge1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIH1cblxuICBidXR0b24uYnRuLmJ0bi13aGl0ZS5idG4tb3V0bGluZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICB9XG5cbiAgLmhlYWRlci1sZWZ0IC5oZWFkZXItdGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5oZWFkZXItbGVmdCAuaGVhZGVyLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgfVxuXG4gIC5uYXZiYXIgLm5hdmJhci10b2dnbGVyKy5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uuc2hvdyB7XG4gICAgbWFyZ2luLXRvcDogNDRweDtcbiAgfVxuXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBuYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gIH1cblxuICBuYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICB9XG5cbiAgbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gIH1cblxuICBuYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcuaGVhZGVyLWJvdHRvbS1hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlcisubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLnNob3cge1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuXG4gIGJ1dHRvbi5uYXZiYXItdG9nZ2xlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgcmlnaHQ6IDYwcHg7XG4gIH1cblxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjguOThweCkge1xuICAjYW5pbV9tb3VudGFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQgLmxvZ28ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5oZWFkZXItdGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG5cbiAgLmhlYWRlci10aXRsZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQgLmxuZy13cmFwcGVyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5kcm9wZG93bi1tZW51LnNob3cubHZsMiB7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcbiAgICByaWdodDogdW5zZXQ7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgYnV0dG9uLmJ0bi5idG4td2hpdGUuYnRuLW91dGxpbmUge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICB9XG5cbiAgYnV0dG9uLm5hdmJhci10b2dnbGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gIH1cblxuICBidXR0b24uYnRuLmJ0bi13aGl0ZS5idG4tb3V0bGluZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluay5ici0xLnByLTEwIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsucGwtMTAge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICBidXR0b24ubmF2YmFyLXRvZ2dsZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogbmF2aWdhdGlvbkJhciBDbG9zZWQgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-service */ "./src/app/header/header-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, service, router, localStorageService, languageService) {
        // this.localStorageService.setLanguage('en');
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.localStorageService = localStorageService;
        this.languageService = languageService;
        this.mountains = [];
        this.introductions = [];
        this.reports = [];
        this.acts = [];
        this.travelTourism = [];
        this.egovServices = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.service.getMountains().subscribe(function (data) {
            _this.mountains = data;
        });
        this.service.getIntroductions().subscribe(function (data) {
            _this.introductions = data;
        });
        this.service.getReports().subscribe(function (data) {
            _this.reports = data;
        });
        this.service.getActLaw().subscribe(function (data) {
            _this.acts = data;
        });
        this.service.getTravelAndTourism().subscribe(function (data) {
            _this.travelTourism = data;
        });
        this.service.getEgovServices().subscribe(function (data) {
            _this.egovServices = data;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeaderComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.displayMountain = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/mountain', id]);
    };
    HeaderComponent.prototype.displayIntroduction = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/brief-introduction', id]);
    };
    HeaderComponent.prototype.displayActLaw = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/act-law', id]);
    };
    HeaderComponent.prototype.displayTravelAndTourism = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/travel-and-tourism-information', id]);
    };
    HeaderComponent.prototype.displayEgovServices = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/egov-service', id]);
    };
    HeaderComponent.prototype.getLanguague = function (value) {
        this.languageService.setLanguageValue(value);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/index/index-service.ts":
/*!****************************************!*\
  !*** ./src/app/index/index-service.ts ***!
  \****************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexService = /** @class */ (function () {
    function IndexService(http) {
        this.http = http;
    }
    IndexService.prototype.getNewsNotices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/news-notices');
    };
    IndexService.prototype.getWelcome = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/welcome');
    };
    IndexService.prototype.getOfficials = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/officials');
    };
    IndexService.prototype.getApplicationFormat = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services-file');
    };
    IndexService.prototype.getEgovernmentServices = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/egov-services');
    };
    IndexService.prototype.getPlanAndProjects = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/act-law');
    };
    IndexService.prototype.getLinks = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/links');
    };
    IndexService.prototype.getEverestLives = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/everest-lives');
    };
    IndexService.prototype.getIntroduction = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/introduction');
    };
    IndexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- geo satellite mapping start -->\n\n<section class=\"geo-satellite-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"geo-satellite-item\">\n          <h2>geo satellite mapping</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- geo satellite mapping close -->\n\n<!-- incident report by citizen start -->\n<section class=\"incident-report-citizen\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\"> Incident Report by Citizen </div>\n          </div>\n          <div class=\"section-blurb intro-desc\">\n            <div class=\"blurb-detail\">\n              <div class=\"flex-btn-wrapper row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <span class=\"incident-type-name\">घटनाको किसिम 1</span>\n                    <span class=\"incident-number\">8</span>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <span class=\"incident-type-name\">घटनाको किसिम 2</span>\n                    <span class=\"incident-number\">4</span>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <span class=\"incident-type-name\">घटनाको किसिम 3</span>\n                    <span class=\"incident-number\">7</span>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <span class=\"incident-type-name\">घटनाको किसिम 4</span>\n                    <span class=\"incident-number\">9</span>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <span class=\"incident-type-name\">घटनाको किसिम 5</span>\n                    <span class=\"incident-number\">23</span>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <span class=\"incident-type-name\">घटनाको किसिम 6</span>\n                    <span class=\"incident-number\">14</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- incident report by citizen close -->\n\n<!-- yearly incident in brief start -->\n<section class=\"yearly-incident-brief\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\"> Yearly Incident in Brief </div>\n          </div>\n          <div class=\"section-blurb intro-desc\">\n            <div class=\"blurb-detail\">\n              <div class=\"flex-btn-wrapper row\">\n                <div class=\"col-lg-2 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <div class=\"title-name\">Name</div>\n                    <div class=\"incident-count\">\n                      <span class=\"incident-number mt-2 mb-3\">14</span>\n                    </div>\n                    <div class=\"icon\">\n                      <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"img\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <div class=\"title-name\">Name</div>\n                    <div class=\"incident-count\">\n                      <span class=\"incident-number mt-2 mb-3\">14</span>\n                    </div>\n                    <div class=\"icon\">\n                      <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"img\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <div class=\"title-name\">Name</div>\n                    <div class=\"incident-count\">\n                      <span class=\"incident-number mt-2 mb-3\">14</span>\n                    </div>\n                    <div class=\"icon\">\n                      <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"img\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <div class=\"title-name\">Name</div>\n                    <div class=\"incident-count\">\n                      <span class=\"incident-number mt-2 mb-3\">14</span>\n                    </div>\n                    <div class=\"icon\">\n                      <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"img\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <div class=\"title-name\">Name</div>\n                    <div class=\"incident-count\">\n                      <span class=\"incident-number mt-2 mb-3\">14</span>\n                    </div>\n                    <div class=\"icon\">\n                      <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"img\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-md-4 col-sm-6 col-12\">\n                  <div class=\"flex-btn-item\">\n                    <div class=\"title-name\">Name</div>\n                    <div class=\"incident-count\">\n                      <span class=\"incident-number mt-2 mb-3\">14</span>\n                    </div>\n                    <div class=\"icon\">\n                      <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"img\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- yearly incident in brief close -->\n\n<!-- incident brief facts start -->\n<section class=\"incident-facts-brief\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\"> Incident facts in brief </div>\n          </div>\n          <div class=\"section-blurb intro-desc\">\n            <div class=\"blurb-detail\">\n              <div class=\"search-filter-wrapper mb-3\">\n                <span class=\"searchFields\">\n                  <select class=\"form-control\" id=\"country\">\n                    <option value=\"0\" disabled=\"true\" selected=\"true\">घटनाको किसिम...</option>\n                    <option value=\"1\">घटनाको किसिम 1</option>\n                  </select>\n                </span>\n                <span class=\"searchFields\">\n                  <select class=\"form-control\" id=\"province\">\n                    <option value=\"0\" disabled=\"true\" selected=\"true\">क्षति...</option>\n                    <option value=\"1\">क्षति 1</option>\n                  </select>\n                </span>\n                <span class=\"searchFields\">\n                  <select class=\"form-control\" id=\"districtId\">\n                    <option value=\"0\" disabled=\"true\" selected=\"true\">ठेगाना...</option>\n                    <option value=\"1\">ठेगाना 1</option>\n                  </select>\n                </span>\n                <span class=\"searchFields\">\n                  <select class=\"form-control\" id=\"municipalityId\">\n                    <option value=\"0\" disabled=\"true\" selected=\"true\">अवधी...</option>\n                    <option value=\"1\">अवधी 1</option>\n                  </select>\n                </span>\n                <span class=\"searchFields\">\n                  <button class=\"btn btn-info btn-block btn-custom\">Search</button>\n                </span>\n              </div>\n              <div class=\"table-wrap\">\n                <div class=\"table-responsive dataTables_wrapper\">\n                  <table #dataTable class=\"table table-hover dataTable mb-30\" id=\"support_table5\">\n                    <thead>\n                      <tr role=\"row\">\n                        <th class=\"white-space-nowrap\">नं</th>\n                        <th class=\"white-space-nowrap\">घटनाको घटेको मिति </th>\n                        <th class=\"white-space-nowrap\">घटनाको घटेको समय</th>\n                        <th class=\"white-space-nowrap\">वार्ड न</th>\n                        <th class=\"white-space-nowrap\">ठेगाना (सडक को नाम) </th>\n                        <th class=\"white-space-nowrap\">घटनाको किसिम</th>\n                        <th class=\"white-space-nowrap\">घटनाको विवरण </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"white-space-nowrap\">1</td>\n                        <td class=\"white-space-nowrap\">2020/02/04</td>\n                        <td class=\"white-space-nowrap\">4:30pm</td>\n                        <td class=\"white-space-nowrap\">4</td>\n                        <td class=\"white-space-nowrap\">ktm</td>\n                        <td class=\"white-space-nowrap\">घटनाको किसिम 1</td>\n                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero. Suscipit placeat\n                          quae, illo omnis ipsam architecto magnam esse ducimus velit doloribus possimus non quia, alias\n                          iste earum, debitis repudiandae.</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <button routerLink=\"/incident-facts-detail\" class=\"btn btn-primary btn-transparent btn-outline\"\n                type=\"button\">View Detail</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- incident brief facts close -->\n\n<!-- time required to fix incident start -->\n<section class=\"time-required-to-fix\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\"> time required to fix incident </div>\n          </div>\n          <div class=\"section-blurb intro-desc\">\n            <div class=\"blurb-detail\">\n              <div class=\"table-wrap\">\n                <div class=\"table-responsive dataTables_wrapper\">\n                  <table #dataTable class=\"table table-hover dataTable mb-30\" id=\"support_table5\">\n                    <thead>\n                      <tr role=\"row\">\n                        <th class=\"white-space-nowrap\">नं</th>\n                        <th class=\"white-space-nowrap\">घटनाको किसिम</th>\n                        <th class=\"white-space-nowrap\">घटना घटेको स्थान</th>\n                        <th class=\"white-space-nowrap\">सम्बोधन गर्न लागेको समय</th>\n                        <th class=\"white-space-nowrap\">रंग कोड</th>\n                        <th class=\"white-space-nowrap\">गरेका कार्य</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"white-space-nowrap\">1</td>\n                        <td class=\"white-space-nowrap\">घटनाको किसिम 1</td>\n                        <td class=\"white-space-nowrap\">ktm</td>\n                        <td class=\"white-space-nowrap\">4:30pm</td>\n                        <td class=\"white-space-nowrap\">green</td>\n                        <td class=\"white-space-nowrap\">गरेका कार्य 1231</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- time required to fix incident close -->\n"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* geo satellite section start */\n.geo-satellite-item {\n  padding: 120px 0;\n  background: #e8e8e8;\n  text-align: center; }\n/* geo satellite section close */\n/* incident-report section start */\n.incident-report-citizen .section-blurb {\n  min-height: unset; }\nsection.incident-report-citizen .col-12 {\n  padding: 0; }\nsection.incident-report-citizen .flex-btn-wrapper.row {\n  margin: 0; }\n.flex-btn-item {\n  padding: 15px;\n  text-align: center;\n  border: 1px solid #ccc;\n  margin-left: -1px;\n  transition: all 0.4s ease; }\n.flex-btn-item:hover {\n  background: #f3f3f3;\n  cursor: pointer; }\nspan.incident-type-name {\n  margin-right: 8px; }\nspan.incident-number {\n  width: 44px;\n  height: 44px;\n  background: #e9ecef;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 44px;\n  border-radius: 50%; }\n/* incident-report section close */\n/* yearly incident in brief start */\n.yearly-incident-brief .section-blurb {\n  min-height: unset; }\n.yearly-incident-brief .col-12 {\n  padding: 0; }\n.yearly-incident-brief .flex-btn-wrapper.row {\n  margin: 0; }\n.yearly-incident-brief .flex-btn-item {\n  padding: 15px 0 0;\n  margin-bottom: 24px; }\n.yearly-incident-brief .icon {\n  width: 100%;\n  margin: 0 auto; }\n.yearly-incident-brief .icon img {\n  width: 100%; }\n/* yearly incident in brief close */\n/* incident facts in brief start */\n.incident-facts-brief .section-blurb {\n  min-height: unset; }\n.search-filter-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start; }\nspan.searchFields {\n  margin: 0 10px 10px;\n  flex-grow: 1; }\nspan.searchFields:first-child {\n  margin-left: 0; }\n.form-control {\n  height: 4rem;\n  font-size: 1.4rem; }\ntable th.white-space-nowrap,\ntable td.white-space-nowrap {\n  white-space: nowrap; }\n.incident-facts-brief .btn-primary {\n  margin-left: auto !important;\n  display: block; }\n/* incident facts in brief close */\n/* time required to fix incident start */\n.time-required-to-fix .section-blurb {\n  min-height: unset; }\n/* time required to fix incident close */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUdwQixnQ0FBQTtBQUVBLGtDQUFBO0FBQ0E7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsU0FBUyxFQUFBO0FBR1g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUdwQixrQ0FBQTtBQUVBLG1DQUFBO0FBRUE7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsU0FBUyxFQUFBO0FBR1g7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFFRSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsV0FBVyxFQUFBO0FBR2IsbUNBQUE7QUFFQSxrQ0FBQTtBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7QUFHN0I7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFJbkI7O0VBRUUsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYyxFQUFBO0FBR2hCLGtDQUFBO0FBRUEsd0NBQUE7QUFDQTtFQUNFLGlCQUFpQixFQUFBO0FBR25CLHdDQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW8gc2F0ZWxsaXRlIHNlY3Rpb24gc3RhcnQgKi9cbi5nZW8tc2F0ZWxsaXRlLWl0ZW0ge1xuICBwYWRkaW5nOiAxMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIGdlbyBzYXRlbGxpdGUgc2VjdGlvbiBjbG9zZSAqL1xuXG4vKiBpbmNpZGVudC1yZXBvcnQgc2VjdGlvbiBzdGFydCAqL1xuLmluY2lkZW50LXJlcG9ydC1jaXRpemVuIC5zZWN0aW9uLWJsdXJiIHtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG59XG5cbnNlY3Rpb24uaW5jaWRlbnQtcmVwb3J0LWNpdGl6ZW4gLmNvbC0xMiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnNlY3Rpb24uaW5jaWRlbnQtcmVwb3J0LWNpdGl6ZW4gLmZsZXgtYnRuLXdyYXBwZXIucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmxleC1idG4taXRlbSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG5cbi5mbGV4LWJ0bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zcGFuLmluY2lkZW50LXR5cGUtbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5zcGFuLmluY2lkZW50LW51bWJlciB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBpbmNpZGVudC1yZXBvcnQgc2VjdGlvbiBjbG9zZSAqL1xuXG4vKiB5ZWFybHkgaW5jaWRlbnQgaW4gYnJpZWYgc3RhcnQgKi9cblxuLnllYXJseS1pbmNpZGVudC1icmllZiAuc2VjdGlvbi1ibHVyYiB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuXG4ueWVhcmx5LWluY2lkZW50LWJyaWVmIC5jb2wtMTIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ueWVhcmx5LWluY2lkZW50LWJyaWVmIC5mbGV4LWJ0bi13cmFwcGVyLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnllYXJseS1pbmNpZGVudC1icmllZiAuZmxleC1idG4taXRlbSB7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ueWVhcmx5LWluY2lkZW50LWJyaWVmIC5pY29uIHtcbiAgLy8gbWF4LXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ueWVhcmx5LWluY2lkZW50LWJyaWVmIC5pY29uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiB5ZWFybHkgaW5jaWRlbnQgaW4gYnJpZWYgY2xvc2UgKi9cblxuLyogaW5jaWRlbnQgZmFjdHMgaW4gYnJpZWYgc3RhcnQgKi9cbi5pbmNpZGVudC1mYWN0cy1icmllZiAuc2VjdGlvbi1ibHVyYiB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuXG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbnNwYW4uc2VhcmNoRmllbGRzIHtcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG5zcGFuLnNlYXJjaEZpZWxkczpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0cmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuXG50YWJsZSB0aC53aGl0ZS1zcGFjZS1ub3dyYXAsXG50YWJsZSB0ZC53aGl0ZS1zcGFjZS1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaW5jaWRlbnQtZmFjdHMtYnJpZWYgLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIGluY2lkZW50IGZhY3RzIGluIGJyaWVmIGNsb3NlICovXG5cbi8qIHRpbWUgcmVxdWlyZWQgdG8gZml4IGluY2lkZW50IHN0YXJ0ICovXG4udGltZS1yZXF1aXJlZC10by1maXggLnNlY3Rpb24tYmx1cmIge1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbn1cblxuLyogdGltZSByZXF1aXJlZCB0byBmaXggaW5jaWRlbnQgY2xvc2UgKi9cbiJdfQ== */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-service */ "./src/app/index/index-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
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
    function IndexComponent(http, service, router, localStorageService) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.localStorageService = localStorageService;
        this.welcome = [];
        this.applicationFormat = [];
        this.governmentServices = [];
        this.planProjects = [];
        this.links = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.service.getNewsNotices().subscribe(function (data) {
            if (data) {
                _this.newsNotices = data.reverse();
            }
        });
        this.service.getWelcome().subscribe(function (data) {
            _this.welcome = data;
        });
        this.service.getOfficials().subscribe(function (data) {
            _this.officialsList = data.reverse();
        });
        this.service.getApplicationFormat().subscribe(function (data) {
            _this.applicationFormat = data;
        });
        this.service.getEgovernmentServices().subscribe(function (data) {
            _this.governmentServices = data;
        });
        this.service.getPlanAndProjects().subscribe(function (data) {
            _this.planProjects = data;
        });
        this.service.getLinks().subscribe(function (data) {
            _this.links = data;
        });
        this.service.getEverestLives().subscribe(function (data) {
            _this.everestLives = data;
        });
        this.service.getIntroduction().subscribe(function (data) {
            _this.introductionList = data;
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
        // this.dataTable = $(this.table.nativeElement);
        // this.dataTable.dataTable();
        /*
          this.companyService.getCompanies()
           .subscribe((company: Company[]) => {
              this.companies = company;
              // You'll have to wait that changeDetection occurs and projects data into
              // the HTML template, you can ask Angular to that for you ;-)
              this.chRef.detectChanges();
              // Now you can use jQuery DataTables :
              const table: any = $('datatables');
              this.dataTable = table.DataTable();
           });
        */
    };
    Object.defineProperty(IndexComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    IndexComponent.prototype.displayNews = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/news-notice-detail', id]);
    };
    IndexComponent.prototype.displayActLaw = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/act-law', id]);
    };
    IndexComponent.prototype.displayEgovServices = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/egov-service', id]);
    };
    IndexComponent.prototype.displayIntroduction = function (event, id) {
        event.preventDefault();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.router.navigate(['/brief-introduction', id]);
    };
    IndexComponent.prototype.getNews = function (id) {
        console.log(id);
        this.router.navigate(['/news-notice-detail', id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IndexComponent.prototype, "table", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            providers: [_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]],
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/local-act-law-and-directives.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Local Act Law and Directives Section Start -->\n\n<section class=\"local-law-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Local Act, Law and Directives\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"row\">\n              <div class=\"blurb-card col-lg-12 col-md-12\" *ngFor=\"let data of localact\">\n                <div class=\"blurb-title\">\n                  {{ data.titleInEnglish }}\n                </div>\n                <div class=\"blurb-detail\">\n                  <p [innerHTML]=\"data.descriptionInEnglish\"></p>\n                </div>\n                <p> Link:\n                  <a [href]=\"environment.url +'/' +data.file\" target=\"_blank\">\n                    {{ data.titleInEnglish }}\n                  </a>\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Local Act Law and Directives Section Closed -->\n"

/***/ }),

/***/ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/local-act-law-and-directives.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsLWFjdC1sYXctYW5kLWRpcmVjdGl2ZXMvbG9jYWwtYWN0LWxhdy1hbmQtZGlyZWN0aXZlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/local-act-law-and-directives.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LocalActLawAndDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalActLawAndDirectivesComponent", function() { return LocalActLawAndDirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _localact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localact-service */ "./src/app/local-act-law-and-directives/localact-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalActLawAndDirectivesComponent = /** @class */ (function () {
    function LocalActLawAndDirectivesComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.localact = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.service.getLocalAct().subscribe(function (data) {
            _this.localact = data;
        });
    }
    LocalActLawAndDirectivesComponent.prototype.ngOnInit = function () {
    };
    LocalActLawAndDirectivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-act-law-and-directives',
            template: __webpack_require__(/*! ./local-act-law-and-directives.component.html */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.html"),
            providers: [_localact_service__WEBPACK_IMPORTED_MODULE_2__["LocalactService"]],
            styles: [__webpack_require__(/*! ./local-act-law-and-directives.component.scss */ "./src/app/local-act-law-and-directives/local-act-law-and-directives.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _localact_service__WEBPACK_IMPORTED_MODULE_2__["LocalactService"]])
    ], LocalActLawAndDirectivesComponent);
    return LocalActLawAndDirectivesComponent;
}());



/***/ }),

/***/ "./src/app/local-act-law-and-directives/localact-service.ts":
/*!******************************************************************!*\
  !*** ./src/app/local-act-law-and-directives/localact-service.ts ***!
  \******************************************************************/
/*! exports provided: LocalactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalactService", function() { return LocalactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalactService = /** @class */ (function () {
    function LocalactService(http) {
        this.http = http;
    }
    LocalactService.prototype.getLocalAct = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/local-act');
    };
    LocalactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocalactService);
    return LocalactService;
}());



/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"organization-structure-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Village\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\">\n              <div class=\"img-wrapper\">\n                <img src=\"assets/img/everest.jpg\" alt=\"\" class=\"brief-img\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/media/media.component.scss":
/*!********************************************!*\
  !*** ./src/app/media/media.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
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


var MediaComponent = /** @class */ (function () {
    function MediaComponent(route) {
        this.route = route;
    }
    MediaComponent.prototype.ngOnInit = function () {
        var image = this.route.snapshot.queryParams["image"];
    };
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/media/media.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/mountain-list/mountain-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/mountain-list/mountain-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mountain-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper mountains-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngIf=\"lanValue == 'en'\">\n              Mountains\n            </div>\n            <div class=\"title\" *ngIf=\"lanValue == 'np'\">\n              हिम श्रृङ्खला\n            </div>\n          </div>\n          <div class=\"section-blurb\">\n            <div class=\"row\">\n              <div class=\"col-md-6 col-lg-4\" *ngFor=\"let data of this.mountainList\" (click)=\"displayMountain($event, data.id)\">\n                <div class=\"item-wrapper\">\n                  <div class=\"img-wrapper\">\n                    <!-- <img src=\"../../assets/img/everest.jpg\" alt=\"\"> -->\n\n                    <img onerror=\"this.userImage=null; this.src='assets/img/everest.jpg'\" alt=\"khumbu\" class=\"live-img\"\n                    src=\"{{this.baseUrl}}{{data.image}}\">\n                  </div>\n                  <div class=\"blurb-item\">\n                    <div class=\"blurb-title\" *ngIf=\"lanValue == 'en'\">\n                      {{data.mountainNameInEnglish}}\n                    </div>\n                    <div class=\"blurb-title\" *ngIf=\"lanValue == 'np' && data.mountainNameInNepali != 'null' && data.mountainNameInNepali != ''\">\n                      {{data.mountainNameInNepali}}\n                    </div>\n                    <div class=\"blurb-title\" *ngIf=\"lanValue == 'np' && (data.mountainNameInNepali == 'null' || data.mountainNameInNepali == '')\">\n                      -\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/mountain-list/mountain-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/mountain-list/mountain-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-wrapper.mountains-wrapper .item-wrapper {\n  margin-bottom: 24px; }\n\n.section-wrapper.mountains-wrapper .img-wrapper {\n  width: 100%;\n  height: 334px;\n  margin-bottom: 10px;\n  transition: all 0.4s ease; }\n\n.section-wrapper.mountains-wrapper .blurb-item {\n  padding: 0;\n  transition: all 0.4s ease; }\n\n.section-wrapper.mountains-wrapper .item-wrapper:hover .img-wrapper {\n  transform: scale(1.02); }\n\n.section-wrapper.mountains-wrapper .item-wrapper:hover .blurb-title {\n  color: #2056AF; }\n\n@media only screen and (min-width: 576px) {\n  .section-wrapper.mountains-wrapper .img-wrapper {\n    height: 460px; } }\n\n@media only screen and (min-width: 768px) {\n  .section-wrapper.mountains-wrapper .img-wrapper {\n    height: 305px; } }\n\n@media only screen and (min-width: 991px) {\n  .section-wrapper.mountains-wrapper .img-wrapper {\n    height: 273px; } }\n\n@media only screen and (min-width: 1200px) {\n  .section-wrapper.mountains-wrapper .img-wrapper {\n    height: 333px; } }\n\n@media only screen and (max-width: 575.98px) {\n  .section-wrapper.mountains-wrapper .img-wrapper {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9tb3VudGFpbi1saXN0L21vdW50YWluLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW91bnRhaW4tbGlzdC9tb3VudGFpbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24td3JhcHBlci5tb3VudGFpbnMtd3JhcHBlciAuaXRlbS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnNlY3Rpb24td3JhcHBlci5tb3VudGFpbnMtd3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMzRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cblxuLnNlY3Rpb24td3JhcHBlci5tb3VudGFpbnMtd3JhcHBlciAuYmx1cmItaXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG5cbi5zZWN0aW9uLXdyYXBwZXIubW91bnRhaW5zLXdyYXBwZXIgLml0ZW0td3JhcHBlcjpob3ZlciAuaW1nLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG4uc2VjdGlvbi13cmFwcGVyLm1vdW50YWlucy13cmFwcGVyIC5pdGVtLXdyYXBwZXI6aG92ZXIgLmJsdXJiLXRpdGxlIHtcbiAgY29sb3I6ICMyMDU2QUY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlci5tb3VudGFpbnMtd3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogNDYwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VjdGlvbi13cmFwcGVyLm1vdW50YWlucy13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzMDVweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5zZWN0aW9uLXdyYXBwZXIubW91bnRhaW5zLXdyYXBwZXIgLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDI3M3B4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLXdyYXBwZXIubW91bnRhaW5zLXdyYXBwZXIgLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDMzM3B4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlci5tb3VudGFpbnMtd3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/mountain-list/mountain-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mountain-list/mountain-list.component.ts ***!
  \**********************************************************/
/*! exports provided: MountainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainListComponent", function() { return MountainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mountain_mountain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mountain/mountain-service */ "./src/app/mountain/mountain-service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MountainListComponent = /** @class */ (function () {
    function MountainListComponent(service, localStorageService, router) {
        this.service = service;
        this.localStorageService = localStorageService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.getMountain();
    }
    MountainListComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MountainListComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    MountainListComponent.prototype.getMountain = function () {
        var _this = this;
        this.service.getMountain().subscribe(function (response) {
            _this.mountainList = response;
        });
    };
    MountainListComponent.prototype.displayMountain = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/mountain', id]);
    };
    MountainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mountain-list',
            template: __webpack_require__(/*! ./mountain-list.component.html */ "./src/app/mountain-list/mountain-list.component.html"),
            providers: [_mountain_mountain_service__WEBPACK_IMPORTED_MODULE_1__["MountainService"]],
            styles: [__webpack_require__(/*! ./mountain-list.component.scss */ "./src/app/mountain-list/mountain-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_mountain_mountain_service__WEBPACK_IMPORTED_MODULE_1__["MountainService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MountainListComponent);
    return MountainListComponent;
}());



/***/ }),

/***/ "./src/app/mountain/mountain-service.ts":
/*!**********************************************!*\
  !*** ./src/app/mountain/mountain-service.ts ***!
  \**********************************************/
/*! exports provided: MountainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainService", function() { return MountainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MountainService = /** @class */ (function () {
    function MountainService(http) {
        this.http = http;
    }
    MountainService.prototype.getMountainById = function (mountainId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/mountains/' + mountainId);
    };
    MountainService.prototype.getMountain = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/mountains');
    };
    MountainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MountainService);
    return MountainService;
}());



/***/ }),

/***/ "./src/app/mountain/mountain.component.html":
/*!**************************************************!*\
  !*** ./src/app/mountain/mountain.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mountain Section Start -->\n\n<section class=\"organization-structure-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\" *ngFor=\"let data of mountain\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngIf=\"lanValue == 'en'\">\n              {{ data.mountainNameInEnglish }}\n            </div>\n            <div class=\"title\"\n              *ngIf=\"lanValue == 'np' && data.mountainNameInNepali != 'null' && data.mountainNameInNepali != ''\">\n              {{ data.mountainNameInNepali }}\n            </div>\n            <div class=\"title\"\n              *ngIf=\"lanValue == 'np' && (data.mountainNameInNepali == 'null' || data.mountainNameInNepali == '')\">\n              -\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\">\n              <div class=\"img-wrapper\">\n                <img [src]=\"environment.url +'/' +data.image\" alt=\"\" class=\"brief-img\">\n              </div>\n              <p *ngIf=\"lanValue == 'en'\" [innerHTML]=\"data.descriptionInEnglish\"></p>\n              <p *ngIf=\"lanValue == 'np'  && data.descriptionInNepali != 'null' && data.descriptionInNepali != ''\"\n                [innerHTML]=\"data.descriptionInNepali\">\n              </p>\n              <p *ngIf=\"lanValue == 'np' && (data.descriptionInNepali == 'null' || data.descriptionInNepali == '')\">-\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Mountain Section Closed -->\n"

/***/ }),

/***/ "./src/app/mountain/mountain.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mountain/mountain.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-wrapper .img-wrapper {\n  width: 100%; }\n\n@media only screen and (max-width: 767.98px) {\n  .section-wrapper .img-wrapper {\n    height: 184px; } }\n\n@media only screen and (max-width: 575.98px) {\n  .section-wrapper .img-wrapper {\n    height: auto; } }\n\n@media only screen and (max-width: 380px) {\n  .section-wrapper .img-wrapper {\n    height: auto; } }\n\n@media only screen and (min-width: 768px) {\n  .section-wrapper .img-wrapper {\n    height: 256px; } }\n\n@media only screen and (min-width: 991px) {\n  .section-wrapper .img-wrapper {\n    height: 352px; } }\n\n@media only screen and (min-width: 1200px) {\n  .section-wrapper .img-wrapper {\n    height: 424px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9tb3VudGFpbi9tb3VudGFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFHSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21vdW50YWluL21vdW50YWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxODRweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5zZWN0aW9uLXdyYXBwZXIgLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMjU2cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzNTJweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA0MjRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/mountain/mountain.component.ts":
/*!************************************************!*\
  !*** ./src/app/mountain/mountain.component.ts ***!
  \************************************************/
/*! exports provided: MountainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainComponent", function() { return MountainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mountain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mountain-service */ "./src/app/mountain/mountain-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MountainComponent = /** @class */ (function () {
    function MountainComponent(http, service, activatedRoute, router, localStorageService) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localStorageService = localStorageService;
        this.mountain = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getMountainById(id).subscribe(function (data) {
                _this.mountain = data;
            });
        });
    }
    MountainComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MountainComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    MountainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-everest',
            template: __webpack_require__(/*! ./mountain.component.html */ "./src/app/mountain/mountain.component.html"),
            providers: [_mountain_service__WEBPACK_IMPORTED_MODULE_3__["MountainService"]],
            styles: [__webpack_require__(/*! ./mountain.component.scss */ "./src/app/mountain/mountain.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _mountain_service__WEBPACK_IMPORTED_MODULE_3__["MountainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], MountainComponent);
    return MountainComponent;
}());



/***/ }),

/***/ "./src/app/organization-structure/organization-structure.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Organization Structure Section Start -->\n\n<section class=\"organization-structure-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngFor=\"let data of organizationStructure\">\n              {{ data.titleInNepali }}\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\" *ngFor=\"let data of organizationStructure\">\n              <p>\n                {{ data.descriptionInEnglish }}\n              </p>\n              <div class=\"img-wrapper\">\n                <img [src]=\"'http://localhost:8000/' +data.image\" alt=\"\" class=\"brief-img\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Organization Structure Section Closed -->\n"

/***/ }),

/***/ "./src/app/organization-structure/organization-structure.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1zdHJ1Y3R1cmUvb3JnYW5pemF0aW9uLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/organization-structure/organization-structure.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrganizationStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationStructureComponent", function() { return OrganizationStructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _organization_structure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-structure.service */ "./src/app/organization-structure/organization-structure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizationStructureComponent = /** @class */ (function () {
    function OrganizationStructureComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.organizationStructure = [];
        this.service.getOrganizationStructure().subscribe(function (data) {
            _this.organizationStructure = data;
        });
    }
    OrganizationStructureComponent.prototype.ngOnInit = function () {
    };
    OrganizationStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-structure',
            template: __webpack_require__(/*! ./organization-structure.component.html */ "./src/app/organization-structure/organization-structure.component.html"),
            providers: [_organization_structure_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationStructureService"]],
            styles: [__webpack_require__(/*! ./organization-structure.component.scss */ "./src/app/organization-structure/organization-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _organization_structure_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationStructureService"]])
    ], OrganizationStructureComponent);
    return OrganizationStructureComponent;
}());



/***/ }),

/***/ "./src/app/organization-structure/organization-structure.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization-structure/organization-structure.service.ts ***!
  \**************************************************************************/
/*! exports provided: OrganizationStructureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationStructureService", function() { return OrganizationStructureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizationStructureService = /** @class */ (function () {
    function OrganizationStructureService(http) {
        this.http = http;
    }
    OrganizationStructureService.prototype.getOrganizationStructure = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/organization-structure');
    };
    OrganizationStructureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrganizationStructureService);
    return OrganizationStructureService;
}());



/***/ }),

/***/ "./src/app/password-and-visa/passport-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/password-and-visa/passport-service.ts ***!
  \*******************************************************/
/*! exports provided: PassportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportService", function() { return PassportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassportService = /** @class */ (function () {
    function PassportService(http) {
        this.http = http;
    }
    PassportService.prototype.getPassport = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/passport-visa');
    };
    PassportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PassportService);
    return PassportService;
}());



/***/ }),

/***/ "./src/app/password-and-visa/password-and-visa.component.html":
/*!********************************************************************!*\
  !*** ./src/app/password-and-visa/password-and-visa.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Passport and Visa Section Start -->\n\n<section class=\"passport-visa-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Passport and Visa\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-card\">\n              <div class=\"blurb-detail\">\n                <p *ngFor=\"let data of passport\">\n                  {{ data.descriptionInEnglish }}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Passport and Visa Section Closed -->\n"

/***/ }),

/***/ "./src/app/password-and-visa/password-and-visa.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/password-and-visa/password-and-visa.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLWFuZC12aXNhL3Bhc3N3b3JkLWFuZC12aXNhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/password-and-visa/password-and-visa.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/password-and-visa/password-and-visa.component.ts ***!
  \******************************************************************/
/*! exports provided: PasswordAndVisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordAndVisaComponent", function() { return PasswordAndVisaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _passport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passport-service */ "./src/app/password-and-visa/passport-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordAndVisaComponent = /** @class */ (function () {
    function PasswordAndVisaComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.passport = [];
        this.service.getPassport().subscribe(function (data) {
            _this.passport = data;
        });
    }
    PasswordAndVisaComponent.prototype.ngOnInit = function () {
    };
    PasswordAndVisaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-and-visa',
            template: __webpack_require__(/*! ./password-and-visa.component.html */ "./src/app/password-and-visa/password-and-visa.component.html"),
            providers: [_passport_service__WEBPACK_IMPORTED_MODULE_2__["PassportService"]],
            styles: [__webpack_require__(/*! ./password-and-visa.component.scss */ "./src/app/password-and-visa/password-and-visa.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _passport_service__WEBPACK_IMPORTED_MODULE_2__["PassportService"]])
    ], PasswordAndVisaComponent);
    return PasswordAndVisaComponent;
}());



/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Information for Tourists Section Start -->\n\n<section class=\"tourist-information-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngFor=\"let data of travelAndTourism\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngIf=\"lanValue == 'en'\">\n              {{ data.titleInEnglish }}\n            </div>\n            <div class=\"title\" *ngIf=\"lanValue == 'np' && data.titleInNepali != 'null' && data.titleInNepali != ''\">\n              {{ data.titleInNepali }}\n            </div>\n            <div class=\"title\" *ngIf=\"lanValue == 'np' && (data.titleInNepali == 'null' || data.titleInNepali == '')\">\n              -\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"section-wrapper\">\n              <div class=\"img-wrapper\">\n                <img [src]=\"environment.url +'/' +data?.file\" alt=\"\" class=\"brief-img\">\n              </div>\n            </div>\n            <div class=\"blurb-card\">\n              <div class=\"blurb-detail\">\n                <p *ngIf=\"lanValue == 'en'\" [innerHTML]=\"data.descriptionInEnglish\"></p>\n                <p *ngIf=\"lanValue == 'np' && data.descriptionInNepali != 'null' && data.descriptionInNepali != ''\"\n                  [innerHTML]=\"data.descriptionInNepali\"></p>\n                <p *ngIf=\"lanValue == 'np' && (data.descriptionInNepali == 'null' || data.descriptionInNepali == '')\">-\n                </p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Information for Tourists Section Closed -->\n"

/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-wrapper .img-wrapper {\n  width: 100%; }\n\n@media only screen and (max-width: 767.98px) {\n  .section-wrapper .img-wrapper {\n    height: 184px; } }\n\n@media only screen and (max-width: 575.98px) {\n  .section-wrapper .img-wrapper {\n    height: auto; } }\n\n@media only screen and (max-width: 380px) {\n  .section-wrapper .img-wrapper {\n    height: auto; } }\n\n@media only screen and (min-width: 768px) {\n  .section-wrapper .img-wrapper {\n    height: 256px; } }\n\n@media only screen and (min-width: 991px) {\n  .section-wrapper .img-wrapper {\n    height: 352px; } }\n\n@media only screen and (min-width: 1200px) {\n  .section-wrapper .img-wrapper {\n    height: 424px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC90cmF2ZWwtYW5kLXRvdXJpc20taW5mb3JtYXRpb24vdHJhdmVsLWFuZC10b3VyaXNtLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7O0FBR0g7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsLWFuZC10b3VyaXNtLWluZm9ybWF0aW9uL3RyYXZlbC1hbmQtdG91cmlzbS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXdyYXBwZXIgLmltZy13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTg0cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWN0aW9uLXdyYXBwZXIgLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDI1NnB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMzUycHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogNDI0cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TravelAndTourismInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAndTourismInformationComponent", function() { return TravelAndTourismInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel-and-tourism-information.service */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TravelAndTourismInformationComponent = /** @class */ (function () {
    function TravelAndTourismInformationComponent(http, service, activatedRoute, router, localStorageService) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localStorageService = localStorageService;
        this.travelAndTourism = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getTravelAndTourismById(id).subscribe(function (data) {
                _this.travelAndTourism = data;
            });
        });
    }
    TravelAndTourismInformationComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TravelAndTourismInformationComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    TravelAndTourismInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-and-tourism-information',
            template: __webpack_require__(/*! ./travel-and-tourism-information.component.html */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.html"),
            providers: [_travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_2__["TouristInformationService"]],
            styles: [__webpack_require__(/*! ./travel-and-tourism-information.component.scss */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_2__["TouristInformationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], TravelAndTourismInformationComponent);
    return TravelAndTourismInformationComponent;
}());



/***/ }),

/***/ "./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts ***!
  \******************************************************************************************/
/*! exports provided: TouristInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristInformationService", function() { return TouristInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TouristInformationService = /** @class */ (function () {
    function TouristInformationService(http) {
        this.http = http;
    }
    TouristInformationService.prototype.getTravelAndTourismById = function (travelAndTourismId) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/travel-and-tourism/' + travelAndTourismId);
    };
    TouristInformationService.prototype.getTravelAndTourism = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/travel-and-tourism');
    };
    TouristInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TouristInformationService);
    return TouristInformationService;
}());



/***/ }),

/***/ "./src/app/travel-and-tourism/travel-and-tourism.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/travel-and-tourism/travel-and-tourism.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"travel-tourism-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper travel-trousim\">\n          <div class=\"section-title\">\n            <div class=\"title\" *ngIf=\"lanValue == 'en'\">\n              Travel & Trousim\n            </div>\n            <div class=\"title\" *ngIf=\"lanValue == 'np'\">\n              यात्रा र पर्यटन \n            </div>\n          </div>\n          <div class=\"section-blurb\">\n            <div class=\"row\">\n              <div class=\"col-md-6 col-lg-4\" *ngFor=\"let data of this.travelList\"  (click)=\"displayTravelAndTourism($event, data.id)\">\n                <div class=\"item-wrapper\">\n                  <div class=\"img-wrapper\">\n                    <!-- <img src=\"../../assets/img/IMG-1281.JPG\" alt=\"\"> -->\n                    <img onerror=\"this.userImage=null; this.src='assets/img/IMG-1281.JPG'\" alt=\"khumbu\" class=\"live-img\"\n                    src=\"{{this.baseUrl}}{{data.file}}\">\n                  </div>\n                  <div class=\"blurb-item\">\n                    <div class=\"blurb-title\" *ngIf=\"lanValue == 'en'\">\n                      {{data.titleInEnglish}}\n                    </div>\n                    <div class=\"blurb-title\" *ngIf=\"lanValue == 'np' && data.titleInNepali != 'null' && data.titleInNepali != ''\">\n                      {{data.titleInNepali}}\n                    </div>\n                    <div class=\"blurb-title\" *ngIf=\"lanValue == 'np' && (data.titleInNepali == 'null' || data.titleInNepali == '')\">\n                      -\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/travel-and-tourism/travel-and-tourism.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/travel-and-tourism/travel-and-tourism.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-wrapper.travel-trousim .item-wrapper {\n  margin-bottom: 24px; }\n\n.section-wrapper.travel-trousim .img-wrapper {\n  width: 100%;\n  height: 334px;\n  margin-bottom: 10px;\n  transition: all 0.4s ease; }\n\n.section-wrapper.travel-trousim .blurb-item {\n  padding: 0;\n  transition: all 0.4s ease; }\n\n.section-wrapper.travel-trousim .item-wrapper:hover .img-wrapper {\n  transform: scale(1.02); }\n\n.section-wrapper.travel-trousim .item-wrapper:hover .blurb-title {\n  color: #2056AF; }\n\n@media only screen and (min-width: 576px) {\n  .section-wrapper.travel-trousim .img-wrapper {\n    height: 460px; } }\n\n@media only screen and (min-width: 768px) {\n  .section-wrapper.travel-trousim .img-wrapper {\n    height: 305px; } }\n\n@media only screen and (min-width: 991px) {\n  .section-wrapper.travel-trousim .img-wrapper {\n    height: 273px; } }\n\n@media only screen and (min-width: 1200px) {\n  .section-wrapper.travel-trousim .img-wrapper {\n    height: 333px; } }\n\n@media only screen and (max-width: 575.98px) {\n  .section-wrapper.travel-trousim .img-wrapper {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC90cmF2ZWwtYW5kLXRvdXJpc20vdHJhdmVsLWFuZC10b3VyaXNtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC1hbmQtdG91cmlzbS90cmF2ZWwtYW5kLXRvdXJpc20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi13cmFwcGVyLnRyYXZlbC10cm91c2ltIC5pdGVtLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc2VjdGlvbi13cmFwcGVyLnRyYXZlbC10cm91c2ltIC5pbWctd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuXG4uc2VjdGlvbi13cmFwcGVyLnRyYXZlbC10cm91c2ltIC5ibHVyYi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cblxuLnNlY3Rpb24td3JhcHBlci50cmF2ZWwtdHJvdXNpbSAuaXRlbS13cmFwcGVyOmhvdmVyIC5pbWctd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG5cbi5zZWN0aW9uLXdyYXBwZXIudHJhdmVsLXRyb3VzaW0gLml0ZW0td3JhcHBlcjpob3ZlciAuYmx1cmItdGl0bGUge1xuICBjb2xvcjogIzIwNTZBRjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi13cmFwcGVyLnRyYXZlbC10cm91c2ltIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA0NjBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWN0aW9uLXdyYXBwZXIudHJhdmVsLXRyb3VzaW0gLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDMwNXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlci50cmF2ZWwtdHJvdXNpbSAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMjczcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlci50cmF2ZWwtdHJvdXNpbSAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMzMzcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuc2VjdGlvbi13cmFwcGVyLnRyYXZlbC10cm91c2ltIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/travel-and-tourism/travel-and-tourism.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/travel-and-tourism/travel-and-tourism.component.ts ***!
  \********************************************************************/
/*! exports provided: TravelAndTourismComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAndTourismComponent", function() { return TravelAndTourismComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _travel_and_tourism_information_travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel-and-tourism-information/travel-and-tourism-information.service */ "./src/app/travel-and-tourism-information/travel-and-tourism-information.service.ts");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/localstorage.service */ "./src/app/_services/localstorage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelAndTourismComponent = /** @class */ (function () {
    function TravelAndTourismComponent(service, localStorageService, router) {
        this.service = service;
        this.localStorageService = localStorageService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.getTravelAndTourism();
    }
    TravelAndTourismComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TravelAndTourismComponent.prototype, "lanValue", {
        get: function () {
            return this.localStorageService.getLanguage();
        },
        enumerable: true,
        configurable: true
    });
    TravelAndTourismComponent.prototype.getTravelAndTourism = function () {
        var _this = this;
        this.service.getTravelAndTourism().subscribe(function (response) {
            _this.travelList = response;
        });
    };
    TravelAndTourismComponent.prototype.displayTravelAndTourism = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/travel-and-tourism-information', id]);
    };
    TravelAndTourismComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-and-tourism',
            template: __webpack_require__(/*! ./travel-and-tourism.component.html */ "./src/app/travel-and-tourism/travel-and-tourism.component.html"),
            providers: [_travel_and_tourism_information_travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_1__["TouristInformationService"]],
            styles: [__webpack_require__(/*! ./travel-and-tourism.component.scss */ "./src/app/travel-and-tourism/travel-and-tourism.component.scss")]
        }),
        __metadata("design:paramtypes", [_travel_and_tourism_information_travel_and_tourism_information_service__WEBPACK_IMPORTED_MODULE_1__["TouristInformationService"],
            _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TravelAndTourismComponent);
    return TravelAndTourismComponent;
}());



/***/ }),

/***/ "./src/app/trekking/trekking-service.ts":
/*!**********************************************!*\
  !*** ./src/app/trekking/trekking-service.ts ***!
  \**********************************************/
/*! exports provided: TrekkingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekkingService", function() { return TrekkingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrekkingService = /** @class */ (function () {
    function TrekkingService(http) {
        this.http = http;
    }
    TrekkingService.prototype.getTrekking = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + '/trekking');
    };
    TrekkingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrekkingService);
    return TrekkingService;
}());



/***/ }),

/***/ "./src/app/trekking/trekking.component.html":
/*!**************************************************!*\
  !*** ./src/app/trekking/trekking.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Trekking Section Start -->\n\n<section class=\"trekking-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              Trekking\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n            <div class=\"blurb-detail\" *ngFor=\"let data of trekking\">\n              <p>\n                {{ data.descriptionInEnglish }}\n              </p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Trekking Section Closed -->\n"

/***/ }),

/***/ "./src/app/trekking/trekking.component.scss":
/*!**************************************************!*\
  !*** ./src/app/trekking/trekking.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWtraW5nL3RyZWtraW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/trekking/trekking.component.ts":
/*!************************************************!*\
  !*** ./src/app/trekking/trekking.component.ts ***!
  \************************************************/
/*! exports provided: TrekkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekkingComponent", function() { return TrekkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trekking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trekking-service */ "./src/app/trekking/trekking-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrekkingComponent = /** @class */ (function () {
    function TrekkingComponent(http, service) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.trekking = [];
        this.service.getTrekking().subscribe(function (data) {
            _this.trekking = data;
        });
    }
    TrekkingComponent.prototype.ngOnInit = function () {
    };
    TrekkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trekking',
            template: __webpack_require__(/*! ./trekking.component.html */ "./src/app/trekking/trekking.component.html"),
            providers: [_trekking_service__WEBPACK_IMPORTED_MODULE_2__["TrekkingService"]],
            styles: [__webpack_require__(/*! ./trekking.component.scss */ "./src/app/trekking/trekking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _trekking_service__WEBPACK_IMPORTED_MODULE_2__["TrekkingService"]])
    ], TrekkingComponent);
    return TrekkingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    url: 'https://khumbuwebapi.paisamanager.com/'
};


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
    production: false,
    url: 'https://khumbuwebapi.paisamanager.com/'
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Office Projects/DRR-Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map