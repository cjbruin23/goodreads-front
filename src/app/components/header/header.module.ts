import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }