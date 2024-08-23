import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redirection-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirection-cards.component.html',
  styleUrl: './redirection-cards.component.css'
})
export class RedirectionCardsComponent {
  cards = [
    {
      image: 'assets/PackageTours.jpg',
      title: 'LOW BUDGETS, BIG EXPERIENCES',
      description: 'Check out our pocket friendly plans and grab your chance to go on a trip to your favourite destinations.Our guides will be there for you every step of the way. Create custom made package plans for more than 10 people.',
      link: '/packagetours'
    },
    {
      image: 'assets/Hotels.jpg',
      title: 'A HOTEL IS THE FIRST IMPRESSSION OF THE DESTINATION',
      description: 'The beauty of a place is impacted by how comfortable you feel.\n Great views dont mean much if you are too troubled by your stay.\n Get the rest of you dreams by choosing the best place that suits you for you to stay.',
      link: '/countrySelection'
    },
    {
      image: 'assets/Destinations.jpg',
      title: 'NOT ALL THOSE WHO WANDER ARE LOST',
      description: '“It seems that the more places I see and experience, the bigger I realize the world to be. The more I become aware, the more I realize how little I know of it, how many places I have still to go, how much more there is to learn.” – Anthony Bourdain',
      link: '/destinations'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
