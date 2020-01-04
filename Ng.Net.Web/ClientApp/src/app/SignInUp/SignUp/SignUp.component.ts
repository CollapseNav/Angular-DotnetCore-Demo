/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 21:14:16
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2019-12-30 20:52:48
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    userAccount: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.signService.signUp(this.signupForm.value).subscribe(result => {
      console.log(result);
    });
  }
  constructor(private signService: SignService) { }

  ngOnInit() {
  }
}
