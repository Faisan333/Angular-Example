import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
cdata:any
  constructor() { }
  parentData = 0

   incrementData(){
    
    this.parentData++
  
  }

  ngOnInit(): void {
  }
user={username:'faisan',course:'python'}

sendData(value:any){
  console.log(value)
}
incrementchildData(values:any){
  console.log(values)
  this.cdata=values
}


}
