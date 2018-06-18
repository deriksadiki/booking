import { Component, OnInit } from '@angular/core';
import arr from  '../../array';
import ar2 from  '../arr2';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  constructor() { arr[1] = 0;
    ar2[1] = "";
}

  ngOnInit() {
  }

  dis()
  { 
    for (var x = 2; x <= 12; x = x + 2 )
    { 
      if (arr[x] != null)
      {
          ar2[1] = ar2[1] + arr[x] + " " + arr[x + 1] + ",";
         
      }
    }
    ar2[14] = arr[1];
    arr.pop();
    arr.length = 0;
  }
  num:number = 0;

  price(pr)
  {
      if (pr == 499)
      {
        arr[2] = "Single Room";
        arr[3] = "Single bed";
      }
     else  if (pr == 899)
      {
          arr[4] = "Deluxe Room";
          arr[5] = "Queen Size bed";
      }
      else if(pr == 699)
      {
        arr[6] = "Deluxe Room"
        arr[7] = "King Size bed";
      }
      else if (pr == 550)
      {
          arr[8] = "Single Room";
          arr[9] = "Double bed";
      }
      else if (pr == 599)
      {
        arr[10] = "Double Room";
        arr[11] = "King Size bed";
      }
      else
      {
        arr[12] = "Double bed Pro";
        arr[13] = "Single Room"
      }
    this.num = parseInt(arr[1]);
      this.num = this.num + parseInt(pr);
    arr[1] = this.num
  }

}
