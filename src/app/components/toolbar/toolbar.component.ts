import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,public route: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this._snackBar.open("LogOut successfully.", 'Cancle')
    this.route.navigate(['login'])
  }
}
