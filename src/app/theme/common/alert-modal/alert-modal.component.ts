import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PositiveAlertComponent } from '../positive-alert/positive-alert.component';
import { NegativeAlertComponent } from '../negative-alert/negative-alert.component';

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss'
})
export class AlertModalComponent {
  readonly dialog = inject(MatDialog);
  positiveAlertModal(){
    const dialogRef = this.dialog.open(PositiveAlertComponent, {
      panelClass: 'custom-alert-container',
      data: {
        warningNote: 'Are you sure you want to delete'
      }
    });
  }
  negativeAlertModal(){
    const dialogRef = this.dialog.open(NegativeAlertComponent, {
      panelClass: 'custom-alert-container',
      data: {
        warningNote: 'Are you sure you want to delete'
      }
    });
  }
}
