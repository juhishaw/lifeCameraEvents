import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ServiceComponent } from './components/service/service.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ClientsComponent,
    ServiceComponent,
    TestimonialsComponent,
    ContactUsComponent,
    GalleryComponent,
    SliderComponent,
  ],
  imports: [CommonModule, SharedModule, CarouselModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ClientsComponent,
    ServiceComponent,
    TestimonialsComponent,
    ContactUsComponent,
    GalleryComponent,
    SliderComponent,
  ],
})
export class SharedHomeModule {}
