import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookComponent } from './book/book.component';
import { ResevComponent } from './resev/resev.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    RatingComponent,
    FacilitiesComponent,
    ContactsComponent,
    AboutusComponent,
    BookComponent,
    ResevComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'rating', component: RatingComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'facilities', component: FacilitiesComponent},
      {path: 'book', component:BookComponent},
      {path: 'resev', component:ResevComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class name{
     data:string;
   
   get value() : string {
       return this.data;
   }

 set value(val: string) {
    this.data = val;
}

}
