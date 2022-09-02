import { Component, OnDestroy ,OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-obserable',
  templateUrl: './obserable.component.html',
  styleUrls: ['./obserable.component.css']
})
export class ObserableComponent implements OnInit  {
sub: Subscription = new Subscription;
obs= new Observable((observer)=>{
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
})
  constructor() { }

  ngOnInit(): void {
  }

}
