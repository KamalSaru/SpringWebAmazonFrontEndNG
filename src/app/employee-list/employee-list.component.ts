import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../entity/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {

  //Employee interface the Employeelist
  employeeList: Employee[] =[];

  constructor(private router: Router){}
  //data ='Hellow from parent'


  // getting data from parents
  @Input() getdataFromParent!:string;
  
  //sending data to the parent
  @Output() sendingData = new EventEmitter();
  data="Hello from child"

  sendData(dataFromhtml: any){
    this.sendingData.emit(dataFromhtml)
  }

  ngOnInit(): void {
    //Sending data
    this.sendingData.emit(this.data)

    this.employeeList=[
        {
          employeeID: 1,
          firstName: 'Kamal',
          lastName: 'Saru',
          address: 'Baltimore',
          gender: 'Male',
          dob: '07-02-1989',
          phone: '4431251245',
          email: 'kamal@gmail.com',
          status: 'Citizen',
          active: 'Yes'
        },
        {
          employeeID: 2,
          firstName: 'Shankar',
          lastName: 'Poudel',
          address: 'Verginia',
          gender: 'Male',
          dob: '09-012-2000',
          phone: '4431251245',
          email: 'shankar@gmail.com',
          status: 'Citizen',
          active: 'Yes',
        },
        {
          employeeID: 3,
          firstName: 'Maya',
          lastName: 'Thapa',
          address: 'Maryland',
          gender: 'Female',
          dob: '09-012-2001',
          phone: '4431251245',
          email: 'maya@gmail.com',
          status: 'Green Card',
          active: 'No',
        },
        {
          employeeID: 4,
          firstName: 'Shyam',
          lastName: 'Sharma',
          address: 'Verginia',
          gender: 'Male',
          dob: '09-012-2005',
          phone: '4431251245',
          email: 'sharma@gmail.com',
          status: 'Student',
          active: 'No',
        },
        {
          employeeID: 5,
          firstName: 'Bishnu',
          lastName: 'Poudel',
          address: 'Newyork',
          gender: 'Male',
          dob: '09-012-1980',
          phone: '4431251245',
          email: 'bishnu@gmail.com',
          status: 'Citizen',
          active: 'Yes',
        },
        {
          employeeID: 6,
          firstName: 'Bharat',
          lastName: 'Thapa',
          address: 'Washington',
          gender: 'Male',
          dob: '09-012-1995',
          phone: '4431251245',
          email: 'bharat@gmail.com',
          status: 'Citizen',
          active: 'Yes',
        },
      ];  
    }
}
