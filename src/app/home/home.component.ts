import { Shows } from './../models/shows.model';
import { AppServiceService } from './../services/app-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 's-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  shows: Shows[];
  appliedFilters: [];
  private unssubscribeSubject = new Subject();
  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.appService.getShows().pipe(takeUntil(this.unssubscribeSubject)).subscribe((data: Shows[]) => {
      this.shows = data;
    });
  }

  ngOnDestroy() {
    this.unssubscribeSubject.next();
    this.unssubscribeSubject.complete();
  }
}
