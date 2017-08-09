import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const EMAIL = "test@test.com";
const PASSWORD = "123";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showProgressBar: boolean = false;
  tooltipPosition: string = "above";

  formGroup: FormGroup;
  emailErrorMessageInvalid: string = "Please enter a valid email address";
  passwordErrorMessageRequired: string = "Password is required";

  constructor(private formBuilder: FormBuilder, private snackBar: MdSnackBar, private router:Router) {
    this.formGroup = formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() { }

  public login(email:string, password:string) {
    if(email == EMAIL){
      if(password == PASSWORD){
        this.router.navigate(['/home']);
      } else{
        this.showSnackbarErrorMessage("Invalid password.");
      }
    } else{
      this.showSnackbarErrorMessage("Invalid email.");
    }
  }


  private showSnackbarErrorMessage(message:string){
    this.snackBar.open(message, 'X', {
      duration: 5000,
    });
  }

}
