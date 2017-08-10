import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  showProgressBar: boolean = false;
  formGroup: FormGroup;
  emailErrorMessageInvalid: string = "Please enter a valid email address";
  message:string = "";
  showMessage:boolean = false;

  constructor(private formBuilder: FormBuilder) { 
     this.formGroup = formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])]
    });
  }

  ngOnInit() {}

  async sendMail(mail:string){
    let button = <HTMLInputElement>document.getElementById("recoverPasswordButton");
    button.disabled = true;

    this.showProgressBar = true;
    await new Promise(resolv => setTimeout(resolv, 2000)); // imitate loading time
    this.showProgressBar = false;

    this.message = "SENT";
    this.showMessage = true;
  }

}
