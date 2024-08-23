import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
// import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})

export class HotelsComponent implements OnInit {
  countryName: string | null = '';
  hotels: any[] = [];
  touristSpots: any ={};
  countrySpots: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('country');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.touristSpots = {
      "Thailand" : ['Bangkok', 'Phuket', 'Chiang Mai'],
      "Indonesia" : ['Bali', 'Jakarta', 'Yogyakarta'],
      "Switzerland" : ['Zurich', 'Geneva', 'Lucerne'],
      "India": ['Taj Mahal', 'Jaipur', 'Kerala'],
      "Malaysia": ['Kuala Lumpur', 'Penang', 'Langkawi']
    }

    switch (this.countryName) {
      case 'Thailand':
        this.countrySpots = this.touristSpots.Thailand;
        break;
      case 'Indonesia':
        this.countrySpots = this.touristSpots.Indonesia;
        break;
      case 'Switzerland':
        this.countrySpots = this.touristSpots.Switzerland;
        break;
      case 'India':
        this.countrySpots = this.touristSpots.India;
        break;
      case 'Malaysia':
        this.countrySpots = this.touristSpots.Malaysia;
    }

    this.hotels = [
      {
        spot: this.countrySpots[0],
        hotelName: 'Hotel Sunrise',
        starRating: 5,
        reviewRating: this.getRandomStarRating(),
        facilities: 'Free Wi-Fi, Swimming pool, Breakfast included',
        priceUSD: 100,
        image: 'assets/hotel1.jpg'
      },
      {
        spot: this.countrySpots[1],
        hotelName: 'Mountain View Hotel',
        starRating: 4,
        reviewRating: this.getRandomStarRating(),
        facilities: 'Free Wi-Fi, Gym, Spa',
        priceUSD: 150,
        image: 'assets/hotel3.jpg'
      },
      {
        spot: this.countrySpots[2],
        hotelName: 'Sea Breeze Resort',
        starRating: 3,
        reviewRating: this.getRandomStarRating(),
        facilities: 'Beachfront, All-inclusive, Pool Bar',
        priceUSD: 200,
        image: 'assets/hotel2.jpg'
      }
    ];
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push('&#9733;'); // Filled star
      } else {
        stars.push('&#9734;'); // Empty star
      }
    }
    return stars;
  }  

  getRandomStarRating(): number {
    return Math.floor(Math.random() * 5) + 1; // Returns a random star rating between 1 and 5
  }

  convertToINR(usd: number): number {
    const exchangeRate = 83; // Example exchange rate, you can update it as needed
    return usd * exchangeRate;
  }
}
