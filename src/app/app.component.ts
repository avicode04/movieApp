import { Component } from '@angular/core';
import { GdetailsService} from  './gdetails.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private gdetailsservice:GdetailsService,private _router:Router){ 
     
    }
  // peoples$;

  // fetchdetails(){
  //   this.peoples$ = this.gdetailsservice.fetch_g_details();
  // }
 
  searchinput(value){
    console.log(value);
    this._router.navigateByUrl('/search/'+value);
  }

}
