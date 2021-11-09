import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemConteudoComponent } from './film/listagem-conteudo/listagem-conteudo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CarouselContent} from "./shared/components/carousel-content/coursel-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AuthClientComponent} from "./auth/auth-client/auth-client.component";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {RegisterClientComponent} from "./auth/register-client/register-client.component";
import {AuthAdminComponent} from "./auth/auth-admin/auth-admin.component";
import {VisualizarConteudoComponent} from "./film/visualizar-conteudo/visualizar-conteudo.component";
import {YouTubePlayerModule} from "@angular/youtube-player";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CriarConteudoComponent } from './film/criar-conteudo/criar-conteudo.component';
import { TabelaConteudoComponent } from './film/tabela-conteudo/tabela-conteudo.component';
import { EditarConteudoComponent } from './film/editar-conteudo/editar-conteudo.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TabelaCategoriaComponent } from './categories/tabela-categoria/tabela-categoria.component';
import { CriarCategoriaComponent } from './categories/criar-categoria/criar-categoria.component';
import { EditarCategoriaComponent } from './categories/editar-categoria/editar-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemConteudoComponent,
    VisualizarConteudoComponent,
    CarouselContent,

    AuthClientComponent,
    RegisterClientComponent,
    AuthAdminComponent,
    NavbarComponent,
    CriarConteudoComponent,
    TabelaConteudoComponent,
    EditarConteudoComponent,
    TabelaCategoriaComponent,
    CriarCategoriaComponent,
    EditarCategoriaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    AngularMultiSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
