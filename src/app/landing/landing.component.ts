import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { RedirectionCardsComponent } from '../redirection-cards/redirection-cards.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, RedirectionCardsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}
  
  ngOnInit() {
    // Subscribe to the isLoggedIn observable
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
}
