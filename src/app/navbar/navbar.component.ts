import { Component, inject } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
authservice :AuthService = inject(AuthService)

isLogoutDisplay:boolean

// ngOnInit(){
//   this.isLogoutDisplay = this.authservice.isAuthenticated()
// }

}
