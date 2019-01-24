import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth_service';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})
export class LoginFormsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  username = '';
  password = '';
  isLoggedIn = false;

  signIn() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticate(user).subscribe((data) => {
      if(data) {
        localStorage.setItem("userIsLoggedIn", "true");
        this.isLoggedIn = true;
      }
    });
  }

  signOut() {
    this.authService.signOut();
    this.isLoggedIn = false;
  }

  ngOnInit() {
  }

}
