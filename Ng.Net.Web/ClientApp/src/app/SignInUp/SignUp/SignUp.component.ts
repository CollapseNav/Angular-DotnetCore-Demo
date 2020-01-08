/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 21:14:16
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 20:46:38
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  onSubmit() {
    this.signService.signUp(this.signupForm.value).subscribe(result => {
      console.log(result);
    });
  }
  constructor(private signService: SignService, private formbuild: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formbuild.group({
      userAccount: [''],
      password: [''],
    });
  }
}
