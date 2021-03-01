import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { DataserviceService } from "../../services/dataservice/dataservice.service";
export interface PRODUCT {
  id: number;
  name: string;
  area: string;
  ratings: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-gethotels',
  templateUrl: './gethotels.component.html',
  styleUrls: ['./gethotels.component.scss']
})

export class GethotelsComponent implements OnInit {

  constructor(private http: HttpserviceService,private data: DataserviceService) { }
  hotelSearch: any;
  Data: any;
  hoverIndex = -1
  showDiscription: any = [];
 
  ngOnInit(): void {
    this.data.currentMessage.subscribe(data => { this.getSearchBookData()});

    this.http.getAllHotels().subscribe((data: PRODUCT[]) => {
      this.Data = data;
    })

  }
  onHover(i:any) {
    this.hoverIndex = i
  }

  getSearchBookData() {
    this.http.getSearchBookData().subscribe((message) => {
      this.hotelSearch = message.hotels;
    })
  }
}
