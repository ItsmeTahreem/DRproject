import { Component, OnInit } from '@angular/core';
import { ShowService } from '../Services/show.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyShows: any = [];
  constructor(private showService: ShowService) { }
  /* constructor Displays shows with matching ID for ngoninit*/

  ngOnInit() {
    this.showService.GetShowInformation().subscribe((data) => {
      this.MyShows = data.shows;
      console.log(this.MyShows);
    })
  }
  /**Method that deletes the show with the id */
  onDelete(id: String) {
    console.log("Deleting show with id: " + id);
    this.showService.DeleteShow(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}