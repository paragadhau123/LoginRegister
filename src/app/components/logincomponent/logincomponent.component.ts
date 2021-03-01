import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarserviceService } from "../../services/displaymessage/snackbarservice.service";
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter a Email ';
    }
    return this.email.invalid ? 'Invalid Email ' : '';
  }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Please Enter Password';
    }
    return this.password.invalid ? 'Invalid Password' : '';
  }

  constructor(public route: Router, private message: SnackbarserviceService) { }
  hide = true;

  ngOnInit(): void {
  }

  login() {

    if (this.password.valid && this.email.valid) {
      if (this.email.value == "admin@gmail.com") {
        this.message.displayMessage("Admin Login Succesfully");
        localStorage.setItem("Token", 'Admin')
        this.route.navigate(['adminDashboard'])
      }
      else {
        localStorage.setItem("Token", 'User')
        this.route.navigate(['userDashboard/hotels'])
        this.message.displayMessage("User Login Succesfully");
      }
    }
    else {
      this.message.displayMessage("Wrong Email  or Password");
    }
  }
}

