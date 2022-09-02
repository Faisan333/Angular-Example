import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { CourseComponent } from './course/course.component';
import { PlacementComponent } from './placement/placement.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { SortPipe } from './app.sort';
import { sortNumber } from './app.number';
import { LoginGuard } from './guards/login.guard';
import { LoginService } from './service/login.service';
import{HttpClientModule} from '@angular/common/http';
import { StudentService } from './service/student.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    CourseComponent,
    PlacementComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CoursedetailComponent,
    SortPipe,
    sortNumber
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
