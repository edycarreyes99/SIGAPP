import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [
    {
      "name": "Biologia General",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Burt is a Bear.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ALGEBRA LINEAL",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Charlie is a Cheetah.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "COMUNICACION Y LENGUAJE",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Donald is a Duck.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "HISTORIA DE NICARAGUA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Eva is an Eagle.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INGLES",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ACTIVIDAD ESTUDIANTIL",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Molly is a Mouse.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "FILOSOFIA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Paul is a Puppy.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    }, {
      "name": "COMUNICACION Y LENGUAJE",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Donald is a Duck.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "MATEMATICA BASICA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Eva is an Eagle.",
      "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "CALCULO I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "FUNDAMENTOS DE INFORMATICA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Molly is a Mouse.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL II ",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Paul is a Puppy.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "EDUCACION AMBIENTAL",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Burt is a Bear.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "LOGICA DE PROGRAMACION",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Charlie is a Cheetah.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "LABORATORIO DE LOGICA DE PROGRAMACION",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Donald is a Duck.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "OFIMATICA APLICADA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Eva is an Eagle.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INGLES APLICADO I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "MATEMATICA DISCRETA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Burt is a Bear.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "PROGRAMACION ESTRUCTURADA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Charlie is a Cheetah.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "OPTATIVA I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Donald is a Duck.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "LABORATORIO DE PROGRAMACION ESTRUCTURADA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Eva is an Eagle.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "CALCULO II",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "FISICA",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Molly is a Mouse.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INGLES APLICADO II",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Paul is a Puppy.",
      "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INGLES APLICADO III ",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "APLICACIONES DE ESTRUCTURAS DE DATOS",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Molly is a Mouse.",
      "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ELECTIVA FEI: DISEÑO DE PAGINA WEB",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Paul is a Puppy.",
      "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "CIRCUITOS LOGICOS",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Burt is a Bear.",
      "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Charlie is a Cheetah.",
      "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INVESTIGACION I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Donald is a Duck.",
      "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL III",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Burt is a Bear.",
      "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "SISTEMAS GESTORES DE BASE DE DATOS I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Charlie is a Cheetah.",
      "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INFRAESTRUCTURA TIC I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Donald is a Duck.",
      "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "DISEÑO DE BASE DE DATOS",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Eva is an Eagle.",
      "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "ARQUITECTURA DE COMPUTADORES",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "PROGRAMACION ORIENTADA A OBJETOS",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Molly is a Mouse.",
      "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INFRAESTRUCTURA TIC II",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Ellie is an Elephant.",
      "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INTRODUCCION A LAS ESTRUCTURAS DE BASES DE DATOS",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Molly is a Mouse.",
      "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "PROGRAMACION VISUAL I",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Paul is a Puppy.",
      "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    },
    {
      "name": "INVESTIGACION II",
      "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
      "about": "Burt is a Bear.",
      "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [
        {
          "name": "Biologia General",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Burt is a Bear.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ALGEBRA LINEAL",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Charlie is a Cheetah.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "COMUNICACION Y LENGUAJE",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Donald is a Duck.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "HISTORIA DE NICARAGUA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Eva is an Eagle.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INGLES",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ACTIVIDAD ESTUDIANTIL",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Molly is a Mouse.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "FILOSOFIA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Paul is a Puppy.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        }, {
          "name": "COMUNICACION Y LENGUAJE",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Donald is a Duck.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "MATEMATICA BASICA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Eva is an Eagle.",
          "ciclo": 1, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "CALCULO I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "FUNDAMENTOS DE INFORMATICA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Molly is a Mouse.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL II ",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Paul is a Puppy.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "EDUCACION AMBIENTAL",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Burt is a Bear.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "LOGICA DE PROGRAMACION",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Charlie is a Cheetah.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "LABORATORIO DE LOGICA DE PROGRAMACION",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Donald is a Duck.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "OFIMATICA APLICADA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Eva is an Eagle.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INGLES APLICADO I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 2, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "MATEMATICA DISCRETA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Burt is a Bear.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "PROGRAMACION ESTRUCTURADA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Charlie is a Cheetah.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "OPTATIVA I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Donald is a Duck.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "LABORATORIO DE PROGRAMACION ESTRUCTURADA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Eva is an Eagle.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "CALCULO II",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "FISICA",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Molly is a Mouse.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INGLES APLICADO II",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Paul is a Puppy.",
          "ciclo": 3, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INGLES APLICADO III ",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "APLICACIONES DE ESTRUCTURAS DE DATOS",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Molly is a Mouse.",
          "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ELECTIVA FEI: DISEÑO DE PAGINA WEB",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Paul is a Puppy.",
          "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "CIRCUITOS LOGICOS",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Burt is a Bear.",
          "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ALGORITMOS Y ESTRUCTURAS DE DATOS",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Charlie is a Cheetah.",
          "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INVESTIGACION I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Donald is a Duck.",
          "ciclo": 4, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ELECTIVA DE ACTIVIDAD ESTUDIANTIL III",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Burt is a Bear.",
          "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "SISTEMAS GESTORES DE BASE DE DATOS I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Charlie is a Cheetah.",
          "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INFRAESTRUCTURA TIC I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Donald is a Duck.",
          "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "DISEÑO DE BASE DE DATOS",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Eva is an Eagle.",
          "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "ARQUITECTURA DE COMPUTADORES",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "PROGRAMACION ORIENTADA A OBJETOS",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Molly is a Mouse.",
          "ciclo": 5, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INFRAESTRUCTURA TIC II",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Ellie is an Elephant.",
          "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INTRODUCCION A LAS ESTRUCTURAS DE BASES DE DATOS",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Molly is a Mouse.",
          "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "PROGRAMACION VISUAL I",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Paul is a Puppy.",
          "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        },
        {
          "name": "INVESTIGACION II",
          "profilePic": "../assets/SIGAPP Logo/Logotipos/SIGAPP Logo Rounded.png",
          "about": "Burt is a Bear.",
          "ciclo": 6, "requisito1": "MATEMATICA BASICA", "requisito2": "-", "parcial1": 76, "parcial2": 85, "parcial3": 94, "notafinal":  83, "segundaconvocatoria": "-", "tutoria": "-", "cursoverano": "-", "creditos": 4
        }
      ];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
