import { Component, OnInit } from '@angular/core';
import { RecordListService } from './record-list.service';
import { IRecords } from '../models/interfaces/Record.Model';
import { AppError } from '../models/classes/AppError';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { map } from 'rxjs-compat/operator/map';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records$: Observable<IRecords[]>
  records
  nico;
  lastTime;

  constructor(public RecordService: RecordListService, public store: Store, public router: Router) {
  } 

  public OnRefresh() {
    this.lastTime = 0
    this.nico = this.RecordService.GetRecord();
    // .subscribe(
    //   (Records: IRecords[]) => {
    //     console.log('Validation ', Records)
    //     this.records$ = of((Records as any).records.records) // 'as any' there for patching ts lint error (TS2339) 
    //   },
    //   (error: AppError) => {
    //     console.log(error)
    //   }
    // )
  }

  private GoToLogin() {
    localStorage.removeItem('isLogged')
    this.router.navigate([''])
  }



  ngOnInit() {
    this.lastTime = 0
    setInterval(() => {
      this.lastTime = this.lastTime + 1
    }, 1000)
  }

}
