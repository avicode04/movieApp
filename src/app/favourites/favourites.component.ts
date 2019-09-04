import { Component, OnInit } from '@angular/core';
import { GdetailsService } from '../gdetails.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(
    private gsd:GdetailsService
    ) { }
  movie;
  ngOnInit() {
    this.gsd.getfav().subscribe(data=>this.movie=data);
  }

  removefav(value){
    this.gsd.removeFav(value).subscribe();
  }

}
