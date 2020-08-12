(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-notice-news-notice-module"],{

/***/ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/news-notice/news-notice-detail/news-notice-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"brief-intro-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n\n              <p>test</p>\n\n\n              <div class=\"blurb-duration\"><i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i><span> 2020-06-26</span></div>\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto mx-h-none h-auto\">\n\n\n            <div class=\"blurb-detail\">\n              <p>test</p>\n              <div class=\"download-file-wrapper\"><b>File</b><button aria-label=\"Download\"\n                  class=\"btn btn-tbl-download transparent btn-xs hint--top\"><i aria-hidden=\"true\"\n                    class=\"fa fa-download\"></i></button></div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/news-notice/news-notice-detail/news-notice-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.btn.btn-tbl-download.transparent:hover i {\n  color: #4d90fe; }\n\nbutton.btn.btn-tbl-download.transparent i {\n  transition: all 0.4s ease; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9uZXdzLW5vdGljZS9uZXdzLW5vdGljZS1kZXRhaWwvbmV3cy1ub3RpY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1ub3RpY2UvbmV3cy1ub3RpY2UtZGV0YWlsL25ld3Mtbm90aWNlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5idG4uYnRuLXRibC1kb3dubG9hZC50cmFuc3BhcmVudDpob3ZlciBpIHtcbiAgY29sb3I6ICM0ZDkwZmU7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXRibC1kb3dubG9hZC50cmFuc3BhcmVudCBpIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/news-notice/news-notice-detail/news-notice-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewsNoticeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsNoticeDetailComponent", function() { return NewsNoticeDetailComponent; });
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

var NewsNoticeDetailComponent = /** @class */ (function () {
    function NewsNoticeDetailComponent() {
    }
    NewsNoticeDetailComponent.prototype.ngOnInit = function () {
    };
    NewsNoticeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-notice-detail',
            template: __webpack_require__(/*! ./news-notice-detail.component.html */ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-notice-detail.component.scss */ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsNoticeDetailComponent);
    return NewsNoticeDetailComponent;
}());



/***/ }),

/***/ "./src/app/news-notice/news-notice-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/news-notice/news-notice-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewsNoticeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsNoticeRoutingModule", function() { return NewsNoticeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_notice_news_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-notice/news-notice.component */ "./src/app/news-notice/news-notice/news-notice.component.ts");
/* harmony import */ var _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-notice-detail/news-notice-detail.component */ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _news_notice_news_notice_component__WEBPACK_IMPORTED_MODULE_2__["NewsNoticeComponent"]
    },
    {
        path: 'detail',
        component: _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_3__["NewsNoticeDetailComponent"]
    },
];
var NewsNoticeRoutingModule = /** @class */ (function () {
    function NewsNoticeRoutingModule() {
    }
    NewsNoticeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NewsNoticeRoutingModule);
    return NewsNoticeRoutingModule;
}());



/***/ }),

/***/ "./src/app/news-notice/news-notice.module.ts":
/*!***************************************************!*\
  !*** ./src/app/news-notice/news-notice.module.ts ***!
  \***************************************************/
/*! exports provided: NewsNoticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsNoticeModule", function() { return NewsNoticeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_notice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-notice-routing.module */ "./src/app/news-notice/news-notice-routing.module.ts");
/* harmony import */ var _news_notice_news_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-notice/news-notice.component */ "./src/app/news-notice/news-notice/news-notice.component.ts");
/* harmony import */ var _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-notice-detail/news-notice-detail.component */ "./src/app/news-notice/news-notice-detail/news-notice-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewsNoticeModule = /** @class */ (function () {
    function NewsNoticeModule() {
    }
    NewsNoticeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _news_notice_news_notice_component__WEBPACK_IMPORTED_MODULE_3__["NewsNoticeComponent"],
                _news_notice_detail_news_notice_detail_component__WEBPACK_IMPORTED_MODULE_4__["NewsNoticeDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _news_notice_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsNoticeRoutingModule"]
            ]
        })
    ], NewsNoticeModule);
    return NewsNoticeModule;
}());



/***/ }),

/***/ "./src/app/news-notice/news-notice/news-notice.component.html":
/*!********************************************************************!*\
  !*** ./src/app/news-notice/news-notice/news-notice.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"news-notice-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n\n            <div class=\"title\"> News and Notices </div>\n\n          </div>\n          <div class=\"section-blurb\">\n            <div class=\"row\">\n\n              <div class=\"col-md-6 col-lg-6\">\n                <div class=\"blurb-item\"><a routerLink=\"/news-notice/detail\">\n\n                    <div class=\"blurb-title\"> test </div>\n\n\n                    <div class=\"blurb-duration\"><i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i><span>2020-06-26</span>\n                    </div>\n                  </a></div>\n              </div>\n              <div class=\"col-md-6 col-lg-6\">\n                <div class=\"blurb-item\"><a routerLink=\"/news-notice/detail\">\n\n                    <div class=\"blurb-title\"> Income Sources Compelled Villagers To Take Loan Due To\n                      Pandemic </div>\n\n\n                    <div class=\"blurb-duration\"><i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i><span>2020-06-26</span>\n                    </div>\n                  </a></div>\n              </div>\n              <div class=\"col-md-6 col-lg-6\">\n                <div class=\"blurb-item\"><a routerLink=\"/news-notice/detail\">\n\n                    <div class=\"blurb-title\"> Role of Federal Parliament more important during\n                      difficult time: Speaker Sapkota1 </div>\n\n\n                    <div class=\"blurb-duration\"><i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i><span>2020-06-18</span>\n                    </div>\n                  </a></div>\n              </div>\n              <div class=\"col-md-6 col-lg-6\">\n                <div class=\"blurb-item\"><a routerLink=\"/news-notice/detail\">\n\n                    <div class=\"blurb-title\"> Where the presence of the state is like zero1 </div>\n\n\n                    <div class=\"blurb-duration\"><i aria-hidden=\"true\" class=\"fa fa-clock-o\"></i><span>2020-06-12</span>\n                    </div>\n                  </a></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/news-notice/news-notice/news-notice.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/news-notice/news-notice/news-notice.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blurb-item:last-child {\n  margin-bottom: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9uZXdzLW5vdGljZS9uZXdzLW5vdGljZS9uZXdzLW5vdGljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1ub3RpY2UvbmV3cy1ub3RpY2UvbmV3cy1ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cmItaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/news-notice/news-notice/news-notice.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/news-notice/news-notice/news-notice.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsNoticeComponent", function() { return NewsNoticeComponent; });
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

var NewsNoticeComponent = /** @class */ (function () {
    function NewsNoticeComponent() {
    }
    NewsNoticeComponent.prototype.ngOnInit = function () {
    };
    NewsNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-notice',
            template: __webpack_require__(/*! ./news-notice.component.html */ "./src/app/news-notice/news-notice/news-notice.component.html"),
            styles: [__webpack_require__(/*! ./news-notice.component.scss */ "./src/app/news-notice/news-notice/news-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsNoticeComponent);
    return NewsNoticeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=news-notice-news-notice-module.js.map