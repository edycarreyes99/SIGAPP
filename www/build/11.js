webpackJsonp([11],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentPageModule = /** @class */ (function () {
    function ContentPageModule() {
    }
    ContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]
            ]
        })
    ], ContentPageModule);
    return ContentPageModule;
}());

//# sourceMappingURL=content.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentPage = /** @class */ (function () {
    function ContentPage(navCtrl, platform, fingerprint, modalCtrl, statusbar) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.fingerprint = fingerprint;
        this.modalCtrl = modalCtrl;
        this.statusbar = statusbar;
        this.FingerprintOptions = {
            clientId: 'SIGAPP',
            clientSecret: 'password',
            disableBackup: true
        };
        this.statusbar.hide();
    }
    ContentPage.prototype.login = function () {
        var _this = this;
        this.fingerprint.show({
            clientId: 'Fingerprint-demo',
            clientSecret: 'password'
        }).then(function (result) {
            _this.navCtrl.setRoot('LoginPage');
        }).catch(function (err) {
            var modal = _this.modalCtrl.create({
                title: "err",
                subtitle: "Fingerprint err",
                message: err
            });
            modal.present();
        });
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-content',template:/*ion-inline-start:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\content\content.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="amber">\n\n    <ion-title>Mi Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="item-profile" text-center #profilePic>\n\n  </div>\n\n   <ion-item class="background-profile" id="side-menu21-list-item8">\n\n            <ion-avatar padding-bottom item-center>\n\n                <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-robotica-35bed.appspot.com/o/Profile%20Pictures%2Fedycarreyes%40gmail.com_InShot_20180427_185247614.jpg?alt=media&token=948f8280-e349-4571-b467-920dd6727af2" alt="User Profile">\n\n            </ion-avatar>\n\n            <h2>\n\n                Edycar Reyes\n\n            </h2>\n\n            <h4>\n\n                edycarreyes@gmail.com\n\n            </h4>\n\n        </ion-item>\n\n\n\n  <div class="item-detail" padding>\n\n    <h2>{{item.name}}</h2>\n\n    <h2>Pre-Requisito 1</h2>\n\n    <p>{{item.requisito1}}</p>\n\n    <h2>Pre-Requisito 2</h2>\n\n    <p>{{item.requisito2}}</p>\n\n    <h2>Créditos</h2>\n\n    <p>{{item.creditos}}</p>\n\n    <h2>Primer Parcial</h2>\n\n    <p>{{item.parcial1}}</p>\n\n    <h2>Segundo Parcial</h2>\n\n    <p>{{item.parcial2}}</p>\n\n    <h2>Tercer Parcial</h2>\n\n    <p>{{item.parcial3}}</p>\n\n    <h2>Nota Final</h2>\n\n    <p>{{item.notafinal}}</p>\n\n    <h2>Segunda Convocatoria</h2>\n\n    <p>{{item.segundaconvocatoria}}</p>\n\n    <h2>Curso de Verano</h2>\n\n    <p>{{item.cursoverano}}</p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\content\content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ })

});
//# sourceMappingURL=11.js.map