import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ListenComponent } from './components/listen/listen.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { SpeechService } from './services/speech.service';
import { LocalStorageService } from './services/local-storage.service';
import { MessageService } from './services/message.service';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    ListenComponent,
    FooterComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    RoleGuard,
    SpeechService,
    LocalStorageService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
