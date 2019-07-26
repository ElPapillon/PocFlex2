import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppError } from 'src/app/models/classes/AppError';
import { catchError, map } from 'rxjs/operators';
import { HttpError } from 'src/app/models/classes/HttpError';
import { IUser } from 'src/app/models/interfaces/User.Model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserApiService extends ApiHelperService {

  constructor(http: HttpClient) {
    super(http)
  }

  public PostRegister(route: string, body?: any): Observable<AppError | void> {
    return this.post(route, body).pipe(
      catchError((error: HttpError) => {
        return Observable.throw(error as AppError)
      }),
      map((response: HttpResponse<any>) => {
        return response.body as void
      })
    )
  }

  public FetchUser(route: string): Observable<AppError | IUser[]> {
    return this.get(route).pipe(
      catchError((error: HttpError) => {
        return Observable.throw(error as AppError)
      }),
      map((response: HttpResponse<any>) => {
        return response.body as IUser[]
      })
    )
  }
}
