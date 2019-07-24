import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppError } from 'src/app/models/classes/AppError';
import { UserApiService } from '../Api/user-api.service';
import { catchError, switchMap, withLatestFrom, map } from 'rxjs/operators';
import { IUser } from 'src/app/models/interfaces/User.model';
import { Store } from '@ngxs/store';
import { AddUsers } from 'src/app/models/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public userApiSerivce: UserApiService, public store: Store) { }

  public LoginManager(body): Observable<void | Observable<AppError>> {
    return this.userApiSerivce.postLogin('/user/login', body).pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      })
    )
  }

  public getUsers(): Observable<IUser[] | Observable<AppError>> {
    return this.userApiSerivce.fetchUsers('/user').pipe(
      switchMap((users: IUser[]) => {
        return this.store.dispatch(new AddUsers(users)).pipe(
          withLatestFrom(this.store.select(state => state.users.users as IUser[])),
          switchMap(([a, b]) => { return of(b) })
        )
      }),
      catchError((error: AppError) => {
        return Observable.throw(error)
      })
    )
  }


}
