import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  userName: String = "";
  showLoginButton: boolean = true;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the isLoggedIn observable

    this.router.events.subscribe(() => {
      // Check if the current URL is '/login'
      this.showLoginButton = this.router.url !== '/login';
    });
    
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
    
    this.authService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }
  
  navigateToLogin() {
    this.router.navigate(['/login']); // Programmatic navigation
  }

  navigateToDestinations(){
    this.router.navigate(['/destinations']);
  }

  logout() {
    // Logic to handle user logout
    this.authService.setLoggedIn(false);
    // You can also clear user data and redirect to the login page
  }
  
  
}
