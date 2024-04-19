import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../Model/userinfo';
import { UserInfoService } from '../Service/user-info.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  reactiveForms: FormGroup;
  data: UserInfo;
  router:Router = inject(Router);
  constructor(private userService: UserInfoService) {} // Injecting UserInfoService

  ngOnInit() {
    this.reactiveForms = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNo: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('', Validators.required),
      student: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      media: new FormControl('', Validators.required),
      pervResume: new FormControl('', Validators.required)
    });
  }

  onSubmit(data) {
    this.userService.submitdata(data);
    this.router.navigate['/Forms']
    this.reactiveForms.reset();
  }
}
