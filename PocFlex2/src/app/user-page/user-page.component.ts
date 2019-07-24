import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/interfaces/User.model';
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
  user = new IUser()
  users$: Observable<IUser[]>
  error: AppError

  constructor(private userPageService: UserPageService, private router: Router) { }


  login(user: IUser): void {
    this.userPageService.Login(user).subscribe(
      (response: void) => {
        console.log(response)
        localStorage.setItem('isLogged', 'true')
        this.router.navigate(['/record'])
      },
      (error: AppError) => {
        this.error = error
      })
  }

  log(user: IUser) {
    console.log(user)
  }

  ngOnInit() {
    if (localStorage.getItem('isLogged') === 'true') {
      this.router.navigate(['/record'])
    }
  }

  getUsers() {
  console.log('Getting users')
   this.userPageService.getUsers().pipe(
      map((response: IUser[]) => { 
        console.log(response)
        this.users$ = of(response)
      }),
      catchError((error: AppError) => {
        return Observable.throw(error);
      })
    ).subscribe(x => console.log('Test: ', x))
  }

}
