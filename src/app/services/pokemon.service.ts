import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
baseUrl =environment.baseUrl;
baseUrl_Color =environment.baseUrl_Color;
  constructor(private http: HttpClient) { }

  getPokemons(index: number){
  return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
}

getColors(index: number){
  return this.http.get<any>(`${this.baseUrl_Color}/${index}`);
}

}

