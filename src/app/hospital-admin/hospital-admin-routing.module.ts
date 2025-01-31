import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerRequestsComponent } from './scheduler/scheduler-requests/scheduler-requests.component';
import { ConnectToEhrComponent } from './ehr/connect-to-ehr/connect-to-ehr.component';

const routes: Routes = [
    {
      path: 'scheduler',
      component: SchedulerComponent, 
    }, 
    {
      path: 'scheduler/requests',
      component: SchedulerRequestsComponent, 
    }, 
    {
      path: 'connect-to-ehr',
      component: ConnectToEhrComponent, 
    }, 
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalAdminRoutingModule { }
