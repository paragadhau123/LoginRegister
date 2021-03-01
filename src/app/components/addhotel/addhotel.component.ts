import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpserviceService } from "../../services/httpservice/httpservice.service";

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.scss']
})
export class AddhotelComponent implements OnInit {

  constructor(private http: HttpserviceService) { }
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  area = new FormControl('', [Validators.required, Validators.minLength(3)]);
  ratings = new FormControl('', [Validators.required, Validators.minLength(3)]);
  price = new FormControl('', [Validators.required]);
  localUrl: any;

  getHotelNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Please enter a hotel name';
    }
    return this.name.invalid ? 'Invalid hotel name' : '';
  }

  getAreaNameErrorMessage() {
    if (this.area.hasError('required')) {
      return 'Please enter a area name';
    }
    return this.area.invalid ? 'Invalid area name' : '';
  }

  getRatingErrorMessage() {
    if (this.ratings.hasError('required')) {
      return 'Please enter a ratings';
    }
    return this.ratings.invalid ? 'Invalid ratings' : '';
  }

  getPriceErrorMessage() {
    if (this.price.hasError('required')) {
      return 'Please enter a price';
    }
    return this.price.invalid ? 'Invalid price' : '';
  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit(): void {
  }

  addBook() {
    let data = {
      "name": this.name.value,
      "ratings": this.ratings.value,
      "area": this.area.value,
      "price": this.price.value,
      "image": this.localUrl,
    }

    this.http.addHotel(data).subscribe((data: any) => {
    });
  }
}
