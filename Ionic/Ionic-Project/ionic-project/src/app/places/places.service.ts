import { Injectable } from '@angular/core';
import { Place } from './place.model';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[]=[
    new Place('p1',
    'Manhattan Mansion',
    'In the heart of New York cirty',
    'https://leadingestates.com/wp-content/uploads/2015/11/184-10-manhattan-01.jpg',
    149.99
    ),
    new Place('p2',
    'Iguazu Hotel',
    'A adventure place',
    'https://media-cdn.tripadvisor.com/media/photo-s/03/e0/58/b7/costa-iguazu-apart-hotel.jpg',
    149.99
    ),
    new Place('p3',
    'Montecarlo Palace',
    'A great place for relax',
    'https://media-cdn.tripadvisor.com/media/photo-s/03/e0/58/b7/costa-iguazu-apart-hotel.jpg',
    150
    )

  ]



  get places(){
    return [...this._places];
  }



  constructor() { }
}
