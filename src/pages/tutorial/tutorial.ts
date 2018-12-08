import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    this.slides = [
      {
        titulo: "Bienvenido/a a SIGAPP",
        descripcion: "SIGAPP te ofrece un servicio interactivo e intuitivo para facilitar tus gestiones acádemicas.",
        imagen: 'assets/TutorialImages/SplashTutorial1.png',
      },
      {
        titulo: "¿Cómo usar SIGAPP?",
        descripcion: "Solamente necesitamos de ti: tu carnet y tu pin. Luego déjanos hacer el resto a nosotros!.",
        imagen: 'assets/TutorialImages/SplashTutorial2.png',
      },
      {
        titulo: "¿Qué podrás hacer?",
        descripcion: "Ver tus notas, realizar inscripciónes de componentes, ver tu matrícula, ver tu pensum, ver el porcentaje de la carrera concluida, etc.",
        imagen: 'assets/TutorialImages/SplashTutorial3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
