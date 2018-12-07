import { MainPage } from './../index';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform,ModalController } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from "@ionic-native/fingerprint-aio";

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
    public modalCtrl: ModalController
  ) {
    this.FingerprintOptions = {
      clientId: 'SIGAPP',
      clientSecret: 'password',
      disableBackup: true
    }
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
  async fingerAuth() {
    try {
      await this.platform.ready();
      const avaible = await this.fingerprint.isAvailable();
      console.log(avaible);
      if(avaible === "OK"){
        const result = await this.fingerprint.show(this.FingerprintOptions);
        const modal = this.modalCtrl.create({
          title: "Sucsess",
          subtitle: "Fingerprint Sucess",
          message: result
        });
        modal.present();
        this.navCtrl.push(MainPage);
      }
     
    } catch (e) {
      const modal = this.modalCtrl.create({
        title: "Error",
        subtitle: "Fingerprint error",
        message: e
      });
      modal.present();
      console.log(e);
    }
  }
}
