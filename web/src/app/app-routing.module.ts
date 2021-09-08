import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListagemConteudoComponent} from "./film/listagem-conteudo/listagem-conteudo.component";
import {AuthClientComponent} from "./auth/auth-client/auth-client.component";
import {RegisterClientComponent} from "./auth/register-client/register-client.component";
import {AuthAdminComponent} from "./auth/auth-admin/auth-admin.component";
import {VisualizarConteudoComponent} from "./film/visualizar-conteudo/visualizar-conteudo.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListagemConteudoComponent },
  { path: 'auth', pathMatch: 'full', component: AuthClientComponent },
  { path: 'auth/register', pathMatch: 'full', component: RegisterClientComponent },
  { path: 'admin/auth', pathMatch: 'full', component: AuthAdminComponent },
  { path: 'film/:id/:name', pathMatch: 'full', component: VisualizarConteudoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
