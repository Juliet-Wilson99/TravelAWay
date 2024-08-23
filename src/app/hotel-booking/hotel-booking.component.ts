import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-hotel-booking',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule ],
  templateUrl: './hotel-booking.component.html',
  styleUrl: './hotel-booking.component.css'
})
export class HotelBookingComponent implements OnInit {
  hotelName: string = '';
  price: number = 0;
  totalPrice: number = 0;

  startDate = new FormControl();
  endDate = new FormControl();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.hotelName = this.route.snapshot.paramMap.get('hotelName')!;
    this.price = +this.route.snapshot.paramMap.get('price')!;

    this.startDate.valueChanges.subscribe(() => this.calculateTotalPrice());
    this.endDate.valueChanges.subscribe(() => this.calculateTotalPrice());
  }

  calculateTotalPrice() {
    if (this.startDate.value && this.endDate.value) {
      const days = differenceInDays(this.endDate.value, this.startDate.value);
      this.totalPrice = days > 0 ? days * this.price : 0;
    } else {
      this.totalPrice = 0;
    }
  }
}