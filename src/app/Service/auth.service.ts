import { Injectable, inject } from "@angular/core";
import { UserService } from "./User.Service";

@Injectable({
    providedIn:"root"
})
export class AuthService{
    isLogin:boolean
    userService:UserService  = inject(UserService)

    

    // login(username:string, password:string){
    //     let user = this.userService.users.find((u)=>u.username === username && u.password === password)
    //     if(user === undefined){
    //         this.isLogin = false;

    //     }else{
    //         this.isLogin = true;
           
    //     }
    //     return user;
    // }
    
//     logout(){
//         this.isLogin = false;
//     }

//     isAuthenticated(){
//         return this.isLogin;
//     }
}