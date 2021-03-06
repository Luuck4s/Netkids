import { OwlOptions } from 'ngx-owl-carousel-o';
import {Component, Input} from '@angular/core';
import {Film} from "../../models/Film";
import {Router} from "@angular/router";
import {Utils} from "../../functions/Utils";


@Component({
  selector: 'app-carousel-content',
  templateUrl: './carousel-content.component.html',
})
export class CarouselContent {

  constructor(private router:Router, private utils:Utils) {
  }

  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    loop: true,
    dots: true,
    navSpeed: 600,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    }
  };

  @Input()
  content: Film[] = [];

  goToFilm(film: Film){
    this.router.navigate(['/film', film.id, this.utils.cleanString(film.name)])
  }

  createRange(number: number){
    return Array.from(Array(number).keys());
  }

        
  getStars(number: number){
    const stars: any = [];

    let limit = Math.floor(number);
    

    for(let i = 0; i < limit; i++){
      stars.push(`<i class="fa fa-star"></i>`)
    }

    if(number % 1 != 0){
      stars.push(`<i class="fa fa-star-half"></i>`)
    }
    
    return stars.join(" ");
  }

}
