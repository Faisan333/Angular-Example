import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
@Input() data:any
@Input() parentInc:any;
@Output() childData = new EventEmitter()
@Output() inData = new EventEmitter()
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }
 sendData(){
  this.childData.emit('Data from child')
 }
 chiData = 0

 incrementchildData(){
    
  this.inData.emit(this.chiData++)
  
  }
}
