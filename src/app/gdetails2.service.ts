import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetails } from './userDetails';


@Injectable({
  providedIn: 'root'
})
export class GdetailsService {
//  getfav(){
//      return this.http.get<any>('http://localhost/3000/posts');
//  }
//   private this_url : string = "https://api.themoviedb.org/3/movie/'+value+'?api_key=9c422b4e29d50246e01b7a70e927ef4e&language=en-US";
this_url:any; 
constructor(private http:HttpClient) { }
  value:any;
  fetch_g_details(value):Observable<any> {
    this.this_url = 'https://api.themoviedb.org/3/movie/'+value.substring(1,)+'?api_key=9c422b4e29d50246e01b7a70e927ef4e&language=en-US';
    console.log("Hey");
    return this.http.get<any>(this.this_url);
  
  }

}