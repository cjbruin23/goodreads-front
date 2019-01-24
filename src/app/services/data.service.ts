import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoggedIn = new BehaviorSubject(false)
  loggedInStatus = this.isLoggedIn.asObservable();

  private usernameInit = new BehaviorSubject('');
  username = this.usernameInit.asObservable();

  baseUrl: string = 'http://localhost:3000/';
    
  constructor(private http: HttpClient) { }

  getBooks() : Observable<{}> {
      return this.http.get(this.baseUrl + 'books/all_books')
  }

  setIsLoggedIn(status: boolean) {
    this.isLoggedIn.next(status)
  }

  setUsername(username: string) {
    this.usernameInit.next(username);
  }
}
