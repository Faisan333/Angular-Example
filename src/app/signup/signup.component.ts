
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
studentData:any
  constructor(private stuentService:StudentService) { }

  ngOnInit(): void {
    this.stuentService.loadStudent().subscribe((res)=>{
    this.studentData=res  
      console.log(this.studentData)
    })
  }
  stData(data:NgForm){
    this.stuentService.postData(data.value).subscribe((res)=>{
      console.log(res)
    })
}
}
