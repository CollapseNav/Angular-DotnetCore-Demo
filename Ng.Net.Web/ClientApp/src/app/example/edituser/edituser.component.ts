/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 01:32:36
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 22:03:44
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { UserInfo } from '../UserInfo';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editform: FormGroup;
  constructor(private userService: UserService, private formbuilder: FormBuilder) {
  }

  onSubmit() {
    this.userService.editUserInfo(this.editform.value).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
    this.editform = this.formbuilder.group({
      userAccount: [{ value: '' }],
      userName: [''],
      phoneNumber: [''],
      createDate: [{ value: '', disabled: true }],
    });
    this.userService.getUserInfo(localStorage.getItem('userName')).subscribe(user => {
      this.editform.patchValue({
        userAccount: user.userAccount,
        userName: user.userName,
        phoneNumber: user.phoneNumber,
        createDate: user.createDate
      });
    });

  }
}
