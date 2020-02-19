import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  view: string = 'start';

  constructor(public navCtrl: NavController) {

  }

  openHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
