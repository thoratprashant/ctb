import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module'; 
import LoginComponent from './login/login.component';  
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../theme/shared/shared.module';
import { MaterialModule } from '../theme/shared/material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AuthRoutingModule,
    SharedModule, 
    FormsModule, 
  
  ]
})
export class AuthModule { }
