import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from "../../components/profile/profile";
import {BookingsPage} from "../bookings/bookings";
import {SharedProvider} from "../../providers/shared";
import {StartPage} from "../start/start";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabView = 'hotels';

  constructor(
    public navCtrl: NavController,
    public shared: SharedProvider
  ) {

  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openBookings() {
    this.navCtrl.push(BookingsPage);
  }

  openStart() {
    this.navCtrl.push(StartPage);
  }

}
