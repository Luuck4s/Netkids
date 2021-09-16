import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListagemConteudoComponent} from "./film/listagem-conteudo/listagem-conteudo.component";
import {AuthClientComponent} from "./auth/auth-client/auth-client.component";
import {RegisterClientComponent} from "./auth/register-client/register-client.component";
import {AuthAdminComponent} from "./auth/auth-admin/auth-admin.component";
import {VisualizarConteudoComponent} from "./film/visualizar-conteudo/visualizar-conteudo.component";
import {TabelaConteudoComponent} from "./film/tabela-conteudo/tabela-conteudo.component";
import {CriarConteudoComponent} from "./film/criar-conteudo/criar-conteudo.component";
import {EditarConteudoComponent} from "./film/editar-conteudo/editar-conteudo.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListagemConteudoComponent },
  { path: 'auth', pathMatch: 'full', component: AuthClientComponent },
  { path: 'auth/register', pathMatch: 'full', component: RegisterClientComponent },
  { path: 'film/:id/:name', pathMatch: 'full', component: VisualizarConteudoComponent },
  { path: 'admin/auth', pathMatch: 'full', component: AuthAdminComponent },
  { path: 'admin/content', pathMatch: 'full', component: TabelaConteudoComponent },
  { path: 'admin/content/create', pathMatch: 'full', component: CriarConteudoComponent },
  { path: 'admin/content/edit/:id/:name', pathMatch: 'full', component: EditarConteudoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
