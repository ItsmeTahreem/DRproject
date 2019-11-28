import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    ContactComponent
   
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    NgbModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
