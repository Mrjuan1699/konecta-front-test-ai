import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    for(let i=1; i<= 150; i++){
      this.pokeService.getPokemons(i).subscribe(
        res =>{
          console.log(res);
        },
        err=>{
          
        }
      );
    }
    
  }
}
