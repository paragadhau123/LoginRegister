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
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, Name: 'Trident Hotel', Ratings: '4.8', area: 'Madhapur', price: '1000', image: '../../../../../assets/hotel6.webp' },
//   { position: 2, Name: 'Jubilee Ridge', Ratings: '5', area: 'Hitech City', price: '2000', image: '../../../../../assets/hotel7.webp' },
//   { position: 3, Name: 'Taj Hotel', Ratings: '3.2', area: 'Jubilee Hills', price: '3000', image: '../../../../../assets/hotel3.webp' },
//   { position: 4, Name: 'Novotel Hyderbad', Ratings: '2', area: 'Banjara Hills', price: '2500', image: '../../../../../assets/hotel4.webp' },
//   { position: 5, Name: 'ITC Kohenur', Ratings: '3.9', area: 'Ameerpet', price: '1570', image: '../../../../../assets/hotel5.webp' },

// ];
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
