import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
 

  constructor(
    private http: HttpClient,
  ) { }


  getItemsName():Observable<any>{
    return this.http.get<any>("https://pokeapi.co/api/v2/item?limit=100");
  }

  getItemsDetails(name:string):Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/item/${name}`);
  }
}
