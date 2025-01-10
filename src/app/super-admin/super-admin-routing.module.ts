import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';

const routes: Routes = [
    {
      path: 'manage-hospitals',
      component: ManageHospitalsComponent, 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
