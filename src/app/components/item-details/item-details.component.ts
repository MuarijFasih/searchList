import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItemsServiceService } from 'src/app/services/search-items-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item: any;

  constructor(
    private itemsService: SearchItemsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemsService.getDetails(id).subscribe((itemDetails) => {
      if (itemDetails) {
        this.item = itemDetails;
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
