import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IUser } from '../interfaces/User.model'
import { AddUsers } from '../actions/user.actions' 

export class UserStateModel {
    users: IUser[]
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: [],
    }
})

export class UserState {

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users as IUser[]
    }

    @Action(AddUsers)
    add({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUsers) {
        const state = getState();
        patchState({
            users: [...state.users, ...payload]
        })
        

    }
}