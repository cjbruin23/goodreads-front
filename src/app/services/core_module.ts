import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth_service';
import { UsersService } from './users.service';
import { DataService } from './data.service';

@NgModule({
  imports: [ HttpClientModule ],
  providers: [ AuthService, UsersService, DataService ]
})
export class CoreModule {}