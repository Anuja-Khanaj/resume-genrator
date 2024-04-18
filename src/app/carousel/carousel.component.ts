import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  currentSlideIndex = 0;
 slides = [
  {username:" abc def ", mgs:' The term  is not recognized as the name of a cmdlet,unction, script file, or operable program. Check the spelling ofthe name, or if a path was included, verify that the path isrect and try again.'},
  {username:"JKL LMN ", mgs:' The term  is not recognized as the name of a cmdlet,unction, script file, or operable program. Check the spelling ofthe name, or if a path was included, verify that the path isrect and try again.'},
  {username:"XYZ VHT ", mgs:' The term  is not recognized as the name of a cmdlet,unction, script file, or operable program. Check the spelling ofthe name, or if a path was included, verify that the path isrect and try again.'}
 ]

 prevSlide(): void {
  this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
}

nextSlide(): void {
  this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
}
}
