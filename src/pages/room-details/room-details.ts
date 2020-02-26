import {Component} from "@angular/core";
import {Room} from "../../models/Room";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-room-details',
  templateUrl: 'room-details.html'
})
export class RoomDetailsPage {

  room: Room;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.room = this.navParams.get('room');
  }

}
