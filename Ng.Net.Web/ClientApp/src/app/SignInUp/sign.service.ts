/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 20:18:00
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2019-12-31 23:35:45
 * @Description:
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signApi } from './signApi';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  baseUrl: string;

  signapi = new signApi();

  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl.replace('4200', '5000');
  }

  signUp(data: any) {
    return this.http.post(this.baseUrl + this.signapi.SignUp, data).pipe(
      retry(3),
    );
  }

  signIn(data: any) {
    return this.http.post(this.baseUrl + this.signapi.SignIn, data).pipe(
      retry(3),
    );
  }

}
