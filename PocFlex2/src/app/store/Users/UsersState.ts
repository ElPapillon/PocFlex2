import { IUser } from 'src/app/models/interfaces/User.Model';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { AddUsers } from './UsersActions';


export interface IUserModel {
    Users: IUser[];
}

@State<IUserModel>({
    name: "UserStore",
    defaults: {
        Users: []
    }
})

export class UserState {

    @Action(AddUsers)
    addUser(ctx: StateContext<IUserModel>, {payload}: AddUsers){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            Users: payload
        })
    }

    @Selector()
    static GetUsertab(state: IUserModel) {
        return state.Users as IUser[]
    }

}