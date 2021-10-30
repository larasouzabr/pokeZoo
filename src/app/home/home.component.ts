import { Component, OnInit } from '@angular/core';
import { getPokemonsService } from '../services/getPokemons.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    searchedKeyword : any;


    public pokemons = []; 
    constructor(
      public pokemonService:getPokemonsService,
      private spinner: NgxSpinnerService,
    ) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons(){
    this.spinner.show();
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
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      });
    });  
  }
  
}










