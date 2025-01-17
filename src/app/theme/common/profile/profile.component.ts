import { Component, inject } from '@angular/core';
import { ChangeMobileNumberComponent } from './change-mobile-number/change-mobile-number.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-profile', 
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  readonly dialog = inject(MatDialog);

  changeMobileNumber(){
    const dialogRef = this.dialog.open(ChangeMobileNumberComponent, {
      panelClass: 'custom-alert-container', 
    }); 
  }
}
