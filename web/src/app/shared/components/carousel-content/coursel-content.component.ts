import { OwlOptions } from 'ngx-owl-carousel-o';
import {Component, Input} from '@angular/core';
import {Film} from "../../models/Film";


@Component({
  selector: 'app-carousel-content',
  templateUrl: './carousel-content.component.html',
})
export class CarouselContent {
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
}
