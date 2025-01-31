// angular import
import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoaderComponent } from 'src/app/theme/common/loader/loader.component';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})
export default class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onOtpChange(otp: string) { console.log('OTP changed:', otp); }
  readonly dialog = inject(MatDialog);
  
  loader(){  
      const dialogRef = this.dialog.open(LoaderComponent, {
        panelClass: 'cust--loader', 
        disableClose: true,
      } 
    )
    setTimeout(() => {
      dialogRef.close();
    }, 3000); 
  } 
}
