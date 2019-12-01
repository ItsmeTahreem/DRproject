import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() { }

  ngOnInit() {


  }

  name = 'Angular';
  characters = [   /** Array of Characters */
    'How I Met Your Mother ',
    'Friends',
    'The Big Bang Theory',
    'The New Glee',
    'Lost',
    'Stranger Things'
  ]



}