import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  authPath = "http://localhost:3000/login";

  // Returns an observable
  authenticate(user: User): Observable<{}> {
    return this.http.post<User>(this.authPath, user, this.httpOptions);
  }
}