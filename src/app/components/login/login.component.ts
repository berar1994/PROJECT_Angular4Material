import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showProgressBar: boolean = false;
  tooltipPosition: string = "above";
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  emailErrorMessageRequired: string = "Email is required";
  emailErrorMessageInvalid: string = "Please enter a valid email address";
  passwordErrorMessageRequired: string = "Password is required";

  constructor() { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

    this.passwordFormControl = new FormControl('', [
      Validators.required]);
  }

}
