/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 01:33:09
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-03 22:52:55
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../getuser.service';
import { UserInfo } from '../UserInfo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userArray: Array<UserInfo>;

  constructor(private user: GetuserService) { }

  ngOnInit() {
    this.user.getUserInfos().subscribe(arr => {
      this.userArray = arr;
    });
  }
}
