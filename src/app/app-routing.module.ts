// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import  
import { AuthLayoutComponent } from './theme/layouts/auth-layout/auth-layout.component';
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';

const routes: Routes = [

  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  }, 
  {
    path: 'admin',
    component: AdminComponent, 
  }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
