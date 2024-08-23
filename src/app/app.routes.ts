import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { provideRouter } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { PackageToursComponent } from './package-tours/package-tours.component';
import { CountrySelectionComponent } from './country-selection/country-selection.component';
import { NotAvailableComponent } from './not-available/not-available.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: LandingComponent },
    { path: 'countrySelection', component: CountrySelectionComponent},
    { path: 'destinations', component: DestinationsComponent},
    { path: 'hotels/:country', component: HotelsComponent },
    { path: 'hotelBooking/:hotelName/:price', component: HotelBookingComponent },
    { path: 'packagetours', component: PackageToursComponent},
    { path: 'not-available', component: NotAvailableComponent},
    { path: '**', redirectTo: '/home' }
];

export const appRoutingProviders = [
    provideRouter(routes),
  ];