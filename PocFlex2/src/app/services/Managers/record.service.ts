import { Injectable } from '@angular/core';
import { RecordApiService } from '../Api/record-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(public recordApi: RecordApiService) { }


  public GetRecords(): Observable<any> {
    return this.recordApi.fetchRecords('/records')
  }
}
