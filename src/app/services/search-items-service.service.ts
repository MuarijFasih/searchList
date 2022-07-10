import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchItemsServiceService {
  randomItems = [{
    id: 1,
    name: 'Aditya',
    profession: 'Developer'
  }, {
    id: 2,
    name: 'Anaya',
    profession: 'Manager'
  }, {
    id: 3,
    name: 'Ralf',
    profession: 'Junior Developer'
  }, {
    id: 4,
    name: 'Random',
    profession: 'All rounder'
  }, {
    id: 5,
    name: 'NoOne',
    profession: 'Observer'
  }];
  constructor() { }

  getItemsList(): Observable<any> {
    return of(this.randomItems);
  }

  getDetails(id: number) {
    return of(this.randomItems.find(el => el.id == id));
  }
}
