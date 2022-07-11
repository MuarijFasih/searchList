import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  RandomItem,
  SearchItemsServiceService,
} from '../../services/search-items-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl();
  itemsList: Observable<RandomItem[]> | undefined;

  constructor(
    private itemsService: SearchItemsServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemsList = this.itemsService.getItemsList();
  }

  get counter() {
    return this.items?.pipe(map((data) => data.length));
  }

  get items() {
    if (!this.searchField.value) return this.itemsList;
    return this.itemsList?.pipe(
      map((data) =>
        data.filter((it: any) => {
          return it.name.toLocaleLowerCase().includes(this.searchField.value);
        })
      )
    );

    // return this.itemsList.filter((it: any) => {
    //   return it.name.toLocaleLowerCase().includes(this.searchField.value);
    // });
  }

  onItemClick(item: any) {
    this.router.navigate([`/itemDetails/${item.id}`]);
  }
}
