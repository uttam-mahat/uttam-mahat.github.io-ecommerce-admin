(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-staff-staff-module"],{

/***/ "./src/app/modules/staff/staff-add/staff-add.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/staff/staff-add/staff-add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- page top bar start -->\n\n  <div class=\"page-bar\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <a routerLink=\"/staff\" id=\"panel-button\" class=\"mdl-button mdl-button--icon collapsed\">\n              <i class=\"material-icons\">arrow_back_ios</i>\n            </a>\n            <header>Add Staff information</header>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- page top bar close -->\n\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n      <div class=\"card-box\">\n        <div class=\"card-head\">\n          <header>व्यक्तिगत बिबरण</header>\n        </div>\n        <div class=\"card-body row\">\n          <form id=\"staffAddForm\" class=\"staffAddForm\" [formGroup]=\"staffForm\">\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"file-upload-wrapper\">\n                <img src=\"../../../assets/img/default.jpg\" id=\"profile-img-tag\" />\n\n                <div class=\"col-lg-4\">\n                  <label class=\"control-label\" for=\"customFile\">प्रोफाइल फोटो </label>\n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input profilePhoto\" id=\"customFile\"\n                      accept=\"image/gif, image/jpeg, image/png\" (change)=\"onProfilePictureSelected($event)\">\n                    <label class=\"custom-file-label\" for=\"customFile\">फाइल छनौट गर्नुहोस</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enFirstName\">First Name</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"enFirstName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enMiddleName\">Middle Name</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"enMiddleName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enLastName\">Last Name</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"enLastName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npFirstName\">पहिलो नाम</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"npFirstName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npMiddleName\">विचको नाम</label>\n                <input class=\"mdl-textfield_input\" value=\"छोसाङ\" type=\"text\" id=\"npMiddleName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npLastName\">थर</label>\n                <input class=\"mdl-textfield_input\" value=\"शेर्पा\" type=\"text\" id=\"npLastName\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npDOB\">जन्म मिति(BS)</label>\n                <input class=\"mdl-textfield_input\" type=\"date\" placeholder=\"DD/MM/YYYY(eg. 24/12/2074)\" id=\"npDOB\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enDOB\">जन्म मिति(AD)</label>\n                <input class=\"mdl-textfield_input\" type=\"date\" id=\"enDOB\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"select-input mdl-textfield txt-full-width\">\n                <label for=\"maritalStatus\" class=\"floating-label\">बैबाहिक बिबरण </label>\n                <select class=\"mdl-textfield_input\" id=\"maritalStatus\">\n                  <option [attr.selected]=\"true\" [attr.disabled]=\"true\">Choose...</option>\n                  <option value=\"एकल\">एकल</option>\n                  <option value=\"विवाहित\">विवाहित</option>\n                  <option value=\"तलाक भयो\">तलाक भयो</option>\n                  <option value=\"विधवा\">विधवा</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"select-input mdl-textfield txt-full-width\">\n                <label for=\"gender\" class=\"floating-label\">लिङ्ग </label>\n                <select class=\"mdl-textfield_input\" id=\"gender\">\n                  <option [attr.selected]=\"true\" [attr.disabled]=\"true\">Choose...</option>\n                  <option value=\"पुरुष\">पुरुष</option>\n                  <option value=\"महिला\">महिला</option>\n                  <option value=\"तेस्रो लिङ्गि/अन्य\">तेस्रो लिङ्गि/अन्य</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"select-input mdl-textfield txt-full-width\">\n                <label for=\"religion\" class=\"floating-label\">धर्म </label>\n                <select class=\"mdl-textfield_input\" id=\"religion\">\n                  <option [attr.selected]=\"true\" [attr.disabled]=\"true\">Choose...</option>\n                  <option value=\"धर्म-1\">धर्म-1</option>\n                  <option value=\"धर्म-2\">धर्म-2</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"citizenshipNo\">नागरिकता नं*</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"citizenshipNo\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"mdl-textfield txt-full-width\">\n                <div class=\"sub-header\">\n                  <header>स्थाई ठेगाना*</header>\n                </div>\n                <div class=\"dashed-divider\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permaCountry\">देश</label>\n                    <select class=\"mdl-textfield_input\" id=\"permaCountry\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data-id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"permaProvince\" class=\"floating-label\">प्रदेश *</label>\n                    <select class=\"mdl-textfield_input\" id=\"permaProvince\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"permanentDistrictId\" class=\"floating-label\">जिल्ला *</label>\n                    <select class=\"mdl-textfield_input\" id=\"permanentDistrictId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permanentMunicipalityId\">गाउँ/ नगरपालिका*</label>\n                    <select class=\"mdl-textfield_input\" id=\"permanentMunicipalityId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"wpermanentWardNoard\" class=\"floating-label\">वार्ड नं*</label>\n                    <select class=\"mdl-textfield_input\" id=\"wpermanentWardNoard\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permanentVillageOrTollName\">गाउँ/टोल</label>\n                    <input class=\"mdl-textfield_input\" type=\"text\" id=\"permanentVillageOrTollName\">\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permanentStreetName\">सडकको नाम</label>\n                    <input class=\"mdl-textfield_input\" type=\"number\" id=\"permanentStreetName\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"mdl-textfield txt-full-width\">\n                <div class=\"sub-header\">\n                  <header>अस्थायी ठेगाना</header>\n                </div>\n                <div class=\"dashed-divider\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryCountry\">देश</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryCountry\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data-id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"temporaryProvince\" class=\"floating-label\">प्रदेश *</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryProvince\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"temporaryDistrictId\" class=\"floating-label\">जिल्ला *</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryDistrictId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryMunicipalityId\">गाउँ/ नगरपालिका*</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryMunicipalityId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"wtemporaryWardNoard\" class=\"floating-label\">वार्ड नं*</label>\n                    <select class=\"mdl-textfield_input\" id=\"wtemporaryWardNoard\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryVillageOrTollName\">गाउँ/टोल</label>\n                    <input class=\"mdl-textfield_input\" type=\"text\" id=\"temporaryVillageOrTollName\">\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryStreetName\">सडकको नाम</label>\n                    <input class=\"mdl-textfield_input\" type=\"number\" id=\"temporaryStreetName\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"mdl-textfield txt-full-width\">\n                <div class=\"sub-header\">\n                  <header>कार्यालय जानकारी</header>\n                </div>\n                <div class=\"dashed-divider\"></div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 p-t-10\">\n              <!-- Level one dropdown -->\n              <label for=\"deptDropdown\">ओहोदा छनौट गर्नुहोस</label>\n              <li class=\"nav-item dropdown\" id=\"deptDropdown\">\n                <a id=\"dropdownMenu1\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                  class=\"nav-link dropdown-toggle\">ओहोदा</a>\n                <ul aria-labelledby=\"dropdownMenu1\" class=\"dropdown-menu border-0 shadow\">\n                  <ng-container *ngFor=\"let department of departments\">\n                    <li *ngIf=\"department.subDepartments.length == 0\">\n                      <a (click)=\"this.onDepartmentSelect(department.id,department.name)\"\n                        class=\"dropdown-item\">department.name</a>\n                    </li>\n\n                    <!-- Level two dropdown-->\n                    <ng-container *ngIf=\"department.subDepartments && department.subDepartments.length > 0\">\n                      <li class=\"dropdown-submenu\">\n                        <a [id]=\"department.id\" (click)=\"this.onDepartmentSelect(department.id,department.name)\"\n                          role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                          class=\"dropdown-item dropdown-toggle\">department.name</a>\n                        <ul [attr.aria-labelledby]=\"department.id\" class=\"dropdown-menu border-0 shadow\">\n\n                          <ng-container *ngFor=\"let firstSub of department.subDepartments\">\n                            <li\n                              *ngIf=\"!firstSub.subDepartments || (firstSub.subDepartments && firstSub.subDepartments.length == 0)\">\n                              <a tabindex=\"-1\" (click)=\"this.onDepartmentSelect(firstSub.id,firstSub.name)\"\n                                class=\"dropdown-item\">firstSub.name</a>\n                            </li>\n\n                            <!-- Level three dropdown-->\n                            <ng-container *ngIf=\"firstSub.subDepartments && firstSub.subDepartments.length > 0\">\n                              <li class=\"dropdown-submenu\">\n                                <a [id]=\"firstSub.id\" (click)=\"this.onDepartmentSelect(firstSub.id,firstSub.name)\"\n                                  role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                  class=\"dropdown-item dropdown-toggle\">firstSub.name</a>\n                                <ul [attr.aria-labelledby]=\"firstSub.id\" class=\"dropdown-menu border-0 shadow\">\n                                  <ng-container *ngFor=\"let secondSub of firstSub.subDepartments\">\n\n                                    <li\n                                      *ngIf=\"!secondSub.subDepartments || (secondSub.subDepartments && secondSub.subDepartments.length == 0)\">\n                                      <a tabindex=\"-1\" (click)=\"this.onDepartmentSelect(secondSub.id,secondSub.name)\"\n                                        class=\"dropdown-item\">secondSub.name</a>\n                                    </li>\n\n                                    <ng-container\n                                      *ngIf=\"secondSub.subDepartments && secondSub.subDepartments.length > 0\">\n                                      <li class=\"dropdown-submenu\">\n                                        <a id=\"dropdownMenu4\"\n                                          (click)=\"this.onDepartmentSelect(secondSub.id,secondSub.name)\" role=\"button\"\n                                          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                          class=\"dropdown-item dropdown-toggle\">secondSub.name</a>\n                                        <ul aria-labelledby=\"dropdownMenu4\" class=\"dropdown-menu border-0 shadow\">\n                                          <ng-container *ngFor=\"let thirdSub of secondSub.subDepartments\">\n                                            <li><a (click)=\"this.onDepartmentSelect(thirdSub.id,thirdSub.name)\"\n                                                class=\"dropdown-item\">thirdSub.name</a></li>\n\n                                          </ng-container>\n                                        </ul>\n                                      </li>\n                                    </ng-container>\n                                  </ng-container>\n                                </ul>\n                              </li>\n                            </ng-container>\n                            <!-- End Level three -->\n                          </ng-container>\n                        </ul>\n                      </li>\n                    </ng-container>\n                    <!-- End Level two -->\n                  </ng-container>\n                </ul>\n              </li>\n              <!-- End Level one -->\n\n            </div>\n\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"position\">ओहोदा श्रेणि</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"position\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"emailAddress\">ई-मेल</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"emailAddress\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"officialEmailAddress\">कार्यालय ई-मेल </label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"officialEmailAddress\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"phoneNumber\">फोन नं</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"phoneNumber\">\n              </div>\n            </div>\n\n\n            <div class=\"col-lg-12 p-t-10 text-center\">\n              <button type=\"reset\" class=\"mdl-button mdl-js-button mdl-button--raised btn-default\">\n                रिसेट\n                गर्नुहोस\n              </button>\n              <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised fill-primary\"\n                (click)=\"submitStaffForm()\">\n                सुरक्षित गर्नुहोस\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-add/staff-add.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/staff/staff-add/staff-add.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-submenu {\n  position: relative;\n  min-width: 108px;\n  cursor: pointer; }\n\n.dropdown-submenu > .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: 0px;\n  margin-left: 0px; }\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #fff !important;\n  text-decoration: none;\n  background-color: #545ed6;\n  cursor: pointer; }\n\n.nav-item.dropdown {\n  background: transparent;\n  border-radius: 0px;\n  border: none;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #9e9c9e; }\n\n.nav-item.dropdown > a {\n  width: 100%; }\n\n.dropdown-toggle::after {\n  margin-top: 9px; }\n\nli.nav-item.dropdown a {\n  position: relative;\n  color: #212121; }\n\nli.nav-item.dropdown a::after {\n  position: absolute;\n  right: 0;\n  margin-right: 6px; }\n\nli#deptDropdown {\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0lDQ08gRFJSL3NyYy9hcHAvbW9kdWxlcy9zdGFmZi9zdGFmZi1hZGQvc3RhZmYtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsTUFBTTtFQUNOLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCOztFQUVFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0YWZmL3N0YWZmLWFkZC9zdGFmZi1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZHJvcGRvd24tc3VibWVudSB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB9XG5cbi8vICAgLmRyb3Bkb3duLXN1Ym1lbnUgLmRyb3Bkb3duLW1lbnUge1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBsZWZ0OiAxMDAlO1xuLy8gICAgIG1hcmdpbi10b3A6IC0xcHg7XG4vLyAgIH1cblxuXG4uZHJvcGRvd24tc3VibWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxMDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tc3VibWVudT4uZHJvcGRvd24tbWVudSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZHJvcGRvd24taXRlbTpmb2N1cyxcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1ZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtaXRlbS5kcm9wZG93biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTljOWU7XG59XG5cbi5uYXYtaXRlbS5kcm9wZG93bj5hIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG5saS5uYXYtaXRlbS5kcm9wZG93biBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzIxMjEyMTtcbn1cblxubGkubmF2LWl0ZW0uZHJvcGRvd24gYTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxubGkjZGVwdERyb3Bkb3duIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-add/staff-add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/staff/staff-add/staff-add.component.ts ***!
  \****************************************************************/
/*! exports provided: StaffAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAddComponent", function() { return StaffAddComponent; });
/* harmony import */ var _settings_departments_department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/departments/department.service */ "./src/app/modules/settings/departments/department.service.ts");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../staff.service */ "./src/app/modules/staff/staff.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffAddComponent = /** @class */ (function () {
    function StaffAddComponent(fb) {
        this.fb = fb;
        this.departments = [];
        this.selectedDepartment = "-- Select Department --";
    }
    StaffAddComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            // ------------------------------------------------------- //
            // Multi Level dropdowns
            // ------------------------------------------------------ //
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on("mouseover", "ul.dropdown-menu [data-toggle='dropdown']", function (event) {
                event.preventDefault();
                event.stopPropagation();
                // $(this).parent().childrens().toggleClass("show");
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).siblings().addClass("show");
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).parent().siblings().children().removeClass("show");
                if (!jquery__WEBPACK_IMPORTED_MODULE_3__(this).next().hasClass('show')) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.dropdown-submenu .show').removeClass("show");
                });
            });
        });
    };
    //For Profile Picture Upload
    StaffAddComponent.prototype.onProfilePictureSelected = function (event) {
        if (event.target.files.length > 0) {
            // console.log("sdfsd");
            this.profileImage = event.target.files[0];
        }
        else {
            alert("Photo not selected");
        }
    };
    StaffAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-staff-add',
            template: __webpack_require__(/*! ./staff-add.component.html */ "./src/app/modules/staff/staff-add/staff-add.component.html"),
            providers: [_staff_service__WEBPACK_IMPORTED_MODULE_1__["StaffService"], _settings_departments_department_service__WEBPACK_IMPORTED_MODULE_0__["DepartmentService"]],
            styles: [__webpack_require__(/*! ./staff-add.component.scss */ "./src/app/modules/staff/staff-add/staff-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], StaffAddComponent);
    return StaffAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-detail/staff-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/staff/staff-detail/staff-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-bar\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <a class=\"mdl-button mdl-button--icon collapsed\" id=\"panel-button\" routerLink=\"/staff\">\n              <i class=\"material-icons\">arrow_back_ios</i>\n            </a>\n            <header>कर्मचारि बिबरण</header>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <!-- <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\">\n      <div class=\"card box-shadow-none\">\n        <div class=\"card-head\">\n          <header>कर्मचारि बिबरण</header>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-group list-group-unbordered\">\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"profile-userpic\">\n                    <img src=\"../../../../assets/img/default.jpg\" class=\"img-responsive\" alt=\"Profile Image\">\n                  </div>\n                  <div class=\"profile-usertitle\">\n                    <div class=\"profile-usertitle-name\"> fullname </div>\n                    <div class=\"profile-usertitle-name\"> code</div>\n                    <div class=\"profile-usertitle-position\"> position</div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>कर्मचारी पुरा</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item text-capitalize\"> कर्मचारी पुरा123</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>Position</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">staffposition</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>Department</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">staffdepartment</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>फोन नं</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">34355783</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>ई-मेल</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">ई-मेल</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>कार्यालय ई-मेल </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">exmpl@gmail.com</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>जन्म मिति</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">{जन्म मिति</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>लिङ्ग </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">लिङ्ग 2</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>धर्म </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">धर्म 2</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>बैबाहिक बिबरण </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">बैबाहिक बिबरण </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>नागरिकता नं</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">नागरिकता नं</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div> -->\n    <!-- <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\">\n      <div class=\"card box-shadow-none\">\n        <div class=\"card-head\">\n          <header>स्थाई ठेगाना </header>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-group list-group-unbordered\">\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>देश </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">देश 23</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>प्रदेश </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">प्रदेश </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>जिल्ला </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">जिल्ला </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>गाउँ/ नगरपालिका </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">गाउँ/ नगरपालिका 22</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>वार्ड नं</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">5</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>गाउँ/टोल</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">गाउँ/टोल</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>सडकको नाम</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">सडकको नाम345</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"card box-shadow-none\">\n        <div class=\"card-head\">\n          <header>अस्थायी ठेगाना</header>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-group list-group-unbordered\">\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>देश </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">देश 23</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>प्रदेश </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">प्रदेश </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>जिल्ला </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">जिल्ला </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>गाउँ/ नगरपालिका </b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">गाउँ/ नगरपालिका 22</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>वार्ड नं</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">5</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>गाउँ/टोल</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">गाउँ/टोल</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                  <b>सडकको नाम</b>\n                </div>\n                <div class=\"col-md-8 col-sm-8\">\n                  <div class=\"info-desc-item\">सडकको नाम345</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-detail/staff-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/staff/staff-detail/staff-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtZGV0YWlsL3N0YWZmLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/staff/staff-detail/staff-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/staff/staff-detail/staff-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: StaffDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDetailComponent", function() { return StaffDetailComponent; });
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../staff.service */ "./src/app/modules/staff/staff.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffDetailComponent = /** @class */ (function () {
    function StaffDetailComponent() {
    }
    StaffDetailComponent.prototype.ngOnInit = function () {
    };
    StaffDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-detail',
            template: __webpack_require__(/*! ./staff-detail.component.html */ "./src/app/modules/staff/staff-detail/staff-detail.component.html"),
            providers: [_staff_service__WEBPACK_IMPORTED_MODULE_0__["StaffService"]],
            styles: [__webpack_require__(/*! ./staff-detail.component.scss */ "./src/app/modules/staff/staff-detail/staff-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffDetailComponent);
    return StaffDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-edit/staff-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/staff/staff-edit/staff-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- page top bar start -->\n\n  <div class=\"page-bar\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <a routerLink=\"/staff\" id=\"panel-button\" class=\"mdl-button mdl-button--icon collapsed\">\n              <i class=\"material-icons\">arrow_back_ios</i>\n            </a>\n            <header>Edit Staff information</header>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- page top bar close -->\n\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n      <div class=\"card-box\">\n        <div class=\"card-head\">\n          <header>व्यक्तिगत बिबरण</header>\n        </div>\n        <div class=\"card-body row\">\n          <form id=\"staffAddForm\" class=\"staffAddForm\" [formGroup]=\"staffEditForm\">\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"file-upload-wrapper\">\n                <img src=\"../../../assets/img/default.jpg\" id=\"profile-img-tag\" />\n\n                <div class=\"col-lg-4\">\n                  <label class=\"control-label\" for=\"customFile\">प्रोफाइल फोटो </label>\n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input profilePhoto\" id=\"customFile\"\n                      accept=\"image/gif, image/jpeg, image/png\" (change)=\"onProfilePictureSelected($event)\">\n                    <label class=\"custom-file-label\" for=\"customFile\">फाइल छनौट गर्नुहोस</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enFirstName\">First Name</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"enFirstName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enMiddleName\">Middle Name</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"enMiddleName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enLastName\">Last Name</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"enLastName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npFirstName\">पहिलो नाम</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"npFirstName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npMiddleName\">विचको नाम</label>\n                <input class=\"mdl-textfield_input\" value=\"छोसाङ\" type=\"text\" id=\"npMiddleName\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npLastName\">थर</label>\n                <input class=\"mdl-textfield_input\" value=\"शेर्पा\" type=\"text\" id=\"npLastName\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"npDOB\">जन्म मिति(BS)</label>\n                <input class=\"mdl-textfield_input\" type=\"date\" placeholder=\"DD/MM/YYYY(eg. 24/12/2074)\" id=\"npDOB\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"enDOB\">जन्म मिति(AD)</label>\n                <input class=\"mdl-textfield_input\" type=\"date\" id=\"enDOB\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"select-input mdl-textfield txt-full-width\">\n                <label for=\"maritalStatus\" class=\"floating-label\">बैबाहिक बिबरण </label>\n                <select class=\"mdl-textfield_input\" id=\"maritalStatus\">\n                  <option [attr.selected]=\"true\" [attr.disabled]=\"true\">Choose...</option>\n                  <option value=\"एकल\">एकल</option>\n                  <option value=\"विवाहित\">विवाहित</option>\n                  <option value=\"तलाक भयो\">तलाक भयो</option>\n                  <option value=\"विधवा\">विधवा</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"select-input mdl-textfield txt-full-width\">\n                <label for=\"gender\" class=\"floating-label\">लिङ्ग </label>\n                <select class=\"mdl-textfield_input\" id=\"gender\">\n                  <option [attr.selected]=\"true\" [attr.disabled]=\"true\">Choose...</option>\n                  <option value=\"पुरुष\">पुरुष</option>\n                  <option value=\"महिला\">महिला</option>\n                  <option value=\"तेस्रो लिङ्गि/अन्य\">तेस्रो लिङ्गि/अन्य</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"select-input mdl-textfield txt-full-width\">\n                <label for=\"religion\" class=\"floating-label\">धर्म </label>\n                <select class=\"mdl-textfield_input\" id=\"religion\">\n                  <option [attr.selected]=\"true\" [attr.disabled]=\"true\">Choose...</option>\n                  <option value=\"धर्म-1\">धर्म-1</option>\n                  <option value=\"धर्म-2\">धर्म-2</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-lg-4 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"citizenshipNo\">नागरिकता नं*</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"citizenshipNo\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"mdl-textfield txt-full-width\">\n                <div class=\"sub-header\">\n                  <header>स्थाई ठेगाना*</header>\n                </div>\n                <div class=\"dashed-divider\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permaCountry\">देश</label>\n                    <select class=\"mdl-textfield_input\" id=\"permaCountry\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data-id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"permaProvince\" class=\"floating-label\">प्रदेश *</label>\n                    <select class=\"mdl-textfield_input\" id=\"permaProvince\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"permanentDistrictId\" class=\"floating-label\">जिल्ला *</label>\n                    <select class=\"mdl-textfield_input\" id=\"permanentDistrictId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permanentMunicipalityId\">गाउँ/ नगरपालिका*</label>\n                    <select class=\"mdl-textfield_input\" id=\"permanentMunicipalityId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"wpermanentWardNoard\" class=\"floating-label\">वार्ड नं*</label>\n                    <select class=\"mdl-textfield_input\" id=\"wpermanentWardNoard\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permanentVillageOrTollName\">गाउँ/टोल</label>\n                    <input class=\"mdl-textfield_input\" type=\"text\" id=\"permanentVillageOrTollName\">\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"permanentStreetName\">सडकको नाम</label>\n                    <input class=\"mdl-textfield_input\" type=\"number\" id=\"permanentStreetName\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"mdl-textfield txt-full-width\">\n                <div class=\"sub-header\">\n                  <header>अस्थायी ठेगाना</header>\n                </div>\n                <div class=\"dashed-divider\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryCountry\">देश</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryCountry\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data-id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"temporaryProvince\" class=\"floating-label\">प्रदेश *</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryProvince\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"temporaryDistrictId\" class=\"floating-label\">जिल्ला *</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryDistrictId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryMunicipalityId\">गाउँ/ नगरपालिका*</label>\n                    <select class=\"mdl-textfield_input\" id=\"temporaryMunicipalityId\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 p-t-10\">\n                  <div class=\"select-input mdl-textfield txt-full-width\">\n                    <label for=\"wtemporaryWardNoard\" class=\"floating-label\">वार्ड नं*</label>\n                    <select class=\"mdl-textfield_input\" id=\"wtemporaryWardNoard\">\n                      <option [attr.disabled]=\"true\" [attr.selected]=\"true\">Choose...</option>\n                      <option value=\"data.id\">\n                        data.name\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryVillageOrTollName\">गाउँ/टोल</label>\n                    <input class=\"mdl-textfield_input\" type=\"text\" id=\"temporaryVillageOrTollName\">\n                  </div>\n                </div>\n                <div class=\"col-lg-3 p-t-10\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                    <label for=\"temporaryStreetName\">सडकको नाम</label>\n                    <input class=\"mdl-textfield_input\" type=\"number\" id=\"temporaryStreetName\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12 p-t-10\">\n              <div class=\"mdl-textfield txt-full-width\">\n                <div class=\"sub-header\">\n                  <header>कार्यालय जानकारी</header>\n                </div>\n                <div class=\"dashed-divider\"></div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 p-t-10\">\n              <!-- Level one dropdown -->\n              <label for=\"deptDropdown\">ओहोदा छनौट गर्नुहोस</label>\n              <li class=\"nav-item dropdown\" id=\"deptDropdown\">\n                <a id=\"dropdownMenu1\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                  class=\"nav-link dropdown-toggle\">ओहोदा</a>\n                <ul aria-labelledby=\"dropdownMenu1\" class=\"dropdown-menu border-0 shadow\">\n                  <ng-container *ngFor=\"let department of departments\">\n                    <li *ngIf=\"department.subDepartments.length == 0\">\n                      <a (click)=\"this.onDepartmentSelect(department.id,department.name)\"\n                        class=\"dropdown-item\">department.name</a>\n                    </li>\n\n                    <!-- Level two dropdown-->\n                    <ng-container *ngIf=\"department.subDepartments && department.subDepartments.length > 0\">\n                      <li class=\"dropdown-submenu\">\n                        <a [id]=\"department.id\" (click)=\"this.onDepartmentSelect(department.id,department.name)\"\n                          role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                          class=\"dropdown-item dropdown-toggle\">department.name</a>\n                        <ul [attr.aria-labelledby]=\"department.id\" class=\"dropdown-menu border-0 shadow\">\n\n                          <ng-container *ngFor=\"let firstSub of department.subDepartments\">\n                            <li\n                              *ngIf=\"!firstSub.subDepartments || (firstSub.subDepartments && firstSub.subDepartments.length == 0)\">\n                              <a tabindex=\"-1\" (click)=\"this.onDepartmentSelect(firstSub.id,firstSub.name)\"\n                                class=\"dropdown-item\">firstSub.name</a>\n                            </li>\n\n                            <!-- Level three dropdown-->\n                            <ng-container *ngIf=\"firstSub.subDepartments && firstSub.subDepartments.length > 0\">\n                              <li class=\"dropdown-submenu\">\n                                <a [id]=\"firstSub.id\" (click)=\"this.onDepartmentSelect(firstSub.id,firstSub.name)\"\n                                  role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                  class=\"dropdown-item dropdown-toggle\">firstSub.name</a>\n                                <ul [attr.aria-labelledby]=\"firstSub.id\" class=\"dropdown-menu border-0 shadow\">\n                                  <ng-container *ngFor=\"let secondSub of firstSub.subDepartments\">\n\n                                    <li\n                                      *ngIf=\"!secondSub.subDepartments || (secondSub.subDepartments && secondSub.subDepartments.length == 0)\">\n                                      <a tabindex=\"-1\" (click)=\"this.onDepartmentSelect(secondSub.id,secondSub.name)\"\n                                        class=\"dropdown-item\">secondSub.name</a>\n                                    </li>\n\n                                    <ng-container\n                                      *ngIf=\"secondSub.subDepartments && secondSub.subDepartments.length > 0\">\n                                      <li class=\"dropdown-submenu\">\n                                        <a id=\"dropdownMenu4\"\n                                          (click)=\"this.onDepartmentSelect(secondSub.id,secondSub.name)\" role=\"button\"\n                                          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                          class=\"dropdown-item dropdown-toggle\">secondSub.name</a>\n                                        <ul aria-labelledby=\"dropdownMenu4\" class=\"dropdown-menu border-0 shadow\">\n                                          <ng-container *ngFor=\"let thirdSub of secondSub.subDepartments\">\n                                            <li><a (click)=\"this.onDepartmentSelect(thirdSub.id,thirdSub.name)\"\n                                                class=\"dropdown-item\">thirdSub.name</a></li>\n\n                                          </ng-container>\n                                        </ul>\n                                      </li>\n                                    </ng-container>\n                                  </ng-container>\n                                </ul>\n                              </li>\n                            </ng-container>\n                            <!-- End Level three -->\n                          </ng-container>\n                        </ul>\n                      </li>\n                    </ng-container>\n                    <!-- End Level two -->\n                  </ng-container>\n                </ul>\n              </li>\n              <!-- End Level one -->\n\n            </div>\n\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"position\">ओहोदा श्रेणि</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"position\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"emailAddress\">ई-मेल</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"emailAddress\">\n              </div>\n            </div>\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"officialEmailAddress\">कार्यालय ई-मेल </label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"officialEmailAddress\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 p-t-10\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width\">\n                <label for=\"phoneNumber\">फोन नं</label>\n                <input class=\"mdl-textfield_input\" type=\"text\" id=\"phoneNumber\">\n              </div>\n            </div>\n\n\n            <div class=\"col-lg-12 p-t-10 text-center\">\n              <button type=\"reset\" class=\"mdl-button mdl-js-button mdl-button--raised btn-default\">\n                रिसेट\n                गर्नुहोस\n              </button>\n              <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised fill-primary\"\n                (click)=\"submitStaffEditForm()\">\n                सुरक्षित गर्नुहोस\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-edit/staff-edit.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/staff/staff-edit/staff-edit.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-submenu {\n  position: relative;\n  min-width: 108px;\n  cursor: pointer; }\n\n.dropdown-submenu > .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: 0px;\n  margin-left: 0px; }\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #fff !important;\n  text-decoration: none;\n  background-color: #545ed6;\n  cursor: pointer; }\n\n.nav-item.dropdown {\n  background: #e9ecef;\n  border-radius: 4px;\n  border: 1px solid #ced4da;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.nav-item.dropdown > a {\n  width: 100%; }\n\n.dropdown-toggle::after {\n  margin-top: 9px; }\n\n.dropdown-submenu {\n  position: relative;\n  min-width: 108px;\n  cursor: pointer; }\n\n.dropdown-submenu > .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: 0px;\n  margin-left: 0px; }\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #fff !important;\n  text-decoration: none;\n  background-color: #545ed6;\n  cursor: pointer; }\n\n#deptDropdown.nav-item.dropdown {\n  background: transparent;\n  border-radius: 0px;\n  border: none;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #9e9c9e; }\n\n#deptDropdown.nav-item.dropdown > a {\n  width: 100%; }\n\n.dropdown-toggle::after {\n  margin-top: 9px; }\n\nli#deptDropdown.nav-item.dropdown a {\n  position: relative;\n  color: #212121; }\n\nli#deptDropdown.nav-item.dropdown a::after {\n  position: absolute;\n  right: 0;\n  margin-right: 6px; }\n\nli#deptDropdown#deptDropdown {\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0lDQ08gRFJSL3NyYy9hcHAvbW9kdWxlcy9zdGFmZi9zdGFmZi1lZGl0L3N0YWZmLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxNQUFNO0VBQ04sVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxNQUFNO0VBQ04sVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtZWRpdC9zdGFmZi1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmRyb3Bkb3duLXN1Ym1lbnUge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgfVxuXG4vLyAgIC5kcm9wZG93bi1zdWJtZW51IC5kcm9wZG93bi1tZW51IHtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgbGVmdDogMTAwJTtcbi8vICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuLy8gICB9XG5cblxuLmRyb3Bkb3duLXN1Ym1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnU+LmRyb3Bkb3duLW1lbnUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMsXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWVkNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW0uZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbS5kcm9wZG93bj5hIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG5cbi5kcm9wZG93bi1zdWJtZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDEwOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1zdWJtZW51Pi5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtOmZvY3VzLFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2RlcHREcm9wZG93bi5uYXYtaXRlbS5kcm9wZG93biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTljOWU7XG59XG5cbiNkZXB0RHJvcGRvd24ubmF2LWl0ZW0uZHJvcGRvd24+YSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cblxubGkjZGVwdERyb3Bkb3duLm5hdi1pdGVtLmRyb3Bkb3duIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuXG5saSNkZXB0RHJvcGRvd24ubmF2LWl0ZW0uZHJvcGRvd24gYTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxubGkjZGVwdERyb3Bkb3duI2RlcHREcm9wZG93biB7XG4gIGhlaWdodDogNDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/staff/staff-edit/staff-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/staff/staff-edit/staff-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: StaffEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffEditComponent", function() { return StaffEditComponent; });
/* harmony import */ var _settings_departments_department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/departments/department.service */ "./src/app/modules/settings/departments/department.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff.service */ "./src/app/modules/staff/staff.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffEditComponent = /** @class */ (function () {
    function StaffEditComponent() {
        this.staffDetail = [];
        this.selectedDepartment = [];
        this.selectedDepartmentId = [];
    }
    StaffEditComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            // ------------------------------------------------------- //
            // Multi Level dropdowns
            // ------------------------------------------------------ //
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on("mouseover", "ul.dropdown-menu [data-toggle='dropdown']", function (event) {
                event.preventDefault();
                event.stopPropagation();
                // $(this).parent().childrens().toggleClass("show");
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).siblings().addClass("show");
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).parent().siblings().children().removeClass("show");
                if (!jquery__WEBPACK_IMPORTED_MODULE_3__(this).next().hasClass('show')) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.dropdown-submenu .show').removeClass("show");
                });
            });
        });
    };
    //For Profile Picture Upload
    StaffEditComponent.prototype.onProfilePictureSelected = function (event) {
        if (event.target.files.length > 0) {
            this.profileImage = event.target.files[0];
        }
        else {
            alert("Photo not selected");
        }
    };
    StaffEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-edit',
            template: __webpack_require__(/*! ./staff-edit.component.html */ "./src/app/modules/staff/staff-edit/staff-edit.component.html"),
            providers: [_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"], _settings_departments_department_service__WEBPACK_IMPORTED_MODULE_0__["DepartmentService"]],
            styles: [__webpack_require__(/*! ./staff-edit.component.scss */ "./src/app/modules/staff/staff-edit/staff-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffEditComponent);
    return StaffEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-list/staff-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/staff/staff-list/staff-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row row-flex\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n      <div class=\"card card-box\">\n        <div class=\"card-head\">\n          <div class=\"card-header-wrapper\">\n            <header>Staff</header>\n            <div class=\"tools\">\n              <button routerLink=\"/staff/add\" id=\"addRow\" class=\"btn btn-info\">\n                Add\n                <i class=\"fa fa-plus\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-wrap\">\n            <div class=\"table-responsive dataTables_wrapper\">\n              <table #dataTable class=\"table table-hover dataTable mb-30\" id=\"support_table5\">\n                <thead>\n                  <tr role=\"row\">\n                    <th>No</th>\n                    <th>Code</th>\n                    <th>Full Name</th>\n                    <th>Phone</th>\n                    <th>Email</th>\n                    <th>position</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>1</td>\n                    <td>staff.code</td>\n                    <td>staff.npFirstName staff.npMiddleName staff.npLastName</td>\n                    <td>staff.contactNumber</td>\n                    <td>staff.emailAddress</td>\n                    <td>staff.position</td>\n                    <td>\n                      <div class=\"btn-wrapper\">\n                        <button routerLink=\"/staff/detail\" aria-label=\"view\" class=\"btn btn-tbl-view btn-xs hint--top\"\n                          aria-label=\"View\">\n                          <i class=\"fa fa-eye\"></i>\n                        </button>\n                        <button routerLink=\"/staff/edit\" aria-label=\"Edit\" class=\"btn btn-tbl-edit btn-xs hint--top\"\n                          aria-label=\"Edit\">\n                          <i class=\"fa fa-pencil-alt\"></i>\n                        </button>\n                        <button class=\"btn btn-tbl-delete btn-xs hint--top\" aria-label=\"Delete\">\n                          <i class=\"fa fa-trash-alt\"></i>\n                        </button>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-list/staff-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/staff/staff-list/staff-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvT2ZmaWNlIFByb2plY3RzL0lDQ08gRFJSL3NyYy9hcHAvbW9kdWxlcy9zdGFmZi9zdGFmZi1saXN0L3N0YWZmLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYvc3RhZmYtbGlzdC9zdGFmZi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/staff/staff-list/staff-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/staff/staff-list/staff-list.component.ts ***!
  \******************************************************************/
/*! exports provided: StaffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffListComponent", function() { return StaffListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../staff.service */ "./src/app/modules/staff/staff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffListComponent = /** @class */ (function () {
    function StaffListComponent() {
        this.staffs = [];
    }
    StaffListComponent.prototype.ngOnInit = function () {
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
    ], StaffListComponent.prototype, "table", void 0);
    StaffListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-list',
            template: __webpack_require__(/*! ./staff-list.component.html */ "./src/app/modules/staff/staff-list/staff-list.component.html"),
            providers: [_staff_service__WEBPACK_IMPORTED_MODULE_1__["StaffService"]],
            styles: [__webpack_require__(/*! ./staff-list.component.scss */ "./src/app/modules/staff/staff-list/staff-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffListComponent);
    return StaffListComponent;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/staff/staff-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRoutingModule", function() { return StaffRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff-list/staff-list.component */ "./src/app/modules/staff/staff-list/staff-list.component.ts");
/* harmony import */ var _staff_add_staff_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-add/staff-add.component */ "./src/app/modules/staff/staff-add/staff-add.component.ts");
/* harmony import */ var _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff-edit/staff-edit.component */ "./src/app/modules/staff/staff-edit/staff-edit.component.ts");
/* harmony import */ var _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-detail/staff-detail.component */ "./src/app/modules/staff/staff-detail/staff-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_2__["StaffListComponent"]
    },
    {
        path: 'add',
        component: _staff_add_staff_add_component__WEBPACK_IMPORTED_MODULE_3__["StaffAddComponent"]
    },
    {
        path: 'edit',
        component: _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_4__["StaffEditComponent"]
    },
    {
        path: 'detail',
        component: _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_5__["StaffDetailComponent"]
    },
];
var StaffRoutingModule = /** @class */ (function () {
    function StaffRoutingModule() {
    }
    StaffRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StaffRoutingModule);
    return StaffRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/staff/staff.module.ts ***!
  \***********************************************/
/*! exports provided: StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff-routing.module */ "./src/app/modules/staff/staff-routing.module.ts");
/* harmony import */ var _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-list/staff-list.component */ "./src/app/modules/staff/staff-list/staff-list.component.ts");
/* harmony import */ var _staff_add_staff_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff-add/staff-add.component */ "./src/app/modules/staff/staff-add/staff-add.component.ts");
/* harmony import */ var _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-edit/staff-edit.component */ "./src/app/modules/staff/staff-edit/staff-edit.component.ts");
/* harmony import */ var _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-detail/staff-detail.component */ "./src/app/modules/staff/staff-detail/staff-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StaffModule = /** @class */ (function () {
    function StaffModule() {
    }
    StaffModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_3__["StaffListComponent"],
                _staff_add_staff_add_component__WEBPACK_IMPORTED_MODULE_4__["StaffAddComponent"],
                _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_5__["StaffEditComponent"],
                _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_6__["StaffDetailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _staff_routing_module__WEBPACK_IMPORTED_MODULE_2__["StaffRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ]
        })
    ], StaffModule);
    return StaffModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/staff/staff.service.ts ***!
  \************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffService = /** @class */ (function () {
    function StaffService(http) {
        this.http = http;
    }
    StaffService.prototype.addStaff = function (payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "api/Staffs", payload);
    };
    StaffService.prototype.uploadProfileImage = function (staffId, payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ("api/Staffs/" + staffId + "/ProfileImage"), payload);
    };
    StaffService.prototype.getAllStaffs = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "api/Staffs");
    };
    StaffService.prototype.getStaffById = function (staffId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ("api/Staffs/" + staffId));
    };
    StaffService.prototype.updateStaff = function (staffId, payload) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ("api/Staffs/" + staffId), payload);
    };
    StaffService.prototype.uploadDigitalSign = function (staffId, payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ("api/Staffs/" + staffId + "/DigitalSign"), payload);
    };
    StaffService.prototype.getDigitalSign = function (staffId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ("api/Staffs/" + staffId + "/DigitalSign"));
    };
    StaffService.prototype.deleteStaff = function (staffId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ("api/Staffs/" + staffId));
    };
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StaffService);
    return StaffService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-staff-staff-module.js.map