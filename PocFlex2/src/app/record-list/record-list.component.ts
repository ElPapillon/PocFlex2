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
  private _records$: IRecords[];
  private _getStore: boolean;

  constructor(public RecordService: RecordListService) { }

  public SetGetStore() { 
    this._getStore = !this._getStore;
  }

  public OnRefresh() {
    this.RecordService.GetRecord(this._getStore).subscribe(
      (Records: IRecords[]) => {
        this._records$ = Records
        console.log(this._records$)
      },
      (error: AppError) => { }
    )
  }


  ngOnInit() {
    this.OnRefresh();
    this._getStore = false;
  }

}
