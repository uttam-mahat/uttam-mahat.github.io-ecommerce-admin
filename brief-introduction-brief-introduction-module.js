(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brief-introduction-brief-introduction-module"],{

/***/ "./src/app/brief-introduction/brief-introduction-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BriefIntroductionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefIntroductionRoutingModule", function() { return BriefIntroductionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brief_introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brief-introduction.component */ "./src/app/brief-introduction/brief-introduction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _brief_introduction_component__WEBPACK_IMPORTED_MODULE_2__["BriefIntroductionComponent"]
    },
];
var BriefIntroductionRoutingModule = /** @class */ (function () {
    function BriefIntroductionRoutingModule() {
    }
    BriefIntroductionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BriefIntroductionRoutingModule);
    return BriefIntroductionRoutingModule;
}());



/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Brief Intro and Live Image Section Start -->\n\n<section class=\"brief-intro-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              <p>Title</p>\n\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto\">\n            <div class=\"blurb-detail\">\n              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, itaque! Aut sapiente dignissimos,\n                itaque veniam expedita facere, maiores dolor eius illo ratione voluptate, voluptatibus totam\n                repudiandae. Similique officiis numquam et!</p>\n              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, itaque! Aut sapiente dignissimos,\n                itaque veniam expedita facere, maiores dolor eius illo ratione voluptate, voluptatibus totam\n                repudiandae. Similique officiis numquam et!</p>\n              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, itaque! Aut sapiente dignissimos,\n                itaque veniam expedita facere, maiores dolor eius illo ratione voluptate, voluptatibus totam\n                repudiandae. Similique officiis numquam et!</p>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"section-wrapper\">\n          <div class=\"img-wrapper\">\n            <img alt=\"img\" class=\"img\" src=\"../../assets/img/everest.jpg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Brief Intro and Live Image Section Closed -->\n"

/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-wrapper .img-wrapper {\n  width: 100%;\n  height: 350px; }\n\n@media only screen and (max-width: 767.98px) {\n  .section-wrapper .img-wrapper {\n    max-width: 350px;\n    height: 350px;\n    margin-top: 14px;\n    margin-left: auto;\n    margin-right: auto; } }\n\n@media only screen and (max-width: 380px) {\n  .section-wrapper .img-wrapper {\n    height: auto; } }\n\n@media only screen and (min-width: 768px) {\n  .section-wrapper .img-wrapper {\n    height: 210px; } }\n\n@media only screen and (min-width: 991px) {\n  .section-wrapper .img-wrapper {\n    height: 281px; } }\n\n@media only screen and (min-width: 1200px) {\n  .section-wrapper .img-wrapper {\n    height: 350px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9icmllZi1pbnRyb2R1Y3Rpb24vYnJpZWYtaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBLEVBQ25COztBQUdIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFHSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2JyaWVmLWludHJvZHVjdGlvbi9icmllZi1pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zZWN0aW9uLXdyYXBwZXIgLmltZy13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMjEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAyODFweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.component.ts ***!
  \********************************************************************/
/*! exports provided: BriefIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefIntroductionComponent", function() { return BriefIntroductionComponent; });
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

var BriefIntroductionComponent = /** @class */ (function () {
    function BriefIntroductionComponent() {
    }
    BriefIntroductionComponent.prototype.ngOnInit = function () {
    };
    BriefIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brief-introduction',
            template: __webpack_require__(/*! ./brief-introduction.component.html */ "./src/app/brief-introduction/brief-introduction.component.html"),
            styles: [__webpack_require__(/*! ./brief-introduction.component.scss */ "./src/app/brief-introduction/brief-introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BriefIntroductionComponent);
    return BriefIntroductionComponent;
}());



/***/ }),

/***/ "./src/app/brief-introduction/brief-introduction.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/brief-introduction/brief-introduction.module.ts ***!
  \*****************************************************************/
/*! exports provided: BriefIntroductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefIntroductionModule", function() { return BriefIntroductionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brief_introduction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brief-introduction-routing.module */ "./src/app/brief-introduction/brief-introduction-routing.module.ts");
/* harmony import */ var _brief_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brief-introduction.component */ "./src/app/brief-introduction/brief-introduction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BriefIntroductionModule = /** @class */ (function () {
    function BriefIntroductionModule() {
    }
    BriefIntroductionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_brief_introduction_component__WEBPACK_IMPORTED_MODULE_3__["BriefIntroductionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _brief_introduction_routing_module__WEBPACK_IMPORTED_MODULE_2__["BriefIntroductionRoutingModule"]
            ]
        })
    ], BriefIntroductionModule);
    return BriefIntroductionModule;
}());



/***/ })

}]);
//# sourceMappingURL=brief-introduction-brief-introduction-module.js.map