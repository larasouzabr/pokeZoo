import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetBerriesService } from '../services/get-berries.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.sass']
})
export class BerriesComponent implements OnInit {
  searchedBerrie : any; 
  public berries = [];
  constructor(
    private BerriesService:GetBerriesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.BerriesService.getBerriesName().subscribe(async resp => {
      resp.results = await resp.results.map(async (berry:any) => {
        let berrieDetails = await this.BerriesService.getBerriesDetails(berry.name).toPromise();
        return ({
          ...berry,
          ...berrieDetails
        });
      });
      Promise.all(resp.results).then((results:any) => {
        this.berries = results;
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      });
    });
  }
}

