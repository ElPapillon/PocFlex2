import { Injectable } from '@angular/core';
import { ApiHelperService, CustomError } from './api-helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError, tap } from 'rxjs/operators'
import { IRecords } from 'src/app/models/interfaces/Record.Model';
import { HttpError } from 'src/app/models/classes/HttpError';
import { AppError } from 'src/app/models/classes/AppError';


@Injectable({
  providedIn: 'root'
})
export class RecordApiService extends ApiHelperService {

  constructor(http: HttpClient) { 
    super(http)
  }

  fetchRecords(route): Observable<IRecords[] | Observable<AppError>> {
    return this.get(route).pipe(
      catchError((error: HttpError) => {
        return Observable.throw(new AppError(error.Message))
      }), 
      map((response: HttpResponse<any>) => {
        return response.body as IRecords[]
      })
    )
  }
  
}
