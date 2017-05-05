webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "dd {\n    margin-bottom:10px;\n}\n\n\nform .ng-valid.ng-dirty {\n    border-left:4px solid lightgreen;\n}\n\nform .ng-invalid {\n    border-left:4px solid red;\n}\n\n.form-control {\n    max-width:400px;\n}\n\n:not(.input-group) > .form-control {\n    margin-bottom: 10px;\n} \n\n.input-group {\n    max-width:400px;\n    margin-bottom:10px;\n}\n\n#main-image{\n    height:200px;\n    width:auto;\n    border: 1px solid lightgrey;\n    padding: 5px;\n    border-radius: 5px;\n    margin-top:20px;\n}\n\n.maint-btn {\n    margin-bottom:30px;\n}\n\n.submit-wrapper {\n    margin-top:20px;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".form-control {\n    width:100%;\n}\n\n.form-group button {\n    margin-top:20px;\n}\n\n/* 20px gutter */\n.gutter-20{\n  margin-right: -10px;\n  margin-left: -10px;\n}\n.gutter-20 > [class^=\"col-\"], .gutter-10 > [class^=\" col-\"] {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.display-container{\n\n    border: 1px solid rgba(0,0,0,0);\n    border-radius:3px;\n}\n\n.display-container:hover{\n    background-color: lightgray;\n    border: 1px solid gray;\n    border-radius:3px;\n}\n\n.display-image-container{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    height:160px;\n    width:190px;\n}\n\n.display-image{\n    padding:5px;\n    max-height:160px;\n    max-width:190px;\n    border:1px solid lightgrey;\n    border-radius:5px;\n}\n\n.display-info{\n    margin-bottom:5px;\n    margin-top:3px;\n}\n\n.display-info p{\n    color:black;\n}\n\n\n#library-display p {\n    margin-bottom:-3px\n}\n\n.single-display{\n    margin-bottom:20px;\n}\n\n.single-display a:hover{\n    text-decoration:none;\n}\n\n\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth0_auth0_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.logInOrRedirect = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
        var thisInstance = this;
        var state;
        setTimeout(function () {
            if (state != "complete" && !thisInstance.auth.authenticated()) {
                thisInstance.auth.login();
            }
            else {
                thisInstance.router.navigateByUrl("prints");
            }
        }, 1000);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(665),
        styles: [__webpack_require__(602)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth0_auth0_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth0_auth0_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(668),
        styles: [__webpack_require__(605)]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_auth0_auth0_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.environment = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "<div *ngIf='auth.authenticated() && auth.userProfile'>Welcome to Print3dStats, {{auth.userProfile.name}} </div> <div>{{environment.envName}}</div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_auth0_auth0_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_auth0_auth0_service__["a" /* Auth */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(669),
        styles: [__webpack_require__(606)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_filaments_filaments_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilamentDetailsComponent = (function () {
    function FilamentDetailsComponent(route, router, filamentsService) {
        this.route = route;
        this.router = router;
        this.filamentsService = filamentsService;
        this.editMode = false;
    }
    FilamentDetailsComponent.prototype.saveFilamentEdit = function () {
        var _this = this;
        // set filament color id appropriately before save
        this.filament.ColorId = this.selectedColor.ColorId;
        this.filamentsService.updateFilament(this.filament)
            .subscribe(function (response) { return _this.router.navigate(['/filaments', 'filamentdetails', response.FilamentId]); }, function (error) { return _this.router.navigate(['/error']); });
    };
    FilamentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (data && data.filament) {
                _this.filament = data.filament;
            }
        }, function (error) {
            console.log("error reached final destination");
            console.log(error);
            _this.router.navigate(['/error']);
        });
        this.route.url
            .subscribe(function (segments) {
            if (segments.join("").includes("edit")) {
                _this.editMode = true;
                _this.filamentsService.getFilamentColors()
                    .subscribe(function (colors) {
                    _this.colors = colors;
                    _this.selectedColor = colors.find(function (color) { return color.ColorId == _this.filament.ColorId; });
                }, function (error) { return _this.router.navigate(['/error']); });
            }
        }, function (error) { return _this.router.navigate(['/error']); });
    };
    return FilamentDetailsComponent;
}());
FilamentDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filament-details',
        template: __webpack_require__(670),
        styles: [__webpack_require__(135), __webpack_require__(607)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_filaments_filaments_service__["a" /* FilamentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_filaments_filaments_service__["a" /* FilamentsService */]) === "function" && _c || Object])
], FilamentDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=filament-details.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_filaments_filaments_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentLibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilamentLibraryComponent = (function () {
    function FilamentLibraryComponent(filamentsService) {
        this.filamentsService = filamentsService;
        this.is_error = false;
    }
    FilamentLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("profile") != null) {
            var userProfile = localStorage.getItem("profile");
            this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
        }
        else {
        }
        this.filamentsService.getFilaments(this.app_user_id)
            .subscribe(function (filaments) { _this.allFilaments = filaments; _this.displayFilaments = filaments; }, function (error) { console.error(error); _this.is_error = true; });
        // .then(filaments => this.allFilaments = filaments)
        // .then(filaments => this.displayFilaments = this.allFilaments);
    };
    FilamentLibraryComponent.prototype.applySearch = function () {
        if (this.searchTxt) {
            var searchTxtLwr_1 = this.searchTxt.toLowerCase();
            this.displayFilaments = this.allFilaments.filter(function (filament) { return filament.Material.toLowerCase().includes(searchTxtLwr_1)
                || filament.Brand.toLowerCase().includes(searchTxtLwr_1)
                || filament.Color.toLowerCase().includes(searchTxtLwr_1); });
        }
        else {
            this.displayFilaments = this.allFilaments;
        }
    };
    return FilamentLibraryComponent;
}());
FilamentLibraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filament-library',
        template: __webpack_require__(671),
        styles: [__webpack_require__(136), __webpack_require__(608)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_filaments_filaments_service__["a" /* FilamentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_filaments_filaments_service__["a" /* FilamentsService */]) === "function" && _a || Object])
], FilamentLibraryComponent);

var _a;
//# sourceMappingURL=filament-library.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentsBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilamentsBaseComponent = (function () {
    function FilamentsBaseComponent() {
    }
    FilamentsBaseComponent.prototype.ngOnInit = function () {
    };
    return FilamentsBaseComponent;
}());
FilamentsBaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filaments-base',
        template: __webpack_require__(672),
        styles: [__webpack_require__(609)]
    }),
    __metadata("design:paramtypes", [])
], FilamentsBaseComponent);

//# sourceMappingURL=filaments-base.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrinterBaseComponent = (function () {
    function PrinterBaseComponent() {
    }
    PrinterBaseComponent.prototype.ngOnInit = function () {
    };
    return PrinterBaseComponent;
}());
PrinterBaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-printer-base',
        template: __webpack_require__(673),
        styles: [__webpack_require__(610)]
    }),
    __metadata("design:paramtypes", [])
], PrinterBaseComponent);

//# sourceMappingURL=printer-base.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_printers_printers_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrinterDetailsComponent = (function () {
    function PrinterDetailsComponent(printersService, route, router) {
        this.printersService = printersService;
        this.route = route;
        this.router = router;
        this.editMode = false;
    }
    PrinterDetailsComponent.prototype.savePrinterEdit = function () {
        var _this = this;
        console.log("button clicked");
        this.printersService.updatePrinter(this.printer).
            subscribe(function (response) { return _this.router.navigate(['/printers', 'printerdetails', response.PrinterId]); }, function (error) { return _this.router.navigate(['/error']); });
    };
    PrinterDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.printer = data.printer;
        }, function (error) {
            console.log("error reached final destination");
            console.log(error);
            _this.router.navigate(['/error']);
        });
        this.route.url
            .subscribe(function (segments) { if (segments.join("").includes("edit")) {
            _this.editMode = true;
        } });
    };
    return PrinterDetailsComponent;
}());
PrinterDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-printer-details',
        template: __webpack_require__(674),
        styles: [__webpack_require__(135), __webpack_require__(611)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_printers_printers_service__["a" /* PrintersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_printers_printers_service__["a" /* PrintersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PrinterDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=printer-details.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_printers_printers_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterLibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrinterLibraryComponent = (function () {
    function PrinterLibraryComponent(router, printersService) {
        this.router = router;
        this.printersService = printersService;
    }
    PrinterLibraryComponent.prototype.applySearch = function () {
        var _this = this;
        if (this.printerSearchTxt) {
            this.displayPrinters = this.allPrinters.filter(function (printer) { return printer.PrinterName.toLowerCase().includes(_this.printerSearchTxt.toLowerCase()); });
        }
        else {
            this.displayPrinters = this.allPrinters;
        }
    };
    PrinterLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("profile") != null) {
            var userProfile = localStorage.getItem("profile");
            this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
        }
        this.printersService.getPrinters(this.app_user_id)
            .subscribe(function (printers) {
            _this.allPrinters = printers;
            _this.displayPrinters = printers;
        }, function (error) {
            console.error(error);
            _this.router.navigate(['/error']);
        });
    };
    return PrinterLibraryComponent;
}());
PrinterLibraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-printer-library',
        template: __webpack_require__(675),
        styles: [__webpack_require__(136)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_printers_printers_service__["a" /* PrintersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_printers_printers_service__["a" /* PrintersService */]) === "function" && _b || Object])
], PrinterLibraryComponent);

var _a, _b;
//# sourceMappingURL=printer-library.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrintBaseComponent = (function () {
    function PrintBaseComponent() {
    }
    PrintBaseComponent.prototype.ngOnInit = function () {
    };
    return PrintBaseComponent;
}());
PrintBaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-print-base',
        template: __webpack_require__(676),
        styles: [__webpack_require__(612)]
    }),
    __metadata("design:paramtypes", [])
], PrintBaseComponent);

//# sourceMappingURL=print-base.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_prints_prints_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintDetailsComponent = (function () {
    function PrintDetailsComponent(route, router, printsService) {
        this.route = route;
        this.router = router;
        this.printsService = printsService;
        this.editMode = false;
    }
    PrintDetailsComponent.prototype.savePrintUpdate = function () {
        var _this = this;
        // update items not bound directly to the UI
        this.print.FilamentId = this.selectedFilament.FilamentId;
        this.print.PrinterId = this.selectedPrinter.PrinterId;
        this.print.PrintTimeMinutes = (this.printTimeHours * 60) + this.printTimeMinutes;
        this.printsService.updatePrint(this.print)
            .subscribe(function (print) { return _this.router.navigate(['/prints', 'printdetails', print.PrintId]); }, function (error) { return _this.router.navigate(['/error']); });
    };
    // Interface implementations
    PrintDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("profile") != null) {
            var userProfile = localStorage.getItem("profile");
            this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
        }
        else {
            console.error("Application user ID not set.");
            this.router.navigate(['/error']);
        }
        this.route.data
            .subscribe(function (data) {
            _this.print = data.print;
            _this.printTimeMinutes = _this.print.PrintTimeMinutes % 60;
            _this.printTimeHours = Math.floor(_this.print.PrintTimeMinutes / 60);
        }, function (error) { console.log("error reached final destination"); console.log(error); _this.router.navigate(['/error']); });
        this.route.url
            .subscribe(function (segments) {
            if (segments.join("").includes("edit")) {
                _this.editMode = true;
                _this.printsService.getFilamentOptions(_this.app_user_id)
                    .subscribe(function (filaments) {
                    _this.filamentOptions = filaments;
                    _this.selectedFilament = filaments.find(function (filament) { return filament.FilamentId == _this.print.FilamentId; });
                }, function (error) { return _this.router.navigate(['/error']); });
                _this.printsService.getPrinterOptions(_this.app_user_id)
                    .subscribe(function (printers) {
                    _this.printerOptions = printers;
                    _this.selectedPrinter = printers.find(function (printer) { return printer.PrinterId == _this.print.PrinterId; });
                }, function (error) { return _this.router.navigate(['/error']); });
            }
        });
    };
    return PrintDetailsComponent;
}());
PrintDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-print-details',
        template: __webpack_require__(677),
        styles: [__webpack_require__(135), __webpack_require__(613)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_prints_prints_service__["a" /* PrintsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_prints_prints_service__["a" /* PrintsService */]) === "function" && _c || Object])
], PrintDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=print-details.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prints_prints_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintLibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintLibraryComponent = (function () {
    function PrintLibraryComponent(printsService, router) {
        this.printsService = printsService;
        this.router = router;
    }
    // apply filters if they are not null
    PrintLibraryComponent.prototype.applySearch = function () {
        var _this = this;
        var filteredPrints = this.allPrints;
        if (this.printSearchTxt) {
            filteredPrints = filteredPrints.filter(function (print) { return print.PrintName.toLowerCase().includes(_this.printSearchTxt.toLowerCase()); });
        }
        if (this.selectedFilament) {
            filteredPrints = filteredPrints.filter(function (print) { return print.FilamentId == _this.selectedFilament.FilamentId; });
        }
        if (this.selectedPrinter) {
            filteredPrints = filteredPrints.filter(function (print) { return print.PrinterId == _this.selectedPrinter.PrinterId; });
        }
        this.displayPrints = filteredPrints;
    };
    PrintLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("profile") != null) {
            var userProfile = localStorage.getItem("profile");
            this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
        }
        else {
        }
        this.printsService.getFilamentOptions(this.app_user_id)
            .subscribe(function (filaments) {
            _this.filamentOptions = filaments;
        }, function (error) {
            console.error(error);
            _this.router.navigate(['/error']);
        });
        this.printsService.getPrints(this.app_user_id)
            .subscribe(function (prints) {
            _this.allPrints = prints;
            _this.displayPrints = prints;
        }, function (error) {
            console.error(error);
            _this.router.navigate(['/error']);
        });
        this.printsService.getPrinterOptions(this.app_user_id)
            .subscribe(function (printers) { return _this.printerOptions = printers; }, function (error) {
            console.error(error);
            _this.router.navigate(['/error']);
        });
        // initialize select boxes or else they are empty
        this.selectedFilament = "";
        this.selectedPrinter = "";
        this.printSearchTxt = null;
    };
    return PrintLibraryComponent;
}());
PrintLibraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-print-library',
        template: __webpack_require__(678),
        styles: [__webpack_require__(136)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prints_prints_service__["a" /* PrintsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_prints_prints_service__["a" /* PrintsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PrintLibraryComponent);

var _a, _b;
//# sourceMappingURL=print-library.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 469;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
// app/auth.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Avoid name not found warnings
var Auth0Lock = __webpack_require__(221).default;
var Auth = (function () {
    function Auth(router) {
        var _this = this;
        this.router = router;
        this.options = {
            auth: {
                redirectUrl: window.location.origin + '/login',
                responseType: "token",
            }
        };
        if (window.location.origin.includes("github")) {
            this.base_href = "https://atruongtech.github.io/print3dstats";
        }
        else {
            this.base_href = window.location.origin;
        }
        this.options.auth.redirectUrl = this.base_href + "/login";
        this.lock = new Auth0Lock('sDfOrQe1VAPSBGViYgUGJUHXyzSgEgMC', 'print3dstats.auth0.com', this.options);
        // Set userProfile attribute of already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            // Fetch profile information
            _this.refreshProfile();
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    Auth.prototype.authenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        // Remove stored user info from localStorage
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };
    Auth.prototype.refreshProfile = function () {
        var _this = this;
        var token = localStorage.getItem("id_token");
        this.lock.getProfile(token, function (error, profile) {
            if (error) {
                // Handle error
                alert(error);
                return;
            }
            // TODO check if there is an app_user_id set in app_metadata
            // TODO if no app_user_id, call service to set it and get back updated profile info
            localStorage.setItem('profile', JSON.stringify(profile));
            _this.userProfile = profile;
        });
    };
    return Auth;
}());
Auth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], Auth);

var _a;
//# sourceMappingURL=auth0.service.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(70);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_auth0_auth0_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'Hello, world!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(664),
        styles: [__webpack_require__(601)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_auth0_auth0_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_auth0_auth0_service__["a" /* Auth */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prints_prints_module__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__printers_printers_module__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filaments_filaments_module__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_auth0_auth0_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_authguard_authguard_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_home_home_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_brand_bar_brand_bar_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_app_common_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_error_error_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_not_found_not_found_component__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__core_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__core_brand_bar_brand_bar_component__["a" /* BrandBarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__core_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_16__core_not_found_not_found_component__["a" /* NotFoundComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__common_app_common_module__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__prints_prints_module__["a" /* PrintsModule */],
            __WEBPACK_IMPORTED_MODULE_6__printers_printers_module__["a" /* PrintersModule */],
            __WEBPACK_IMPORTED_MODULE_7__filaments_filaments_module__["a" /* FilamentsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* AlertModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__common_services_auth0_auth0_service__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_10__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinIntValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateIntFieldFactory() {
    return function (c) {
        var isValid = c.value >= 0;
        if (isValid) {
            return null;
        }
        else {
            return {
                minInt: {
                    valid: false
                }
            };
        }
    };
}
var MinIntValidator = MinIntValidator_1 = (function () {
    function MinIntValidator() {
        this.validator = validateIntFieldFactory();
    }
    MinIntValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return MinIntValidator;
}());
MinIntValidator = MinIntValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[minInt][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: MinIntValidator_1, multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], MinIntValidator);

var MinIntValidator_1;
//# sourceMappingURL=min-int-validator.directive.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth0_auth0_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavComponent = (function () {
    function SideNavComponent(auth) {
        this.auth = auth;
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-nav',
        template: __webpack_require__(666),
        styles: [__webpack_require__(603)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth0_auth0_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth0_auth0_service__["a" /* Auth */]) === "function" && _a || Object])
], SideNavComponent);

var _a;
//# sourceMappingURL=side-nav.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_auth0_auth0_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandBarComponent = (function () {
    function BrandBarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    BrandBarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigateByUrl("");
    };
    BrandBarComponent.prototype.login = function () {
        this.router.navigateByUrl("login");
    };
    BrandBarComponent.prototype.ngOnInit = function () {
    };
    return BrandBarComponent;
}());
BrandBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brand-bar',
        template: __webpack_require__(667),
        styles: [__webpack_require__(604)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_auth0_auth0_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_auth0_auth0_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], BrandBarComponent);

var _a, _b;
//# sourceMappingURL=brand-bar.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_authguard_authguard_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filaments_base_filaments_base_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filament_library_filament_library_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filament_details_filament_details_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_filament_details_resolver_filament_details_resolver_service__ = __webpack_require__(483);
/* unused harmony export filamentRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var filamentRoutes = [
    {
        path: "filaments",
        component: __WEBPACK_IMPORTED_MODULE_4__filaments_base_filaments_base_component__["a" /* FilamentsBaseComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
        children: [
            {
                path: "",
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
                children: [
                    {
                        path: "filamentdetails/:id/edit",
                        component: __WEBPACK_IMPORTED_MODULE_6__filament_details_filament_details_component__["a" /* FilamentDetailsComponent */],
                        resolve: {
                            filament: __WEBPACK_IMPORTED_MODULE_7__services_filament_details_resolver_filament_details_resolver_service__["a" /* FilamentDetailsResolver */]
                        }
                    },
                    {
                        path: "filamentdetails/:id",
                        component: __WEBPACK_IMPORTED_MODULE_6__filament_details_filament_details_component__["a" /* FilamentDetailsComponent */],
                        resolve: {
                            filament: __WEBPACK_IMPORTED_MODULE_7__services_filament_details_resolver_filament_details_resolver_service__["a" /* FilamentDetailsResolver */]
                        }
                    },
                    {
                        path: "",
                        component: __WEBPACK_IMPORTED_MODULE_5__filament_library_filament_library_component__["a" /* FilamentLibraryComponent */]
                    }
                ]
            }
        ]
    }
];
var FilamentRoutingModule = (function () {
    function FilamentRoutingModule() {
    }
    return FilamentRoutingModule;
}());
FilamentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(filamentRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_filament_details_resolver_filament_details_resolver_service__["a" /* FilamentDetailsResolver */]
        ],
        declarations: []
    })
], FilamentRoutingModule);

//# sourceMappingURL=filament-routing.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_app_common_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filament_routing_module__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filament_library_filament_library_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filament_details_filament_details_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filaments_base_filaments_base_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_filaments_filaments_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FilamentsModule = (function () {
    function FilamentsModule() {
    }
    return FilamentsModule;
}());
FilamentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__common_app_common_module__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__filament_routing_module__["a" /* FilamentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_filaments_filaments_service__["a" /* FilamentsService */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__filament_library_filament_library_component__["a" /* FilamentLibraryComponent */], __WEBPACK_IMPORTED_MODULE_6__filament_details_filament_details_component__["a" /* FilamentDetailsComponent */], __WEBPACK_IMPORTED_MODULE_7__filaments_base_filaments_base_component__["a" /* FilamentsBaseComponent */]]
    })
], FilamentsModule);

//# sourceMappingURL=filaments.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filaments_filaments_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentDetailsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilamentDetailsResolver = (function () {
    function FilamentDetailsResolver(filamentsService, router) {
        this.filamentsService = filamentsService;
        this.router = router;
    }
    FilamentDetailsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.filamentsService.getFilamentById(id)
            .map(function (filament) {
            if (filament) {
                console.log("found something to return");
                return filament;
            }
            else {
                console.log("should redirect to 404");
                _this.router.navigate(['/404']);
                return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](null);
            }
        })
            .catch(function (error) {
            _this.router.navigate(['/error']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        }).first();
    };
    return FilamentDetailsResolver;
}());
FilamentDetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__filaments_filaments_service__["a" /* FilamentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__filaments_filaments_service__["a" /* FilamentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], FilamentDetailsResolver);

var _a, _b;
//# sourceMappingURL=filament-details-resolver.service.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_authguard_authguard_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__printer_base_printer_base_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__printer_library_printer_library_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__printer_details_printer_details_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_printer_details_resolver_printer_details_resolver_service__ = __webpack_require__(486);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintersRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var printerRoutes = [
    {
        path: "printers",
        component: __WEBPACK_IMPORTED_MODULE_3__printer_base_printer_base_component__["a" /* PrinterBaseComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
        children: [
            {
                path: "",
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
                children: [
                    {
                        path: "printerdetails/:id/edit",
                        component: __WEBPACK_IMPORTED_MODULE_5__printer_details_printer_details_component__["a" /* PrinterDetailsComponent */],
                        resolve: {
                            printer: __WEBPACK_IMPORTED_MODULE_6__services_printer_details_resolver_printer_details_resolver_service__["a" /* PrinterDetailsResolver */]
                        }
                    },
                    { path: "printerdetails/:id",
                        component: __WEBPACK_IMPORTED_MODULE_5__printer_details_printer_details_component__["a" /* PrinterDetailsComponent */],
                        resolve: {
                            printer: __WEBPACK_IMPORTED_MODULE_6__services_printer_details_resolver_printer_details_resolver_service__["a" /* PrinterDetailsResolver */]
                        }
                    },
                    { path: "", component: __WEBPACK_IMPORTED_MODULE_4__printer_library_printer_library_component__["a" /* PrinterLibraryComponent */] }
                ]
            }
        ]
    }
];
var PrintersRoutingModule = (function () {
    function PrintersRoutingModule() {
    }
    return PrintersRoutingModule;
}());
PrintersRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(printerRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_printer_details_resolver_printer_details_resolver_service__["a" /* PrinterDetailsResolver */]
        ]
    })
], PrintersRoutingModule);

//# sourceMappingURL=printers-routing.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__printers_routing_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__printer_library_printer_library_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_printers_printers_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_app_common_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__printer_details_printer_details_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__printer_base_printer_base_component__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PrintersModule = (function () {
    function PrintersModule() {
    }
    return PrintersModule;
}());
PrintersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__common_app_common_module__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__printers_routing_module__["a" /* PrintersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__printer_library_printer_library_component__["a" /* PrinterLibraryComponent */], __WEBPACK_IMPORTED_MODULE_7__printer_details_printer_details_component__["a" /* PrinterDetailsComponent */], __WEBPACK_IMPORTED_MODULE_8__printer_base_printer_base_component__["a" /* PrinterBaseComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_printers_printers_service__["a" /* PrintersService */]]
    })
], PrintersModule);

//# sourceMappingURL=printers.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__printers_printers_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterDetailsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrinterDetailsResolver = (function () {
    function PrinterDetailsResolver(printersService, router) {
        this.printersService = printersService;
        this.router = router;
    }
    PrinterDetailsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.printersService.getPrinterById(id)
            .map(function (printer) {
            if (printer) {
                return printer;
            }
            else {
                _this.router.navigate(['/404']);
                return null;
            }
        })
            .catch(function (error) {
            if (error.startsWith("404")) {
                _this.router.navigate(['/404']);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
            }
            _this.router.navigate(['/error']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        })
            .first();
    };
    return PrinterDetailsResolver;
}());
PrinterDetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__printers_printers_service__["a" /* PrintersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__printers_printers_service__["a" /* PrintersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PrinterDetailsResolver);

var _a, _b;
//# sourceMappingURL=printer-details-resolver.service.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_authguard_authguard_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print_base_print_base_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__print_library_print_library_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__print_details_print_details_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_print_details_resolver_print_details_resolver_service__ = __webpack_require__(489);
/* unused harmony export printRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var printRoutes = [
    {
        path: 'prints',
        component: __WEBPACK_IMPORTED_MODULE_3__print_base_print_base_component__["a" /* PrintBaseComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
        children: [
            {
                path: "",
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__common_services_authguard_authguard_service__["a" /* AuthguardService */]],
                children: [
                    {
                        path: 'printdetails/:id/edit',
                        component: __WEBPACK_IMPORTED_MODULE_5__print_details_print_details_component__["a" /* PrintDetailsComponent */],
                        resolve: {
                            print: __WEBPACK_IMPORTED_MODULE_6__services_print_details_resolver_print_details_resolver_service__["a" /* PrintDetailsResolver */]
                        }
                    },
                    {
                        path: 'printdetails/:id',
                        component: __WEBPACK_IMPORTED_MODULE_5__print_details_print_details_component__["a" /* PrintDetailsComponent */],
                        resolve: {
                            print: __WEBPACK_IMPORTED_MODULE_6__services_print_details_resolver_print_details_resolver_service__["a" /* PrintDetailsResolver */]
                        }
                    },
                    {
                        path: "",
                        component: __WEBPACK_IMPORTED_MODULE_4__print_library_print_library_component__["a" /* PrintLibraryComponent */]
                    }
                ]
            }
        ]
    },
];
var PrintRoutingModule = (function () {
    function PrintRoutingModule() {
    }
    return PrintRoutingModule;
}());
PrintRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(printRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_print_details_resolver_print_details_resolver_service__["a" /* PrintDetailsResolver */]
        ]
    })
], PrintRoutingModule);

//# sourceMappingURL=print-routing.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print_routing_module__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__print_library_print_library_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__print_details_print_details_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_prints_prints_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_app_common_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__print_base_print_base_component__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PrintsModule = (function () {
    function PrintsModule() {
    }
    return PrintsModule;
}());
PrintsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__common_app_common_module__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__print_routing_module__["a" /* PrintRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__print_library_print_library_component__["a" /* PrintLibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__print_details_print_details_component__["a" /* PrintDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__print_base_print_base_component__["a" /* PrintBaseComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_prints_prints_service__["a" /* PrintsService */]
        ],
    })
], PrintsModule);

//# sourceMappingURL=prints.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prints_prints_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintDetailsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrintDetailsResolver = (function () {
    function PrintDetailsResolver(printsService, router) {
        this.printsService = printsService;
        this.router = router;
    }
    PrintDetailsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.printsService.getPrintById(id)
            .map(function (print) {
            if (print) {
                return print;
            }
            else {
                _this.router.navigate(['/404']);
                return null;
            }
        })
            .catch(function (error) {
            if (error.startsWith("404")) {
                _this.router.navigate(['/404']);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
            }
            // service has already logged error in console.
            _this.router.navigate(['/error']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        })
            .first();
    };
    return PrintDetailsResolver;
}());
PrintDetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__prints_prints_service__["a" /* PrintsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__prints_prints_service__["a" /* PrintsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PrintDetailsResolver);

var _a, _b;
//# sourceMappingURL=print-details-resolver.service.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_login_login_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_error_error_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_not_found_not_found_component__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__common_login_login_component__["a" /* LoginComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__core_error_error_component__["a" /* ErrorComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_5__core_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__core_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".truncate {\n    white-space:nowrap;\n    overflow:hidden;\n    text-overflow:ellipsis;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".color-header {\n    width:100%;\n    height:70px;\n    border-radius:5px;\n}\n\n#colorSwatchForm {\n    margin-top:10px;\n}\n\n.main-content {\n    padding-left:15px;\n}\n\n.print-container {\n    width:150px;\n    height: 200px;\n    margin:10px;\n}\n\n.print-image{\n    max-height:150px;\n    max-width: 150px;\n    padding: 4px;\n    border: 1px solid lightgrey;\n    border-radius: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".color-sample {\n    width:75px;\n    height:15px;\n}\n\n.rowlink::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1.5em;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".input-group {\n    max-width:400px;\n}\n\ninput {\n    max-width:400px;\n}\n\n.print-container {\n    width:150px;\n    height: 200px;\n    margin:10px;\n}\n\n.print-image{\n    max-height:150px;\n    max-width: 150px;\n    padding: 4px;\n    border: 1px solid lightgrey;\n    border-radius: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#main-image{\n    height:200px;\n    width:auto;\n    border: 1px solid lightgrey;\n    padding: 5px;\n    border-radius: 5px;\n    margin-top:20px;\n}\n\ndd {\n    margin-bottom:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 246,
	"./af.js": 246,
	"./ar": 253,
	"./ar-dz": 247,
	"./ar-dz.js": 247,
	"./ar-kw": 248,
	"./ar-kw.js": 248,
	"./ar-ly": 249,
	"./ar-ly.js": 249,
	"./ar-ma": 250,
	"./ar-ma.js": 250,
	"./ar-sa": 251,
	"./ar-sa.js": 251,
	"./ar-tn": 252,
	"./ar-tn.js": 252,
	"./ar.js": 253,
	"./az": 254,
	"./az.js": 254,
	"./be": 255,
	"./be.js": 255,
	"./bg": 256,
	"./bg.js": 256,
	"./bn": 257,
	"./bn.js": 257,
	"./bo": 258,
	"./bo.js": 258,
	"./br": 259,
	"./br.js": 259,
	"./bs": 260,
	"./bs.js": 260,
	"./ca": 261,
	"./ca.js": 261,
	"./cs": 262,
	"./cs.js": 262,
	"./cv": 263,
	"./cv.js": 263,
	"./cy": 264,
	"./cy.js": 264,
	"./da": 265,
	"./da.js": 265,
	"./de": 268,
	"./de-at": 266,
	"./de-at.js": 266,
	"./de-ch": 267,
	"./de-ch.js": 267,
	"./de.js": 268,
	"./dv": 269,
	"./dv.js": 269,
	"./el": 270,
	"./el.js": 270,
	"./en-au": 271,
	"./en-au.js": 271,
	"./en-ca": 272,
	"./en-ca.js": 272,
	"./en-gb": 273,
	"./en-gb.js": 273,
	"./en-ie": 274,
	"./en-ie.js": 274,
	"./en-nz": 275,
	"./en-nz.js": 275,
	"./eo": 276,
	"./eo.js": 276,
	"./es": 278,
	"./es-do": 277,
	"./es-do.js": 277,
	"./es.js": 278,
	"./et": 279,
	"./et.js": 279,
	"./eu": 280,
	"./eu.js": 280,
	"./fa": 281,
	"./fa.js": 281,
	"./fi": 282,
	"./fi.js": 282,
	"./fo": 283,
	"./fo.js": 283,
	"./fr": 286,
	"./fr-ca": 284,
	"./fr-ca.js": 284,
	"./fr-ch": 285,
	"./fr-ch.js": 285,
	"./fr.js": 286,
	"./fy": 287,
	"./fy.js": 287,
	"./gd": 288,
	"./gd.js": 288,
	"./gl": 289,
	"./gl.js": 289,
	"./gom-latn": 290,
	"./gom-latn.js": 290,
	"./he": 291,
	"./he.js": 291,
	"./hi": 292,
	"./hi.js": 292,
	"./hr": 293,
	"./hr.js": 293,
	"./hu": 294,
	"./hu.js": 294,
	"./hy-am": 295,
	"./hy-am.js": 295,
	"./id": 296,
	"./id.js": 296,
	"./is": 297,
	"./is.js": 297,
	"./it": 298,
	"./it.js": 298,
	"./ja": 299,
	"./ja.js": 299,
	"./jv": 300,
	"./jv.js": 300,
	"./ka": 301,
	"./ka.js": 301,
	"./kk": 302,
	"./kk.js": 302,
	"./km": 303,
	"./km.js": 303,
	"./kn": 304,
	"./kn.js": 304,
	"./ko": 305,
	"./ko.js": 305,
	"./ky": 306,
	"./ky.js": 306,
	"./lb": 307,
	"./lb.js": 307,
	"./lo": 308,
	"./lo.js": 308,
	"./lt": 309,
	"./lt.js": 309,
	"./lv": 310,
	"./lv.js": 310,
	"./me": 311,
	"./me.js": 311,
	"./mi": 312,
	"./mi.js": 312,
	"./mk": 313,
	"./mk.js": 313,
	"./ml": 314,
	"./ml.js": 314,
	"./mr": 315,
	"./mr.js": 315,
	"./ms": 317,
	"./ms-my": 316,
	"./ms-my.js": 316,
	"./ms.js": 317,
	"./my": 318,
	"./my.js": 318,
	"./nb": 319,
	"./nb.js": 319,
	"./ne": 320,
	"./ne.js": 320,
	"./nl": 322,
	"./nl-be": 321,
	"./nl-be.js": 321,
	"./nl.js": 322,
	"./nn": 323,
	"./nn.js": 323,
	"./pa-in": 324,
	"./pa-in.js": 324,
	"./pl": 325,
	"./pl.js": 325,
	"./pt": 327,
	"./pt-br": 326,
	"./pt-br.js": 326,
	"./pt.js": 327,
	"./ro": 328,
	"./ro.js": 328,
	"./ru": 329,
	"./ru.js": 329,
	"./sd": 330,
	"./sd.js": 330,
	"./se": 331,
	"./se.js": 331,
	"./si": 332,
	"./si.js": 332,
	"./sk": 333,
	"./sk.js": 333,
	"./sl": 334,
	"./sl.js": 334,
	"./sq": 335,
	"./sq.js": 335,
	"./sr": 337,
	"./sr-cyrl": 336,
	"./sr-cyrl.js": 336,
	"./sr.js": 337,
	"./ss": 338,
	"./ss.js": 338,
	"./sv": 339,
	"./sv.js": 339,
	"./sw": 340,
	"./sw.js": 340,
	"./ta": 341,
	"./ta.js": 341,
	"./te": 342,
	"./te.js": 342,
	"./tet": 343,
	"./tet.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 350,
	"./tzm-latn": 349,
	"./tzm-latn.js": 349,
	"./tzm.js": 350,
	"./uk": 351,
	"./uk.js": 351,
	"./ur": 352,
	"./ur.js": 352,
	"./uz": 354,
	"./uz-latn": 353,
	"./uz-latn.js": 353,
	"./uz.js": 354,
	"./vi": 355,
	"./vi.js": 355,
	"./x-pseudo": 356,
	"./x-pseudo.js": 356,
	"./yo": 357,
	"./yo.js": 357,
	"./zh-cn": 358,
	"./zh-cn.js": 358,
	"./zh-hk": 359,
	"./zh-hk.js": 359,
	"./zh-tw": 360,
	"./zh-tw.js": 360
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 632;


/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<app-brand-bar></app-brand-bar>\n<div class=\"container\">\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" style=\"min-height:100%; display: flex; align-items: center\">\n  <p class=\"center-block\">Please wait...</p>\n</div>\n\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "    <span class=\"truncate center-block text-center\" *ngIf='auth.userProfile'><strong>{{auth.userProfile.name}}</strong></span>\n    <ul class=\"nav nav-tabs nav-stacked\" style=\"margin-top:10px; margin-bottom:15px\">\n        <li role=\"presentation\"  routerLinkActive=\"active\"><a routerLink=\"/prints\" class=\"nav-link\">Prints</a> </li>\n        <li role=\"presentation\"  routerLinkActive=\"active\"><a routerLink=\"/printers\" class=\"nav-link\">Printers</a> </li>\n        <li role=\"presentation\"  routerLinkActive=\"active\"><a routerLink=\"/filaments\" class=\"nav-link\">Filaments</a> </li>\n        <li role=\"presentation\" ><a href=\"#\" class=\"nav-link\">Stats</a> </li>\n    </ul>\n\n    <!-- <div class=\"text-center\" style=\"margin-top:600px\">Hello </div> -->"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#testing\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Print3dStats</a> \n      \n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"testing\">\n\n        <form class=\"navbar-form navbar-right\">\n          <button type=\"button\" class=\"btn btn-success\" *ngIf=\"!auth.authenticated()\" (click)=\"login()\">Sign In</button>\n          <button type=\"button\" class=\"btn btn-default\" *ngIf=\"auth.authenticated()\" (click)=\"logout()\">Sign Out</button>\n        </form>\n    </div>\n    \n  </div><!-- /.container-->\n  \n</nav>"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div class='text-center'>Oops, something went wrong.</div>\n<div class=\"center-block text-center\"><a [routerLink]=\"['/prints']\">Go back home</a></div>\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "  <div class='row main-content'>\n    <div style=\"margin-bottom:15px\"><a [routerLink]=\"['/filaments']\">< Back to Filaments</a></div>\n    <div class=\"color-header\" [style.background]=\"filament.HtmlColor\"></div>\n    <div class=\"form-inline\" id=\"colorSwatchForm\" *ngIf=\"editMode\">\n      <label for=\"colorSwatch\">Color Swatch</label>\n      <input required type=\"color\" name=\"colorSwatch\" [(ngModel)]=\"filament.HtmlColor\">\n    </div>\n    <hr/>\n    \n    <div *ngIf=\"!editMode\"><a [routerLink]=\"['edit']\">Edit this Filament</a></div>\n    <div *ngIf=\"editMode\"><a [routerLink]=\"['..']\">Stop Editing</a></div>\n    <ng-container *ngIf=\"!editMode\">\n      <h2 class=\"h3\">Filament Information</h2>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <dl>\n          <dt>Brand</dt>\n          <dd>{{filament.Brand}}</dd>\n          <dt>Material</dt>\n          <dd>{{filament.Material}}</dd>\n          <dt>Length Remaining</dt>\n          <dd>{{filament.LengthRemain}} m</dd>\n          <dt>Color Family</dt>\n          <dd>{{filament.Color}}</dd>\n        </dl>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <dl>\n          <dt>Date of Purchase</dt>\n          <dd>{{filament.DateAcquired}}</dd>\n          <dt>Place of Purchase</dt>\n          <dd>{{filament.FilamentSource}}</dd>\n          <dt>Spool Id</dt>\n          <dd>{{filament.UserFilamentId}}</dd>\n        </dl>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      \n      \n    </ng-container>\n</div> <!-- row -->\n<div class=\"row\" *ngIf=\"filament.Prints && !editMode\">\n  <h2 class=\"h3\">Prints With This Filament</h2>\n  <div>\n    <div *ngFor=\"let print of filament.Prints\" class=\"pull-left\">\n      <a [routerLink]=\"['/prints/printdetails', print.PrintId]\" >\n        <div class=\"print-container text-center\">\n          <img [src]=print.MainPrintImageUrl class=\"print-image center-block\"/>\n          <span>{{print.PrintName}}</span>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<form class=\"form-group\" novalidate *ngIf=\"editMode\" #updateForm=\"ngForm\" (ngSubmit)=\"saveFilamentEdit()\">\n    <fieldset>\n      <h2 class=\"h3\">Filament Information</h2>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <label for=\"brandName\">Brand</label>\n        <input required class=\"form-control\" name=\"brandName\" [(ngModel)]=\"filament.Brand\">\n        <label for=\"materialName\">Material</label>\n        <input required class=\"form-control\" name=\"materialName\" [(ngModel)]=\"filament.Material\">\n        <label for=\"lengthRemain\">Length Remaining</label>\n        <div class=\"input-group\">\n          <input required ngModel minInt class=\"form-control\" name=\"lengthRemain\" [(ngModel)]=\"filament.LengthRemain\">\n          <span class=\"input-group-addon\">meters</span>\n        </div>\n        <label for=\"colorFamily\">Color</label>\n        <select class=\"form-control\" name=\"colorFamily\" required [(ngModel)]=\"selectedColor\">\n          <option *ngFor=\"let color of colors\" [ngValue]=\"color\">{{color.Color}}</option>\n        </select>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <label for=\"dateAcquired\">Date of Purchase</label>\n        <input name=\"dateAcquired\" class=\"form-control\" type=\"date\" [(ngModel)]=\"filament.DateAcquired\">\n        <label for=\"filamentSource\">Place of Purchase</label>\n        <input name=\"filamentSource\" class=\"form-control\" [(ngModel)]=\"filament.FilamentSource\">\n      </div>\n    </fieldset>\n    <div class=\"center-block text-center submit-wrapper\">\n      <button type=\"submit\" class=\"btn btn-default\">Save Changes</button>\n    </div>\n    \n  </form>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<form class=\"form form-inline\" id=\"search-form\">\n  <div class=\"form-group col-md-6\">\n    <label class=\"control-label\" for=\"searchTxt\">Search</label>\n    <div class=\"\">\n      <input type=\"text\" class=\"form-control\" name=\"searchTxt\" [(ngModel)]=\"searchTxt\" placeholder=\"Search by color, brand, or material\">\n    </div>\n  </div> <!-- form-group col-md-6 -->\n    <div class=\"form-group col-md-2\">\n    <div>\n      <button class=\"btn btn-default\" (click)=\"applySearch()\">Apply</button>\n    </div>\n  </div> <!-- form-group col-md-2 -->\n\n</form> <!-- form -->\n  <div class=\"clearfix\"></div>\n  <hr/>\n\n<table class=\"table table-hover table-responsive\">\n  <thead>\n\n    <th>Spool</th>\n    <th>Material</th>\n    <th>Brand</th>\n    <th>Color Family</th>\n    <th>Color Swatch</th>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let filament of displayFilaments\">\n      <tr>\n        <td><a [routerLink]=\"['filamentdetails',filament.FilamentId]\" class=\"rowlink\">{{filament.UserFilamentId}}</a></td>\n        <td>{{filament.Material}}</td>\n        <td>{{filament.Brand}}</td>\n        <td>{{filament.Color}}</td>\n        <td><div class=\"color-sample\" [style.background]=\"filament.HtmlColor\"></div></td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n\n<div *ngIf=\"is_error\" class=\"text-center\">Sorry, something went wrong.</div>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 col-sm-12\">\n    <app-side-nav></app-side-nav>\n</div> <!--col-md-2 -->\n<div class=\"col-md-10 col-sm-12\">\n  <router-outlet></router-outlet>\n</div> <!-- col-md-10 -->\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 col-sm-12\">\n    <app-side-nav></app-side-nav>\n</div> <!--col-md-2 -->\n<div class=\"col-md-10 col-sm-12\">\n  <router-outlet></router-outlet>\n</div> <!-- col-md-10 -->"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "\n<div><a [routerLink]=\"['/printers']\">< Back to Printers</a></div>\n  <img class=\"center-block\" id=\"main-image\" [src]=printer.MainPrinterImageUrl/>\n  <h1 class=\"h2 text-center center-block\"><strong>{{printer.PrinterName}} - Printer {{printer.UserPrinterId}}</strong></h1>\n  <a class=\"text-center center-block\" [routerLink]=\"['edit']\" *ngIf=\"!editMode\">Edit this printer</a>\n  <a class=\"text-center center-block\" [routerLink]=\"['..']\" *ngIf=\"editMode\">Stop editing</a>\n  <hr/>\n  <div class=\"clearfix\"></div>\n  <ng-container *ngIf=\"!editMode\">\n    <div class=\"row\">\n      <h2 class=\"h3\">Printer Information</h2>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <dl *ngIf=\"!editMode\">\n          <dt>Name</dt>\n          <dd>{{printer.PrinterName}}</dd>\n          <dt>Total Print Time</dt>\n          <dd>{{printer.PrintTimeHours}} hrs</dd>\n          <dt>Number of Prints</dt>\n          <dd>{{printer.NumberOfPrints}}</dd>       \n        </dl>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <dl>\n          <dt>Date Acquired</dt>\n          <dd>{{printer.DateAcquired}}</dd>\n          <dt>Source</dt>\n          <dd>{{printer.PrinterSource}}</dd>\n          <dt>Printer Id</dt>\n          <dd>{{printer.UserPrinterId}}</dd>\n        </dl>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      <div class=\"clearfix\"></div>\n      <h2 class=\"h3\">Maintenance Information</h2>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <dl>\n          <dt>Belts Maint. Interval</dt>\n          <dd>{{printer.BeltMaintInt}} hrs</dd>\n          <dt>Belts Last Service (Total Print Time)</dt>\n          <dd>{{printer.BeltMaintLast}} hrs</dd>\n        </dl>\n        <form class=\"form\">\n          <button type=\"button\" class=\"btn btn-default maint-btn\">Belt Maintenance Performed</button>\n        </form>\n        \n\n        <dl>\n          <dt>Wiring Maint. Interval</dt>\n          <dd>{{printer.WireMaintInt}} hrs</dd>\n          <dt>Wiring Last Service (Total Print Time)</dt>\n          <dd>{{printer.WireMaintLast}} hrs</dd>\n        </dl>\n        <form class=\"form\">\n          <button type=\"button\" class=\"btn btn-default maint-btn\">Wire Maintenance Performed</button>\n        </form>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <dl>\n          <dt>Lubr. Maint. Interval</dt>\n          <dd>{{printer.LubeMaintInt}} hrs</dd>\n          <dt>Lubr. Last Service (Total Print Time)</dt>\n          <dd>{{printer.LubeMaintLast}} hrs</dd>\n        </dl>\n        <form class=\"form\">\n          <button type=\"button\" class=\"btn btn-default maint-btn\">Lubr. Maintenance Performed</button>\n        </form>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n              \n    </div> <!-- row -->\n    <div class=\"row\" *ngIf=\"printer.Prints.length > 0 && !editMode\">\n      <h2 class=\"h3\">Prints From This Printer</h2>\n      <div>\n        <div *ngFor=\"let print of printer.Prints\" class=\"pull-left\">\n          <a [routerLink]=\"['/prints/printdetails', print.PrintId]\" >\n            <div class=\"print-container text-center\">\n              <img [src]=print.MainPrintImageUrl class=\"print-image center-block\"/>\n              <span>{{print.PrintName}}</span>\n            </div>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <form class=\"form-group\" #updateForm=\"ngForm\" *ngIf=\"editMode\" (ngSubmit)=\"savePrinterEdit()\">\n    <fieldset>\n      <h2 class='h3'>Printer Information</h2>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">        \n        <label for=\"printerName\">Name</label>\n        <input required class=\"form-control\" name=\"printerName\" [(ngModel)]=\"printer.PrinterName\">\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">          \n        <label for=\"dateAcquired\">Date Acquired</label>\n        <input required class=\"form-control\" name=\"dateAcquired\" [(ngModel)]=\"printer.DateAcquired\">\n        <label for=\"printerSource\">Source</label>\n        <input class=\"form-control\" name=\"printerSource\" [(ngModel)]=\"printer.PrinterSource\">\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n    </fieldset>\n    <fieldset>\n      <h2 class=\"h3\">Maintenance Information </h2>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">  \n        <label for=\"beltMaintInt\">Belt Maint. Interval</label>\n        <div class=\"input-group\">\n          <input required class=\"form-control\" ngModel minInt name=\"beltMaintInt\" [(ngModel)]=\"printer.BeltMaintInt\">\n          <span class=\"input-group-addon\">Hrs</span>\n        </div>\n        <button type=\"button\" class=\"btn btn-default maint-btn\">Belt Maintenance Performed</button>\n        <br>\n        <label for=\"wireMaintInt\">Wiring Maint. Interval</label>\n        <div class=\"input-group\">\n          <input required class=\"form-control\" ngModel minInt name=\"wireMaintInt\" [(ngModel)]=\"printer.WireMaintInt\">\n          <span class=\"input-group-addon\">Hrs</span>\n        </div>\n        <button type=\"button\" class=\"btn btn-default maint-btn\">Wire Maintenance Performed</button>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"> \n        <label for=\"lubeMaintInt\">Lubr. Maint. Interval</label>\n        <div class=\"input-group\">\n          <input required class=\"form-control\" ngModel minInt name=\"lubeMaintInt\" [(ngModel)]=\"printer.LubeMaintInt\">\n          <span class=\"input-group-addon\">Hrs</span>\n        </div>\n        <button type=\"button\" class=\"btn btn-default maint-btn\">Lubr. Maintenance Performed</button>\n      </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n    </fieldset>\n    <div class=\"text-center center-block submit-wrapper\">\n      <button class=\"btn btn-default\" type=\"submit\">Save Changes</button>\n    </div>\n  </form>\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "\n    <form class=\"form form-inline\" id=\"search-form\">\n      <div class=\"form-group col-md-6\">\n        <label class=\"control-label\" for=\"printerSearchTxt\">Search</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control\" name=\"printerSearchTxt\" [(ngModel)]=\"printerSearchTxt\" placeholder=\"Search by printer name\">\n        </div>\n      </div> <!-- form-group col-md-6 -->\n      \n      <div class=\"form-group col-md-2\">\n        <div>\n          <button class=\"btn btn-default\" (click)=\"applySearch()\">Apply</button>\n        </div>\n      </div> <!-- form-group col-md-2 -->\n\n    </form> <!-- form -->\n  <div class=\"clearfix\"></div>\n  <hr/>\n\n  <div id=\"library-display\" class=\"gutter-20\">\n    <div *ngFor=\"let printer of displayPrinters\" class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 single-display\">\n      <a [routerLink]=\"['printerdetails',printer.PrinterId]\">\n        <div class=\"display-container\">\n          <div class=\"display-image-container center-block\">\n            <img [src]=printer.MainPrinterImageUrl class=\"center-block display-image\"/>\n          </div>\n          <div class=\"display-info\">\n            <p class=\"text-center\"><strong>{{printer.PrinterName}}</strong></p>\n            <p class=\"text-center\" style=\"margin-bottom:5px\"><strong>Printer {{printer.PrinterId}}</strong></p>\n            <p class=\"text-center\"><em>Prints:</em> {{printer.NumberOfPrints}}</p>\n            <p class=\"text-center\"><em>Print Time:</em> {{printer.PrintTimeHours}} hours</p>\n            <p class=\"text-center\"><em>Since: </em> {{printer.DateAcquired}}</p>\n          </div> <!-- print-display-info -->\n        </div> <!-- print-display-container -->\n      </a>\n    </div> <!-- let print of allPrints -->\n  </div>"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 col-sm-12\">\n    <app-side-nav></app-side-nav>\n</div> <!--col-md-2 -->\n<div class=\"col-md-10 col-sm-12\">\n  <router-outlet></router-outlet>\n</div> <!-- col-md-10 -->"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/prints']\">< Back to Prints</a>\n<ng-container *ngIf=\"print\">\n  <img class=\"center-block\" id=\"main-image\" [src]=print.MainPrintImageUrl/>\n  <h1 class=\"h2 text-center center-block\"><strong>{{print.PrintName}}</strong></h1>\n  <a [routerLink]=\"['edit']\" *ngIf=\"!editMode\">Edit this Print</a>\n  <a [routerLink]=\"['..']\" *ngIf=\"editMode\">Stop Editing</a>\n  <hr/>\n  <div class=\"clearfix\"></div>\n  <div class=\"row\" *ngIf=\"!editMode\">\n    <h2 class=\"h3\">Print Information</h2>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <dl>\n        <dt>Print Name</dt>\n        <dd>{{print.PrintName}}</dd>\n        <dt>Date Printed</dt>\n        <dd>{{print.PrintDate}}</dd>\n        <dt>Source URL</dt>\n        <dd>{{print.SourceUrl}}</dd>\n        <dt>Model</dt>\n        <dd><a *ngIf=\"print.ModelPath\" [href]=print.ModelPath>Click here to download</a></dd> \n      </dl>\n      \n    </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <dl>\n        <dt>Successful</dt>\n        <dd *ngIf=\"print.Success == true\">Yes</dd>\n        <dd *ngIf=\"print.Success == false\">No</dd>\n        <dt>Print Time</dt>\n        <dd *ngIf=\"printTimeMinutes || printTimeHours\">{{printTimeHours}} hours {{printTimeMinutes}} minutes</dd>\n      </dl>\n    </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n    <div class=\"clearfix\"></div>\n    <h2 class=\"h3\">Filament Usage</h2>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <dl>\n        <dt>Filament Name</dt>\n        <dd><a [routerLink]=\"['/filaments','filamentdetails',print.FilamentId]\">{{print.FilamentName}}</a></dd>\n      </dl>\n    </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <dl>\n        <dt>Length Used</dt>\n        <dd>{{print.LengthUsed}} meters</dd>\n      </dl>\n    </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n\n    <div class=\"clearfix\"></div>\n    <h2 class=\"h3\">Printed on</h2>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <dl>\n        <dt>Printer Name</dt>\n        <dd><a [routerLink]=\"['/printers','printerdetails',print.PrinterId]\">{{print.PrinterName}}</a></dd>\n      </dl>\n    </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n    </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n\n        \n  </div> <!-- row -->\n  <form class=\"form-group\" novalidate *ngIf=\"editMode\" #updateForm=\"ngForm\" (ngSubmit)=\"savePrintUpdate()\">      \n      <fieldset>\n        <h2 class=\"h3\">Print Information</h2>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <label for=\"printName\">Print Name</label>\n            <input required class=\"form-control\" name=\"printName\" [(ngModel)]=\"print.PrintName\">\n            <label for=\"printDate\">Date Printed</label>\n            <input required class=\"form-control\" type=\"date\" name=\"printDate\" [(ngModel)]=\"print.PrintDate\">\n            <label for=\"sourceUrl\">Source Url</label>\n            <input class=\"form-control\" name=\"sourceUrl\" type=\"url\" [(ngModel)]=\"print.SourceUrl\">\n          </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            \n            <label for=\"printTimeHours\">Print Time</label>\n            <div class=\"input-group\" style=\"margin-bottom:15px\">\n              <input required ngModel minInt name=\"printTimeHours\" class=\"form-control\" type=\"number\" min=\"0\" [(ngModel)]=\"printTimeHours\">\n              <span class=\"input-group-addon\">hours and</span>\n            </div>            \n            <label for=\"printTimeMinutes\" class=\"sr-only\">Print Time Minutes</label>\n            <div class=\"input-group\">\n              <input required name=\"printTimeMinutes\" class=\"form-control\" type=\"number\" max=\"60\" min=\"0\" [(ngModel)]=\"printTimeMinutes\">\n              <span class=\"input-group-addon\">minutes</span>\n            </div>       \n            <div class=\"checkbox\" style=\"margin-top:15px\">\n              <label for=\"success\">                \n                <input type=\"checkbox\" name=\"success\" [(ngModel)]=\"print.Success\">\n                <span style=\"font-weight:700\">Successful?</span>\n              </label>            \n            </div>     \n          </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      </fieldset>\n      <fieldset>\n        <h2 class=\"h3\">Filament Usage</h2>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <label for=\"filamentName\">Filament Name</label>\n            <select name=\"filamentName\" class=\"form-control\" [(ngModel)]=\"selectedFilament\">\n              <option *ngFor=\"let filament of filamentOptions\" [ngValue]=\"filament\">{{filament.FilamentName}}</option>\n            </select>\n            <label for=\"lengthUsed\">Length Used</label>\n            <div class=\"input-group\">\n              <input required ngModel minInt class=\"form-control\" type=\"number\" name=\"lengthUsed\" [(ngModel)]=\"print.LengthUsed\">\n              <span class=\"input-group-addon\">meters</span>\n            </div>\n          </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      </fieldset>\n      <fieldset>\n        <h2 class=\"h3\">Printed On</h2>\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <label for=\"printerName\">Printer Name</label>\n            <select name=\"printerName\" class=\"form-control\" [(ngModel)]=\"selectedPrinter\">\n              <option *ngFor=\"let printer of printerOptions\" [ngValue]=\"printer\">{{printer.PrinterName}}</option>\n            </select>\n          </div> <!-- col-xs-12 col-sm-12 col-md-6 col-lg-6 -->\n      </fieldset>\n      \n      <div class=\"center-block text-center submit-wrapper\" >\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!updateForm.valid || updateForm.pristine\">Save Changes</button> \n      </div>\n      <div class=\"alert alert-danger\" style=\"margin-top:20px;\" [hidden]=\"updateForm.valid || updateForm.pristine\">One or more fields needs attention!</div>\n      \n    </form>\n\n\n</ng-container> <!-- col-md-10 -->\n\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "\n    <form class=\"form form-inline\" id=\"search-form\">\n      <div class=\"form-group col-md-6\">\n        <label class=\"control-label\" for=\"printSearchTxt\">Search</label>\n        <div class=\"\">\n          <input type=\"text\" class=\"form-control\" name=\"printSearchTxt\" [(ngModel)]=\"printSearchTxt\" placeholder=\"Search by print name\">\n        </div>\n      </div> <!-- form-group col-md-6 -->\n      <div class=\"form-group col-md-4\">\n        <label class=\"control-label\" for=\"filamentSelect\">Filament</label>\n        <div class=\"\">\n          <select class=\"form-control\" name=\"filamentSelect\" [(ngModel)]=\"selectedFilament\">\n            <option value=\"\" selected>Any filament</option>\n            <option *ngFor=\"let filament of filamentOptions\" [ngValue]=\"filament\">{{filament.FilamentName}}</option>\n          </select>\n        </div>\n      </div> <!-- form-group col-md-4 -->\n      \n      <div class=\"form-group col-md-4 col-md-offset-6\">\n        <label class=\" control-label\" for=\"printerSelect\">Printer</label>\n        <div class=\"\">\n          <select class=\"form-control\" name=\"printerSelect\" [(ngModel)]=\"selectedPrinter\">\n            <option value=\"\" selected>Any printer</option>\n            <option *ngFor=\"let printer of printerOptions\" [ngValue]=\"printer\">{{printer.PrinterName}}</option>\n          </select>\n        </div>\n      </div> <!-- form-group col-md-4 col-md-offset-6 -->\n      <div class=\"form-group col-md-2\">\n        <div>\n          <button class=\"btn btn-default\" (click)=\"applySearch()\">Apply</button>\n        </div>\n      </div> <!-- form-group col-md-2 -->\n\n    </form> <!-- form -->\n  <div class=\"clearfix\"></div>\n  <hr/>\n\n  <div id=\"library-display\" class=\"gutter-20\">\n    <div *ngFor=\"let print of displayPrints\" class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 single-display\">\n      <a [routerLink]=\"['printdetails',print.PrintId]\">\n        <div class=\"display-container\">\n          <div class=\"display-image-container center-block\">\n            <img [src]=print.MainPrintImageUrl class=\"center-block display-image\"/>\n          </div>\n          <div class=\"display-info\">\n            <p class=\"text-center\"><strong>{{print.PrintName}}</strong></p>\n            <p class=\"text-center\">{{print.FilamentName}}</p>\n            <p class=\"text-center\">{{print.PrinterName}}</p>\n            <p class=\"text-center\" *ngIf=\"print.Success == true\">Success!</p>\n            <p class=\"text-center\" *ngIf=\"print.Success != true\">Failed</p>\n          </div> <!-- print-display-info -->\n        </div> <!-- print-display-container -->\n      </a>\n    </div> <!-- let print of allPrints -->\n  </div>"

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: 'dev',
    RES_URI: 'https://10.0.0.10:5000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(470);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_min_int_validator_min_int_validator_directive__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__side_nav_side_nav_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    return AppCommonModule;
}());
AppCommonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__side_nav_side_nav_component__["a" /* SideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directives_min_int_validator_min_int_validator_directive__["a" /* MinIntValidator */]
        ],
        providers: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__side_nav_side_nav_component__["a" /* SideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directives_min_int_validator_min_int_validator_directive__["a" /* MinIntValidator */]
        ]
    })
], AppCommonModule);

//# sourceMappingURL=app-common.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_auth0_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = (function () {
    function AuthguardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function (route, state) {
        if (!this.auth.authenticated() || !localStorage.getItem("profile")) {
            this.router.navigate(['/login']);
        }
        if (!this.checkForUserId()) {
            return false;
        }
        return true;
    };
    AuthguardService.prototype.checkForUserId = function () {
        var profile = localStorage.getItem("profile");
        if (profile) {
            var profileObject = JSON.parse(profile);
            if (profileObject.app_metadata.app_user_id) {
                return true;
            }
        }
        return false;
    };
    AuthguardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthguardService;
}());
AuthguardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth0_auth0_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth0_auth0_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthguardService);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilamentsService; });
/* unused harmony export FilamentLibraryView */
/* unused harmony export FilamentDetailView */
/* unused harmony export PrintFilamentView */
/* unused harmony export FilamentColor */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FilamentsService = (function () {
    function FilamentsService(http) {
        this.http = http;
        this.allFilaments = '/filaments';
        this.filamentById = '/filaments/filamentdetails';
        this.filamentColors = '/filaments/colors';
        this.environment = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */];
    }
    FilamentsService.prototype.getFilaments = function (userId) {
        var _this = this;
        // make the request
        return this.http.get(this.environment.RES_URI + this.allFilaments + '/' + userId)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    FilamentsService.prototype.getFilamentById = function (Id) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.filamentById + '/' + Id)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    FilamentsService.prototype.getFilamentColors = function () {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.filamentColors)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    FilamentsService.prototype.updateFilament = function (filament) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this.environment.RES_URI + this.filamentById + "/" + filament.FilamentId, JSON.stringify(filament), options)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    FilamentsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    FilamentsService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " ";
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        console.log("There was an error!");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return FilamentsService;
}());
FilamentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FilamentsService);

var FilamentLibraryView = (function () {
    function FilamentLibraryView() {
    }
    return FilamentLibraryView;
}());

var FilamentDetailView = (function () {
    function FilamentDetailView() {
    }
    return FilamentDetailView;
}());

var PrintFilamentView = (function () {
    function PrintFilamentView() {
    }
    return PrintFilamentView;
}());

var FilamentColor = (function () {
    function FilamentColor() {
    }
    return FilamentColor;
}());

var _a;
//# sourceMappingURL=filaments.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintersService; });
/* unused harmony export PrinterDetailView */
/* unused harmony export PrinterLibraryView */
/* unused harmony export PrintPrinterView */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrintersService = (function () {
    function PrintersService(http) {
        this.http = http;
        this.allPrinters = '/printers';
        this.printerById = '/printers/printerdetails';
        this.environment = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */];
    }
    PrintersService.prototype.getPrinters = function (userId) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.allPrinters + '/' + userId)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    PrintersService.prototype.getPrinterById = function (printerId) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.printerById + '/' + printerId)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    PrintersService.prototype.updatePrinter = function (printer) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this.environment.RES_URI + this.printerById + '/' + printer.PrinterId, JSON.stringify(printer), options)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    PrintersService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PrintersService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        console.log("There was an error!");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return PrintersService;
}());
PrintersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PrintersService);

var PrinterDetailView = (function () {
    function PrinterDetailView() {
    }
    return PrinterDetailView;
}());

var PrinterLibraryView = (function () {
    function PrinterLibraryView() {
    }
    return PrinterLibraryView;
}());

var PrintPrinterView = (function () {
    function PrintPrinterView() {
    }
    return PrintPrinterView;
}());

var _a;
//# sourceMappingURL=printers.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintsService; });
/* unused harmony export PrintDetailView */
/* unused harmony export PrinterPrintsView */
/* unused harmony export FilamentPrintsView */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrintsService = (function () {
    function PrintsService(http) {
        this.http = http;
        this.allPrints = "/prints";
        this.printById = "/prints/printdetails";
        this.printerOptions = "/printers";
        this.filamentOptions = "/filaments";
        this.environment = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */];
    }
    PrintsService.prototype.getPrints = function (userId) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.allPrints + '/' + userId)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    PrintsService.prototype.getPrintById = function (printId) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.printById + '/' + printId)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    PrintsService.prototype.getFilamentOptions = function (userId) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.filamentOptions + '/' + userId)
            .timeout(60000)
            .map(function (res) { return _this.extractFilamentData(res); })
            .catch(this.handleError);
    };
    PrintsService.prototype.getPrinterOptions = function (userId) {
        var _this = this;
        return this.http.get(this.environment.RES_URI + this.printerOptions + '/' + userId)
            .timeout(60000)
            .map(function (res) { return _this.extractPrinterData(res); })
            .catch(this.handleError);
    };
    PrintsService.prototype.updatePrint = function (print) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this.environment.RES_URI + this.printById + "/" + print.PrintId, JSON.stringify(print), options)
            .timeout(60000)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    PrintsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PrintsService.prototype.extractFilamentData = function (res) {
        var body = res.json();
        var filaments = [];
        for (var key in body.data) {
            var filament = new FilamentPrintsView();
            var jsonItem = body.data[key];
            filament.FilamentId = jsonItem.FilamentId;
            filament.FilamentName = jsonItem.Brand + " " + jsonItem.Material + " (" + jsonItem.Color + ") - Spool " + jsonItem.UserFilamentId;
            filaments.push(filament);
        }
        return filaments;
    };
    PrintsService.prototype.extractPrinterData = function (res) {
        var body = res.json();
        var printers = [];
        for (var key in body.data) {
            var printer = new PrinterPrintsView();
            var jsonItem = body.data[key];
            printer.PrinterId = jsonItem.PrinterId;
            printer.PrinterName = jsonItem.PrinterName + " - Printer " + jsonItem.UserPrinterId;
            printers.push(printer);
        }
        return printers;
    };
    PrintsService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        console.log("There was an error!");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return PrintsService;
}());
PrintsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PrintsService);

var PrintDetailView = (function () {
    function PrintDetailView() {
    }
    return PrintDetailView;
}());

var PrinterPrintsView = (function () {
    function PrinterPrintsView() {
    }
    return PrinterPrintsView;
}());

var FilamentPrintsView = (function () {
    function FilamentPrintsView() {
    }
    return FilamentPrintsView;
}());

var _a;
//# sourceMappingURL=prints.service.js.map

/***/ })

},[817]);
//# sourceMappingURL=main.bundle.js.map