import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchItemsServiceService } from '../../services/search-items-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl();
  itemsList: any = [];

  constructor(
    private itemsService: SearchItemsServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemsService.getItemsList().subscribe((list) => {
      this.itemsList = list;
    });
  }

  get counter() {
    return this.items.length;
  }

  get items() {
    if (!this.searchField.value) return this.itemsList;
    return this.itemsList.filter((it: any) => {
      return it.name.toLocaleLowerCase().includes(this.searchField.value);
    });
  }

  onItemClick(item: any) {
    this.router.navigate([`/itemDetails/${item.id}`]);
  }
}
