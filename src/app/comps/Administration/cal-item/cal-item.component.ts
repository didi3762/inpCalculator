import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../cal-page/cal-page.component' 

@Component({
  selector: 'cal-item',
  templateUrl: './cal-item.component.html',
  styleUrls: ['./cal-item.component.css']
})
export class CalItemComponent implements OnInit {

  @Input() client:Client

  @Output() clickNote = new EventEmitter<null>()
  @Output() dbclickNote = new EventEmitter<null>()
  @Output() deleteNote = new EventEmitter<number>()
  @Output() rendomColor = new EventEmitter<string>()

  clickNoteFn(){
    console.log('clicked'+ this.client.name);
    this.clickNote.emit()
    
  }

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.rendomColor.emit(this.client.color)
    },1000*this.client.id)
  }

  deleteNoteFN(){
    this.deleteNote.emit(this.client.id)
  }

 

}
