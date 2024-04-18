import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Msg } from '../Model/msg';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http: HttpClient) { }
  
  postMsg(username: string, msg: string) {
    const data = { username: username, msg: msg };
    return this.http.post<Msg>('https://angularhttp-ed902-default-rtdb.firebaseio.com/msg.json', data).subscribe();
  }

  getMsgs(){
    return this.http.get('https://angularhttp-ed902-default-rtdb.firebaseio.com/msg.json').pipe(map((response) => {
        let data =[]
        for (let key in response) {
            if (response.hasOwnProperty(key)) {
              data.push({ ...response[key], id: key });
            }
          }
          return data;
    }))}
}
