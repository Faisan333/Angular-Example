import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  courseId:any
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
      this.courseId=params['c_id']
      console.log(this.courseId)
    })

    // this.courseId = this.activatedRoute.snapshot.params['c_id']
  }

}
