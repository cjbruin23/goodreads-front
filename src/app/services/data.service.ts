import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoggedIn = new BehaviorSubject('false')
  loggedInStatus = this.isLoggedIn.asObservable();

  constructor() { }

  setIsLoggedIn(status: string) {
    this.isLoggedIn.next(status)
  }
}
