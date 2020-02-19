import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";
import {FormGroup} from "@angular/forms";
import {SearchHotelsData} from "../../models/SearchHotelsData";
import {SharedProvider} from "../../providers/shared";
import {Hotel} from "../../models/Hotel";
import {AppResponse} from "../../models/AppResponse";
import {HelperProvider} from "../../providers/helper";

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  type: string;
  form: FormGroup;
  city_id: number;

  hotelList: Hotel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public shared: SharedProvider,
    public alertCtrl: AlertController,
    public helper: HelperProvider,
    public loadingCtrl: LoadingController
  ) {
    this.type = this.navParams.get('type');
    this.form = this.navParams.get('form');
    this.city_id = this.navParams.get('city_id');
  }

  ionViewWillLoad() {
    switch (this.type) {
      case 'hotels': {
        const hotelSearchData = new SearchHotelsData();
        hotelSearchData.checkInDate = this.form.value.checkInDate;
        hotelSearchData.checkOutDate = this.form.value.checkOutDate;
        hotelSearchData.adults = this.form.value.adults;
        hotelSearchData.children = this.form.value.children;
        hotelSearchData.city_id = this.city_id;

        const loader = this.loadingCtrl.create();
        loader.present();
        this.shared.searchHotels(hotelSearchData).subscribe((data: AppResponse) => {
          loader.dismiss();
          if (data.error.status) {
            this.alertCtrl.create({
              title: "Error",
              message: data.error.msg,
              buttons: ['OK']
            }).present();
          } else {
            this.hotelList = data.response;
          }
        });
        break;
      }
    }
  }

  openDetails(hotel: Hotel) {
    this.navCtrl.push(ItemDetailsPage, {hotel});
  }

}
