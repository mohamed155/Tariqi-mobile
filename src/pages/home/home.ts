import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchResultsPage} from "../search-results/search-results";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabView = 'hotels';

  constructor(public navCtrl: NavController) {

  }

}
