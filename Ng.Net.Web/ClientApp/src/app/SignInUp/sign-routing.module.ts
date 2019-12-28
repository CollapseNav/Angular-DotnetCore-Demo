import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInComponent } from './SignIn/SignIn.component';

const signRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
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
