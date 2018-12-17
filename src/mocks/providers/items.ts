import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
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
      },
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
      },
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

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
