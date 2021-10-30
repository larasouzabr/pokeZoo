import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetItemsService } from '../services/get-items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  searchedBall : any;
  public items = []

  constructor(
    public itemService: GetItemsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.itemService.getItemsName().subscribe(async resp => {
      resp.results = await resp.results.map(async (item:any) => {
        let itemDetails = await this.itemService.getItemsDetails(item.name).toPromise();
        return ({
          ...item,
          ...itemDetails
        });
      });
      Promise.all(resp.results).then((results:any) => {
        this.items = results;
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      });
    });
  }
}
