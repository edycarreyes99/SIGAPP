import { MainPage } from './../index';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform,ModalController } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from "@ionic-native/fingerprint-aio";
import { StatusBar } from "@ionic-native/status-bar";

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  FingerprintOptions : FingerprintOptions;
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public fingerprint: FingerprintAIO,
    public modalCtrl: ModalController,
    public statusbar: StatusBar
  ) {
    this.FingerprintOptions = {
      clientId: 'SIGAPP',
      clientSecret: 'password',
      disableBackup: true
    };
    this.statusbar.hide();
   }

   login(){
     this.fingerprint.show({
       clientId: 'Fingerprint-demo',
       clientSecret: 'password'
     }).then(result=>{
       this.navCtrl.setRoot('LoginPage');
     }).catch(err=>{
      const modal = this.modalCtrl.create({
        title: "err",
        subtitle: "Fingerprint err",
        message: err
      });
      modal.present();
     });
   }
}
