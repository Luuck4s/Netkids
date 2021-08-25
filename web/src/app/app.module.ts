import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemConteudoComponent } from './home/listagem-conteudo/listagem-conteudo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CarouselContent} from "./shared/components/carousel-content/coursel-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ListagemConteudoComponent,
    CarouselContent
  ],
  imports: [
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
