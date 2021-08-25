import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListagemConteudoComponent} from "./home/listagem-conteudo/listagem-conteudo.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListagemConteudoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
