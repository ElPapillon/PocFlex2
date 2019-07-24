import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { AppError } from 'src/app/models/classes/AppError';
import { HttpError } from 'src/app/models/classes/HttpError';
import { IUser } from 'src/app/models/interfaces/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends ApiHelperService {

  constructor(http: HttpClient) { 
    super(http)
  }

postLogin(route, body): Observable<void | Observable<AppError>> {
  return this.post(route, body).pipe(
    catchError((error: HttpError) => {
      if (error.StatusCode != 401) {
      return Observable.throw(error as AppError) // <- String
    }
    }), 
    map((response: HttpResponse<any>) => {
      return response.body as void
    })
  )
}

fetchUsers(route): Observable<IUser[] |Observable<AppError>> {
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
