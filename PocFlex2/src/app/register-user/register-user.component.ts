import { Component, OnInit } from '@angular/core';
import { RegisterUserComponentService } from './register-user-component.service';
import { IUser } from '../models/interfaces/User.Model';
import { AppError } from '../models/classes/AppError';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(public RegisterService: RegisterUserComponentService, private router: Router) { }

  public User: IUser = {
    Username: null,
    Password: null
  }

  private _Users$: IUser[] = []

  public RegisterState: boolean = false

  public Register() {
    this.RegisterService.Register(this.User).subscribe(
      (Reg: void) => {
        this.router.navigate(['/record-list'])
        return this.RegisterState = true
      },
      (error: AppError) => {
        this.RegisterState = false
      }
    )
  }
  public GoToLogin() {
    this.router.navigate([''])
  }
  ngOnInit() {
  }
  public GetUser(){
    this.RegisterService.GetUser().subscribe(
      (Users: IUser[]) => {
       return this._Users$ = Users
      },
      (error: AppError) => {}
    )
  }
}
