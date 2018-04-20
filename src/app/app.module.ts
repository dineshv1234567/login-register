import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginRegisterFrontpageComponent } from './login-register-frontpage/login-register-frontpage.component';
import { VendorRegistrationDetailsComponent } from './vendor-registration-details/vendor-registration-details.component';
import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterFrontpageComponent,
    VendorRegistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
  LoginService,
  RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
