import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  userLogin(userName : string, password: string): boolean{
    return userName==='Tanuja' && password==='tanuja123';
  }

  //Alert setting in the service class
  wellcomeMessage="Wellcome to visit Amazon.com!!!"
  warning="Please! Enter valid username and password!!!"
  lockwarning="Three time to loging try and It will lock!!"
  
}
