import { Component, OnInit } from '@angular/core';
import HOTELDATA from "../../json/data.json";
export interface PeriodicElement {
  id: number;
  Name: string;
  area: string;
  Ratings: string;
  price: string;
  image: string;
}
@Component({
  selector: 'app-gethotels',
  templateUrl: './gethotels.component.html',
  styleUrls: ['./gethotels.component.scss']
})
export class GethotelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Data: PeriodicElement[] = HOTELDATA;
}
