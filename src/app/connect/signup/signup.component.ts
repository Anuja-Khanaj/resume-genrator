import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/Model/AuthResponse';
import {  Signup } from 'src/app/Model/Signup';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Service/auth.service';
import { FormService } from 'src/app/Service/form.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  reactiveForm: FormGroup;
  authService:AuthService = inject(AuthService);
  authObs:Observable<AuthResponse>
  router:Router = inject(Router);
  loginService : LoginService = inject(LoginService)
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      // name:new FormControl('',Validators.required),
      username:new FormControl('',[Validators.email,Validators.required]),
      pass:new FormControl('',Validators.required),
      // confirmPass:new FormControl('',Validators.required),
      // student: new FormControl('',Validators.required),
      // country:new FormControl('',Validators.required),
      // media: new FormControl('',Validators.required),
      // pervResume:new FormControl('',Validators.required)
    })
  }

  OnSignSubmit(data:Signup){
    console.log('SignUp Clicked')
      const { username, password } = this.reactiveForm.value;
        this.authObs =  this.authService.signup(username,password);
        this.authObs.subscribe({
          next:(res)=>{
            console.log("submitted");
            this.router.navigate(["../forms"]);
          },error:(errMsg)=>{
            console.log(errMsg);
          }
        })
        this.reactiveForm.reset();
    }
  

  OnSubmitCliked(data:User[]){
     
  }

}
