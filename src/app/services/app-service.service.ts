import { catchError } from 'rxjs/operators';
import { Shows } from './../models/shows.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getShows(): Observable<Shows[]> {
    return this.http.get('./assets/shows.json')
    .pipe(catchError(error => {
      console.log('Error occured while fetching shows. Error is ' + error);
      return [];
    }));
  }
}
