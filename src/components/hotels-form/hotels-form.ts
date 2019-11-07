import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CountryModal} from "../country-modal/country-modal";
import {SearchResultsPage} from "../../pages/search-results/search-results";
import {CityModal} from "../city-modal/city-modal";

@Component({
  selector: 'hotels-form',
  templateUrl: 'hotels-form.html'
})
export class HotelsForm {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openCountryModal() {
    const modal = this.modalCtrl.create(CountryModal);
    modal.present();
  }

  openCityModal() {
    const modal = this.modalCtrl.create(CityModal);
    modal.present();
  }


  openResults() {
    this.navCtrl.push(SearchResultsPage);
  }

}
