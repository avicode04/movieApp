import { Component, OnInit } from '@angular/core';
import { GdetailsService } from '../gdetails.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private gds:GdetailsService) { }
  Movies:[];
  ngOnInit() {
    this.gds.fetch_g_details().subscribe((data={}) =>
    {console.log(data); 
      this.Movies = data});
  }

}
