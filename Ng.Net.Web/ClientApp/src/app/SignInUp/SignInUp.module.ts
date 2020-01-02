/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 21:09:49
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-01 00:43:53
 * @Description:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInUpRouting } from './sign-routing.module';
import { SignInComponent } from './SignIn/SignIn.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    SignInUpRouting,
  ],
  declarations: [
    SignUpComponent,
    SignInComponent,
  ]
})
export class SignInUpModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
