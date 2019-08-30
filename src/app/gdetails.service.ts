import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetails } from './userDetails';


@Injectable({
  providedIn: 'root'
})
export class GdetailsService {
  private this_url : string = "https://api.themoviedb.org/3/movie/popular?api_key=%209c422b4e29d50246e01b7a70e927ef4e&language=en-US&page=1";
  constructor(private http:HttpClient) { }
  
  fetch_g_details():Observable<any> {

    return this.http.get<any>(this.this_url);
  
  }

}
