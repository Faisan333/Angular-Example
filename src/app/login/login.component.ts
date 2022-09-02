import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // name:string = 'faisan'
  // today = Date.now()
  // rupees = '25000'
  // amount = '200'
  // students =[
  //   "Tom","shane","jack","Rocky",
  // ]
  // digits =[
  //   "20","50","30","40",
  // ]
  user = 'admin'
  password ='123'
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.user == 'admin'  && this.password=='123'){
      localStorage.setItem('token','admin')
      this.router.navigate(['home'])
    }
    else{
      alert('Invalid')
    }
  }
}
