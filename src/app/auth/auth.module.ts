import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module'; 
import LoginComponent from './login/login.component';  
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../theme/shared/shared.module';
import { MaterialModule } from '../theme/shared/material.module';


@NgModule({
  declarations: [
    LoginComponent
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
