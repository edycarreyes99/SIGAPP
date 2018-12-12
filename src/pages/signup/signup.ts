import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { ServicioService } from "../../app/servicio.service";

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string, surname: string } = {
    name: 'Edycar',
    surname: 'Reyes',
    email: 'edycarreyes@gmail.com',
    password: '123123'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public servicio: ServicioService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }
  selectChange(e) {
    console.log(e);
  }

  signup() {
    this.servicio.registerUser(this.account.email, this.account.password).then((user: any) => {
      const toast = this.toastCtrl.create({
        message: `Bienvenido ${this.servicio.afAuth.auth.currentUser.email}`,
        duration: 3000,
        position: 'top'
      });
      this.navCtrl.push('TabsPage');
      toast.present();
    }).catch((err) => {
      switch (err.code) {
        case 'auth/email-already-in-use':
          const toast = this.toastCtrl.create({
            message: 'Este correo ya está registrado',
            duration: 3000,
            position: 'top'
          });
          toast.present();
          break;
        case 'auth/weak-password':
          const toast2 = this.toastCtrl.create({
            message: 'La contraseña debe contener al menos 6 carácteres.',
            duration: 3000,
            position: 'top'
          });
          toast2.present();
          break;
        default:
          const toastdefault = this.toastCtrl.create({
            message: err,
            duration: 3000,
            position: 'top'
          });
          toastdefault.present();
          break;
      }
      console.log(err);
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
