import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HeaderModule } from 'app/components/header/header.component';
import { MainModule } from 'app/components/main/main.module'


import { CoreModule } from 'app/services/core_module';
import { BookCreateComponent } from 'app/components/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    HeaderModule,
    FormsModule,
    NgbModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
