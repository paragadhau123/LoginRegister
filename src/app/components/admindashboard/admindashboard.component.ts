import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddhotelComponent } from "../../components/addhotel/addhotel.component";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";

export interface PRODUCT {
  id: number;
  name: string;
  area: string;
  ratings: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})

export class AdmindashboardComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpserviceService) { }

  products: PRODUCT[] = [];

  ngOnInit(): void {
    this.getAllHotels();
  }

  displayedColumns: string[] = ['id', 'name', 'area', 'ratings', 'price', 'image', 'update', 'delete'];

  openAddDialog() {
    let dialogRef = this.dialog.open(AddhotelComponent, {});
  }

  getAllHotels() {
    this.http.getAllHotels().subscribe((data: PRODUCT[]) => {
      console.log(data);
      this.products = data;
    })
  }

  deleteHotel(element: any) {
    this.http.deleteHotel(element.id).subscribe((data) => {
      this.getAllHotels();
    });
  }
}
