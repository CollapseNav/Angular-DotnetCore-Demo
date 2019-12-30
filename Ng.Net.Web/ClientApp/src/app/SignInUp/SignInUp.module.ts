/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 21:09:49
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2019-12-30 20:17:18
 * @Description:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInUpRouting } from './sign-routing.module';
import { SignInComponent } from './SignIn/SignIn.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SignInUpRouting,
  ],
  declarations: [
    SignUpComponent,
    SignInComponent,
  ]
})
export class SignInUpModule { }
