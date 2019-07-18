import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { HttpError } from 'src/app/models/classes/HttpError';

export class CustomError {
  constructor(public message: string) {}
}


@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  public apiUrl = "http://10.0.0.71:1234/api"

  constructor(private http: HttpClient) {
   }

   protected get(route: string, options?: any): Observable<ArrayBuffer> {

      options = { observe: 'response' };

     return this.http.get(this.getUrl(route), options).pipe(
       catchError(error => {
        return Observable.throw(new CustomError(error))
        }))
   }

   handleError(error) {
     console.log(error)
   }

   getUrl(route) {
      return this.apiUrl + route
   }
}
