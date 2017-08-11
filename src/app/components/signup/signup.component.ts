import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/local.storage/localstorage.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showProgressBar: boolean = false;
  formGroup: FormGroup;
  emailErrorMessageInvalid: string = "Please enter a valid email address";
  passwordErrorMessageRequired: string = "Password is required";
  nameErrorMessageRequired: string = "Name is required";

  constructor(private formBuilder: FormBuilder, private router: Router,
    private localstorageService: LocalstorageService) {

    this.formGroup = formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
      'password': [null, Validators.required],
      'name': [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  async signUp(email: string, password: string, name: string) {
    this.showProgressBar = true;
    await new Promise(resolv => setTimeout(resolv, 3000)); // imitate loading time
    this.localstorageService.store(LocalstorageService.AUTHENTICATED_STORAGE_KEY, true);
    this.router.navigate(['/home']);
  }

}
