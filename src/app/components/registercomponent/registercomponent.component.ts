import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarserviceService } from "../../services/displaymessage/snackbarservice.service";
@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.scss']
})
export class RegistercomponentComponent implements OnInit {
  
  firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  gender = new FormControl('', [Validators.required, Validators.minLength(3)]);
  city = new FormControl('', [Validators.required, Validators.minLength(3)]);
  state = new FormControl('', [Validators.required, Validators.minLength(3)]);
  phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'Please Enter a First Name';
    }
    return this.firstName.invalid ? 'Invalid First Name' : '';
  }
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter Email';
    }
    return this.email.invalid ? 'Invalid Email' : '';
  }
  getLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'Please enter a Last Name';
    }
    return this.lastName.invalid ? 'Invalid Last Name' : '';
  }
  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'Please Enter Phone Number';
    }
    return this.phone.invalid ? 'Invalid  Phone Number' : '';
  }
  getGenderErrorMessage() {
    if (this.gender.hasError('required')) {
      return 'Please Enter Gender';
    }
    return this.gender.invalid ? 'Invalid Gender' : '';
  }
  getCityErrorMessage() {
    if (this.city.hasError('required')) {
      return 'Please Enter City';
    }
    return this.city.invalid ? 'Invalid City' : '';
  }
  getStateErrorMessage() {
    if (this.state.hasError('required')) {
      return 'Please Enter a State';
    }
    return this.state.invalid ? 'Invalid State' : '';
  }
  constructor(private message:SnackbarserviceService) {
   
   }
  hide = true;
  
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
    const date = cellDate.getDate();
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
    }

  ngOnInit(): void {
  }
  
register(){
  if (this.firstName.valid && this.lastName.valid && this.email.valid && this.city.valid && this.gender.valid && this.state.valid  && this.phone.valid && this.password.valid){
    this.message.displayMessage("Registered Succesfully");
  }
  else{
    this.message.displayMessage("Enter all details");
  }
 }
}
