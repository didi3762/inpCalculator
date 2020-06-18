import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'label-span',
  templateUrl: './label-span.component.html',
  styleUrls: ['./label-span.component.css']
})
export class LabelSpanComponent implements OnInit {

  @Input() label:string=''
  @Input() val:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
