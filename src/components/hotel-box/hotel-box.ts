import {Component, Input} from "@angular/core";
import {Hotel} from "../../models/Hotel";
import {HelperProvider} from "../../providers/helper";
import {ItemDetailsPage} from "../../pages/item-details/item-details";
import {NavController} from "ionic-angular";

@Component({
  selector: 'hotel-box',
  templateUrl: 'hotel-box.html'
})
export class HotelBox {

  @Input('hotel') hotel: Hotel;

  constructor(
    public helper: HelperProvider,
    public navCtrl: NavController
  ) {

  }

  openDetails() {
    this.navCtrl.push(ItemDetailsPage, {hotel: this.hotel});
  }

}
