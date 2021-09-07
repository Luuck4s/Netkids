import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListagemConteudoComponent} from "./home/listagem-conteudo/listagem-conteudo.component";
import {AuthClientComponent} from "./auth/auth-client/auth-client.component";
import {RegisterClientComponent} from "./auth/register-client/register-client.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListagemConteudoComponent },
  { path: 'auth', pathMatch: 'full', component: AuthClientComponent },
  { path: 'auth/register', pathMatch: 'full', component: RegisterClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
