import { Injectable } from '@angular/core';
import { RegisterUserApiService } from '../Api/register-user-api.service';
import { Observable, of } from 'rxjs';
import { AppError } from 'src/app/models/classes/AppError';
import { catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { IUser } from 'src/app/models/interfaces/User.Model';
import { Store } from '@ngxs/store';
import { AddUsers } from 'src/app/store/Users/UsersActions';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(public Apiservice: RegisterUserApiService, public store: Store) { }

  public RegisterApi(body?: any): Observable<AppError | void> {
    return this.Apiservice.PostRegister('/user/register', body).pipe(
      catchError((error: AppError) => {
        return Observable.throw(error)
      }),
      (response) => response
    )
  }

  public GetUser(): Observable<IUser[] | Observable<AppError>> {
    return this.Apiservice.FetchUser('/user').pipe(
      switchMap((user: IUser[]) => {
        return this.store.dispatch(new AddUsers(user)).pipe(
          withLatestFrom(this.store.select(state => state.UserStore.Users as IUser[])),
          switchMap(([a, b]) => {
            return of(b)}),
        )
      }),
      catchError((error: AppError) => {
        return Observable.throw(error)
      }),
    )
  }
}
