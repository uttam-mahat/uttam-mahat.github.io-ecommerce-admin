(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["village-profile-village-profile-module"],{

/***/ "./src/app/village-profile/village-profile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/village-profile/village-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VillageProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageProfileRoutingModule", function() { return VillageProfileRoutingModule; });
/* harmony import */ var _village_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./village-profile.component */ "./src/app/village-profile/village-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _village_profile_component__WEBPACK_IMPORTED_MODULE_0__["VillageProfileComponent"]
    },
];
var VillageProfileRoutingModule = /** @class */ (function () {
    function VillageProfileRoutingModule() {
    }
    VillageProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VillageProfileRoutingModule);
    return VillageProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/village-profile/village-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/village-profile/village-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"village-profile-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 m-b-20\">\n        <div class=\"section-wrapper\">\n\n          <div class=\"section-title\">\n            <div class=\"title\"> Khumbu Rurual Development Comittee </div>\n          </div>\n          <div class=\"section-blurb --sm-blurb village-profile-links\">\n            <div class=\"blurb-detail\">\n\n              <div>\n                <p>Committees can have up to 10 members and must represent a variety of interest groups. They may also\n                  be elected on a geographical basis. These committees are a link between the municipality and the\n                  community.</p>\n              </div>\n              <ul>\n\n                <li><a href=\"#\"> Khumjung1 </a></li>\n                <li><a href=\"#\"> Kunde_(village)1 </a></li>\n                <li><a href=\"#\"> Test </a></li>\n              </ul>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 m-b-20\">\n\n        <div class=\"section-wrapper overflow-shadow slide-top\">\n          <div class=\"section-blurb blurb-overflow village-profile\">\n            <div class=\"blurb-detail\">\n              <div>\n                <h1> Khumjung1 </h1><img src=\"https://khumbuwebapi.paisamanager.com//image-1591947992603.jpeg\">\n                <div>\n                  <ol>\n                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus architecto saepe, est id eum\n                      officiis laborum illum sapiente animi! Voluptates maxime deserunt officia ex amet iusto. Iste\n                      consequatur ipsa recusandae?</li>\n                  </ol>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/village-profile/village-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/village-profile/village-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-blurb .blurb-detail img {\n  width: 100%;\n  margin-bottom: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC92aWxsYWdlLXByb2ZpbGUvdmlsbGFnZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlsbGFnZS1wcm9maWxlL3ZpbGxhZ2UtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWJsdXJiIC5ibHVyYi1kZXRhaWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/village-profile/village-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/village-profile/village-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: VillageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageProfileComponent", function() { return VillageProfileComponent; });
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

var VillageProfileComponent = /** @class */ (function () {
    function VillageProfileComponent() {
    }
    VillageProfileComponent.prototype.ngOnInit = function () {
    };
    VillageProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-village-profile',
            template: __webpack_require__(/*! ./village-profile.component.html */ "./src/app/village-profile/village-profile.component.html"),
            styles: [__webpack_require__(/*! ./village-profile.component.scss */ "./src/app/village-profile/village-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VillageProfileComponent);
    return VillageProfileComponent;
}());



/***/ }),

/***/ "./src/app/village-profile/village-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/village-profile/village-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: VillageProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageProfileModule", function() { return VillageProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _village_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./village-profile-routing.module */ "./src/app/village-profile/village-profile-routing.module.ts");
/* harmony import */ var _village_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./village-profile.component */ "./src/app/village-profile/village-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VillageProfileModule = /** @class */ (function () {
    function VillageProfileModule() {
    }
    VillageProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_village_profile_component__WEBPACK_IMPORTED_MODULE_3__["VillageProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _village_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["VillageProfileRoutingModule"]
            ]
        })
    ], VillageProfileModule);
    return VillageProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=village-profile-village-profile-module.js.map