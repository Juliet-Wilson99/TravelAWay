import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // BehaviorSubject to hold the value of isLoggedIn
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userFirstName = new BehaviorSubject<String>("");

  // Observable to allow other components to subscribe to changes
  isLoggedIn$ = this.loggedIn.asObservable();
  userName$ = this.userFirstName.asObservable();

  // Method to update the login status
  setLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }

  // Method to get the current login status
  getLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  setUserName(name: string) {
    this.userFirstName.next(name);
    console.log(this.userFirstName);
  }

  getUserName(){
    return this.userFirstName.getValue();
  }
}
