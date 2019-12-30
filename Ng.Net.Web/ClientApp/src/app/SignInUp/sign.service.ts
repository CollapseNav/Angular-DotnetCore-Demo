/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 20:18:00
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2019-12-30 23:42:44
 * @Description:
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl.replace('4200', '5000');
  }

  signUp(data: any) {
    return this.http.post(this.baseUrl + 'api/Sign/SignUp', data);
  }

}
