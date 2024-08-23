import { Component, OnInit, inject, ElementRef, ViewChild, OnDestroy  } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Country {
  name: string;
  description: string;
  touristSpots: string[];
  weather: string;
  bestPlaceInfo: string;
  imageUrl: string;
}

@Component({
  standalone: true,
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class DestinationsComponent implements OnInit, OnDestroy {
  http = inject(HttpClient);

  countries: any[] = [];
  cities: string[] = ['Thailand', 'Indonesia', 'Switzerland', 'India', 'Malaysia'];
  images: string[] = [
    '/assets/thailand.jpg',
    '/assets/indonesia.jpg',
    '/assets/switzerland.jpg',
    '/assets/India.jpg',
    '/assets/malasiya.jpg',
  ];
  activeImageIndex = 0;
  selectedCountry = '';
  topCountries: Country[] = [
    { 
      name: 'Thailand', 
      description: 'A beautiful country in Southeast Asia known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha.', 
      touristSpots: ['Bangkok', 'Phuket', 'Chiang Mai'],
      weather: 'Tropical', 
      bestPlaceInfo: 'Thailand is famous for its beautiful beaches, delicious food, and vibrant culture.',
      imageUrl: 'assets/thailandLarge.jpg'
    },
    {
      name: 'Indonesia', 
      description: 'Indonesia, a Southeast Asian country, is made up of thousands of volcanic islands, and is home to hundreds of ethnic groups speaking many different languages.', 
      touristSpots: ['Bali', 'Jakarta', 'Yogyakarta'],
      weather: 'Tropical', 
      bestPlaceInfo: 'Indonesia is renowned for its diverse culture, rich traditions, and natural beauty.',
      imageUrl: 'assets/baliLarge.jpg'
    },
    {
      name: 'Switzerland', 
      description: 'Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps.', 
      touristSpots: ['Zurich', 'Geneva', 'Lucerne'],
      weather: 'Temperate', 
      bestPlaceInfo: 'Switzerland is known for its ski resorts and hiking trails, as well as its history of neutrality.',
      imageUrl: 'assets/switzerlandLarge.jpg'
    },
    {
      name: 'India', 
      description: 'India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia.', 
      touristSpots: ['Taj Mahal', 'Jaipur', 'Kerala'],
      weather: 'Varied (Tropical in the south to temperate in the north)', 
      bestPlaceInfo: 'India is famous for its diverse culture, history, and beautiful landscapes.',
      imageUrl: 'assets/indiaLarge.jpg'
    },
    {
      name: 'Malaysia', 
      description: 'Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It\'s known for its beaches, rainforests, and mix of Malay, Chinese, Indian, and European cultural influences.', 
      touristSpots: ['Kuala Lumpur', 'Penang', 'Langkawi'],
      weather: 'Tropical', 
      bestPlaceInfo: 'Malaysia offers a mix of modernity and tradition, with vibrant cities and beautiful natural landscapes.',
      imageUrl: 'assets/malasiyaLarge.jpg'
    }
  ];
  subscription: any;
  interval: any;

  ngOnInit() {
    this.fetchCountries();
    this.startImageRotation();
  }

  fetchCountries() {
    this.subscription= this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe(
      (data) => {
        this.countries = data.map((country) => ({
          name: country.name.common,
        }));
      },
      (error) => {
        console.error('Error in http call', error);
      }
    );
  }

  onSearch(event: Event) {
    this.selectedTopCountry = null;
    const inputElement = event.target as HTMLInputElement;
    this.selectedCountry = inputElement.value;
    for (let i = 0; i < 5; i++) {
      if(this.selectedCountry == this.topCountries[i].name){
        this.selectedTopCountry = this.topCountries[i];
      }
    }
    setTimeout(() => {
      this.countryDetailSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);

  }

  startImageRotation() {
    this.interval = setInterval(() => {
      this.activeImageIndex =
        (this.activeImageIndex + 1) % this.images.length;
    }, 5000);
  }


  selectedTopCountry: Country | null = null;

  @ViewChild('countryDetailSection') countryDetailSection!: ElementRef;

  selectCountry(country: Country) {
    this.selectedTopCountry = country;
    setTimeout(() => {
      this.countryDetailSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      clearInterval(this.interval);
      this.subscription.unsubscribe();
    }
  }
}
