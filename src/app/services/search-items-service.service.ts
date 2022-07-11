import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface RandomItem {
  id: number;
  name: string;
  profession: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchItemsServiceService {
  randomItems: RandomItem[] = [
    {
      id: 1,
      name: 'Aditya',
      profession: 'Developer',
    },
    {
      id: 2,
      name: 'Anaya',
      profession: 'Manager',
    },
    {
      id: 3,
      name: 'Ralf',
      profession: 'Junior Developer',
    },
    {
      id: 4,
      name: 'Random',
      profession: 'All rounder',
    },
    {
      id: 5,
      name: 'NoOne',
      profession: 'Observer',
    },
  ];
  constructor() {}

  getItemsList(): Observable<RandomItem[]> {
    return of(this.randomItems);
  }

  getDetails(id: number): Observable<RandomItem | undefined> {
    return of(this.randomItems.find((el) => el.id == id));
  }
}
