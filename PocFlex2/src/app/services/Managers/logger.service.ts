import { Injectable } from '@angular/core';
import { AppError } from 'src/app/models/classes/AppError';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public LogError(error: AppError): void{
    console.error(error.Message)
  }

}

