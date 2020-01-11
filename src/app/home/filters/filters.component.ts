import { FiltersService } from './../../services/filters.service';
import { Filter } from './../../models/filter.model';
import { Component, OnInit} from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 's-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filters: Filter[];
  constructor(public filterService: FiltersService) { }

  ngOnInit() {
    console.log("hjghjgj");
    this.filterService.getFilters().subscribe((data: Filter[]) => {
      this.filters = data;
    });
  }

  filterSelected(title: string, filter: string): void {

  }

}
