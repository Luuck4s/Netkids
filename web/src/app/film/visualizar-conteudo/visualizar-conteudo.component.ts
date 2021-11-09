import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../core/film.service";
import {Film} from "../../shared/models/Film";
import {CategoryService} from "../../core/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { AvaliationService } from 'src/app/core/avaliation.service';

@Component({
  selector: 'app-listagem-conteudo',
  templateUrl: './visualizar-conteudo.component.html',
  styleUrls: ['./visualizar-conteudo.component.css']
})
export class VisualizarConteudoComponent implements OnInit {

  film: Film = new Film();
  height: number = 0;
  width: number = 0;
  stars: number = 0;

  constructor(private filmService: FilmService, private toastr: ToastrService, private categoryService: CategoryService, private router:Router, private route: ActivatedRoute, private avaliationService: AvaliationService) { }

  ngOnInit(): void {
    this.getSizes();
    this.getFilm();
  }

  getSizes(): void{
    let height = window.screen.height - 150;
    let width = window.screen.width - 100;

    this.height = height;
    this.width = width;
  }

  async getFilm(){
    let id = Number(this.route.snapshot.paramMap.get('id'));

    await this.filmService.get(id).subscribe({
      next: (res: Film) => {
        let positionOfCode = res.video.lastIndexOf('v=');
        let code = res.video.substring(positionOfCode + 2);
        this.stars = res.avaliation || 0;

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

  avaliate(stars: number){
    const data = {
      "filmId": this.film.id,
	    "stars": stars
    };

   this.avaliationService.createOrUpdate(data).subscribe({
     next: (res) => {
        console.log(res);
        this.stars = stars;
     },
     error: (error) => {
       console.log(error);
     }
   })
  }

}
