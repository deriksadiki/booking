import { Component, OnInit } from '@angular/core';
import arr from  '../../array';
import ar2 from  '../arr2';
import ar3 from '../test';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-resev',
  templateUrl: './resev.component.html',
  styleUrls: ['./resev.component.css']


})
export class ResevComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  all = "";
  me = ar2[1];
  title = ar2[14]; 
  name2 = "";
  surname2 ="";
  dis(name,surname,idno,address,email,cell,indate,outdate,adults,kids,meal)
  {
     name  = ar3.push(name);
    surname  = ar3.push(surname );
    idno  = ar3.push( idno );
    address  = ar3.push(address );
    email  = ar3.push(  email );
    cell  = ar3.push(cell );
    indate  = ar3.push(indate);
    outdate  = ar3.push(outdate);
    adults  = ar3.push( adults );
    kids  = ar3.push( kids );
    meal = ar3.push( meal );
    ar3.push(this.title);
    ar3.push(this.me);
    ar3.push('');
    console.log(ar3);
    ar2[1] = "";

    this.name2 = name;
    this.surname2 = surname;
  }
}
