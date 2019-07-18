import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordApiService extends ApiHelperService {

  constructor(http: HttpClient) { 
    super(http)
  }

  fetchRecords(route): Observable<Response> {
    return this.get(route)
  }
  
}
