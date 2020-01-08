/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 16:32:38
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 23:53:15
 * @Description:
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './UserInfo';
import { retry } from 'rxjs/operators';
import { exampleapi } from './exampleapi';
import { User } from '../SignInUp/SignIn/SignIn.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string;

  getUserInfo(userAccount: string) {
    return this.http.get<UserInfo>(this.baseUrl + exampleapi.GetUser, { params: { userAccount: userAccount } }).pipe(
      retry(2),
    );
  }

  getUserInfos() {
    return this.http.get<Array<UserInfo>>(this.baseUrl + exampleapi.GetUsers).pipe(
      retry(2),
    );
  }

  editUserInfo(user: UserInfo) {
    console.log(user);
    return this.http.post(this.baseUrl + exampleapi.EditUser, user).pipe(
      retry(2),
    );
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl.replace('4200', '5000');
  }
}
