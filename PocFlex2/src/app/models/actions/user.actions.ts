import { IUser } from '../interfaces/User.model'

export class AddUsers {
    static readonly type = "[USER] Add"
    
    constructor(public payload: IUser[]) {}
}