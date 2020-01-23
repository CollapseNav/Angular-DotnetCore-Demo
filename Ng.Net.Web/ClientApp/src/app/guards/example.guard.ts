/*
 * @Author: CollapseNav
 * @Date: 2020-01-08 15:18:49
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 17:08:43
 * @Description:
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Injectable({ providedIn: 'root' })
export class ExampleGuard implements CanActivate {
  constructor(private router: Router, private signservice: SignService) { }

  canActivate(): boolean {
    if (this.signservice.checkSignIn()) {
      return true;
    }
    this.router.navigate(['index']);
    return false;
  }
}
