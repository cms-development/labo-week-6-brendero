import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesAddComponent } from './courses-add/courses-add.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { InstructorsDetailComponent } from './instructors-detail/instructors-detail.component';
import { InstructorsAddComponent } from './instructors-add/instructors-add.component';
import { InstructorsEditComponent } from './instructors-edit/instructors-edit.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsAddComponent } from './students-add/students-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './authservice/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesAddComponent,
    CoursesDetailComponent,
    CoursesEditComponent,
    InstructorsComponent,
    InstructorsDetailComponent,
    InstructorsAddComponent,
    InstructorsEditComponent,
    StudentsComponent,
    StudentsDetailComponent,
    StudentsEditComponent,
    StudentsAddComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
