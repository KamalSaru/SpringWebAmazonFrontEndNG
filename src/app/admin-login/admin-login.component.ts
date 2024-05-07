import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})


export class AdminLoginComponent {
  userName : string='';
  password : string='';
  loginError: boolean=false;
  adminLoginForm !: FormGroup;
  formBuilder: any;
  

  constructor(private router: Router,
    private adminLoginService : AdminLoginService){}

  //navigate to employee list
  navigate(){
    this.router.navigateByUrl('employee')
    //alert(this.adminLoginService.wellcomeMessage);
  }

  //navigate to welcome page
  navigateWellcome(){
    this.router.navigateByUrl('wellcome')
  }

  //admin login field-------------------------------------------
  ngOnInit(): void {
    this.adminLoginForm=this.formBuilder.group({
      userName:['', Validators.required],  //Validators.email
      password:['', Validators.required], //Validators.minLength(6)
    })
  }

  adminLogin(): void{
   if(this.adminLoginService.adminLogin(this.userName, this.password)){
    this.router.navigateByUrl('employee')
    this.loginError=false;
    console.log('Admin login successfull!!!');
    alert('Admin login success!!!')
    alert(this.adminLoginService.wellcomeMessage) //message from service class
   } else{
    this.loginError =true;
    console.log('Invalid userName or password!!!')
    alert(this.adminLoginService.warning)
    alert(this.adminLoginService.lockwarning)
   }
  }
}
