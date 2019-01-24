import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { LoginFormsComponent } from 'app/components/header/login-forms/login-forms.component';
import { MainModule } from 'app/components/main/main.module'


import { CoreModule } from 'app/services/core_module';
import { SignupFormComponent } from 'app/components/header/signup-form/signup-form.component';
import { BookCreateComponent } from 'app/components/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormsComponent,
    SignupFormComponent,
    BookCreateComponent,
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
