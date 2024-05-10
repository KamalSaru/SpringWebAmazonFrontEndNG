import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

   //All logics are in service.ts and component ts--------------------
   url: string ='http://localhost:8080/employee'  //Connect data to the database and backend java--------------------------
   userLoginForm: any;
   userLoginService: any;
   constructor(){ }
 
  userLogin(userName : string, password: string): boolean{
    return userName==='tanuja' && password==='tanuja123';
  }

  //Alert setting in the service class
  wellcomeMessage="Wellcome to visit Amazon.com!!!"
  warning="Please! Enter valid username and password!!!"
  lockwarning="Three time to login try and It will be lock!!"
  
}
