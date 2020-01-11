import { Component, OnInit, Input } from '@angular/core';
import { Shows } from 'src/app/models/shows.model';

@Component({
  selector: 's-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: Shows;
  constructor() { }

  ngOnInit() {
  }

}
