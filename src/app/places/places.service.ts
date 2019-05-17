import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1',
      'ManHatten Mansion',
      'In the heart of New York of city',
      'https://upload.wikimedia.org/wikipedia/commons/b/b9/Above_Gotham.jpg',
      149.99),
    new Place('p2',
      'Los Angles Mantion',
      'In the heart of Los Angles',
      'https://media.wired.com/photos/5b9c01161e60052cdc38bdef/master/w_1164,c_limit/losangeles-947698310.jpg',
      189.99)
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
