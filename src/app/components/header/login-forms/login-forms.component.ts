import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth_service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})
export class LoginFormsComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dataService: DataService
    ) { }

  username = '';
  password = '';
  isLoggedIn = false;

  signIn() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticate(user).subscribe((data) => {
      if(data['isLoggedIn'] === true) {
        this.dataService.setIsLoggedIn(true)
        this.dataService.setUsername(data['username'])
      }
    });
  }

  signOut() {
    this.dataService.setIsLoggedIn(false);
    this.dataService.setUsername('');
    this.password = '';
  }

  ngOnInit() {
    this.dataService.loggedInStatus.subscribe(status => this.isLoggedIn = status)
    this.dataService.username.subscribe(username => this.username = username)
  }

}
