import { Injectable } from '@angular/core';
import { RecordApiService } from '../Api/record-api.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(public recordApi: RecordApiService) { }


  public GetRecords() {
    this.recordApi.fetchRecords('/records')
  }
}
