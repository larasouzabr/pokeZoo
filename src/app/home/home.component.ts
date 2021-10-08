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
   ) {
   }

  ngOnInit(): void {
   this.pokemonService.getPokemonName2().subscribe(resp => {
    this.pokemons = resp.results;
    console.log(this.pokemons)
    this.pokemons.map((p:any) => {
      this.pokemonService.getPokemonDetails(p.name).subscribe(pd => {
        p = ({
          ...p,
          ...pd
        });
      })
      return p;
    })
   })

  }


}
