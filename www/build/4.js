webpackJsonp([4],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_stepper__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_stepper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup__ = __webpack_require__(951);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_stepper__["IonicStepperModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_servicio_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, servicio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.servicio = servicio;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            name: 'Edycar',
            surname: 'Reyes',
            email: 'edycarreyes@gmail.com',
            password: '123123',
            carnet: '16-02095-0',
            pin: 'RWLKCY'
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.selectChange = function (e) {
        console.log(e);
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.servicio.registerUser(this.account.email, this.account.password).then(function (user) {
            var toast = _this.toastCtrl.create({
                message: "Bienvenido " + _this.account.name + " " + _this.account.surname,
                duration: 3000,
                position: 'top'
            });
            _this.navCtrl.push('TabsPage');
            toast.present();
        }).catch(function (err) {
            switch (err.code) {
                case 'auth/email-already-in-use':
                    var toast = _this.toastCtrl.create({
                        message: 'Este correo ya está registrado',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    break;
                case 'auth/weak-password':
                    var toast2 = _this.toastCtrl.create({
                        message: 'La contraseña debe contener al menos 6 carácteres.',
                        duration: 3000,
                        position: 'top'
                    });
                    toast2.present();
                    break;
                case 'auth/network-request-failed':
                    var toast3 = _this.toastCtrl.create({
                        message: 'Ha ocurrido un problema de red, intentelo nuevamente en un momento.',
                        duration: 3000,
                        position: 'top'
                    });
                    toast3.present();
                    break;
                default:
                    var toastdefault = _this.toastCtrl.create({
                        message: err,
                        duration: 3000,
                        position: 'top'
                    });
                    toastdefault.present();
                    break;
            }
            console.log(err);
        });
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
        }, function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="indigo">\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-stepper #stepper (selectIndexChange)="selectChange($event)">\n    <ion-step label="Personal" description="Bríndanos tu información personal.">\n      <form >\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>{{ \'NAME\' | translate }}</ion-label>\n            <ion-input padding-right type="text" [(ngModel)]="account.name" name="name"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Surname</ion-label>\n            <ion-input padding-right type="text" [(ngModel)]="account.surname" name="surname"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n            <ion-input padding-right type="email" [(ngModel)]="account.email" name="email"></ion-input>\n          </ion-item>\n\n          <!--\n                    Want to add a Username? Here you go:\n              \n                    <ion-item>\n                      <ion-label floating>Username</ion-label>\n                      <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n                    </ion-item>\n                    -->\n\n          <ion-item>\n            <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n          </ion-item>\n\n          \n\n        </ion-list>\n      </form>\n      <button ion-button small ionicStepperNext>Next</button>\n    </ion-step>\n    <ion-step label="Informacion Académica" description="Brindanos tu informacion Académica">\n      <ion-item>\n        <ion-label floating>N° de Carnet</ion-label>\n        <ion-input type="text" [(ngModel)]="account.carnet" name="carnet"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Pin</ion-label>\n        <ion-input type="password" [(ngModel)]="account.pin" name="pin"></ion-input>\n      </ion-item>\n      <div padding>\n        <button (click)="signup()" ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n      </div>\n      <button ion-button color="light" small ionicStepperPrevious>Previous</button>\n    </ion-step>\n  </ion-stepper>\n\n</ion-content>'/*ion-inline-end:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__app_servicio_service__["a" /* ServicioService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map