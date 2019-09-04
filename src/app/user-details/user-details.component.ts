import { Component, OnInit } from '@angular/core';
import { GdetailsService } from '../gdetails.service';
import { IDetails } from '../userDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  // public employees:IDetails[];
  // constructor(private _userdetails:GdetailsService) { }

  public Movies =[];

  constructor(private gdetails:GdetailsService,private _router:Router){}

  ngOnInit() {
    this.gdetails.fetch_g_details().subscribe((data={}) =>
    {console.log(data); 
      this.Movies = data});
  }

  searchinput(value){
    console.log(value);
    this._router.navigateByUrl('/search/'+value);
  }
  
  addfav(movie){
    this.gdetails.addtofav(movie).subscribe();
  }

}
