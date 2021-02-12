import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gethotels',
  templateUrl: './gethotels.component.html',
  styleUrls: ['./gethotels.component.scss']
})
export class GethotelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hotels = [
    { Name: 'Trident Hotel', Rating: '4.8', area: 'Madhapur', price: '1000', image: '../../../../../assets/hotel6.webp' },
    { Name: 'Jubilee Ridge', Rating: '5', area: 'Hitech City', price: '2000', image: '../../../../../assets/hotel7.webp' },
    { Name: 'Taj Hotel', Rating: '3.2', area: 'Jubilee Hills', price: '3000', image: '../../../../../assets/hotel3.webp' },
    { Name: 'Novotel Hyderbad', Rating: '2', area: 'Banjara Hills', price: '2500', image: '../../../../../assets/hotel4.webp' },
    { Name: 'ITC Kohenur', Rating: '3.9', area: 'Ameerpet', price: '1570', image: '../../../../../assets/hotel5.webp' }
  ];
}
