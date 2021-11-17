import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  {path: "home", component: PokeListComponent},
  {path: "home", component: PokeInfoComponent},
  {path: "PokeInfo/:id", component: PokeInfoComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
