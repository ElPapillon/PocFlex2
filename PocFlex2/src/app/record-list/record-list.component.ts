import { Component, OnInit } from '@angular/core';
import { RecordListService } from './record-list.service';
import { IRecords } from '../models/interfaces/Record.Model';
import { AppError } from '../models/classes/AppError';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records$: IRecords[];

  constructor(public RecordService: RecordListService) { }

  public OnRefresh() {
    // this.RecordService.GetRecord().subscribe(
    //   (Records: IRecords[]) => {
    //     this.records$ = Records
    //     console.log(this.records$)
    //   },
    //   (error: AppError) => { }
    // )

    this.RecordService.GetRecordByStore().subscribe(
      (Records: IRecords[]) => {
        this.records$ = Records
        console.log(this.records$)
      },
      (error: AppError) => {}
  
    )

  }


  ngOnInit() {
    this.OnRefresh()
  }

}
