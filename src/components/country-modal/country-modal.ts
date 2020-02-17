import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {SharedProvider} from "../../providers/shared";
import {LocationsResponse} from "../../models/LocationsRespone";
import {Location} from "../../models/Location";

@Component({
  selector: 'country-modal',
  templateUrl: 'country-modal.html'
})
export class CountryModal {

  type: string;
  countryName: string;

  locations: Location[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public shared: SharedProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.type = this.navParams.get('type');
    this.countryName = this.navParams.get('countryName');
  }

  ionViewWillLoad() {
    const loader = this.loadingCtrl.create();
    loader.present();
    this.shared.fetchLocations(this.type, this.countryName)
      .subscribe((data: LocationsResponse) => {
        loader.dismiss();
        this.locations = data.locations
      }, (err) => {
        this.alertCtrl.create({
          title: "Server Error",
          message: err,
          buttons: ['OK']
        }).present();
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  choose(location: Location) {
    this.viewCtrl.dismiss({location});
  }

}
