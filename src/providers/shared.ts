import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigProvider} from "./config";
import {Observable} from "rxjs";
import {SearchHotelsData} from "../models/SearchHotelsData";
import {SignupForm} from "../models/SignupForm";
import {SigninForm} from "../models/SigninForm";

@Injectable()
export class SharedProvider {

  public loggedUser = null;

  constructor(
    public http: HttpClient,
    public config: ConfigProvider
  ) {}

  public fetchLocations(type, countryName = "") {
    if (type == 'country')
      return this.http.get(this.config.api_url + 'api/hotels/locations?appKey=' + this.config.api_key + '&type=country');
    else if (type == 'city')
      return this.http.get(this.config.api_url + 'api/hotels/locations?appKey=' + this.config.api_key + '&country=' + countryName);
    else return new Observable<Object>();
  }

  public searchHotels(searchDate: SearchHotelsData, offset = 1) {
    return this.http.get(this.config.api_url + 'api/hotels/search?appKey=' + this.config.api_key
      + `&searching=${searchDate.city_id}
      &adults=${searchDate.adults}
      &child=${searchDate.children}
      &checkin=${searchDate.checkInDate}
      &checkout=${searchDate.checkOutDate}
      &offset=${offset}`)
  }

  public getHotelDetails(hotel_id: number) {
    return this.http.get(this.config.api_url + 'api/hotels/hotelDetails?appKey=' + this.config.api_key + '&id=' + hotel_id);
  }

  public signup(form: SignupForm) {
    const headersJson = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.config.api_url + 'api/login/signup?appKey=' + this.config.api_key, form, {
      headers: headersJson
    });
  }

  public signin(form: SigninForm) {
    const headersJson = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.config.api_url + 'api/login/check?appKey=' + this.config.api_key, form, {
      headers: headersJson
    });
  }
}
