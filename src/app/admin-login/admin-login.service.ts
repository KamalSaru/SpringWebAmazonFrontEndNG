import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private readonly validUsername= 'kamal';
  private readonly validPassword ='kamal123'

  constructor() { }

  adminLogin(userName : string, password: string): boolean{
    return userName=== this.validUsername && password===this.validPassword;
  }

  //Alert setting in the service class
  wellcomeMessage="Wellcome to visit Amazon.com!!!"
  warning="Please!!! Enter valid username and password!!!"
  lockwarning="Three attempts to login failed. Your account will be locked!!!"
}
