/*
 * @Author: CollapseNav
 * @Date: 2020-01-04 22:04:55
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 20:12:18
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/SignInUp/sign.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  userAccount: string;
  constructor(private signService: SignService) { }

  onSignOut() {
    this.signService.removeToken();
  }

  ngOnInit() {
    this.userAccount = localStorage.getItem('userName');
  }

}
