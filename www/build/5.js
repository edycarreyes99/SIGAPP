webpackJsonp([5],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(887);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.currentItems = [
            {
                "name": "Biologia General",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ALGEBRA LINEAL",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "COMUNICACION Y LENGUAJE",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "HISTORIA DE NICARAGUA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INGLES",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ACTIVIDAD ESTUDIANTIL",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "FILOSOFIA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            }, {
                "name": "COMUNICACION Y LENGUAJE",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "MATEMATICA BASICA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "CALCULO I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "FUNDAMENTOS DE INFORMATICA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL II ",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "EDUCACION AMBIENTAL",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "LOGICA DE PROGRAMACION",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "LABORATORIO DE LOGICA DE PROGRAMACION",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "OFIMATICA APLICADA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INGLES APLICADO I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "MATEMATICA DISCRETA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "PROGRAMACION ESTRUCTURADA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "OPTATIVA I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "LABORATORIO DE PROGRAMACION ESTRUCTURADA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "CALCULO II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "FISICA",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INGLES APLICADO II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INGLES APLICADO III ",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "APLICACIONES DE ESTRUCTURAS DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ELECTIVA FEI: DISEÑO DE PAGINA WEB",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "CIRCUITOS LOGICOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INVESTIGACION I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL III",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "SISTEMAS GESTORES DE BASE DE DATOS I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Charlie is a Cheetah.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INFRAESTRUCTURA TIC I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Donald is a Duck.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "DISEÑO DE BASE DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Eva is an Eagle.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "ARQUITECTURA DE COMPUTADORES",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "PROGRAMACION ORIENTADA A OBJETOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INFRAESTRUCTURA TIC II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Ellie is an Elephant.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INTRODUCCION A LAS ESTRUCTURAS DE BASES DE DATOS",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Molly is a Mouse.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "PROGRAMACION VISUAL I",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Paul is a Puppy.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            },
            {
                "name": "INVESTIGACION II",
                "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                "about": "Burt is a Bear.",
                "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
            }
        ];
    }
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [
                {
                    "name": "Biologia General",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Burt is a Bear.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ALGEBRA LINEAL",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Charlie is a Cheetah.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "COMUNICACION Y LENGUAJE",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Donald is a Duck.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "HISTORIA DE NICARAGUA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Eva is an Eagle.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INGLES",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ACTIVIDAD ESTUDIANTIL",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Molly is a Mouse.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "FILOSOFIA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Paul is a Puppy.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                }, {
                    "name": "COMUNICACION Y LENGUAJE",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Donald is a Duck.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "MATEMATICA BASICA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Eva is an Eagle.",
                    "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "CALCULO I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "FUNDAMENTOS DE INFORMATICA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Molly is a Mouse.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL II ",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Paul is a Puppy.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "EDUCACION AMBIENTAL",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Burt is a Bear.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "LOGICA DE PROGRAMACION",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Charlie is a Cheetah.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "LABORATORIO DE LOGICA DE PROGRAMACION",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Donald is a Duck.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "OFIMATICA APLICADA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Eva is an Eagle.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INGLES APLICADO I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "MATEMATICA DISCRETA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Burt is a Bear.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "PROGRAMACION ESTRUCTURADA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Charlie is a Cheetah.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "OPTATIVA I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Donald is a Duck.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "LABORATORIO DE PROGRAMACION ESTRUCTURADA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Eva is an Eagle.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "CALCULO II",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "FISICA",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Molly is a Mouse.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INGLES APLICADO II",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Paul is a Puppy.",
                    "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INGLES APLICADO III ",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "APLICACIONES DE ESTRUCTURAS DE DATOS",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Molly is a Mouse.",
                    "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ELECTIVA FEI: DISEÑO DE PAGINA WEB",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Paul is a Puppy.",
                    "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "CIRCUITOS LOGICOS",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Burt is a Bear.",
                    "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Charlie is a Cheetah.",
                    "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INVESTIGACION I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Donald is a Duck.",
                    "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL III",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Burt is a Bear.",
                    "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "SISTEMAS GESTORES DE BASE DE DATOS I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Charlie is a Cheetah.",
                    "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INFRAESTRUCTURA TIC I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Donald is a Duck.",
                    "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "DISEÑO DE BASE DE DATOS",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Eva is an Eagle.",
                    "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "ARQUITECTURA DE COMPUTADORES",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "PROGRAMACION ORIENTADA A OBJETOS",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Molly is a Mouse.",
                    "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INFRAESTRUCTURA TIC II",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Ellie is an Elephant.",
                    "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INTRODUCCION A LAS ESTRUCTURAS DE BASES DE DATOS",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Molly is a Mouse.",
                    "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "PROGRAMACION VISUAL I",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Paul is a Puppy.",
                    "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                },
                {
                    "name": "INVESTIGACION II",
                    "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
                    "about": "Burt is a Bear.",
                    "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal": 83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
                }
            ];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar color="indigo">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Pensum</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar Componente"></ion-searchbar>\n\n  <ion-list>\n\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.profilePic" />\n\n      </ion-avatar>\n\n      <h2>{{item.name}}</h2>\n\n      <p>{{item.about}}</p>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"K:\Proyectos Web\SIGAPP\SIGAPP\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=5.js.map