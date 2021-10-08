import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getPokemonsService {
  pokemons = []

  constructor(
    private http: HttpClient,
  ) {}

  async getDataPokemonsName() {
   const requisiton = await this.http.get<any>("https://pokeapi.co/api/v2/pokemon").toPromise();
   this.pokemons = requisiton.results;
   console.log(requisiton)
  }
  
  getPokemonName2():Observable<any>{
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon");
  }

  getPokemonDetails(name:string):Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}