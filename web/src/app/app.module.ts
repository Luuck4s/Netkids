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


@NgModule({
  declarations: [
    AppComponent,
    ListagemConteudoComponent,
    VisualizarConteudoComponent,
    CarouselContent,
    AuthClientComponent,
    RegisterClientComponent,
    AuthAdminComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
