import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-scheduler', 
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  openDatepicker() {
    this.datepicker.open();
  }

  surgeriesDetails = [
    {
      id:'1000',
      status:'offline',
      iconInfo:'d-none',
      drName:' Dr. Ana Koslov',
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
    {
      id:'9911',
      status:'offline',
      iconInfo:'d-none',
      drName:'Dr. Philip Barger',
      degree:'Orthopedic Surgery',
      btnText :'1 Sales Req | 10 Requests'
    },
    {
      id:'0099',
      status:'offline',
      iconInfo:'d-none',
      drName:'Dr. Ana Koslov ',
      degree:'Colonoscopy',
      btnText :'2 Requests'
    },
    {
      id:'1416',
      status:'away',
      iconInfo:'d-flex',
      drName:'Dr. Thomas Baranski',
      degree:'Internal Medicine',
      btnText :'No Requests'
    },
    {
      id:'1000',
      status:'offline',
      iconInfo:'d-none',
      drName:'Dr. Ana Koslov ',
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
    {
      id:'9911',
      status:'offline',
      iconInfo:'d-none',
      drName:'Dr. Philip Barger',
      degree:'Orthopedic Surgery',
      btnText :'1 Sales Req | 10 Requests'
    },
    {
      id:'0099',
      status:'offline',
      iconInfo:'d-none',
      drName:'Dr. Ana Koslov ',
      degree:'Colonoscopy',
      btnText :'2 Requests'
    },
    {
      id:'1416',
      status:'away',
      iconInfo:'d-flex',
      drName:'Dr. Thomas Baranski',
      degree:'Internal Medicine',
      btnText :'No Requests'
    },
  ]
}
