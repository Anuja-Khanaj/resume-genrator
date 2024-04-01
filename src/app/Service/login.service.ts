import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Signup } from '../Model/Signup';
import { Observable, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor() { }
    httpClient :HttpClient = inject(HttpClient);

    formSubmit(data:Signup){
     this.httpClient.post<{ name: string }>('https://angularhttp-ed902-default-rtdb.firebaseio.com/signup.json',data).subscribe((response)=>{
         console.log(response);
         
     })
    }
 
    
   getData():Observable<Signup[]>{
   return this.httpClient.get<Signup[]>('https://angularhttp-ed902-default-rtdb.firebaseio.com/signup.json')
   }
}