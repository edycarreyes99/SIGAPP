webpackJsonp([7],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_servicio_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, fb, servicio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.fb = fb;
        this.servicio = servicio;
        this.account = {
            email: 'edycarreyes@gmail.com',
            password: '123123'
        };
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])]
        });
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.servicio.loginEmail(this.account.email, this.account.password).then(function (user) {
            _this.navCtrl.push('TabsPage');
            var toast = _this.toastCtrl.create({
                message: "Bienvenido " + _this.servicio.afAuth.auth.currentUser.email,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }).catch(function (err) {
            switch (err.code) {
                case 'auth/user-not-found':
                    var toast = _this.toastCtrl.create({
                        message: 'Este email no corresponde a ninguna cuenta registrada.',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    break;
                case 'auth/wrong-password':
                    var toast2 = _this.toastCtrl.create({
                        message: 'La contraseña es inválida o el usuario no posee contraseña.',
                        duration: 3000,
                        position: 'top'
                    });
                    toast2.present();
                    break;
                default:
                    var toastdefault = _this.toastCtrl.create({
                        message: err,
                        duration: 3000,
                        position: 'top'
                    });
                    toastdefault.present();
            }
            console.log(err);
        });
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["b" /* MainPage */]);
        }, function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["b" /* MainPage */]);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form (submit)="doLogin()">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <!--\n\n      Want to use a Username instead of an Email? Here you go:\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n      </ion-item>\n\n      -->\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__app_servicio_service__["a" /* ServicioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_servicio_service__["a" /* ServicioService */]) === "function" && _a || Object])
    ], LoginPage);
    return LoginPage;
    var _a;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map