import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth_service';

@NgModule({
  imports: [ HttpClientModule ],
  providers: [ AuthService ]
})
export class CoreModule {}