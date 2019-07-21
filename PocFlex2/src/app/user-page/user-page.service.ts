import { Injectable } from '@angular/core';
import { UserService } from '../services/Managers/user.service';
import { catchError } from 'rxjs/operators';
import { AppError } from '../models/classes/AppError';
import { Observable } from 'rxjs';
import { User } from '../models/interfaces/User.model';

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

}
