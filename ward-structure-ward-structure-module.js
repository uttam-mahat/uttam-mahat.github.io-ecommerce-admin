(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ward-structure-ward-structure-module"],{

/***/ "./src/app/ward-structure/ward-structure-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ward-structure/ward-structure-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: WardStructureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WardStructureRoutingModule", function() { return WardStructureRoutingModule; });
/* harmony import */ var _ward_structure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ward-structure.component */ "./src/app/ward-structure/ward-structure.component.ts");
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
        component: _ward_structure_component__WEBPACK_IMPORTED_MODULE_0__["WardStructureComponent"]
    },
];
var WardStructureRoutingModule = /** @class */ (function () {
    function WardStructureRoutingModule() {
    }
    WardStructureRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WardStructureRoutingModule);
    return WardStructureRoutingModule;
}());



/***/ }),

/***/ "./src/app/ward-structure/ward-structure.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ward-structure/ward-structure.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ward-structure-page\">\n  <div class=\"container\">\n\n    <div class=\"row mb-44 organizationStructure-wrapper\">\n      <div class=\"col-md-12 col-lg-8\">\n        <div class=\"section-wrapper mb-4\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n\n              <p>Organizational organogram</p>\n\n\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto\">\n            <div class=\"blurb-detail\">\n\n              <div>\n                <p>Organizational organogram forKhumbu Pasanglhamu Rural Municipality</p>\n                <p><strong> Elected Personnels</strong></p>\n                <p>Mr. Laxman Adhikari, Ward Chairperson</p>\n                <p>Ms. Pasang Nuru Sherpa, Ward Member</p>\n                <p>Ms. Kirimaya Biswakarma, Ward Member</p>\n                <p>Mr. Phura Cheten Sherpa, Ward Member</p>\n                <p><strong>\n                    Officials</strong></p>\n                <p>Khayam Nath Dangal, Ward Secreatery</p>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-lg-4\">\n        <div class=\"section-wrapper\">\n          <div class=\"img-wrapper mb-0\"><img alt=\"khumbu\"\n              src=\"https://khumbuwebapi.paisamanager.com/image-1593151974507.png\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mb-44\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper overflow-shadow\">\n          <div class=\"section-title\">\n\n            <div class=\"title\"> Officials </div>\n\n          </div>\n          <div class=\"section-blurb officials-card blurb-overflow\">\n\n            <div class=\"blurb-card col-lg-3 col-md-6\">\n              <div class=\"blurb-img\"><a><img alt=\"khumbu\" class=\"organizationStructure\"\n                    src=\"https://khumbuwebapi.paisamanager.com/image-1593150957882.jpeg\"></a></div>\n              <div class=\"blurb-body\">\n                <div class=\"blurb-title\">\n                  <a>Laxman Adhikari </a>\n\n\n                </div>\n\n                <div class=\"blurb-designation\"> Ward Chairperson </div>\n\n\n                <div class=\"mail-address\"><a href=\"mailto: off.email\">shar.khumbu@gmail.com</a></div>\n                <div class=\"phone-number\"><a href=\"tel: off.phoneNumber\">9801842344</a></div>\n              </div>\n            </div>\n            <div class=\"blurb-card col-lg-3 col-md-6\">\n              <div class=\"blurb-img\"><a><img alt=\"khumbu\" class=\"organizationStructure\"\n                    src=\"https://khumbuwebapi.paisamanager.com/image-1593151166088.png\"></a></div>\n              <div class=\"blurb-body\">\n                <div class=\"blurb-title\">\n                  <a>Pasang Nuru Sherpa</a>\n\n\n                </div>\n\n                <div class=\"blurb-designation\"> Ward Member </div>\n\n\n                <div class=\"mail-address\"><a href=\"mailto: off.email\">pasang@gmail.com</a></div>\n                <div class=\"phone-number\"><a href=\"tel: off.phoneNumber\">9801842364</a></div>\n              </div>\n            </div>\n            <div class=\"blurb-card col-lg-3 col-md-6\">\n              <div class=\"blurb-img\"><a><img alt=\"khumbu\" class=\"organizationStructure\"\n                    src=\"https://khumbuwebapi.paisamanager.com/image-1593151478625.png\"></a></div>\n              <div class=\"blurb-body\">\n                <div class=\"blurb-title\">\n                  <a>Pura Cheten Sherpa</a>\n\n\n                </div>\n\n                <div class=\"blurb-designation\"> Ward Member </div>\n\n\n                <div class=\"mail-address\"><a href=\"mailto: off.email\">test@gmail.com</a></div>\n                <div class=\"phone-number\"><a href=\"tel: off.phoneNumber\">9801842365</a></div>\n              </div>\n            </div>\n            <div class=\"blurb-card col-lg-3 col-md-6\">\n              <div class=\"blurb-img\"><a><img alt=\"khumbu\" class=\"organizationStructure\"\n                    src=\"https://khumbuwebapi.paisamanager.com/image-1593431363016.png\"></a></div>\n              <div class=\"blurb-body\">\n                <div class=\"blurb-title\">\n                  <a>test</a>\n\n\n                </div>\n\n                <div class=\"blurb-designation\"> test </div>\n\n\n                <div class=\"mail-address\"><a href=\"mailto: off.email\">gh@gmail.com</a>\n                </div>\n                <div class=\"phone-number\"><a href=\"tel: off.phoneNumber\">9345634</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mb-44 ward-committee-wrapper\">\n      <div class=\"col-md-12 col-lg-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n\n              <p>Ward Committees</p>\n\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto\">\n\n            <div class=\"blurb-detail mb-4\">\n\n              <div class=\"heading\">Education Committee</div>\n\n\n\n              <div>\n                <p><strong>Education Committee Members</strong></p>\n                <ul>\n                  <li>Laxman Adhikari, Chairperson</li>\n                  <li>Kami Sherpa, Member</li>\n                  <li>Phura Sherpa, Member</li>\n                </ul>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/ward-structure/ward-structure.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ward-structure/ward-structure.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-44 {\n  margin-bottom: 44px; }\n\n.officials-card .blurb-title {\n  margin-bottom: 8px; }\n\n.organizationStructure-wrapper .img-wrapper {\n  height: unset; }\n\n.organizationStructure-wrapper .img-wrapper img {\n  height: unset; }\n\n.officials-card .blurb-card {\n  margin: 10px 0 14px; }\n\n.ward-committee-wrapper .blurb-detail .heading {\n  margin-bottom: 4px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC93YXJkLXN0cnVjdHVyZS93YXJkLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dhcmQtc3RydWN0dXJlL3dhcmQtc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1iLTQ0IHtcbiAgbWFyZ2luLWJvdHRvbTogNDRweDtcbn1cblxuLm9mZmljaWFscy1jYXJkIC5ibHVyYi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm9yZ2FuaXphdGlvblN0cnVjdHVyZS13cmFwcGVyIC5pbWctd3JhcHBlciB7XG4gIGhlaWdodDogdW5zZXQ7XG59XG5cbi5vcmdhbml6YXRpb25TdHJ1Y3R1cmUtd3JhcHBlciAuaW1nLXdyYXBwZXIgaW1nIHtcbiAgaGVpZ2h0OiB1bnNldDtcbn1cblxuLm9mZmljaWFscy1jYXJkIC5ibHVyYi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTRweDtcbn1cblxuLndhcmQtY29tbWl0dGVlLXdyYXBwZXIgLmJsdXJiLWRldGFpbCAuaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ward-structure/ward-structure.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ward-structure/ward-structure.component.ts ***!
  \************************************************************/
/*! exports provided: WardStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WardStructureComponent", function() { return WardStructureComponent; });
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

var WardStructureComponent = /** @class */ (function () {
    function WardStructureComponent() {
    }
    WardStructureComponent.prototype.ngOnInit = function () {
    };
    WardStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ward-structure',
            template: __webpack_require__(/*! ./ward-structure.component.html */ "./src/app/ward-structure/ward-structure.component.html"),
            styles: [__webpack_require__(/*! ./ward-structure.component.scss */ "./src/app/ward-structure/ward-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WardStructureComponent);
    return WardStructureComponent;
}());



/***/ }),

/***/ "./src/app/ward-structure/ward-structure.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ward-structure/ward-structure.module.ts ***!
  \*********************************************************/
/*! exports provided: WardStructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WardStructureModule", function() { return WardStructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ward_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ward-structure-routing.module */ "./src/app/ward-structure/ward-structure-routing.module.ts");
/* harmony import */ var _ward_structure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ward-structure.component */ "./src/app/ward-structure/ward-structure.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WardStructureModule = /** @class */ (function () {
    function WardStructureModule() {
    }
    WardStructureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ward_structure_component__WEBPACK_IMPORTED_MODULE_3__["WardStructureComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ward_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__["WardStructureRoutingModule"]
            ]
        })
    ], WardStructureModule);
    return WardStructureModule;
}());



/***/ })

}]);
//# sourceMappingURL=ward-structure-ward-structure-module.js.map