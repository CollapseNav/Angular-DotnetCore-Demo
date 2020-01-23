/*
 * @Author: CollapseNav
 * @Date: 2019-12-29 19:32:07
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-12 18:38:30
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { SignService } from '../../services/sign.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

export class User {
  constructor(
    public userAccount: string,
    public password: string
  ) { }
}

@Component({
  selector: 'app-signin',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {
  faCoffee = faCoffee;

  model = new User('', '');

  onSubmit() {
    this.signService.signIn(this.model).subscribe(result => {
      if (result) {
        console.log(result);
        this.router.navigate(['example']);
      }
    });
  }
  constructor(private signService: SignService, private router: Router) { }

  ngOnInit() {
  }

}
