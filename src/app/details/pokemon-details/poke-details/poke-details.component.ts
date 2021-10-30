import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.sass']
})
export class PokeDetailsComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pokemon;
  }
 get pokemon(){
  const id = this.activedRoute.snapshot
  return console.log(id);
 }
}
