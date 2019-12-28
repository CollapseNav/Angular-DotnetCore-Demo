import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    userAccount: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log('OnSubmit');
    console.log(this.signupForm.value);
  }
  constructor() { }

  ngOnInit() {
  }
}
