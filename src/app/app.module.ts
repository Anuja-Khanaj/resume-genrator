import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './connect/login/login.component';
import { SignupComponent } from './connect/signup/signup.component';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ResumeComponent } from './forms/resume/resume.component';
import { ConnectComponent } from './connect/connect.component';
import { FormService } from "./Service/form.service";
import { HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './forum/forum.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ResumeComponent,
    ConnectComponent,
    ForumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
