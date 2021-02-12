import { Component, OnInit } from '@angular/core';
import { SnackbarserviceService } from "../../services/snackbarservice/snackbarservice.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private snackBar: SnackbarserviceService, public route: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.snackBar.displayMessage("Logout Succesfully");
    this.route.navigate(['login'])
  }
}
