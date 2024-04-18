import { Component, inject } from '@angular/core';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resume Generator';
  authService:AuthService = inject(AuthService)
  ngOnInit(){
    this.authService.autoLogin();
    
  }
}
