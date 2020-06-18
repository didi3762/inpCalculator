import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cal-page',
  templateUrl: './cal-page.component.html',
  styleUrls: ['./cal-page.component.css']
})
export class CalPageComponent implements OnInit {

  selected:Client
  bgRND:string

  constructor() { }

  ngOnInit(): void {
  }

  deleteClient(_clientid){
    let index = this.clientsArr.findIndex(client => client.id == _clientid)
    this.clientsArr.splice(index, 1)
  }

  clientsArr:Client[] = [
    { id:1, name:'yosi', sum: 5550.8, color:'blue',isPositive:true},
    { id:2, name:'dudi', sum: 1200, color:'red',isPositive:true},
    { id:3, name:'moshe', sum: 821.7, color:'brown',isPositive:false},
    { id:4, name:'nani', sum: 4379.1, color:'violet',isPositive:true},
    { id:5, name:'yoni', sum: 2091.3, color:'black',isPositive:false},
    { id:6, name:'igal', sum: 3986.5, color:'orangered',isPositive:true},
    { id:7, name:'shuki', sum: 550.8, color:'gold',isPositive:true},
    { id:8, name:'avi', sum: 1297.3, color:'tomato',isPositive:true},
    { id:9, name:'inon', sum: 4401.2, color:'drakviolet',isPositive:false},
    { id:10, name:'levy', sum: 1145.6, color:'indigo',isPositive:false},
    { id:11, name:'efrat', sum: 9872, color:'green',isPositive:true},
    { id:12, name:'esti', sum: 550.8, color:'yelow',isPositive:true}
  ]

}

export class Client{
  id:number
  name:string
  sum:number
  color:string
  isPositive:boolean

}
