import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor() { }

  adminLogin(userName : string, password: string): boolean{
    return userName==='kamal' && password==='kamal123';
  }

  //Alert setting in the service class
  wellcomeMessage="Wellcome to visit Amazon.com!!!"
  warning="Please! Enter valid username and password!!!"
  lockwarning="Three time to loging try and It will lock!!"
}
