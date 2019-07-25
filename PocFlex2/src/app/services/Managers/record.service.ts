import { Injectable } from '@angular/core';
import { RecordApiService } from '../Api/record-api.service';
import { Observable } from 'rxjs/Rx';
import { IRecords } from 'src/app/models/interfaces/Record.Model';
import { AppError } from 'src/app/models/classes/AppError';
import { LoggerService } from './logger.service';
import { catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { GetRecord } from 'src/app/store/Record/recordAction';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(public recordApi: RecordApiService, public logger: LoggerService, public store: Store) { }

  private _route: string = '/record'

  public GetRecords(): Observable<IRecords[] | Observable<AppError>> {
    console.log('Record Service')
    return this.recordApi.fetchRecords(this._route).pipe(
      switchMap((record: IRecords[]) => {
        return this.store.dispatch(new GetRecord(record)).pipe(
          withLatestFrom(this.store.select(state => state.RecordStore.Records as IRecords[])),
          switchMap(([a,b]) => {
            console.log(b)
            return of(b)}),
        )
      }),
      catchError((error: AppError) => {
        return Observable.throw(error)
      })
    )
  }

  public GetRecordByStore(){
   return this.store.select(state => state.RecordStore.Records as IRecords[])
  }
}