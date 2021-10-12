
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/dtos';


@Component({
  selector: 'app-poke-names',
  templateUrl: './poke-names.component.html',
  styleUrls: ['./poke-names.component.sass']
})
export class PokeNamesComponent implements OnInit {
  @Input()
  public pokemon: any | null = null; 
  
  constructor(
  ) { }
  

  ngOnInit(): void {
    console.log(this.pokemon)
  }


}
