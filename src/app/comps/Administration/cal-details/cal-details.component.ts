import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../cal-page/cal-page.component';

@Component({
  selector: 'cal-details',
  templateUrl: './cal-details.component.html',
  styleUrls: ['./cal-details.component.css']
})
export class CalDetailsComponent implements OnInit {

  @Input() client:Client

  constructor() { }

  ngOnInit(): void {
  }

}
