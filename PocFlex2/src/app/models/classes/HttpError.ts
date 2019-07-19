import { AppError } from './AppError';


export class HttpError extends AppError{
    public StatusCode : number;

    constructor(message: string, statusCode: number){
        super(message);
        this.StatusCode = statusCode;
    }
}