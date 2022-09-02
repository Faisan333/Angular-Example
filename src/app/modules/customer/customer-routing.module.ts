import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path:'', component:CustomerComponent,
    children:[
      {path:'buyer',component:BuyerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
