import { Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-hospitals', 
  templateUrl: './manage-hospitals.component.html',
  styleUrl: './manage-hospitals.component.scss'
})
export class ManageHospitalsComponent {
  displayedColumns: string[] = 
  ['hospital', 'cityandState', 'hospitalContactNo', 'hospitalAdmin', 'emailAddress','status','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 
  announceSortChange(sortState: Sort) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  hospital: string;
  cityandState: string;
  hospitalContactNo: string;
  hospitalAdmin: string;
  emailAddress: string;
  status : string;
  actions: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    hospital: 'Jone ABC Hospital', 
    cityandState: ' New York, USA', 
    hospitalContactNo: '+1 555 861 4506', 
    hospitalAdmin: 'John Doe',
    emailAddress: 'johnabc@gmail.com',
    status: 'Active',
    actions: ''
  }, 
  {
    hospital: 'Emily Blunt', 
    cityandState: ' New York, USA', 
    hospitalContactNo: '+1 555 861 4506', 
    hospitalAdmin: 'Derrick Boone',
    emailAddress: 'broone@gmail.com',
    status: 'Deactive',
    actions: ''
  },
];