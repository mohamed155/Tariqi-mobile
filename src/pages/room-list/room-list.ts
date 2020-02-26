import { Component } from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";
import {Room} from "../../models/Room";
import {RoomDetailsPage} from "../room-details/room-details";
import {SelectRoomQuantityPopover} from "../../components/select-room-quantity-popover/select-room-quantity-popover";

@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage {

  rooms: Room[];
  selectedRooms: {id: number, quantity: number}[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.rooms = this.navParams.get('rooms');
    this.selectedRooms.length = this.rooms.length;
  }

  selectRoom(room: Room, index: number) {
    this.selectedRooms[index] = {id: room.id, quantity: 1};
  }

  deselectRoom(index: number) {
    this.selectedRooms[index] = undefined;
  }

  imageFailed(event) {
    event.target.src = 'assets/icon/checkmark.png';
  }

  openRoomDetails(room: Room) {
    this.navCtrl.push(RoomDetailsPage, {room})
  }

  selectQuantity(event, room: Room, index: number) {
    const popover = this.popoverCtrl.create(SelectRoomQuantityPopover, {roomQuantity: room.maxQuantity});
    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: event.y,
            left: event.x
          };
        }
      }
    };
    popover.onWillDismiss(data => {
      console.log(data);
      if (data) {
        if (!data.state) {
          this.deselectRoom(index);
        } else {
          this.selectedRooms[index].quantity = data.quantity;
        }
      }
    });
    popover.present({ev});
  }

}
