import {HotelAmenity} from "./HotelAmenity";
import {SliderImage} from "./SliderImage";
import {PaymentOption} from "./PaymentOption";

export class Hotel {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  stars: string;
  starsCount: number;
  location: string;
  desc: string;
  price: number;
  currCode: string;
  currSymbol: string;
  amenities: HotelAmenity[];
  avgReviews: {
    clean: number,
    comfort: number,
    location: number,
    facilities: number,
    staff: number,
    totalReviews: number,
    overall: number,
  };
  latitude: string;
  longitude: string;
  sliderImages: SliderImage[];
  relatedItems: Hotel[];
  paymentOptions: PaymentOption[];
  defcheckin: string;
  defcheckout: string;
  metadesc: string;
  keywords: string;
  policy: string;
  tripadvisorid: number;
  mapAddress: string;
}
