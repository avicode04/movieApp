import { Component, OnInit,Input } from '@angular/core';
import { IDetails} from '../userDetails';
import {ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { GdetailsService} from '../gdetails2.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() idetails:IDetails;
  constructor(
        private _gds:GdetailsService,
        private _activate:ActivatedRoute,
        private _location:Location,

    ) { }

  public movie;
  selected:any;
  ngOnInit() {
    // this.getdetails();
    this._activate.params.subscribe( params =>
      this.movie = params['id']);
      console.log(this.movie);
      this._gds.fetch_g_details(this.movie).subscribe(data=>this.movie=data);
  }

  // getdetails(){
  //   this.selected = +this._activate.snapshot.paramMap.get('id');
  //   this._gds.fetch_g_details('id').subscribe(data=>this.movie=data);

  //   this.selected  = +this.
  // }

}
