/*
 * @Author: CollapseNav
 * @Date: 2019-12-29 19:32:07
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-02 16:43:11
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
      console.log(result);
    });
  }
  constructor(private signService: SignService) { }

  ngOnInit() {
  }

}
