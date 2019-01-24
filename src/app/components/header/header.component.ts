import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  wantsToSignIn = false;
  signUp = "Sign Up";
  signIn = "Sign In";

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.dataService.loggedInStatus.subscribe(status => this.isLoggedIn = status);
  }

  changeToSignIn() {
    this.wantsToSignIn = !this.wantsToSignIn;
  }

}
