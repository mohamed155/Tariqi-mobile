import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";

@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage {

  constructor(public navCtrl: NavController) {

  }

}
