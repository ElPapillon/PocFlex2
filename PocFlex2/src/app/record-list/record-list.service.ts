import { Injectable } from '@angular/core';
import { RecordService } from '../services/Managers/record.service';
import { Observable } from 'rxjs';
import { IRecords } from '../models/interfaces/Record.Model';
import { AppError } from '../models/classes/AppError';
import { catchError } from 'rxjs/operators';
import { LoggerService } from '../services/Managers/logger.service';

@Injectable({
  providedIn: 'root'
})
export class RecordListService {

  constructor(public RecordService : RecordService, public LoggerService: LoggerService) { }

  public GetRecord (choice: boolean): Observable<IRecords[] | Observable<AppError>> {
    if (choice) {
      return this.RecordService.GetRecordByStore().pipe(
        catchError((error: AppError) => {
          this.LoggerService.LogError(error);
          return Observable.throw(error)
        })
       )
    }
    return this.RecordService.GetRecords().pipe(
      catchError((error: AppError) => {
        this.LoggerService.LogError(error);
        return Observable.throw(error)
      }),
    )
 }
}
