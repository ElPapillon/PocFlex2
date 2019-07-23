import { State } from "@ngxs/store";
import { IRecords } from '../models/interfaces/Record.Model';

export interface IRecordModel {
    Record : IRecords;
}

@State<IRecordModel[]>({
    name: '',
    defaults: []
})

export class Flex2State {

}