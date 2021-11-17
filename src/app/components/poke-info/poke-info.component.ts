import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {
  pokemon: any = "";
  pokemon2: any = "";
  pokemonType = [];
  pokemonHp = [];
  pokemonAtaque = [];
  pokemonDefensa = [];
  pokemonAtaEspecial= [];
  pokemonDefEspecial= [];
  velocidad = [];
  habitat = "";
  pokemonIMG = "";
  color = "";

  constructor(private router: Router, private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params => {
      this.getPokemon(params["id"]);
    });

    this.activatedRouter.params.subscribe(params => {
      this.getSpecies(params["id"]);
    });

  }



  ngOnInit(): void {
  }
  home() {
    this.router.navigateByUrl("/home");
  }

  getSpecies(id: number) {
    this.pokemonService.getSpecies(id).subscribe(
      res2 => {
        console.log(res2);
        this.pokemon2 = res2;
        this.habitat=this.pokemon2.habitat.name;
        this.color=res2.color.name;

      },
      err => {

      });


  }

  getPokemon(id: number) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonIMG = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
        this.pokemonHp= res.stats[0].base_stat;
        this.pokemonAtaque=res.stats[1].base_stat;
        this.pokemonDefensa=res.stats[2].base_stat;
        this.pokemonAtaEspecial=res.stats[3].base_stat;
        this.pokemonDefEspecial=res.stats[4].base_stat;
        this.velocidad=res.stats[5].base_stat;
               
      },
      err => {

      });


  }

}
