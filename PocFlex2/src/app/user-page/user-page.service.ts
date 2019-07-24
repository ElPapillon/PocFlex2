import { Injectable } from '@angular/core';
import { UserService } from '../services/Managers/user.service';
import { catchError } from 'rxjs/operators';
import { AppError } from '../models/classes/AppError';
import { Observable } from 'rxjs';
import { IUser } from '../models/interfaces/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor(private userService: UserService) {  }

  public Login(body): Observable<void | Observable<AppError>> {
    return this.userService.LoginManager(body).pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      }))
  }

  public getUsers(): Observable<IUser[] | Observable<AppError>> {
    return this.userService.getUsers().pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      }))
  }

}
