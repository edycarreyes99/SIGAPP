import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioService } from "../../app/servicio.service";

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  loginForm: FormGroup;
  loginError: string;
  account: { email: string, password: string } = {
    email: 'edycarreyes@gmail.com',
    password: '123123'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public fb: FormBuilder,
    public servicio: ServicioService) {

    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  login() {
    this.servicio.loginEmail(this.account.email, this.account.password).then((user) => {
      this.navCtrl.push('TabsPage');
      const toast = this.toastCtrl.create({
        message: `Bienvenido ${this.servicio.afAuth.auth.currentUser.email}`,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }).catch((err) => {
      switch (err.code) {
        case 'auth/user-not-found':
          const toast = this.toastCtrl.create({
            message: 'Este email no corresponde a ninguna cuenta registrada.',
            duration: 3000,
            position: 'top'
          });
          toast.present();
          break;
        case 'auth/wrong-password':
          const toast2 = this.toastCtrl.create({
            message: 'La contraseña es inválida o el usuario no posee contraseña.',
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
      }
      console.log(err);
    });
  }
  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
