import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { User } from 'src/app/models/interfaces/User.model';
import { AppError } from 'src/app/models/classes/AppError';
import { HttpError } from 'src/app/models/classes/HttpError';

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
      console.log('Api', response)
      return response.body as void
    })
  )
}

}
