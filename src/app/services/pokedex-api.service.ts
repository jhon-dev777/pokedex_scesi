import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string ){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  }

}
