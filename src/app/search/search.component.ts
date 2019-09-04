import { Component, OnInit } from '@angular/core';
import { GdetailsService } from '../gdetails.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gds: GdetailsService,
    private route: ActivatedRoute,
    private location: Location) { }
  id;

  public url;
  public movie=[];
  ngOnInit() {
    
    let tid = this.route.snapshot.paramMap.get('id');
    this.url= 'https://api.themoviedb.org/3/search/movie?api_key=9c422b4e29d50246e01b7a70e927ef4e&language=en-US&query='+tid+'&page=1&include_adult=false';
    this.gds.getsearch(this.url).subscribe(data=>this.movie=data.results);
    
    
    
    console.log("GOT");
    this.route.params.subscribe( params =>
      this.movie = params['id']);
    console.log(this.movie, "????");
    this.gds.fetch_g_details().subscribe(data => this.movie = data);
    console.log(this.movie, "????");
  }

}
