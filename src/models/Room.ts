import {SliderImage} from "./SliderImage";
import {HotelAmenity} from "./HotelAmenity";

export class Room {
  id: number;
  title: string;
  desc: string;
  maxAdults: number;
  maxChild: number;
  maxQuantity: number;
  thumbnail: string;
  Images: SliderImage[];
  Amenities: HotelAmenity[];
  price: number;
  currCode: string;
  currSymbol: string;
  Info: {
    roomID: number,
    perNight: number,
    stay: number,
    totalPrice: number,
    checkin: string,
    checkout: string,
    extrabed: number,
    maxAdults: number,
    maxChild: number,
    quantity: number,
  };
  extraBeds: number;
  extrabedCharges: number;
}
