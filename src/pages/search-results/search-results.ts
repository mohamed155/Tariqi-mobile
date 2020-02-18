import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";
import {FormGroup} from "@angular/forms";
import {SearchHotelsData} from "../../models/SearchHotelsData";
import {SharedProvider} from "../../providers/shared";

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  type: string;
  form: FormGroup;
  city_id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public shared: SharedProvider
  ) {
    this.type = this.navParams.get('type');
    this.form = this.navParams.get('form');
    this.city_id = this.navParams.get('city_id');
  }

  ionViewWillLoad() {
    const hotelSearchData = new SearchHotelsData();
    hotelSearchData.checkInDate = this.form.value.checkInDate;
    hotelSearchData.checkOutDate = this.form.value.checkOutDate;
    hotelSearchData.adults = this.form.value.adults;
    hotelSearchData.children = this.form.value.children;
    hotelSearchData.city_id = this.city_id;

    this.shared.searchHotels(hotelSearchData).subscribe(data => console.log(data));
  }

  openDetails() {
    this.navCtrl.push(ItemDetailsPage);
  }

}
