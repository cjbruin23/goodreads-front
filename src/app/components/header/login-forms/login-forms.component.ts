import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})
export class LoginFormsComponent implements OnInit {

  username = '';
  password = '';

  onSubmit() {
    
  }
  constructor() { }

  ngOnInit() {
  }

}
