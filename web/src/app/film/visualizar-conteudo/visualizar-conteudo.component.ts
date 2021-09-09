import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../core/film.service";
import {Film} from "../../shared/models/Film";
import {CategoryService} from "../../core/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listagem-conteudo',
  templateUrl: './listagem-conteudo.component.html',
  styleUrls: ['./listagem-conteudo.component.css']
})
export class VisualizarConteudoComponent implements OnInit {

  film: Film = new Film();
  height: number = 0;
  width: number = 0;

  constructor(private filmService: FilmService, private toastr: ToastrService, private categoryService: CategoryService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSizes();
    this.getFilm();
  }

  getSizes(): void{
    let body = document.body,
      html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight );

    let width = Math.max(body.offsetWidth);
    this.height = height;
    this.width = width;
  }

  async getFilm(){
    let id = Number(this.route.snapshot.paramMap.get('id'));

    await this.filmService.get(id).subscribe({
      next: (res: Film) => {
        let positionOfCode = res.video.lastIndexOf('v=');
        let code = res.video.substring(positionOfCode + 2);

        this.film = {
          ...res,
          video: code
        };
      },
      error: (error) => {
        this.router.navigate(['/auth'],  { replaceUrl: true })
      }
    })

  }
}
