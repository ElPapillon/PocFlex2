import { Injectable } from '@angular/core';
import { RecordService } from '../services/Managers/record.service';

@Injectable({
  providedIn: 'root'
})
export class RecordListService {

  constructor(public RecordService : RecordService) { }

  public GetRecord () {

 }
}
