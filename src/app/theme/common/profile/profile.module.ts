import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms'; 
import { ProfileRoutingModule } from './profile-routing.module'; 
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../../shared/material.module';
import { ChangeMobileNumberComponent } from './change-mobile-number/change-mobile-number.component';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    ProfileComponent, 
    ChangeMobileNumberComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,  
    ɵInternalFormsSharedModule, 
    FormsModule,
    NgOtpInputModule
  ]
})
export class ProfileModule { }
