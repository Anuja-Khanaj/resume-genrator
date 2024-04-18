import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Info } from '../Model/info';
import {FormService} from '../Service/form.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  title = 'Form';
  formsdata:Form ;
  formservice:FormService = inject(FormService);
  reactiveForms : FormGroup 
  newexpgroup:FormGroup
  http:HttpClient = inject(HttpClient);


  ngOnInit(){
    this.reactiveForms  = new FormGroup({
      fname : new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.email]),
      location: new FormControl(null),
      linAcc :new FormControl(null, Validators.required),
      gitAcc: new FormControl(null,Validators.required),
      profile: new FormControl(null, [Validators.maxLength(5000), Validators.required]),
      job : new FormControl(null),
      mob : new  FormControl(null, Validators.maxLength(10)),
      skills: new FormArray([
        new FormControl(null),
    ]),
      exp: new FormArray([
      ])
    })
     
    this.reactiveForms.markAllAsTouched
  }
 
  @Input()
  displayDBtn :boolean
  
  //  to get control from the form
  get controll(){
    return this.reactiveForms.controls;
  }

  OnFormSubmited(data:Info){
    this.formsdata = this.reactiveForms.value;
    console.log(this.formsdata)
    this.formservice.formSubmit(this.reactiveForms.value);
    const formData = JSON.stringify(this.reactiveForms.value);
    localStorage.setItem('formData', formData);
    this.reactiveForms.reset() 
  }

  OnDeleteSkill(id){
    (<FormArray>this.reactiveForms.get('skills')).removeAt(id)
    console.log('clicked')
  }

  OnAddSkill(){
    (<FormArray>this.reactiveForms.get('skills')).push(new FormControl(null))
    console.log('clicked')
  }
  OnAddExp(){
    const newexpgroup  =  new FormGroup(
     { compName: new FormControl(null),
      compTitle : new FormControl(null),
      certificate : new FormControl(null)
    });
    (<FormArray>this.reactiveForms.get('exp')).push(newexpgroup)
  }
  OnDeleteExp(id){
    (<FormArray>this.reactiveForms.get('exp')).removeAt(id)
  }
 
}

