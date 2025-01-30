import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TermsAndPolicyModalComponent } from '../terms-and-policy-modal/terms-and-policy-modal.component';

@Component({
  selector: 'app-sign-up', 
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
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
  onOtpChange(otp: string) { }

  readonly dialog = inject(MatDialog);

  termsAndPrivacy() {
      const dialogRef = this.dialog.open(TermsAndPolicyModalComponent, { 
          autoFocus: false, 
        });
  }
}
