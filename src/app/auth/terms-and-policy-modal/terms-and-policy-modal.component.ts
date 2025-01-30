import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-terms-and-policy-modal',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './terms-and-policy-modal.component.html',
  styleUrl: './terms-and-policy-modal.component.scss'
})
export class TermsAndPolicyModalComponent {

}
