import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoggedIn = new BehaviorSubject(false)
  loggedInStatus = this.isLoggedIn.asObservable();

  private usernameInit = new BehaviorSubject('');
  username = this.usernameInit.asObservable();

  constructor() { }

  setIsLoggedIn(status: boolean) {
    this.isLoggedIn.next(status)
  }

  setUsername(username: string) {
    this.usernameInit.next(username);
  }
}
