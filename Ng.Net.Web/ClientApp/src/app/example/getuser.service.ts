/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 16:32:38
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-03 22:39:07
 * @Description:
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './UserInfo';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  baseUrl: string;

  getUserInfo(Id: string) {
    return this.http.get<UserInfo>(this.baseUrl + 'api/User/GetUser', { params: { userid: Id } }).pipe(
      retry(2),
    );
  }

  getUserInfos() {
    return this.http.get<Array<UserInfo>>(this.baseUrl + 'api/User/GetUsers').pipe(
      retry(2),
    );
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl.replace('4200', '5000');
  }

}
