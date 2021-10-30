import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBerriesService {

  constructor( 
    private http: HttpClient,
    ) { }
    
    getBerriesName():Observable<any>{
      return this.http.get<any>("https://pokeapi.co/api/v2/berry?limit=100");
    }
  
    getBerriesDetails(name:string):Observable<any>{
      return this.http.get<any>(`https://pokeapi.co/api/v2/berry/${name}`);
    }
}
