import {OwlOptions} from 'ngx-owl-carousel-o';
import {Component} from "@angular/core";

@Component({
  selector: 'app-carousel-content',
  templateUrl: './carousel-content.component.html'
})
export class CarouselContent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    autoHeight: false,
    items: 4
  }

  slidesStore = [
    {
      id: "1",
      src: '/assets/mini1.jpg',
      title: 'Mini 1',
      alt: 'Mini 1',
    },
    {
      id: "2",
      src: '/assets/mini5.jpg',
      title: 'Mini 1',
      alt: 'Mini 1',
    },
    {
      id: "5",
      src: '/assets/mini4.jpg',
      title: 'Mini 1',
      alt: 'Mini 1',
    },
    {
      id: "4",
      src: '/assets/mini2.jpg',
      title: 'Mini 1',
      alt: 'Mini 1',
    },
  ]
}
