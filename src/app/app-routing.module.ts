import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './connect/login/login.component';
import { SignupComponent } from './connect/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './forms/resume/resume.component';
import { ConnectComponent } from './connect/connect.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Connect', component:ConnectComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Forms',component:FormsComponent},
   {path:'Resume',component: ResumeComponent},
   {path:'Forum',component: ForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
