import { Component, inject } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../Model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
authservice :AuthService = inject(AuthService)
private userSubject :Subscription;
isLoggedIn:boolean

ngOnInit(){
this.userSubject =  this.authservice.user.subscribe((user:User)=>{
  console.log(user);
  this.isLoggedIn = user?true:false;
});
}

onLogout(){
  this.authservice.logout();
  localStorage.clear();
}

ngOnDestroy(){
  this.userSubject.unsubscribe();
}
}
