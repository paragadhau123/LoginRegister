import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { SnackbarserviceService } from "../../services/displaymessage/snackbarservice.service";
import { Router } from '@angular/router'; 
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private message: SnackbarserviceService, public route: Router,public search:HttpserviceService) { }

  name: any;

  ngOnInit(): void {
  }
 
  logout() {
    this.message.displayMessage("Logout Succesfully");
    localStorage.removeItem('Token')
    this.route.navigate(['login'])
  }

  bookSearch() {
    this.search.setSearchBookData(this.name);
  }
}
