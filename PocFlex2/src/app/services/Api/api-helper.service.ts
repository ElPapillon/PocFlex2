import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  public apiUrl = "http://192.168.2.144:1234/api"

  constructor(private http: HttpClient) {
   }

   protected get(route: string, options?: any): Observable<Response> {
     return this.http.get(route, options).pipe(
       map(response => JSON.parse(JSON.stringify(response)))
     )
   }

}
