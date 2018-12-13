webpackJsonp([8],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.ano = 2016;
        this.items2018 = [
            {
                "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL III",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "SISTEMAS GESTORES DE BASE DE DATOS I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INFRAESTRUCTURA TIC I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "DISEÑO DE BASE DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "ARQUITECTURA DE COMPUTADORES",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "PROGRAMACION ORIENTADA A OBJETOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INFRAESTRUCTURA TIC II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INTRODUCCION A LAS ESTRUCTURAS DE BASES DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "PROGRAMACION VISUAL I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INVESTIGACION II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            }
        ];
        this.items2017 = [
            {
                "name": "MATEMATICA DISCRETA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "PROGRAMACION ESTRUCTURADA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "OPTATIVA I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "LABORATORIO DE PROGRAMACION ESTRUCTURADA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "CALCULO II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "FISICA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INGLES APLICADO II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INGLES APLICADO III ",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "APLICACIONES DE ESTRUCTURAS DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "ELECTIVA FEI: DISEÑO DE PAGINA WEB",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "CIRCUITOS LOGICOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INVESTIGACION I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            }
        ];
        this.items2016 = [
            {
                "name": "Biologia General",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "ALGEBRA LINEAL",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "COMUNICACION Y LENGUAJE",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "HISTORIA DE NICARAGUA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INGLES",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "ACTIVIDAD ESTUDIANTIL",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "FILOSOFIA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            }, {
                "name": "COMUNICACION Y LENGUAJE",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "MATEMATICA BASICA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "CALCULO I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "FUNDAMENTOS DE INFORMATICA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL II ",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "EDUCACION AMBIENTAL",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "LOGICA DE PROGRAMACION",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "LABORATORIO DE LOGICA DE PROGRAMACION",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "OFIMATICA APLICADA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            },
            {
                "name": "INGLES APLICADO I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-"
            }
        ];
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-master',template:/*ion-inline-start:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\list-master\list-master.html"*/'<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n<ion-header>\n\n  <ion-navbar color="red">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Componentes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="ano" color="red" padding>\n\n    <ion-segment-button value="2016">\n\n      2016\n\n    </ion-segment-button>\n\n    <ion-segment-button value="2017">\n\n      2017\n\n    </ion-segment-button>\n\n    <ion-segment-button value="2018">\n\n      2018\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="ano">\n\n    <ion-list *ngSwitchCase="2016">\n\n      <ion-item-sliding *ngFor="let item of items2016">\n\n        <button ion-item (click)="openItem(item)">\n\n          <ion-avatar item-start>\n\n            <img [src]="item.profilePic" />\n\n          </ion-avatar>\n\n          <h2>{{item.name}}</h2>\n\n          <p>Ciclo: {{item.ciclo}}</p>\n\n          <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n        </button>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="deleteItem(item)">\n\n            {{ \'DELETE_BUTTON\' | translate }}\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="2017">\n\n      <ion-item-sliding *ngFor="let item of items2017">\n\n        <button ion-item (click)="openItem(item)">\n\n          <ion-avatar item-start>\n\n            <img [src]="item.profilePic" />\n\n          </ion-avatar>\n\n          <h2>{{item.name}}</h2>\n\n          <p>Ciclo: {{item.ciclo}}</p>\n\n          <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n        </button>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="deleteItem(item)">\n\n            {{ \'DELETE_BUTTON\' | translate }}\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="2018">\n\n      <ion-item-sliding *ngFor="let item of items2018">\n\n        <button ion-item (click)="openItem(item)">\n\n          <ion-avatar item-start>\n\n            <img [src]="item.profilePic" />\n\n          </ion-avatar>\n\n          <h2>{{item.name}}</h2>\n\n          <p>Ciclo: {{item.ciclo}}</p>\n\n          <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n        </button>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="deleteItem(item)">\n\n            {{ \'DELETE_BUTTON\' | translate }}\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _c || Object])
    ], ListMasterPage);
    return ListMasterPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=8.js.map