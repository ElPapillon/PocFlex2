import { AppError } from './AppError';


export class HttpError extends AppError{
    public StatusCode : number;

    constructor(message: string, StatusCode: number){
        super(message);
        StatusCode = this.StatusCode;
    }
}