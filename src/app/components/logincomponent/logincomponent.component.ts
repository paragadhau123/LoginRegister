import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  constructor(private _snackBar: MatSnackBar,public route: Router) { }
  hide = true;

  ngOnInit(): void {
  }

  login() {
    let userData = {
      "email": this.email.value,
      "password": this.password.value
    }
    if (this.password.valid && this.email.valid) {

      this._snackBar.open("Login successfully.", 'Cancle')
      this.route.navigate(['details'])

    }
    else {
      this._snackBar.open("Wrong email id or password", 'Cancle')
    }
  }
}

