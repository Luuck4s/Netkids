import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemConteudoComponent } from './home/listagem-conteudo/listagem-conteudo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CarouselContent} from "./shared/components/carousel-content/coursel-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ListagemConteudoComponent,
    CarouselContent
  ],
  imports: [
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
