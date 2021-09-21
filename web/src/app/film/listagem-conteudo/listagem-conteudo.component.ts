import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../core/film.service";
import {Film} from "../../shared/models/Film";
import {Category} from "../../shared/models/Category";
import {CategoryService} from "../../core/category.service";
import {Router} from "@angular/router";
import {Utils} from "../../shared/functions/Utils";

@Component({
  selector: 'app-listagem-conteudo',
  templateUrl: './listagem-conteudo.component.html',
  styleUrls: ['./listagem-conteudo.component.css']
})
export class ListagemConteudoComponent implements OnInit {

  films: Film[] = []
  categories: Category[] = []
  featuredfilm: Film = new Film()

  constructor(private filmService: FilmService, private categoryService: CategoryService, private router: Router, private utils:Utils) { }

  ngOnInit(): void {
    this.filmService.list().subscribe({
      next: (films) => {
        this.films = films;
        this.featuredfilm = this.films[0]
        this.featuredfilm.categoriesString = this.featuredfilm.categories.map(cat => cat.name).join(" |")
      }
    })

    this.categoryService.list().subscribe({
      next: (categories) => {
        this.categories = categories.filter(cat => cat.films?.length > 0);
      }
    })
  }

  goToFilm(film: any){
    this.router.navigate(['/film', film.id, this.utils.cleanString(film.name)])
  }

}
