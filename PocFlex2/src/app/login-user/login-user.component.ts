import { Component, OnInit } from '@angular/core';
import { LoginUserComponentService } from './login-user-component.service';
import { IUser } from '../models/interfaces/User.Model';
import { AppError } from '../models/classes/AppError';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(public LoginService: LoginUserComponentService, public router: Router) { }


  public hide: any;
  public User: IUser = {
    Username: null,
    Password: null
  }

  public ConnexionState: boolean = false;


  public Login(){
    console.log(this.User)
    this.LoginService.Login(this.User).subscribe(
      (Log: void) => {
        this.router.navigate(['/record-list'])
        return this.ConnexionState = true
      },
      (error: AppError) => {
       return this.ConnexionState = false
      }
    )
  }
  public GoToRegister(){
    this.router.navigate(['register'])
  }
 

  ngOnInit() {
  }

}
export class FormFieldPrefixSuffixExample {

}
