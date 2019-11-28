import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {ShowService} from '../Services/show.service'
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8,].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;
 
  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor() {}
  ngOnInit() {
    

  }
  startCarousel() {
    this.carousel.cycle();
  }
 
  
  moveNext() {
    this.carousel.next();
  }
 
  getPrev() {
    this.carousel.prev();
  }
 
  

  
  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
}