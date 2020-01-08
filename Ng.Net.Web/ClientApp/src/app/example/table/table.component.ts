/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 01:33:09
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 21:45:49
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../UserInfo';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJleHAiOjE1NzgzODkwMTYsImlzcyI6Ikp1c3RUZXN0IiwiYXVkIjoiSnVzdFRlc3QifQ.fgMv9WSWTDdCS4UOon_bCRiTh7sorjQpOm9eY-ewEvI');
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userArray: Array<UserInfo>;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getUserInfos().subscribe(arr => {
      this.userArray = arr;
    });
  }
}
