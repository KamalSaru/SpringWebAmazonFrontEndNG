import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeComponent } from './employee/employee.component';






//This part important to connect
//this component for open pages---------------------------------------------------------------------
//app routing to link to open the pages-----------------
const routes: Routes = [
  //{path :'', component: AppComponent},//Main page
  {path :'wellcome', component: WellcomePageComponent},
  {path:'user', component: UserLoginComponent}, //Connect from userLoginComponent.ts
  {path :'register', component : UserRegisterComponent},  //Connect from user register
  {path :'admin', component : AdminLoginComponent},  //Connect admin login 
  {path : 'employee', component: EmployeeComponent}
];


// @ts-ignore
 //@ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
