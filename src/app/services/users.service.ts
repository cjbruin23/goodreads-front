import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  create(username: string, password: string): Observable<{}> {
    const user = {
      username,
      password
    }
    const httpPath = 'http://localhost:3000/users/create';
    return this.http.post(httpPath, user , this.httpOptions)
  }
}
