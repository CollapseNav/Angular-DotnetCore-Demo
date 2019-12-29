import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  model = new User('', '');

  onSubmit() {
    console.log('OnSubmit');
    console.log(this.model);
  }
  constructor() { }

  ngOnInit() {
  }

}
