import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {RoomListPage} from "../room-list/room-list";
import {Hotel} from "../../models/Hotel";
import {HelperProvider} from "../../providers/helper";
import {SharedProvider} from "../../providers/shared";
import {AppResponse} from "../../models/AppResponse";
import {Room} from "../../models/Room";
import {AverageReviews} from "../../models/AverageReviews";
import {Review} from "../../models/Review";
import {HotelsListPopoverMenu} from "../../components/hotels-list-popover-menu/hotels-list-popover-menu";

declare var google;

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  hotel: Hotel;
  rooms: Room[];
  reviews: Review[];
  averageReviews: AverageReviews;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public helper: HelperProvider,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public popoverCtrl: PopoverController
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
        this.loadMap();
      }
    });
  }

  loadMap() {

    let latLng = new google.maps.LatLng(this.hotel.latitude, this.hotel.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = this.hotel.mapAddress;

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  openRoomList() {
    this.navCtrl.push(RoomListPage, {rooms: this.rooms});
  }

  imageFailed(event) {
    event.target.src = 'assets/icon/checkmark.png';
  }

  openPopoverMenu(event) {
    const popover = this.popoverCtrl.create(HotelsListPopoverMenu);
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
    popover.present({ev});
  }

}
