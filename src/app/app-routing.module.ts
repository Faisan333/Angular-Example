import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './modules/customer/customer/customer.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  // {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'course',component:CourseComponent},
  {path:'home',component:HomeComponent,canActivate:[LoginGuard]},
  {path:'course/:c_id',component:CoursedetailComponent},
  {path :'customer', loadChildren:()=>import('../app/modules/customer/customer.module').then(m=>m.CustomerModule
)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
