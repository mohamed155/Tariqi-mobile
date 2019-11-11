import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from "../../components/profile/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabView = 'hotels';

  constructor(public navCtrl: NavController) {

  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
