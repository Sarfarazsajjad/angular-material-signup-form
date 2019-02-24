import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFormGroup = new FormGroup({
    firstNameFormControl: new FormControl(''),
    surNameFormControl: new FormControl(''),
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    repasswordFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
  });

  get repasswordFormControl() { return this.signupFormGroup.get('repasswordFormControl') }
  get emailFormControl() { return this.signupFormGroup.get('emailFormControl') }
  get passwordFormControl() { return this.signupFormGroup.get('passwordFormControl') }

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  onSignup() {
  }
}