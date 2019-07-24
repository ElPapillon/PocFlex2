import { Component, OnInit } from '@angular/core';
import { LoginUserComponentService } from './login-user-component.service';
import { IUser } from '../models/interfaces/User.Model';
import { AppError } from '../models/classes/AppError';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(public LoginService: LoginUserComponentService) { }


  public hide: any;
  public User: IUser = {
    Username: null,
    Password: null
  }

  public ConnexionState: string = null;


  public Login(){
    console.log(this.User)
    this.LoginService.Login(this.User).subscribe(
      (Log: void) => {
        return this.ConnexionState = "Connecter"
      },
      (error: AppError) => {
       return this.ConnexionState = "Déconnecter"
      }
    )
  }

 

  ngOnInit() {
  }

}
export class FormFieldPrefixSuffixExample {

}
