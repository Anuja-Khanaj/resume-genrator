import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Signup } from 'src/app/Model/Signup';
import { User } from 'src/app/Model/user';
import { FormService } from 'src/app/Service/form.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  reactiveForm: FormGroup
  loginService : LoginService = inject(LoginService)
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      name:new FormControl('',Validators.required),
      username:new FormControl('',[Validators.email,Validators.required]),
      pass:new FormControl('',Validators.required),
      confirmPass:new FormControl('',Validators.required),
      student: new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      media: new FormControl('',Validators.required),
      pervResume:new FormControl('',Validators.required)
    })
  }

  OnSignSubmit(data:Signup){
    console.log('SignUp Clicked')
    this.loginService.formSubmit(data)
    this.reactiveForm.reset()
  }

  OnSubmitCliked(data:User[]){
     
  }

}
