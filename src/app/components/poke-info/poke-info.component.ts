import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {
  pokemon: any="";
  pokemonType = [];
  pokemonIMG = "";

  constructor(private router: Router, private pokemonService:PokemonService, private activatedRouter: ActivatedRoute)
   { 
     this.activatedRouter.params.subscribe(params=>{this.getPokemon(params["id"]);
    });
    
    }
  


  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl("/home");
    }

    getPokemon(id: number){
    this.pokemonService.getPokemons(id).subscribe(
  res=>{
    console.log(res);
  this.pokemon = res;
  this.pokemonIMG= this.pokemon.sprites.front_default;
  this.pokemonType=res.types[0].type.name;
  },
  err =>{

    });

  }
  
}
