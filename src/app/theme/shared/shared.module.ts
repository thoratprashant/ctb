// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import 
import { SpinnerComponent } from './components/spinner/spinner.component'; 

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IconModule } from '@ant-design/icons-angular';
 
import { MaterialModule } from './material.module';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedRoutingModule,
    ReactiveFormsModule,  
    NgScrollbarModule, 
    IconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    SpinnerComponent,  
  ],
  declarations: [SpinnerComponent]
})
export class SharedModule {}
