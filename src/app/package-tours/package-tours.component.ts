import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-package-tours',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterModule],
  templateUrl: './package-tours.component.html',
  styleUrl: './package-tours.component.css'
})
export class PackageToursComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.renderer.setProperty(document.body, 'scrollTop', 0);
        this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
      }
    });
  }

  
  tours = [
    {
      country: 'Thailand',
      image: 'assets/thailand.jpg',
      startDate: new Date('2024-09-15'),
      duration: 7,
      nights: 6,
      locations: ['Bangkok', 'Phuket', 'Chiang Mai'],
      price: 1200
    },
    {
      country: 'Indonesia',
      image: 'assets/indonesia.jpg',
      startDate: new Date('2024-10-01'),
      duration: 10,
      nights: 9,
      locations: ['Bali', 'Jakarta', 'Yogyakarta'],
      price: 1500
    },
    {
      country: 'Switzerland',
      image: 'assets/switzerland.jpg',
      startDate: new Date('2024-12-20'),
      duration: 8,
      nights: 7,
      locations: ['Zurich', 'Geneva', 'Lucerne'],
      price: 2500
    },
    {
      country: 'India',
      image: 'assets/India.jpg',
      startDate: new Date('2024-11-10'),
      duration: 14,
      nights: 13,
      locations: ['Delhi', 'Agra', 'Jaipur', 'Goa'],
      price: 1000
    },
    {
      country: 'Malaysia',
      image: 'assets/malasiya.jpg',
      startDate: new Date('2024-08-25'),
      duration: 9,
      nights: 8,
      locations: ['Kuala Lumpur', 'Penang', 'Langkawi'],
      price: 1300
    }
  ];

  bookTour(tour: any) {
    alert(`Booking tour to ${tour.country} for $${tour.price}`);
  }
}