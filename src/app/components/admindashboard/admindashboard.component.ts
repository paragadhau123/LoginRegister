import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import HOTELDATA from "../../json/data.json";
import { AddhotelComponent } from "../../components/addhotel/addhotel.component";
export interface PeriodicElement {
  id: number;
  Name: string;
  area: string;
  Ratings: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'Name', 'area', 'Ratings', 'price', 'image', 'update', 'delete'];
  data: PeriodicElement[] = HOTELDATA;
  openAddDialog() {
    let dialogRef = this.dialog.open(AddhotelComponent, {});
  }
}
