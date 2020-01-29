/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 21:22:25
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-29 15:56:23
 * @Description:
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignGuard } from '../guards/sign.guard';

const signRoutes: Routes = [
  { path: 'signin', canActivate: [SignGuard], component: SignInComponent },
  { path: 'index', redirectTo: 'signin' },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(signRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SignInUpRouting { }
