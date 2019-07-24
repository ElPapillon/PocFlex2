export class IUser {
    Username: string
    Password: String
    constructor(obj?: any) {
        this.Username = obj && obj.Username || null;
        this.Password = obj && obj.Password || null;
      }
}