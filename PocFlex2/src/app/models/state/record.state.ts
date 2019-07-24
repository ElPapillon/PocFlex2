import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IRecords } from '../interfaces/Record.Model'
import { AddRecord  } from '../actions/records.actions'
import { append } from '@ngxs/store/operators';

export class RecordStateModel {
    records: IRecords[]
}

@State<RecordStateModel>({
    name: 'records',
    defaults: {
        records: [],
    }
})


export class RecordState {

    @Selector()
    static getRecords(state: RecordStateModel) {
        return state.records as IRecords[]
    }

    @Action(AddRecord)
    add({getState, patchState}: StateContext<RecordStateModel>, {payload}:AddRecord){
        const state = getState();
        patchState({
            records: [...state.records, ...payload]
        })
    }


}