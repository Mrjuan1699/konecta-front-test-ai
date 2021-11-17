import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.baseUrl;
  baseUrl_Species = environment.baseUrl_Species;
  constructor(private http: HttpClient) { }

  getPokemons(index: number) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  getSpecies(index: number) {
    return this.http.get<any>(`${this.baseUrl_Species}/${index}`);
  }

}

