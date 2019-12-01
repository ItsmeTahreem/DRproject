import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { ShowService } from '../Services/show.service'
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  /** map method that takes in how many pictures are there and displays them accordingly */
  images = [1, 2, 3, 4, 5, 6,].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  showNavigationArrows = true;  /** shows the navigation arrows on the image */
  showNavigationIndicators = true;

  @ViewChild('mycarousel', { static: true }) carousel: NgbCarousel;

  constructor() { }
  ngOnInit() {


  }
  startCarousel() {  /** Method that starts the carousel */
    this.carousel.cycle();
  }


  moveNext() {
    this.carousel.next();  /**Method that shows the next image in the carousel */
  }

  getPrev() {
    this.carousel.prev(); /**Method that shows the previous image in the carousel */
  }




  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }




}