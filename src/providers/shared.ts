import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigProvider} from "./config";
import {Observable} from "rxjs";

@Injectable()
export class SharedProvider {

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
}
