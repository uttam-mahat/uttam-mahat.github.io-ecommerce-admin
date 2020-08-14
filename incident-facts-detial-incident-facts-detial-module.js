(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incident-facts-detial-incident-facts-detial-module"],{

/***/ "./src/app/incident-facts-detial/incident-facts-detial-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/incident-facts-detial/incident-facts-detial-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: IncidentFactsDetialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentFactsDetialRoutingModule", function() { return IncidentFactsDetialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incident_facts_detial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incident-facts-detial.component */ "./src/app/incident-facts-detial/incident-facts-detial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _incident_facts_detial_component__WEBPACK_IMPORTED_MODULE_2__["IncidentFactsDetialComponent"]
    },
];
var IncidentFactsDetialRoutingModule = /** @class */ (function () {
    function IncidentFactsDetialRoutingModule() {
    }
    IncidentFactsDetialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IncidentFactsDetialRoutingModule);
    return IncidentFactsDetialRoutingModule;
}());



/***/ }),

/***/ "./src/app/incident-facts-detial/incident-facts-detial.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/incident-facts-detial/incident-facts-detial.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- incident facts detail Section Start -->\n\n<section class=\"incident-facts-detail-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"section-wrapper\">\n          <div class=\"section-title\">\n            <div class=\"title\">\n              <p>incident facts detail</p>\n            </div>\n          </div>\n          <div class=\"section-blurb mn-h-auto\">\n            <div class=\"blurb-detail\">\n              <div class=\"table-wrap\">\n                <div class=\"table-responsive dataTables_wrapper\">\n                  <table #dataTable class=\"table table-hover dataTable mb-30 cell-border\" id=\"support_table5\">\n                    <thead>\n                      <tr>\n                        <th rowspan=\"2\">S.No.</th>\n                        <th rowspan=\"2\">District</th>\n                        <th rowspan=\"2\">VDC/Municipality</th>\n                        <th rowspan=\"2\">Ward No.</th>\n                        <th rowspan=\"2\">Incident Place</th>\n\n                        <th rowspan=\"2\">Incident</th>\n                        <th rowspan=\"2\">Incident Date</th>\n                        <th rowspan=\"2\">Impacted </th>\n                        <th rowspan=\"2\">Family Head Name</th>\n                        <th rowspan=\"2\">Family Members(No.)</th>\n\n                        <th colspan=\"4\" class=\"text-center\">Death</th>\n\n                        <th colspan=\"4\" class=\"text-center\"> Missing People</th>\n\n                        <th colspan=\"4\" class=\"text-center\"> Injured Person</th>\n\n                        <th colspan=\"4\" class=\"text-center\"> Displaced</th>\n\n                        <th rowspan=\"2\">Property Loss(Yes/No)</th>\n                        <th colspan=\"2\" class=\"text-center\"> House Damage</th>\n\n                        <th rowspan=\"2\">Cattles Loss(Yes/No)</th>\n                        <th colspan=\"4\" class=\"text-center\"> Cattles Loss</th>\n\n                        <th rowspan=\"2\">Estimated Loss</th>\n                        <th rowspan=\"2\">Remarks</th>\n                      </tr>\n                      <tr>\n                        <th>Death Male</th>\n                        <th>Death Female</th>\n                        <th>Death Children</th>\n                        <th>Total Death</th>\n\n                        <th>Missing Male</th>\n                        <th>Missing Female</th>\n                        <th>Missing Children</th>\n                        <th>Total Missing People</th>\n\n                        <th>Injured Male</th>\n                        <th>Injured Female</th>\n                        <th>Injured Children</th>\n                        <th>Total Injured Person</th>\n\n                        <th>Displaced Male</th>\n                        <th>Displaced Female</th>\n                        <th>Displaced Children</th>\n                        <th>Total Displaced</th>\n\n                        <th>Fully Damaged</th>\n                        <th>Partially Damaged</th>\n\n                        <th>Milking</th>\n                        <th>Non Milking</th>\n                        <th>Others</th>\n                        <th>Total Cattle Loss</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>8</td>\n                        <td>Parsa</td>\n                        <td>Birgunj Metropolitan City</td>\n                        <td>3</td>\n                        <td>Koniya</td>\n\n                        <td>Heavy Rainfall</td>\n                        <td>2020-08-12</td>\n                        <td>Personnel</td>\n                        <td>Ram Yadav</td>\n                        <td>6</td>\n\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n\n                        <td>0</td>\n                        <td>1</td>\n                        <td>0</td>\n                        <td>1</td>\n\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n\n                        <td>Yes</td>\n                        <td>Yes</td>\n                        <td>No</td>\n\n\n                        <td>No</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n\n                        <td>Rs. 150,000</td>\n                        <td>This is a remarks..Ram Prasad Mahatto</td>\n                      </tr>\n                    </tbody>\n                    <tfoot>\n                      <tr>\n                        <td colspan=\"10\">Total</td>\n\n                        <td>22</td>\n                        <td>3</td>\n                        <td>5</td>\n                        <td>3</td>\n\n                        <td>3</td>\n                        <td>1</td>\n                        <td>0</td>\n                        <td>1</td>\n\n                        <td>0</td>\n                        <td>4</td>\n                        <td>0</td>\n                        <td>0</td>\n\n                        <td>1</td>\n                        <td>0</td>\n                        <td>5</td>\n                        <td>0</td>\n\n                        <td>Yes</td>\n                        <td>Yes</td>\n                        <td>No</td>\n\n\n                        <td>No</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n                        <td>0</td>\n\n                        <td>Rs. 150,000</td>\n\n                        <td>&nbsp;</td>\n                      </tr>\n                    </tfoot>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- incident facts detail Section Closed -->\n"

/***/ }),

/***/ "./src/app/incident-facts-detial/incident-facts-detial.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/incident-facts-detial/incident-facts-detial.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead th,\ntable.dataTable thead td,\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border: 1px solid #dddddd; }\n\ntable.dataTable tfoot tr {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0RSUi1DbGllbnQvc3JjL2FwcC9pbmNpZGVudC1mYWN0cy1kZXRpYWwvaW5jaWRlbnQtZmFjdHMtZGV0aWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmNpZGVudC1mYWN0cy1kZXRpYWwvaW5jaWRlbnQtZmFjdHMtZGV0aWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIHRkLFxudGFibGUuZGF0YVRhYmxlIHRmb290IHRoLFxudGFibGUuZGF0YVRhYmxlIHRmb290IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRmb290IHRyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/incident-facts-detial/incident-facts-detial.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/incident-facts-detial/incident-facts-detial.component.ts ***!
  \**************************************************************************/
/*! exports provided: IncidentFactsDetialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentFactsDetialComponent", function() { return IncidentFactsDetialComponent; });
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

var IncidentFactsDetialComponent = /** @class */ (function () {
    function IncidentFactsDetialComponent() {
    }
    IncidentFactsDetialComponent.prototype.ngOnInit = function () {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.dataTable();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IncidentFactsDetialComponent.prototype, "table", void 0);
    IncidentFactsDetialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident-facts-detial',
            template: __webpack_require__(/*! ./incident-facts-detial.component.html */ "./src/app/incident-facts-detial/incident-facts-detial.component.html"),
            styles: [__webpack_require__(/*! ./incident-facts-detial.component.scss */ "./src/app/incident-facts-detial/incident-facts-detial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IncidentFactsDetialComponent);
    return IncidentFactsDetialComponent;
}());



/***/ }),

/***/ "./src/app/incident-facts-detial/incident-facts-detial.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/incident-facts-detial/incident-facts-detial.module.ts ***!
  \***********************************************************************/
/*! exports provided: IncidentFactsDetialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentFactsDetialModule", function() { return IncidentFactsDetialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _incident_facts_detial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incident-facts-detial-routing.module */ "./src/app/incident-facts-detial/incident-facts-detial-routing.module.ts");
/* harmony import */ var _incident_facts_detial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incident-facts-detial.component */ "./src/app/incident-facts-detial/incident-facts-detial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IncidentFactsDetialModule = /** @class */ (function () {
    function IncidentFactsDetialModule() {
    }
    IncidentFactsDetialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_incident_facts_detial_component__WEBPACK_IMPORTED_MODULE_3__["IncidentFactsDetialComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _incident_facts_detial_routing_module__WEBPACK_IMPORTED_MODULE_2__["IncidentFactsDetialRoutingModule"]
            ]
        })
    ], IncidentFactsDetialModule);
    return IncidentFactsDetialModule;
}());



/***/ })

}]);
//# sourceMappingURL=incident-facts-detial-incident-facts-detial-module.js.map