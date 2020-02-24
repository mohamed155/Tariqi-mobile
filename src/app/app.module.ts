import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {StartPage} from "../pages/start/start";
import {HotelsForm} from "../components/hotels-form/hotels-form";
import {CountryModal} from "../components/country-modal/country-modal";
import {SearchResultsPage} from "../pages/search-results/search-results";
import {CityModal} from "../components/city-modal/city-modal";
import {ProfilePage} from "../components/profile/profile";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {ItemDetailsPage} from "../pages/item-details/item-details";
import {RoomListPage} from "../pages/room-list/room-list";
import {BookingsPage} from "../pages/bookings/bookings";
import {ConfigProvider} from "../providers/config";
import {SharedProvider} from "../providers/shared";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {HelperProvider} from "../providers/helper";
import {HotelBox} from "../components/hotel-box/hotel-box";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    HotelsForm,
    CountryModal,
    SearchResultsPage,
    CityModal,
    ProfilePage,
    EditProfilePage,
    ItemDetailsPage,
    RoomListPage,
    BookingsPage,
    HotelBox
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartPage,
    HotelsForm,
    CountryModal,
    SearchResultsPage,
    CityModal,
    ProfilePage,
    EditProfilePage,
    ItemDetailsPage,
    RoomListPage,
    BookingsPage,
    HotelBox
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    SharedProvider,
    HelperProvider
  ]
})
export class AppModule {
}
