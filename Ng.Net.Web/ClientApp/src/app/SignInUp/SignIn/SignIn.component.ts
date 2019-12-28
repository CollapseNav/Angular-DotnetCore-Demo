import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {

  onSubmit() {
    console.log('OnSubmit');
    console.log('OnSubmit');
  }
  constructor() { }

  ngOnInit() {
  }

}
