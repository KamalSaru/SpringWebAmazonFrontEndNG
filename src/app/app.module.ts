import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import { EmployeeComponent } from './employee/employee.component';

// @ts-ignore
@NgModule({
  declarations: [
    //this automatically comes through when create components
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    WellcomePageComponent,
    EmployeeComponent //Connect Userlogin component
  ],

  // import the data
  imports: [
    BrowserModule, //Defult
    AppRoutingModule,//Defule
    FormsModule //Need Create FormModule and Connect the ngModule
  ],

  // export the data
  exports :[
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
