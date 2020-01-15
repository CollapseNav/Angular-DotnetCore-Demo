/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 21:14:16
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-13 23:41:36
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignService } from '../sign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  onSubmit() {
    this.signService.signUp(this.signupForm.value).subscribe(result => {
      if (result) {
        this.router.navigate(['index']);
      }
    });
  }
  constructor(private signService: SignService, private formbuild: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formbuild.group({
      userAccount: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
