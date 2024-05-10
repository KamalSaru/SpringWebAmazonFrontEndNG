import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm!: FormGroup;
  usersRegisterDatabase : any[]=[];
  department: []= [];


  constructor(private userFormBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient){}

  //User register entity---------------------------------------------
  ngOnInit(): void {
    this.userRegisterForm=new FormGroup({
      firstName: new FormControl ('', [ Validators.maxLength(20)]),
      lastName: new FormControl ('', [ Validators.maxLength(20)]),
      gender : new FormControl('', [Validators.required]),
      position: new FormControl ('', [ Validators.required]),
      userName: new FormControl ('', [ Validators.minLength(7)]),
      password: new FormControl ('', [ Validators.minLength(7)])
    })
  }

  ngOnit(): void{
    this.loadDepartment(); //department data for json
  }

  loadDepartment() {
    this.http.get("database/department.json").subscribe((res:any)=>{
      debugger;
      this.department= res.data;
    })
  }
}
