import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormsComponent } from './components/header/login-forms/login-forms.component';
import { MainModule } from './components/main/main.module'

import { CoreModule } from './services/core_module';
import { SignupFormComponent } from './components/header/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormsComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
