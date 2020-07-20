import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  slidesStore = [
    {
      id: 1,
      src: '../../../../../assets/images/slider/1a.png',
      alt: 'Birthday events',
    },
    {
      id: 2,
      src: '../../../../../assets/images/slider/2b.png',
      alt: 'Coroporate events',
    },
    {
      id: 3,
      src: '../../../../../assets/images/slider/3c.png',
      alt: 'Weddings',
    },
    {
      id: 4,
      src: '../../../../../assets/images/slider/4d.png',
      alt: 'Fashion shows',
    },
    {
      id: 5,
      src: '../../../../../assets/images/slider/5e.png',
      alt: 'Occassional Events',
    },
    {
      id: 6,
      src: '../../../../../assets/images/slider/6f.png',
      alt: 'Trips & excursions',
    },
    {
      id: 7,
      src: '../../../../../assets/images/slider/7g.png',
      alt: 'Ceremonies',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
