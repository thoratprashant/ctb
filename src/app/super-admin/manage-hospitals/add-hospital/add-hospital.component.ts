import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-add-hospital', 
  templateUrl: './add-hospital.component.html',
  styleUrl: './add-hospital.component.scss'
})
export class AddHospitalComponent {
  readonly hname = new FormControl('', [Validators.required]);
  readonly adOne = new FormControl('', [Validators.required]);
  readonly adTwo = new FormControl('', [Validators.required]);
  readonly city = new FormControl('', [Validators.required]);
  readonly state = new FormControl('', [Validators.required]);
  readonly zipcode = new FormControl('', [Validators.required]);
  readonly contactNumber = new FormControl('', [Validators.required]);
  readonly email = new FormControl('', [Validators.required]); 
  readonly fname = new FormControl('', [Validators.required]);
  readonly lname = new FormControl('', [Validators.required]);
  readonly haemail = new FormControl('', [Validators.required]); 
  readonly mnumber = new FormControl('', [Validators.required]); 
  
}
