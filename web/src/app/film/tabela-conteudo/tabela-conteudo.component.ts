import {Component, OnInit} from '@angular/core';
import {Film} from "../../shared/models/Film";
import {FilmService} from "../../core/film.service";
import {ToastrService} from "ngx-toastr";
import {Utils} from "../../shared/functions/Utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabela-conteudo',
  templateUrl: './tabela-conteudo.component.html',
  styleUrls: ['./tabela-conteudo.component.css']
})
export class TabelaConteudoComponent implements OnInit {

  films: Film[] = []

  constructor(private filmService: FilmService, private toastr: ToastrService, private router: Router, private utils: Utils) {
  }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmService.list().subscribe({
      next: (films) => {
        this.films = films;
      }
    })
  }

  deleteContent(id: any) {
    this.filmService.delete(id).subscribe({
      next: (res) => {
        this.toastr.success('Conteúdo deletado com sucesso', 'Sucesso');
        this.getFilms();
      }
    })
  }

  goToFilm(film: Film) {
    this.router.navigate(['/admin/content/edit', film.id, this.utils.cleanString(film.name)])
  }

}
