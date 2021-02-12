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
  constructor(public route: Router,private snackbar:SnackbarserviceService) { }
  hide = true;

  ngOnInit(): void {
  }
  login() {
 
    if (this.password.valid && this.email.valid) {

      this.snackbar.displayMessage("Login Succesfully");
      this.route.navigate(['details'])

    }
    else {
      this.snackbar.displayMessage("Wrong email id or password");
    }
  }
}

