import { Component, OnInit } from '@angular/core';
import { RecordApiService } from './services/Api/record-api.service';
import { RecordService } from './services/Managers/record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'PocFlex2';

  constructor(private service: RecordService) {
  }

  ngOnInit() {
    this.service.GetRecords();
  }
}
