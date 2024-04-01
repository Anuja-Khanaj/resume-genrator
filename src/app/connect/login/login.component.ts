import { Component, ElementRef, Output, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  data: Signup[]
  
  @Output() isLogin: boolean

  router: Router = inject(Router)
  loginservice:LoginService = inject(LoginService)
  authService: AuthService = inject(AuthService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  // ngOnInit(){
  //   this.activeRoute.queryParamMap.subscribe((queries)=>{
  //     const logout = Boolean(queries.get('logout'));
  //     if(logout){
  //       this.authService.logout();
  //       // alert('You are now logged out. IsLogged = ' + this.authService.isLogin);
  //     }
  //   })

  // }
  // OnLoginClicked(){
  //   const username = this.username.nativeElement.value
  //   const password = this.password.nativeElement.value
  //   const user = this.authService.login(username,password)

  //  if(user === undefined){
  //   alert('The login credentials you have entered is not correct.')
  // }
  // else{
  //   alert('Welcome. You are logged in.');
  //   this.router.navigate(['\Resume']);
  // }
  // }

  ngOnInit() {
  
  }

//   OnLoginClicked(event) {
//     event.preventDefault();
//     const username = this.username.nativeElement.value
//     const password = this.password.nativeElement.value
//     this.loginservice.getData().subscribe({
//       next: (data) => {
//         this.data = data
//       }
//     })
    
//    if(this.data.includes(username)  && this.data.includes(password)  ){
//     alert("login successful")
//  }else{
//   console.log(this.data.includes(username));
//   alert('change the crentials')
// }

// }

OnLoginClicked(event) {
  const usernamefromfield = this.username.nativeElement.value
      const passwordfromfiled = this.password.nativeElement.value
  event.preventDefault();

  this.loginservice.getData().subscribe((card:Signup[]) => {
    if (!Array.isArray(card)) {
      console.error('Data is not an array');
      return; 
    }
    this.data = card;
    if(this.data.find(user => user.username === usernamefromfield)){
      alert('hi')
    }
    else{
      alert('miii')
    }
  })
}
}
