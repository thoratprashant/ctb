import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
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

  headerText ='Confirmation'
  warningNote = 'Are you sure ?' 
  pinkBtnText = 'Yes'
  blueBtnText = 'No'

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.headerText = data.headerText != undefined ? data.headerText : this.headerText;     
    this.warningNote = data.warningNote != undefined ? data.warningNote : this.warningNote;   
    this.pinkBtnText = data.pinkBtnText != undefined ? data.pinkBtnText : this.pinkBtnText;   
    this.blueBtnText = data.blueBtnText != undefined ? data.blueBtnText : this.blueBtnText; 
  }

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
