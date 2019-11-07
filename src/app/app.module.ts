import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {HotelsForm} from "../components/hotels-form/hotels-form";
import {CountryModal} from "../components/country-modal/country-modal";
import {SearchResultsPage} from "../pages/search-results/search-results";
import {CityModal} from "../components/city-modal/city-modal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HotelsForm,
    CountryModal,
    SearchResultsPage,
    CityModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    HotelsForm,
    CountryModal,
    SearchResultsPage,
    CityModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
