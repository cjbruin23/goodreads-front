import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { AuthService } from 'app/services/auth_service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private dataService: DataService
    ) { }

  username = '';
  password = '';
  isLoggedIn = false
  
  onSubmit() {
    let user = {
      username: this.username,
      password: this.password
    }

    this.userService.create(user.username, user.password).subscribe((data) => {
      if (data === true) {
        this.authService.authenticate(user).subscribe((data) => {
          this.dataService.setIsLoggedIn(true)
          this.dataService.setUsername(data['username'])
        });
      }
    }); 
  }
  ngOnInit() {
    this.dataService.loggedInStatus.subscribe(status => this.isLoggedIn = status)
    this.dataService.username.subscribe(username => this.username = username)
  }

}
