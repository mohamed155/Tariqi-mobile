import {Component, Input} from "@angular/core";
import {HelperProvider} from "../../providers/helper";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'select-room-quantity-popover',
  templateUrl: 'select-room-quantity-popover.html'
})
export class SelectRoomQuantityPopover {

  roomQuantity: number;

  roomCounter: number[] = [];

  constructor(
    public helper: HelperProvider,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.roomQuantity = this.navParams.get('roomQuantity');
    this.roomCounter = this.helper.makeArrayCounted(this.roomQuantity);
  }

  cancel() {
    this.viewCtrl.dismiss({state: false});
  }

  select(quantity) {
    this.viewCtrl.dismiss({state: true, quantity});
  }
}
