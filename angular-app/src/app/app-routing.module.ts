import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsComponent } from './students/students.component';
import { InstructorsEditComponent } from './instructors-edit/instructors-edit.component';
import { InstructorsAddComponent } from './instructors-add/instructors-add.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesAddComponent } from './courses-add/courses-add.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorsDetailComponent } from './instructors-detail/instructors-detail.component';
import { StudentsAddComponent } from './students-add/students-add.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/add', component: CoursesAddComponent},
  {path: 'course/:id', component: CoursesDetailComponent},
  {path: 'course/:id/edit', component: CoursesEditComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'instructors/add', component: InstructorsAddComponent},
  {path: 'instructor/:id', component: InstructorsDetailComponent},
  {path: 'instructor/:id/edit', component: InstructorsEditComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/add', component: StudentsAddComponent},
  {path: 'student/:id', component: StudentsDetailComponent},
  {path: 'student/:id/edit', component: StudentsEditComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
