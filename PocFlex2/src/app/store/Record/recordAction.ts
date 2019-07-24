import { IRecords } from '../../models/interfaces/Record.Model';


export class GetRecord {
    static readonly type = "[Records] Get Record by Store"
    constructor (public payload: IRecords[]) {}
}
