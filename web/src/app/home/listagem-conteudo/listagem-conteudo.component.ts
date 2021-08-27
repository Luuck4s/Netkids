import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../core/film.service";
import {Film} from "../../shared/models/Film";

@Component({
  selector: 'app-listagem-conteudo',
  templateUrl: './listagem-conteudo.component.html',
  styleUrls: ['./listagem-conteudo.component.css']
})
export class ListagemConteudoComponent implements OnInit {

  films: Film[] = []

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.list().subscribe({
      next: (films) => {
        this.films = films;
      }
    })
  }

}
