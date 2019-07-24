import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError, tap } from 'rxjs/operators'
import { HttpError } from 'src/app/models/classes/HttpError';

export class CustomError {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  public apiUrl = "http://10.0.0.71:1234/api"

  constructor(private http: HttpClient) {
  }

  protected get(route: string, options?: any): Observable<HttpResponse<any> | Observable<HttpError>> {

    return this.http.get(this.getUrl(route), { observe: "response" }).pipe(
      catchError(error => {
        return Observable.throw(new HttpError(error.message, error.Status))
      }))
  }

  protected post(route: string, body?: any, options?: any): Observable<HttpResponse<any> | Observable<HttpError>> {

    return this.http.post(this.getUrl(route), body, { observe: "response" }).pipe(
      catchError(error => {
        return Observable.throw(new HttpError(error.message, error.Status))
      }))
  }

  getUrl(route) {
    return this.apiUrl + route
  }


}
