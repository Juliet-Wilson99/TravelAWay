import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorflag: boolean = false;


  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.email === 'travelaway@test.com' && this.password === 'Test') {
      this.authService.setLoggedIn(true);
      this.authService.setUserName("Juliet");
      this.router.navigate(['/home']); 
    } else {
      this.errorflag = true;
      this.authService.setLoggedIn(false);
    }
  }
}
