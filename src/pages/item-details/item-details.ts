import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RoomListPage} from "../room-list/room-list";
import {Hotel} from "../../models/Hotel";
import {HelperProvider} from "../../providers/helper";
import {SharedProvider} from "../../providers/shared";
import {AppResponse} from "../../models/AppResponse";
import {Room} from "../../models/Room";
import {AverageReviews} from "../../models/AverageReviews";
import {Review} from "../../models/Review";

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  hotel: Hotel;
  rooms: Room[];
  reviews: Review[];
  averageReviews: AverageReviews;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public helper: HelperProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.hotel = this.navParams.get('hotel');
  }

  ionViewWillLoad() {
    const loader = this.loadingCtrl.create();
    loader.present();
    this.shared.getHotelDetails(this.hotel.id).subscribe((data: AppResponse) => {
      loader.dismiss();
      if (data.error.status) {
        this.alertCtrl.create({
          title: "Error",
          message: data.error.msg,
          buttons: ['OK']
        }).present();
      } else {
        this.hotel = data.response.hotel;
        this.rooms = data.response.rooms;
        this.reviews = data.response.reviews;
        this.averageReviews = data.response.avgReviews;
      }
    });
  }

  openRoomList() {
    this.navCtrl.push(RoomListPage);
  }

}
