import { Pipe, PipeTransform } from '@angular/core';
import {Model  } from "../pipe/model";
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  private counter = 0;

  transform(hotels: Model[], searchTerm: string) {
    if (!hotels || !searchTerm) {
      return hotels;
    }
  
  return hotels.filter(hotel =>
    hotel.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}

