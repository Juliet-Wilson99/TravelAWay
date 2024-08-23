import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-selection',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css']
})
export class CountrySelectionComponent {
  countries = ['Thailand', 'Indonesia', 'Switzerland', 'India', 'Malaysia'];
  selectedCountry = this.countries[0];

  constructor(private router: Router) {}

  exploreHotels() {
    this.router.navigate(['/hotels'], { queryParams: { country: this.selectedCountry } });
  }
}
