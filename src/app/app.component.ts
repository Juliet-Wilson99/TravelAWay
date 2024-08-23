import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { RedirectionCardsComponent } from './redirection-cards/redirection-cards.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent,
    LandingComponent,
    RedirectionCardsComponent,
    CommonModule,
    HttpClientModule,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TravelAWay-Webpage';
  showAdditionalComponents: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (this.router.url !== '/home') {
        this.showAdditionalComponents = false;
      } else {
        this.showAdditionalComponents = true;
      }
    });
  }
}
