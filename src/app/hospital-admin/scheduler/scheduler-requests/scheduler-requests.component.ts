import { Component, inject, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog'; 
import { MatTableDataSource } from '@angular/material/table';
import { AlertModalComponent } from 'src/app/theme/common/alert-modal/alert-modal.component';

@Component({
  selector: 'app-scheduler-requests', 
  templateUrl: './scheduler-requests.component.html',
  styleUrl: './scheduler-requests.component.scss'
})
export class SchedulerRequestsComponent {
    readonly dialog = inject(MatDialog);

    displayedColumns: string[] = 
    ['salesRep', 'companyName', 'contactNumber','status','actions'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  openDatepicker() {
    this.datepicker.open();
  }

  surgeriesDetails = [
    {
      id:'1000',
      status:'offline',
      iconInfo:'d-none',
      drName:' Dr. Ana Koslov ' ,
      degree:'Colonoscopy',
      btnText :'2 Requests'
    },
    {
      id:'1090',
      status:'away',
      iconInfo:'d-flex',
      drName:'Dr. Thomas Baranski',
      degree:'Internal Medicine',
      btnText :'No Requests'
    },
    {
      id:'1100',
      status:'offline',
      iconInfo:'d-none',
      drName:'Dr. Philip Barger',
      degree:'Orthopedic Surgery',
      btnText :'1 Sales Req | 10 Requests'
    },
    
 
  ]

    alertModal(){
      const dialogRef = this.dialog.open(AlertModalComponent, {
        panelClass: 'custom-alert-container',
        autoFocus: false,
        data: {
          headerText: 'Confirmation',
          warningNote: 'Are you sure to accept the request?',
          pinkBtnText: 'Yes',
          blueBtnText: 'No',
          yesBtnMessage: 'Request has been accepted successfully.',
          noBtnMessage: 'Request has been rejected successfully.'
        }
      });
    }
    cancelAlert(){
      const dialogRef = this.dialog.open(AlertModalComponent, {
        panelClass: 'custom-alert-container',
        autoFocus: false,
        data: {
          headerText: 'Confirmation',
          warningNote: 'Are you sure to reject the request?',
          pinkBtnText: 'Yes',
          blueBtnText: 'No',
          yesBtnMessage: 'Request has been rejected successfully',
          noBtnMessage: 'Request has been rejected successfully.'
        }
      });
    }
}

export interface PeriodicElement {
  salesRep: string;
  companyName: string; 
  contactNumber: string;
  status : string;
  actions: string
}

const ELEMENT_DATA: PeriodicElement[] = [  
  {
    salesRep: 'Mr. John Doe', 
    companyName: 'Green Medical ',  
    contactNumber:'+1 212 456 7890',
    status: 'pending',
    actions: ' '
  },  
  {
    salesRep: 'Emily Blunt', 
    companyName: '	Franco-USAese Hospital',  
    contactNumber:'	+1 555 861 4506',
    status: 'accepted',
    actions: ' '
  },  
  {
    salesRep: 'Mr. John Doe', 
    companyName: 'Green Medical ',  
    contactNumber:'+1 212 456 7890',
    status: 'pending',
    actions: ' '
  },  
  {
    salesRep: 'Emily Blunt', 
    companyName: '	Franco-USAese Hospital',  
    contactNumber:'	+1 555 861 4506',
    status: 'accepted',
    actions: ' '
  }, 
  {
    salesRep: 'Mr. John Doe', 
    companyName: 'Green Medical ',  
    contactNumber:'+1 212 456 7890',
    status: 'pending',
    actions: ' '
  },  
  {
    salesRep: 'Emily Blunt', 
    companyName: '	Franco-USAese Hospital',  
    contactNumber:'	+1 555 861 4506',
    status: 'accepted',
    actions: ' '
  }, 
  {
    salesRep: 'Mr. John Doe', 
    companyName: 'Green Medical ',  
    contactNumber:'+1 212 456 7890',
    status: 'pending',
    actions: ' '
  },  
  {
    salesRep: 'Emily Blunt', 
    companyName: '	Franco-USAese Hospital',  
    contactNumber:'	+1 555 861 4506',
    status: 'accepted',
    actions: ' '
  }, 
  {
    salesRep: 'Mr. John Doe', 
    companyName: 'Green Medical ',  
    contactNumber:'+1 212 456 7890',
    status: 'pending',
    actions: ' '
  },  
  {
    salesRep: 'Emily Blunt', 
    companyName: '	Franco-USAese Hospital',  
    contactNumber:'	+1 555 861 4506',
    status: 'accepted',
    actions: ' '
  },  
   
];