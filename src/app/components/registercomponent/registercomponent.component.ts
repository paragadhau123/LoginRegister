import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarserviceService } from "../../services/snackbarservice/snackbarservice.service";
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

  constructor(private snackbar:SnackbarserviceService) {
   
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
    this.snackbar.displayMessage("Registered Succesfully");
  }
  else{
    this.snackbar.displayMessage("Enter all details");
  }
 }
}
