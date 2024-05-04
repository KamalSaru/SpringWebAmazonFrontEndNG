import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

// Connect to the app routing and app module
// We can put password and userName
export class UserLoginComponent {
  userName : string='';  
  password : string='';

  //Remove error !
  //Create userLoginForm
  userLoginForm !: FormGroup;
  loginError: boolean=false;

  parentAlert: any='';
  dataForChild : any='';

  handleChildEvent(name :any){
    this.dataForChild=name
  }


  navigate(){
    this.router.navigateByUrl('employee')
  }

  constructor(private formBuilder : FormBuilder,
    private router : Router,
  private userLoginService: UserLoginService){}


  //UserName and Password validators
  ngOnInit(): void {
    this.userLoginForm=this.formBuilder.group({
      userName:['', Validators.required],  //Validators.email
      password:['', Validators.required], //Validators.minLength(6)
    })
  }
  

  // this for login check for authentication
  userLogin(): void{
    if(this.userLoginService.userLogin(this.userName, this.password)){
      this.router.navigateByUrl('employee')
      console.log('User login successfull!!!');
      alert('User login successfull!!!')
      alert(this.userLoginService.wellcomeMessage) //message from service class
      this.loginError=false;
     } else{
      console.log('Invalid userName or password!!!')
      this.loginError =true;
      alert(this.userLoginService.warning) //message from service
      alert(this.userLoginService.lockwarning)
     }
    }

}
