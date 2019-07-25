import { IUser } from 'src/app/models/interfaces/User.Model';


export class AddUsers{
    static readonly type = "[Users] Add Users"
    constructor(public payload: IUser[]){}
}