import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userFirstName = new BehaviorSubject<String>("");

  isLoggedIn$ = this.loggedIn.asObservable();
  userName$ = this.userFirstName.asObservable();

  setLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }

  getLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  setUserName(name: string) {
    this.userFirstName.next(name);
  }

  getUserName(){
    return this.userFirstName.getValue();
  }
}
