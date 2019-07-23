import { Injectable } from '@angular/core';
import { RegisterUserApiService } from '../Api/register-user-api.service';
import { Observable } from 'rxjs';
import { AppError } from 'src/app/models/classes/AppError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(public Apiservice: RegisterUserApiService, ) { }

 public RegisterApi(body?: any): Observable<AppError | void>{
    return this.Apiservice.PostRegister('/user/register', body).pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      }),
      (response) => response
    )
  }
}
