import { Component } from '@angular/core';
import { IonicPage, NavController, Platform,ModalController } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from "@ionic-native/fingerprint-aio";

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public fingerprint: FingerprintAIO,
    public modalCtrl: ModalController
  ) { }


  async fingerAuth() {
    try {
      await this.platform.ready();
      const avaible = await this.fingerprint.isAvailable();
      console.log(avaible);
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
