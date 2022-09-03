import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username: string = '';
  clickme() {
    console.log('it does nothing',this.username);
  }

   dis(val:any) {
    this.username += val
}

num:any
operator:any
y:any
x:any
 oper(op: any) {
   this.num = this.username 
    this.operator = op
    this.username =''
}

 equalto(op: any) {
    this.x = this.username 
    this.num  = this.username 
    this.operator = op.username 
    if (this.operator == '+') {
       this.y = this.num + this.x 
    } else if (this.operator == '-') {
      this.y  = this.num - this.x 
    } else if (this.operator == '*') {
      this.y  = this.num * this.x 
    } else if (this.operator == '/') {
      this.y  = this.num / this.x 
    }
    this.username = this.y 
}
}
