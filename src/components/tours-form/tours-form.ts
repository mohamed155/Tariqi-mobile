import {Component} from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController} from 'ionic-angular';
import {CountryModal} from "../country-modal/country-modal";
import {SearchResultsPage} from "../../pages/search-results/search-results";
import {CityModal} from "../city-modal/city-modal";
import {ConfigProvider} from "../../providers/config";
import {SharedProvider} from "../../providers/shared";
import {FormBuilder, Validators} from "@angular/forms";
import {AppResponse} from "../../models/AppResponse";
import {TourType} from "../../models/TourType";

@Component({
  selector: 'tours-form',
  templateUrl: 'tours-form.html'
})
export class ToursForm {

  country;
  city_id;

  tourTypes: TourType[] = [];

  tourForm = this.fb.group({
    date: [`${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`, [Validators.required]],
    country: ['', [Validators.required]],
    city: [{value: '',disabled: !this.country}, [Validators.required]],
    type: ['', Validators.required],
    guests: ['2', [Validators.required]]
  });

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public shared: SharedProvider,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  openCountryModal() {
    this.tourForm.get('city').setValue('');
    const modal = this.modalCtrl.create(CountryModal, {type: 'country'});
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        this.tourForm.get('country').setValue(data.location.name);
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
        this.tourForm.get('city').setValue(data.location.name);
        this.city_id = data.location.id;
        const loader = this.loadingCtrl.create();
        loader.present();
        this.shared.getTourTypes(this.city_id).subscribe((data: AppResponse) => {
          loader.dismiss();
          if (data.error.status) {
            this.alertCtrl.create({
              title: "Error",
              message: data.error.msg,
              buttons: ['OK']
            }).present();
          } else {
            this.tourTypes = data.response;
          }
        });
      }
    });
    modal.present();
  }

  openResults() {
    this.navCtrl.push(SearchResultsPage);
  }

  onSubmit() {
    this.navCtrl.push(SearchResultsPage, {type: "tours", form: this.tourForm, city_id: this.city_id});
  }

}
