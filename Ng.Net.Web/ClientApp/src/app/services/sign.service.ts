/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 20:18:00
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-23 20:19:32
 * @Description:
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signApi } from '../SignInUp/signApi';
import { catchError, retry, tap, mapTo } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from '../SignInUp/SignIn/SignIn.component';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  baseUrl: string;
  isSignIn: boolean;
  jwt: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl.replace('4200', '5000');
  }

  getJwtToken(): string {
    return localStorage.getItem('jwt');
  }

  signUp(data: any) {
    return this.http.post(this.baseUrl + signApi.SignUp, data).pipe(
      retry(3),
    );
  }

  checkSignIn() {
    return !!this.getJwtToken();
  }

  removeToken() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userName');
  }

  signIn(data: User): Observable<boolean> {
    return this.http.post(this.baseUrl + signApi.SignIn, data).pipe(
      retry(3),
      tap(tokens => {
        this.isSignIn = true;
        localStorage.setItem('jwt', tokens['token']);
        localStorage.setItem('userName', data.userAccount);
      }),
      mapTo(true),
      catchError(error => {
        console.log(error.error);
        return of(false);
      })
    );
  }
}
