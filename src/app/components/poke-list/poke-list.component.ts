import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  displayedColumns: string[] = ["position", "imagen","name"];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    let pokemonDato;
    
    for(let i=1; i<= 50; i++){
      this.pokeService.getPokemons(i).subscribe(
        res =>{
          
          pokemonDato={
           
            position: i,
            image: res.sprites.front_default,
            name:res.name,
            type: res.main_types
          };
          this.data.push(pokemonDato);
          this.dataSource=new MatTableDataSource(this.data);
          this.dataSource.paginator =this.paginator;
          this.dataSource.sort=this.sort;
          
        },
        err=>{
          console.log(err);
        }
      );
    }
    
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getRow(row: any){
    this.router.navigateByUrl(`PokeInfo/${row.position}`);
    }
    }
  

