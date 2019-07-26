import { Injectable } from '@angular/core';
import { RegisterUserService } from '../services/Managers/register-user.service';
import { LoggerService } from '../services/Managers/logger.service';
import { catchError } from 'rxjs/operators';
import { AppError } from '../models/classes/AppError';
import { Observable } from 'rxjs';
import { IUser } from '../models/interfaces/User.Model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserComponentService {

  constructor(public RegisterService: RegisterUserService,public LoggerService: LoggerService) { }

 public Register(body: any): Observable<void | AppError>{
    return this.RegisterService.RegisterApi(body).pipe(
      catchError((error: AppError) => {
        this.LoggerService.LogError(error)
        return Observable.throw(error)
      })
    )
  }

  public GetUser(): Observable<IUser[] | Observable<AppError>>{
    return this.RegisterService.GetUser().pipe(
      catchError((error) => {
        this.LoggerService.LogError(error);
        return Observable.throw(error)
      })
    )
  }
}
