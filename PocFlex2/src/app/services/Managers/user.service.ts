import { Injectable } from '@angular/core';
import { User } from 'src/app/models/interfaces/User.model';
import { Observable } from 'rxjs';
import { AppError } from 'src/app/models/classes/AppError';
import { UserApiService } from '../Api/user-api.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public userApiSerivce: UserApiService) { }

  public LoginManager(body): Observable<void | Observable<AppError>> {
    return this.userApiSerivce.postLogin('/user/login', body).pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      })
    )
  }
}
