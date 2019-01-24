import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth_service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

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
