import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';
import { MaterialModule } from '../theme/shared/material.module';
import { SharedModule } from '../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageHospitalsComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MaterialModule,  
    SharedModule, 
    FormsModule
  ]
})
export class SuperAdminModule { }
