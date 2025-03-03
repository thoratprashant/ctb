import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; 
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent, 
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent, 
  }, 
  {
    path: 'sign-up',
    component: SignUpComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
