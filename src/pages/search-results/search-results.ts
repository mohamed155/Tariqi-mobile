import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController) {

  }

  openDetails() {
    this.navCtrl.push(ItemDetailsPage);
  }

}
