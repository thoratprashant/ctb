import { Component, signal } from '@angular/core'; 

@Component({
  selector: 'app-change-mobile-number', 
  templateUrl: './change-mobile-number.component.html',
  styleUrl: './change-mobile-number.component.scss'
})
export class ChangeMobileNumberComponent {

  isDisabled = true;

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  } 
  onOtpChange(otp: string) {  }

  changeMobileNumber() {
    this.isDisabled = false;
  }
}
