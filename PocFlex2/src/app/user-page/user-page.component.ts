import { Component, OnInit } from '@angular/core';
import { User } from '../models/interfaces/User.model';
import { UserPageService } from './user-page.service';
import { Observable, pipe, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { AppError } from '../models/classes/AppError';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user = new User()
  error: AppError

  constructor(private userPageService: UserPageService, private router: Router) { }


  login(user: User): void {
    this.userPageService.Login(user).subscribe(
      (response: void) => {
        console.log('Response', response)
        this.router.navigate['/record']
      },
      (error: AppError) => {
        this.error = error
      })
  }

  log(user: User) {
    console.log(user)
  }

  ngOnInit() {

  }
}
