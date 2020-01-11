import { Filter } from './../models/filter.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) { }


  getFilters(): Observable<Filter[]> {
      return this.http.get('./assets/filters.json')
      .pipe(catchError(error => {
        console.log('Error occured while fetching filters. Error is ' + error);
        return [];
      }));
  }
}
