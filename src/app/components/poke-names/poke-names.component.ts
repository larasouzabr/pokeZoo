
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getPokemonsService } from 'src/app/services/getPokemons.service';

@Component({
  selector: 'app-poke-names',
  templateUrl: './poke-names.component.html',
  styleUrls: ['./poke-names.component.sass']
})
export class PokeNamesComponent implements OnInit {
  @Input()
  public pokemon: any | null = null;

  constructor(
    private pokemonService:getPokemonsService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonDetails(this.pokemon.name).subscribe(resp => {
      this.pokemon = ({
        ...this.pokemon,
        ...resp
      });
    });
  }
  
  pegarImagemPokemon() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.pokemon.id}.png`;
  }
}
