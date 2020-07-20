(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-settings-settings-module"],{

/***/ "./src/app/modules/settings/departments/department-list/department-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/settings/departments/department-list/department-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row row-flex\">\n    <div class=\"col-lg-9 col-md-9 col-sm-12 col-12\">\n      <div class=\"card card-box\">\n        <div class=\"card-head\">\n          <div class=\"card-header-wrapper\">\n            <div class=\"breadcrumb-header\">\n              <header>Department Title</header>\n              <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\">\n                    parentDepartment.name</li>\n                </ol>\n              </nav>\n            </div>\n            <div class=\"tools\">\n              <button id=\"addRow\" class=\"btn btn-info\" (click)=\"onBackButtonClick()\">\n                <i class=\"fa fa-chevron-left\"></i>\n                Back\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-wrap\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-hover mb-30\" id=\"support_table5\">\n                <thead>\n                  <tr>\n                    <th>names</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"hint--top\" aria-label=\"Add Department\">department.name</td>\n                  </tr>\n                  <tr>\n                    <td class=\"txt-full-width\">\n                      <form [formGroup]=\"subDepartmentForm\">\n                        <div class=\"add-department-wrapper\">\n                          <div class=\"mdl-textfield\">\n                            <label for=\"departmentName\">Department Name</label>\n                            <input class=\"mdl-textfield_input\" type=\"text\" id=\"departmentName\" formControlName=\"name\">\n                          </div>\n                          <div class=\"add-btn-group\">\n                            <button class=\"btn mdl-button--raised bg-success\" type=\"button\">\n                              <i class=\"material-icons add-icon\">add</i>Add Department</button>\n                          </div>\n                        </div>\n                      </form>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/settings/departments/department-list/department-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/settings/departments/department-list/department-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-department-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.add-department-wrapper .add-btn-group .btn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.add-department-wrapper .mdl-textfield {\n  width: 50%; }\n\n.add-department-wrapper .add-btn-group {\n  width: 40%;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.breadcrumb-header nav {\n  background: transparent;\n  padding: 0 0 0 20px; }\n\n.breadcrumb-header nav ol.breadcrumb {\n  background: transparent;\n  padding: 0;\n  margin: 0; }\n\n.breadcrumb-header nav ol.breadcrumb li.breadcrumb-item {\n  font-size: 12px;\n  color: #707070;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  font-weight: 400; }\n\n.breadcrumb-item + .breadcrumb-item::before {\n  content: \">\"; }\n\ntd {\n  display: block;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0lDQ08gRFJSL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9kZXBhcnRtZW50cy9kZXBhcnRtZW50LWxpc3QvZGVwYXJ0bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVU7RUFDVix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NldHRpbmdzL2RlcGFydG1lbnRzL2RlcGFydG1lbnQtbGlzdC9kZXBhcnRtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWRlcGFydG1lbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYWRkLWRlcGFydG1lbnQtd3JhcHBlciAuYWRkLWJ0bi1ncm91cCAuYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC1kZXBhcnRtZW50LXdyYXBwZXIgLm1kbC10ZXh0ZmllbGQge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYWRkLWRlcGFydG1lbnQtd3JhcHBlciAuYWRkLWJ0bi1ncm91cCB7XG4gIHdpZHRoOiA0MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnJlYWRjcnVtYi1oZWFkZXIgbmF2IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG59XG5cbi5icmVhZGNydW1iLWhlYWRlciBuYXYgb2wuYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5icmVhZGNydW1iLWhlYWRlciBuYXYgb2wuYnJlYWRjcnVtYiBsaS5icmVhZGNydW1iLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCI+XCI7XG59XG5cbnRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/settings/departments/department-list/department-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/settings/departments/department-list/department-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DepartmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentListComponent", function() { return DepartmentListComponent; });
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../department.service */ "./src/app/modules/settings/departments/department.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepartmentListComponent = /** @class */ (function () {
    function DepartmentListComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.parentDepartmentId = [];
        this.departmentTitle = "Departments";
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        this.parentDepartmentId.push({ id: 0, name: 'Departments' });
    };
    DepartmentListComponent.prototype.addSubDepartment = function () {
        var index = this.parentDepartmentId.length - 1;
    };
    DepartmentListComponent.prototype.onDepartmentClick = function (id, departmentName) {
    };
    DepartmentListComponent.prototype.onBackButtonClick = function () {
    };
    DepartmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department-list',
            template: __webpack_require__(/*! ./department-list.component.html */ "./src/app/modules/settings/departments/department-list/department-list.component.html"),
            providers: [_department_service__WEBPACK_IMPORTED_MODULE_0__["DepartmentService"]],
            styles: [__webpack_require__(/*! ./department-list.component.scss */ "./src/app/modules/settings/departments/department-list/department-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_department_service__WEBPACK_IMPORTED_MODULE_0__["DepartmentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/modules/settings/settings.component.ts");
/* harmony import */ var _departments_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departments/department-list/department-list.component */ "./src/app/modules/settings/departments/department-list/department-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
    },
    {
        path: 'department-list',
        component: _departments_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentListComponent"]
    },
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- page top bar start -->\n\n  <div class=\"page-bar\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <header>Settings</header>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- page top bar close -->\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"profile-tab-box\">\n        <ul class=\"nav \">\n          <li class=\"nav-item tab-all\">\n            <a class=\"nav-link active show\" href=\"#userManagement\" data-toggle=\"tab\">\n              user management\n            </a>\n          </li>\n          <li class=\"nav-item tab-all\">\n            <a class=\"nav-link\" href=\"#rolesPermission\" data-toggle=\"tab\">\n              Roles and persmission\n            </a>\n          </li>\n          <li class=\"nav-item tab-all\">\n            <a class=\"nav-link\" href=\"#fiscalYear\" data-toggle=\"tab\">\n              Fiscal Year\n            </a>\n          </li>\n        </ul>\n      </div>\n      <!-- <div class=\"white-box\"> -->\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fontawesome-demo active show\" id=\"userManagement\">\n          <div id=\"user-management\" class=\"user-management\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <ul class=\"nav sub-tabs nav-justified p-t-10\">\n                  <li class=\"nav-item tab-all\">\n                    <a class=\"nav-link\" href=\"#gaupalikaStaff\" data-toggle=\"tab\">\n                      Internal User\n                    </a>\n                  </li>\n                </ul>\n                <div class=\"white-box\">\n                  <div class=\"tab-content\">\n                    <div class=\"tab-pane active show\" id=\"gaupalikaStaff\">\n                      <div id=\"user-info\" class=\"user-info\">\n                        <div class=\"col-md-12\">\n                          <!-- <div class=\"row p-b-20\">\n                            <div class=\"col-md-12 col-sm-12 col-12 d-flex justify-content-end\">\n                              <button class=\"btn btn-info\" (click)=\"syncPalika()\">Sync ePalika User</button>\n                            </div>\n                          </div> -->\n                          <div class=\"table-wrap\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table table-hover mb-30\" id=\"support_table5\">\n                                <thead>\n                                  <tr role=\"row\">\n                                    <th>User/Staff ID</th>\n                                    <th>Name</th>\n                                    <th>Username</th>\n                                    <th>User Type</th>\n                                    <th>Email</th>\n                                    <th>Role</th>\n                                    <th>Action</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td>staffCode</td>\n                                    <td>firstName middleName lastName</td>\n                                    <td>username</td>\n                                    <td>appUserType</td>\n                                    <td>emailAddress</td>\n                                    <td>role</td>\n                                    <td>\n                                      <button class=\"btn btn-tbl-edit btn-xs hint--top\" aria-label=\"edit\"\n                                        data-toggle=\"modal\" data-target=\"#myModal\">\n                                        <i class=\"fa fa-pencil-alt\"></i>\n                                      </button>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"rolesPermission\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"card-box p-20\">\n                <div class=\"row p-b-20\">\n                  <div class=\"col-md-12 col-sm-12 col-12\">\n                    <div class=\"btn-group\">\n                      <button routerLink=\"/role-add\" id=\"addRow\" class=\"btn btn-info\">\n                        Add new role\n                        <i class=\"fa fa-plus\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"table-wrap\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover mb-30\" id=\"support_table5\">\n                      <thead>\n                        <tr>\n                          <th>role</th>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>Admin</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>External</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>Dummy</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>Staff Members</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>Administrative Staff</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>CAO</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>Test</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                        <tr>\n                          <td>demo test</td>\n                          <td><button aria-label=\"edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                              routerLink=\"/role-edit\"><i class=\"fa fa-pencil-alt\"></i></button><button\n                              aria-label=\"delete\" class=\"btn btn-tbl-delete btn-xs hint--top\"><i\n                                class=\"fa fa-trash-alt\"></i></button></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"card-box p-20\">\n                <div class=\"row p-b-20\">\n                  <div class=\"col-md-12 col-sm-12 col-12\">\n                    <div class=\"btn-group\">\n                      <button routerLink=\"/role-permission-add\" id=\"addRow\" class=\"btn btn-info\">\n                        Add permission for role\n                        <i class=\"fa fa-plus\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\"><label for=\"role\">Select Role</label><select class=\"form-control\" id=\"role\">\n                    <option disabled=\"\" selected=\"\">छनौट गर्नुहोस्...</option>\n                    <option value=\"2\">Admin</option>\n                    <option value=\"3\">External</option>\n                    <option value=\"4\">Dummy</option>\n                    <option value=\"5\">Staff Members</option>\n                    <option value=\"1002\">Administrative Staff</option>\n                    <option value=\"1003\">CAO</option>\n                    <option value=\"1004\">Test</option>\n                    <option value=\"1005\">demo test</option>\n                  </select></div>\n                <div class=\"table-wrap fixed-h\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover mb-30\" id=\"support_table5\">\n                      <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>permission List</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>i+1</td>\n                          <td>rolePermission.description</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"fiscalYear\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"card-box p-20\">\n                <form class=\"validate-form\" [formGroup]=\"fiscalYearForm\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-4\">\n                      <div class=\"mdl-textfield mdl-js-textfield txt-full-width pb-3\">\n                        <label for=\"startDate\">Start Date</label>\n                        <input class=\"mdl-textfield_input\" id=\"startDate\" placeholder=\"Start Date\" type=\"number\"\n                          formControlName=\"startDate\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4\">\n                      <div class=\"mdl-textfield mdl-js-textfield txt-full-width pb-3\">\n                        <label for=\"endDate\">End Date</label>\n                        <input class=\"mdl-textfield_input\" id=\"endDate\" placeholder=\"End Date\" type=\"number\"\n                          formControlName=\"endDate\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4\">\n                      <div class=\"mdl-textfield mdl-js-textfield txt-full-width pb-3\">\n                        <div class=\"checkbox\">\n                          <label><input class=\"mr-2\" type=\"checkbox\" value=\"true\" checked\n                              formControlName=\"isCurrent\">Current\n                            Year</label>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-12 p-b-10\">\n                      <button class=\"mdl-button mdl-js-button mdl-button--raised fill-primary\" type=\"button\"\n                        (click)=\"submitFiscalYearForm()\">Submit\n                      </button>\n                    </div>\n                  </div>\n                </form>\n                <div class=\"table-wrap\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover mb-30\" id=\"support_table5\">\n                      <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>आर्थिक वर्ष</th>\n                          <th>Current Fiscal Year</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>i+1</td>\n                          <td>\n                            fiscalYear.fiscalYear\n                          </td>\n                          <td>\n                            <span>हो</span>\n                            <span>होईन</span>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- </div> -->\n\n    </div>\n\n  </div>\n\n  <!-- The Modal -->\n  <div class=\"modal fade\" id=\"myModal\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content p-0\">\n\n        <!-- Modal body -->\n        <div class=\"modal-body p-0\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"card-box\">\n                <div class=\"card-head\">\n                  <header>Staff Information</header>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"card-body row\">\n                  <div class=\"col-lg-12 p-t-20\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                      <label for=\"name\">Name</label>\n                      <input class=\"mdl-textfield_input\" id=\"name\" disabled value=\"his.userFullName\">\n                    </div>\n                  </div>\n                  <form id=\"individualHouseForm\" class=\"individualHouseForm\" [formGroup]=\"roleUpdateForm\">\n                    <div class=\"col-lg-12 p-t-20\">\n                      <div class=\"select-input mdl-textfield txt-full-width\">\n                        <label for=\"role\" class=\"floating-label\">Role</label>\n                        <select class=\"mdl-textfield_input\" id=\"role\" formControlName=\"roleId\">\n                          <option>छनौट गर्नुहोस्...</option>\n                          <option value=\"role.id\">roleName</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-12 p-t-20 text-center\">\n                      <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised fill-primary\">\n                        सुरक्षित गर्नुहोस\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/settings/settings.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrap.fixed-h {\n  height: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.table-wrap.fixed-h::-webkit-scrollbar-track {\n  box-shadow: 0 0 6px rgba(196, 196, 196, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5; }\n\n.table-wrap.fixed-h::-webkit-scrollbar {\n  width: 4px;\n  height: 6px;\n  background-color: #F5F5F5; }\n\n.table-wrap.fixed-h::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(95, 95, 95, 0.3);\n  background-color: #555; }\n\n.modal-header {\n  padding: 0px; }\n\n.modal-content {\n  border-radius: 4px; }\n\n.close {\n  margin-top: 12px;\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0lDQ08gRFJSL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBRUUsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1CQUFtQjtFQUVuQiwrQ0FBK0M7RUFDL0Msc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS13cmFwLmZpeGVkLWgge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRhYmxlLXdyYXAuZml4ZWQtaDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLnRhYmxlLXdyYXAuZml4ZWQtaDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLnRhYmxlLXdyYXAuZml4ZWQtaDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSg5NSwgOTUsIDk1LCAwLjMpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoOTUsIDk1LCA5NSwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jbG9zZSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/modules/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/modules/settings/settings-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/modules/settings/settings.component.ts");
/* harmony import */ var _departments_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments/department-list/department-list.component */ "./src/app/modules/settings/departments/department-list/department-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
                _departments_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-settings-settings-module.js.map