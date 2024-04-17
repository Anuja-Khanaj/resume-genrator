import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './connect/login/login.component';
import { SignupComponent } from './connect/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './forms/resume/resume.component';
import { ConnectComponent } from './connect/connect.component';
import { ForumComponent } from './forum/forum.component';
import { canActivate } from './RouteGurad/authGuard';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Connect', component:ConnectComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Forms',component:FormsComponent ,canActivate: [canActivate]},
   {path:'Resume',component: ResumeComponent ,canActivate: [canActivate]},
   {path:'Forum',component: ForumComponent},
   {path:'Info',component: InfoComponent,canActivate: [canActivate]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
