import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

export interface Matricula {
  'Ano de Estudio': string,
  Apellidos: string,
  Carrerra: string,
  'Correo Estudiantil': string,
  'Departamento del Centro de Secundaria': string,
  Direccion: string,
  'Documento de Identificacion': string,
  'Estado Civil': string,
  Facultad: string,
  'Fecha de Nacimiento': string,
  'Lugar de Residencia': string,
  Modalidad: string,
  'Municipio del Centro de Secundaria': string,
  'Nombre del Centro de Secundaria': string,
  Nombres: string,
  'Plan de Estudio': string,
  Seo: string,
  'Situacion Academica': string,
  Telefono: string,
  'Tipo de Matricula': string
}

export interface idNotas {
  'I Parcial': string,
  'II Parcial': string,
  'III Parcial': string,
  'Nota Final': string,
  'Segunda Convocatoria': string,
  Tutoria: string
}

export interface idClase {
  idNotas: idNotas
}

export interface Notas {
  idAno: idClase
}

export interface Estudiante {
  Carnet: string,
  Matricula: Matricula,
  Notas: Notas,
  Pin: string
}

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})

export class ListMasterPage {
  items2016: any[];
  items2017: any[];
  items2018: any[];
  ano: number = 2016;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
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
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
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