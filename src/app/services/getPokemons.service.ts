import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getPokemonsService {

  constructor(
    private http: HttpClient,
  ) {}
  
  getPokemonName2():Observable<any>{
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon");
  }

  getPokemonDetails(name:string):Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}