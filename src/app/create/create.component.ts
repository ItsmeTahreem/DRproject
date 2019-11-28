import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShowService } from '../Services/show.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

  onAddShow(form: NgForm) {
   
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);



    this.showService.AddShowInformation(form.value.name,form.value.desc).subscribe(
        ()=>{
        }
      );
    console.log(form.value);
   
  }

}