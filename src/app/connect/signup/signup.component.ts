import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/Model/AuthResponse';
import { Signup } from 'src/app/Model/Signup';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Service/auth.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reactiveForm: FormGroup;
  authService: AuthService = inject(AuthService);
  authObs: Observable<AuthResponse>;
  router: Router = inject(Router);
  loginService: LoginService = inject(LoginService);

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/)
      ]),
      confirmPass: new FormControl('', Validators.required),
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password').value;
    const confirmPass = group.get('confirmPass').value;
    return password === confirmPass ? null : { passwordsMismatch: true };
  }

  onSubmit(data: Signup) {
    if (this.reactiveForm.valid) {
      console.log('SignUp Clicked');
      const email = this.reactiveForm.value.email; // Extracting email and password from the form
      const password = this.reactiveForm.value.password;
      this.authObs = this.authService.signup(email, password); // Calling authService to sign up with provided email and password
      this.authObs.subscribe({
        next: (res) => { // Handling successful response
          console.log("submitted");
          this.router.navigate(["/Info"]); // Navigating to forms page after successful signup
        },
        error: (errMsg) => { // Handling error response
          console.log(errMsg); // Logging the error message
        }
      });
      this.reactiveForm.reset(); // Resetting the form after submission
    } else if (this.reactiveForm.errors && this.reactiveForm.errors['passwordsMismatch']) {
      alert('Passwords do not match. Please try again.');
    } else {
      alert('Form is not valid. Please check the entered data.');
    }
  }

  OnSubmitClicked(data: User[]) { }
}
