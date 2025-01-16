import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms'; 
import { ProfileRoutingModule } from './profile-routing.module'; 
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    ProfileComponent, 
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,  
    ɵInternalFormsSharedModule, 
    FormsModule
  ]
})
export class ProfileModule { }
