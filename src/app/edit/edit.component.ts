import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {ShowService} from '../Services/show.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
show:any=[];
  constructor(private showService:ShowService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.showService.GetShows(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.show = data;
          console.log(this.show);
      }
    );

  }
  onEditShow(form:NgForm){
    console.log(form.value.name);
    this.showService.UpdateShows(this.show._id,form.value.name,form.value.desc,form.value.type).
    subscribe();
  }
}