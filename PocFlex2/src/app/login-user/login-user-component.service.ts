import { Injectable } from '@angular/core';
import { LoginUserService } from '../services/Managers/login-user.service';
import { LoggerService } from '../services/Managers/logger.service';
import { Observable } from 'rxjs/Rx';
import { AppError } from '../models/classes/AppError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginUserComponentService {

  constructor(public LoginApi : LoginUserService, public Logger : LoggerService) { }

  Login(body: any): Observable<AppError | void>{
    return this.LoginApi.ApiLogin(body).pipe(
      catchError((error: AppError) => {
        this.Logger.LogError(error)
        return Observable.throw(error)
      })
    )

  }
}

