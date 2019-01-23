import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth_service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UsersService
    ) { }

  username = '';
  password = '';

  onSubmit() {
    let user = {
      username: this.username,
      password: this.password
    }

    this.userService.create(user.username, user.password).subscribe((data) => {
      if (data === true) {
        this.authService.authenticate(user).subscribe((data) => {
          console.log(data);
        });
      }
    }); 
  }
  ngOnInit() {
  }

}
