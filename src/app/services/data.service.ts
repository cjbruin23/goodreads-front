import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from 'interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoggedIn = new BehaviorSubject(false)
  loggedInStatus = this.isLoggedIn.asObservable();

  private usernameInit = new BehaviorSubject('');
  username = this.usernameInit.asObservable();

  constructor(private http: HttpClient) { }

  setIsLoggedIn(status: boolean) {
    this.isLoggedIn.next(status)
  }

  setUsername(username: string) {
    this.usernameInit.next(username);
  }

  newBookSubmit(book: Book): Observable<{}> {
    const url = 'http://localhost:3000/books/add_book';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post<Book>(url, book, httpOptions)
  }
}
