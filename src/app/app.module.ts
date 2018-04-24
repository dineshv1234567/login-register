import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginRegisterFrontpageComponent } from './login-register-frontpage/login-register-frontpage.component';
import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ForgotPasswordService } from './services/forgot-password.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterFrontpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
  LoginService,
  RegisterService,
  ForgotPasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
