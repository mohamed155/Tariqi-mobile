import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from "../../components/profile/profile";
import {BookingsPage} from "../bookings/bookings";

@Component({
  selector: 'page-hotel-details',
  templateUrl: 'hotel-details.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
}
