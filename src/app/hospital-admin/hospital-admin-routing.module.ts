import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerRequestsComponent } from './scheduler/scheduler-requests/scheduler-requests.component';

const routes: Routes = [
    {
      path: 'scheduler',
      component: SchedulerComponent, 
    }, 
    {
      path: 'scheduler/requests',
      component: SchedulerRequestsComponent, 
    }, 
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalAdminRoutingModule { }
