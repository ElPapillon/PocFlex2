import { Injectable } from '@angular/core';
import { RecordApiService } from '../Api/record-api.service';
import { Observable } from 'rxjs/Rx';
import { IRecords } from 'src/app/models/interfaces/Record.Model';
import { AppError } from 'src/app/models/classes/AppError';
import { LoggerService } from './logger.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(public recordApi: RecordApiService, public logger: LoggerService) { }


  public GetRecords(): Observable<IRecords[] | Observable<AppError>> {
    console.log("test")
    return this.recordApi.fetchRecords('/record').pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      }),
      (response) => response
    )
    var a: number[];
    Array
  }
}
