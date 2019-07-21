export type ErrorItem = {
    message: string;
    errorCode: number;
}

export class AppError {
    private _message: string;
    private _errorCode: number;
    private _stackTrace: ErrorItem[];
    private _propagation: boolean

    constructor(
        message: string,
        _errorCode: number,
    ) {
        this._message = message;
        this._errorCode = _errorCode;
        this._stackTrace = null;
        this._propagation = true;
    }

    public setError(message, errorCode) {
        if (this._propagation = true) {
            if (this._message != null) {
                let StackItem: ErrorItem = {
                    message: this._message,
                    errorCode: this._errorCode
                }
                this._stackTrace.push(StackItem)
            }
            this._message = message
            this._errorCode = errorCode
        }
    }

    public stopPropagation() {
        this._propagation = false
    }

    public getMessage() {
        return this._message
    }
}