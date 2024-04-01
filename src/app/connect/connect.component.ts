import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
      onLoginSelect:boolean = true
      onSignUpSelect:boolean = false
      backgroundColorClass = 'blue';

      tab:string = 'login'
      OnClickLogin(){
        this.tab = 'login'
        this.onLoginSelect = true;
        this.onSignUpSelect = false
      }
      OnClickSignup(){
        this.tab = 'signup'
        this.onLoginSelect = false;
        this.onSignUpSelect = true
      }
}
