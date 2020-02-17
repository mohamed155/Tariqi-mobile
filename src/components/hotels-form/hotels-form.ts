import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CountryModal} from "../country-modal/country-modal";
import {SearchResultsPage} from "../../pages/search-results/search-results";
import {CityModal} from "../city-modal/city-modal";
import {ConfigProvider} from "../../providers/config";
import {SharedProvider} from "../../providers/shared";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'hotels-form',
  templateUrl: 'hotels-form.html'
})
export class HotelsForm {

  country;
  city_id;

  hotelForm = this.fb.group({
    checkInDate: [''],
    checkOutDate: [''],
    country: [''],
    city: [''],
    rooms: [''],
    adults: [''],
    children: ['']
  });

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public shared: SharedProvider,
    public fb: FormBuilder
  ) {
  }

  openCountryModal() {
    this.hotelForm.get('city').setValue('');
    const modal = this.modalCtrl.create(CountryModal, {type: 'country'});
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        this.hotelForm.get('country').setValue(data.location.name);
        this.country = data.location;
      }
    });
    modal.present();
  }

  openCityModal() {
    const modal = this.modalCtrl.create(CountryModal, {type: 'city', countryName: this.country.name});
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        this.hotelForm.get('city').setValue(data.location.name);
        this.city_id = data.location.id;
      }
    });
    modal.present();
  }

  openResults() {
    this.navCtrl.push(SearchResultsPage);
  }

  onSubmit() {

  }

}
