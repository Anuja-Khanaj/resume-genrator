import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormService } from '../Service/form.service';
import { Info } from '../Model/info';
import { MsgService } from '../Service/msg.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Msg } from '../Model/msg';
import { Subscription } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnDestroy {
  reactiveForm: FormGroup;
  snippet: Info[];
  username: string;
  allMsg: Msg[];
  msgSubscription: Subscription;
  email: string; // Declare email property
  authservice :AuthService = inject(AuthService)
  private userSubject :Subscription;
  isLoggedIn:boolean
  constructor(private msgService: MsgService, private formService: FormService) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      msg: new FormControl(null)
    });
    this.userSubject =  this.authservice.user.subscribe((user:User)=>{
      console.log(user);
      this.isLoggedIn = user?true:false;
    });
  
    this.username = localStorage.getItem('user');
    
 
    const userData = JSON.parse(this.username);
    this.email = userData.email;

    this.msgSubscription = this.msgService.getMsgs().subscribe((msgs: Msg[]) => {
      this.allMsg = msgs;
    });
  }
  
  ngOnDestroy() {

    if (this.msgSubscription) {
      this.msgSubscription.unsubscribe();
    }
  }

  onPostClicked() {
    
    this.msgService.postMsg(this.email, this.reactiveForm.value.msg);
    this.reactiveForm.reset();
  }
}
