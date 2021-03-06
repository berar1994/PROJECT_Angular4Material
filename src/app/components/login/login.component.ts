import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/local.storage/localstorage.service';
import { CookieService } from 'ngx-cookie-service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PasswordComponent } from '../dialog/password/password.component';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const EMAIL = "test@test.com";
const PASSWORD = "123";
const REMEMBER_ME_COOKIE_KEY = "rememberMe";

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
  rememberMe: boolean = false;
  emailInput: string = "";
  passwordInput: string = "";


  constructor(private formBuilder: FormBuilder, private snackBar: MdSnackBar,
    private router: Router, private localstorageService: LocalstorageService,
    private cookieService: CookieService, private dialog: MdDialog) {

    this.formGroup = formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.localstorageService.clear();

    let rememberMeCookieValue:boolean =  (this.cookieService.get(REMEMBER_ME_COOKIE_KEY) === 'true');
    // check if remember me was selected
    if (rememberMeCookieValue) {
      this.emailInput = EMAIL;
      this.passwordInput = PASSWORD;
      this.rememberMe = true;
    } else {
      this.emailInput = "";
      this.passwordInput = "";
      this.rememberMe = false;
    }
  }


  async login(email: string, password: string) {
    if (email == EMAIL) {
      if (password == PASSWORD) {
        this.showProgressBar = true;
        await new Promise(resolv => setTimeout(resolv, 2000)); // imitate loading time
        this.localstorageService.store(LocalstorageService.AUTHENTICATED_STORAGE_KEY, true);

        // save cookie if remember me is checked
        if (this.rememberMe) {
          this.cookieService.set(REMEMBER_ME_COOKIE_KEY, 'true');
        }else{
          this.cookieService.set(REMEMBER_ME_COOKIE_KEY, 'false');
        }

        this.router.navigate(['/home']);
      } else {
        this.showSnackbarErrorMessage("Invalid password.");
      }
    } else {
      this.showSnackbarErrorMessage("Invalid email.");
    }
  }


  private showSnackbarErrorMessage(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 5000,
    });
  }


  openRecoverPasswordDialog() {
    let dialogRef = this.dialog.open(PasswordComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }

}