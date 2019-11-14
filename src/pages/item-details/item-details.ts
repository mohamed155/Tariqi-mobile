import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RoomListPage} from "../room-list/room-list";

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  constructor(public navCtrl: NavController) {

  }

  openRoomList() {
    this.navCtrl.push(RoomListPage);
  }

}
