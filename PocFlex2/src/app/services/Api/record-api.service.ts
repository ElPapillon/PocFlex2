import { Injectable } from '@angular/core';
import { ApiHelperService, CustomError } from './api-helper.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RecordApiService extends ApiHelperService {

  constructor(http: HttpClient) { 
    super(http)
  }

  fetchRecords(route) {
    return this.get(route).pipe(catchError(error => {
      map(response => response)
      return Observable.throw(new CustomError(error))
      }))
  }
  
}
