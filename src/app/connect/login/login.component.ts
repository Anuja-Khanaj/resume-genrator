import { Component, ElementRef, Output, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/Model/AuthResponse';
import { Signup } from 'src/app/Model/Signup';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Service/auth.service';
import { FormService } from 'src/app/Service/form.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveforms : FormGroup;
  authObs: Observable<AuthResponse>;
  authService :AuthService = inject(AuthService);
  router:Router = inject(Router);

  ngOnInit(){
    this.reactiveforms = new FormGroup({
      username : new FormControl(null,Validators.required),
      password:new FormControl(null, Validators.required)
    })
  }

  OnformSubmitted(){
    const { username, password } = this.reactiveforms.value;
      this.authObs =  this.authService.login(username,password);
      this.authObs.subscribe({
        next:(res)=>{
          console.log("submitted");
          this.router.navigate(["../forms"]);
        },error:(errMsg)=>{
          console.log(errMsg);
        }
      })
      this.reactiveforms.reset();
  }

  
}
