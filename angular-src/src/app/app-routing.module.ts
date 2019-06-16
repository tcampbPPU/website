import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ListenComponent } from './components/listen/listen.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'education', component: EducationComponent, canActivate:[AuthGuard]},
  {path: 'experience', component: ExperienceComponent, canActivate:[AuthGuard]},
  {path: 'projects', component: ProjectsComponent, canActivate:[AuthGuard]},
  {path: 'listen', component: ListenComponent, canActivate:[AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate:[AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate:[RoleGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
