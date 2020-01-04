/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 01:32:36
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-03 20:25:31
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetuserService } from '../getuser.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editform = new FormGroup({
    id: new FormControl(''),
    userAccount: new FormControl(''),
    userName: new FormControl(''),
    phoneNumber: new FormControl(''),
    createDate: new FormControl(''),
  });
  constructor(private user: GetuserService) { }

  ngOnInit() {
    this.user.getUserInfos().subscribe(user => {
      console.log(user);
    });
  }

}
