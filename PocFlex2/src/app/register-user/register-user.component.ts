import { Component, OnInit } from '@angular/core';
import { RegisterUserComponentService } from './register-user-component.service';
import { IUser } from '../models/interfaces/User.Model';
import { AppError } from '../models/classes/AppError';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(public RegisterService: RegisterUserComponentService) { }

  public User : IUser = {
    Username: null,
    Password: null
  }

  public RegisterState: string = null

  Register(){
    this.RegisterService.Register(this.User).subscribe(
      (Reg: void) => {
       return this.RegisterState = "Register success"
      },
      (error: AppError) => {
        this.RegisterState = "Register failed"
      }
    )
  }
  ngOnInit() {
  }

}
