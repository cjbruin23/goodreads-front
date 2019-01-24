import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth_service';
import { DataService } from 'src/app/services/data.service';

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
  isLoggedIn = 'false';

  onSubmit() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticate(user).subscribe((data) => {
      if(data['isLoggedIn'] === true) {
        localStorage.setItem("userIsLoggedIn", "true");
        this.dataService.setIsLoggedIn('true')
        this.isLoggedIn = 'true';
      }
    });
  }

  ngOnInit() {
    this.dataService.loggedInStatus.subscribe(status => this.isLoggedIn = status)
  }

}
