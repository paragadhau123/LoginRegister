import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarserviceService } from "../../services/snackbarservice/snackbarservice.service";
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  constructor(public route: Router, private snackbar: SnackbarserviceService) { }
  hide = true;

  ngOnInit(): void {
  }
  login() {

    if (this.password.valid && this.email.valid) {
      if (this.email.value == "admin@gmail.com") {
        this.snackbar.displayMessage("Admin Login Succesfully");
        localStorage.setItem("Token", 'Admin')
        this.route.navigate(['adminDashboard'])
      }
      else {
        localStorage.setItem("Token", 'User')
        this.route.navigate(['userDashboard'])
        this.snackbar.displayMessage("User Login Succesfully");
      }
    }
    else {
      this.snackbar.displayMessage("Wrong email id or password");
    }
  }
}

