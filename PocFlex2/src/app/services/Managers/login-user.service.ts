import { Injectable } from '@angular/core';
import { LoginUserApiService } from '../Api/login-user-api.service';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs/Rx';
import { AppError } from 'src/app/models/classes/AppError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(public LoginApiservice: LoginUserApiService, public LoggerService: LoggerService) { }

  public ApiLogin(body?: any): Observable<void | AppError>{
    return this.LoginApiservice.Postlogin("/user/login", body).pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      }),
      (response) => response
    )
  }
}
