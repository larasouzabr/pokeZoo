
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  }
  
  pegarImagemPokemon() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.pokemon.id}.png`;
  }
}
