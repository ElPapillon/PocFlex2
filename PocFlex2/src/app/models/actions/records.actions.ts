import { IRecords } from "../interfaces/Record.Model";

export class AddRecord {
    static readonly type = '[RECORD] Add'

    constructor(public payload: IRecords[]){}
}

