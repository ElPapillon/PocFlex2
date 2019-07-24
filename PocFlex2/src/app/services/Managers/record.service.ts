import { Injectable } from '@angular/core';
import { RecordApiService } from '../Api/record-api.service';
import { Observable } from 'rxjs/Rx';
import { IRecords } from 'src/app/models/interfaces/Record.Model';
import { AppError } from 'src/app/models/classes/AppError';
import { LoggerService } from './logger.service';
import { catchError, switchMap, concatMap, tap, withLatestFrom, combineAll, concatAll } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { AddRecord } from 'src/app/models/actions/records.actions';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private lastDate;
  private updateDate;

  constructor(public recordApi: RecordApiService, public logger: LoggerService, public store: Store) {
    this.lastDate = new Date().getTime()
  }

  public GetRecords() {
    this.updateDate = new Date().getTime()
    var diff = (this.updateDate - this.lastDate) / 1000;
    console.log('diff = ', diff)
    if (diff > 5) {
      console.log('Returning Api records')
      return this.GetRecordByApi()
    } else {
      console.log('Returning Store records')
      return this.GetRecordByStore()
    }
  }

  private GetRecordByApi(): Observable<IRecords[] | Observable<AppError>> {
    this.lastDate = new Date().getTime()

    // setTimeout(() => {
    //   console.log("Bim");

    //   this.store.dispatch(new AddRecord([
    //     {
    //       CalledPartyNumber: "dc8ab93dfd",
    //       CallerPartyNumber: "ff7ac06a67",
    //       ChannelId: 1,
    //       ChannelName: "Chan 1",
    //       Duration: 545,
    //       Id: 1,
    //       StartDateTime: new Date(),
    //       StopDateTime: new Date()
    //     }
    //   ]));

    // }, 10000)

    return this.recordApi.fetchRecords('/record').pipe(
      switchMap((record: IRecords[]) => {
        return this.store.dispatch(new AddRecord(record)).pipe(
          withLatestFrom(this.store.select(state => state.records.records as IRecords[])),
          switchMap(([a, b]) => { return of(b) }),
        )
      }),
      catchError((error: AppError) => {
        console.log(error)
        return Observable.throw(error)
      })
    )

    

    // return this.recordApi.fetchRecords('/record').pipe(
    //   switchMap((record: IRecords[]) => {
    //     this.store.dispatch(new AddRecord(record));
    //     return this.store.select(state => state.records.records as IRecords[])
    //   }),
    //   catchError((error: AppError) => {
    //     console.log(error)
    //     return Observable.throw(error)
    //   })
    // )
  }

  private GetRecordByStore(): Observable<IRecords[] | Observable<AppError>> {
    return this.store.select(state => state.records.records as IRecords[])
    // .pipe(
    //   catchError((error: AppError) => {
    //     return Observable.throw(error)
    //   })
    // )
  }
}
