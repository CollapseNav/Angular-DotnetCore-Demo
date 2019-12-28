import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInUpRouting } from './sign-routing.module';
import { SignInComponent } from './SignIn/SignIn.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SignInUpRouting,
  ],
  declarations: [
    SignUpComponent,
    SignInComponent,
  ]
})
export class SignInUpModule { }
