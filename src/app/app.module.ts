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
import {HotelsListPopoverMenu} from "../components/hotels-list-popover-menu/hotels-list-popover-menu";
import {RoomDetailsPage} from "../pages/room-details/room-details";
import {SelectRoomQuantityPopover} from "../components/select-room-quantity-popover/select-room-quantity-popover";
import {ToursForm} from "../components/tours-form/tours-form";

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
    HotelBox,
    HotelsListPopoverMenu,
    RoomDetailsPage,
    SelectRoomQuantityPopover,
    ToursForm
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
    HotelBox,
    HotelsListPopoverMenu,
    RoomDetailsPage,
    SelectRoomQuantityPopover,
    ToursForm
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
