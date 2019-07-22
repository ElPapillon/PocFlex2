
export type ErrorItem = {
    message: string,
    errorCode: number,
}

export class AppError{
    private _Error: ErrorItem;
    private _stackTrace: ErrorItem[];
    private _propagation: boolean;


    constructor (message: string, errorCode: number) {
        this._Error.message = message;
        this._Error.errorCode = errorCode;
        this._stackTrace = [];
        this._propagation = true;
    }

    public SetError(message: string, errorCode: number): void {
        if(this._propagation) {
            this.AddCurrentErrorToStackTrace();
            this.StoreNewError(message, errorCode);
        }
    }

    public StopPropagation(): void {
        this._propagation = false;
    }

    public GetPropagation(): boolean {
        return this._propagation;
    }

    public GetError(): ErrorItem {
        return this._Error;
    }

    public GetStackTrace(): ErrorItem[] {
        return this._stackTrace;
    }

    private AddCurrentErrorToStackTrace(): void {
        if (this._Error.message) {
            var item: ErrorItem = {
                message: this._Error.message,
                errorCode: this._Error.errorCode
            };

            this._stackTrace.push(item)
        }
    }

    private StoreNewError(message: string, errorCode: number): void {
        this._Error.message = message;
        this._Error.errorCode = errorCode;
        
    }
}