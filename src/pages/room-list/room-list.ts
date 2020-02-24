import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";
import {Room} from "../../models/Room";

@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage {

  rooms: Room[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log(this.rooms);
    this.rooms = this.navParams.get('rooms');
  }

  selectRoom(room) {

  }

  imageFailed(event) {
    console.log(event)
  }

}
