import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../dtos';
import { getPokemonsService } from '../services/getPokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    public pokemons = [];
    
    constructor(
      public pokemonService:getPokemonsService,
    ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonName2().subscribe(async resp => {
      resp.results = await resp.results.map(async (pokemon:any) => {
        let pokeDetails = await this.pokemonService.getPokemonDetails(pokemon.name).toPromise();
        return ({
          ...pokemon,
          ...pokeDetails
        });
      });
      Promise.all(resp.results).then((results:any) => {
        this.pokemons = results;
      });
    });
  }

}
