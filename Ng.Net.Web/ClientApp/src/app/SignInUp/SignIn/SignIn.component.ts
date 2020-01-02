/*
 * @Author: CollapseNav
 * @Date: 2019-12-29 19:32:07
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-01 00:31:27
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
