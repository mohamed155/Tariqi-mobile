import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {EditProfilePage} from "../../pages/edit-profile/edit-profile";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openEditProfile() {
    this.navCtrl.push(EditProfilePage);
  }

}
