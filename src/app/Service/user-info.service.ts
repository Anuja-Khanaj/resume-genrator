import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInfo } from '../Model/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  http:HttpClient  = inject(HttpClient);
  constructor() { }
data:UserInfo;
 submitdata(data:UserInfo){
  return this.http.post<UserInfo>('https://angularhttp-ed902-default-rtdb.firebaseio.com/userInfo.json',data) .subscribe()
 }
}
