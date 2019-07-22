import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HttpError } from 'src/app/models/classes/HttpError';
import { catchError, map } from 'rxjs/operators';
import { AppError } from 'src/app/models/classes/AppError';



@Injectable({
  providedIn: 'root'
})
export class LoginUserApiService extends ApiHelperService{

  constructor(http: HttpClient) { 
    super(http)
  }

  public Postlogin(route: string, body?: any):Observable<AppError | void>{
    return this.post(route, body).pipe(
      catchError((error : HttpError) => {
        return Observable.throw(error as AppError)
      }),
      map((response: HttpResponse<any>) => {
        return response.body as void
      })
    )
  }

  
}
