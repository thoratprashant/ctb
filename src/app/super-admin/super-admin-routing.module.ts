import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';
import { AddHospitalComponent } from './manage-hospitals/add-hospital/add-hospital.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: 'manage-hospitals',
      component: ManageHospitalsComponent, 
    },
    {
      path: 'manage-hospitals/add-hospital',
      component: AddHospitalComponent, 
    },
    {
      path: 'dashboard',
      component: DashboardComponent, 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
