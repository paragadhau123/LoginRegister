import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

  fName = new FormControl('', [Validators.required, Validators.minLength(3)]);

  lName = new FormControl('', [Validators.required, Validators.minLength(3)]);

  email = new FormControl('', [Validators.required, Validators.email]);

  nName = new FormControl('', [Validators.required, Validators.minLength(3)]);

  gender = new FormControl('', [Validators.required, Validators.minLength(3)]);

  phNumber = new FormControl('', [Validators.required, Validators.minLength(3)]);

  state = new FormControl('', [Validators.required, Validators.minLength(3)]);

  city = new FormControl('', [Validators.required, Validators.minLength(3)]);

  pin = new FormControl('', [Validators.required, Validators.minLength(3)]);

  fatherName = new FormControl('', [Validators.required, Validators.minLength(3)]);

  motherName = new FormControl('', [Validators.required, Validators.minLength(3)]);

  fatherOccupation = new FormControl('', [Validators.required, Validators.minLength(3)]);

  motherOccupation = new FormControl('', [Validators.required, Validators.minLength(3)]);

  fathersAge = new FormControl('', [Validators.required, Validators.minLength(3)]);

  motherAge = new FormControl('', [Validators.required, Validators.minLength(3)]);

  fatherPhNumber = new FormControl('', [Validators.required, Validators.minLength(3)]);

  motherPhNumber = new FormControl('', [Validators.required, Validators.minLength(3)]);

  getFirstNameErrorMessage() {
    if (this.fName.hasError('required')) {
      return 'Please Enter a First Name';
    }
    return this.fName.invalid ? 'Invalid First Name' : '';
  }
  getEmailErrorMessage() {
    if (this.fName.hasError('required')) {
      return 'Please Enter Email';
    }
    return this.email.invalid ? 'Invalid Email' : '';
  }
  getLastNameErrorMessage() {
    if (this.lName.hasError('required')) {
      return 'Please enter a Last Name';
    }
    return this.lName.invalid ? 'Invalid Last Name' : '';
  }
  getNickNameErrorMessage() {
    if (this.lName.hasError('required')) {
      return 'Please Enter a Nick Name';
    }
    return this.nName.invalid ? 'Invalid Nick Name' : '';
  }
  getPhoneErrorMessage() {
    if (this.fName.hasError('required')) {
      return 'Please Enter Phone Number';
    }
    return this.email.invalid ? 'Invalid  Phone Number' : '';
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
  getPincodeErrorMessage() {
    if (this.pin.hasError('required')) {
      return 'Please Enter a Pincode';
    }
    return this.pin.invalid ? 'Invalid Pincode' : '';
  }
  getFatherNameErrorMessage() {
    if (this.fatherName.hasError('required')) {
      return 'Please Enter a  Fathers Name';
    }
    return this.fatherName.invalid ? 'Invalid Phone Number' : '';
  }
  getMotherNameErrorMessage() {
    if (this.motherName.hasError('required')) {
      return 'Please Enter a Mothers Name ';
    }
    return this.motherName.invalid ? 'Invalid Phone Number' : '';
  }
  getFatherOccupationErrorMessage() {
    if (this.fatherOccupation.hasError('required')) {
      return 'Please Enter a  Fathers Occupation';
    }
    return this.fatherOccupation.invalid ? 'Invalid Phone Number' : '';
  }
  getMotherOccupationErrorMessage() {
    if (this.motherOccupation.hasError('required')) {
      return 'Please Enter a Mothers Occupation';
    }
    return this.motherOccupation.invalid ? 'Invalid Phone Number' : '';
  }
  getFatherPhoneErrorMessage() {
    if (this.fatherPhNumber.hasError('required')) {
      return 'Please Enter a Fathers Phone Number';
    }
    return this.fatherPhNumber.invalid ? 'Invalid Phone Number' : '';
  }
  getMotherPhoneErrorMessage() {
    if (this.motherPhNumber.hasError('required')) {
      return 'Please Enter a Mothers Phone Number';
    }
    return this.fatherPhNumber.invalid ? 'Invalid Phone Number' : '';
  }
  getMotherAgeErrorMessage() {
    if (this.motherAge.hasError('required')) {
      return 'Please Enter a Mother Age';
    }
    return this.motherAge.invalid ? 'Invalid Phone Number' : '';
  }
  getFatherAgeErrorMessage() {
    if (this.fathersAge.hasError('required')) {
      return 'Please Enter a Father Age';
    }
    return this.fathersAge.invalid ? 'Invalid Phone Number' : '';
  }
  constructor(private _snackBar: MatSnackBar) { }

  orderSummary = true;
  educationalDetails = true;
  experienceDetails = true;
  languages = new FormControl();
  languagesList: string[] = ['ASP.Net', 'Angular', 'Java', 'C#', 'HTML', 'CSS'];

  ngOnInit(): void {
  }

  private map = new Map<string, string[]>([
    ['B-Tech', ['ENTC', 'Instrumentation', 'Mechanical', 'Electrical']],
    ['MBA', ['Finance', 'Marketing', 'HR']],
    ['M-TECH', ['CAD', 'CAM', 'Electronics', 'Civil']],
    ['BBA', ['BBA1', 'BBA2', 'BBA3', 'BBA4']],
    ['PHD', ['Computer', 'Science', 'Maths', 'History']],
  ])

  HighestQulification: any;
  Stream: any;

  get HighestQulifications(): string[] {
    return Array.from(this.map.keys());
  }

  get Streams(): string[] | undefined {
    return this.map.get(this.HighestQulification);
  }

  private map1 = new Map<string, string[]>([
    ['Maharastra', ['Pune', 'Mumbai', 'Nagpur', 'Amravati', 'Akola', 'Wardha']],
    ['Telangana', ['Hyderabad', 'Warangal']],
    ['Andhra Pradesh', ['Guntur', 'Wijayawad', 'Tirupati', 'Amravati']],
    ['Goa', ['Panjim', 'Calnguate', 'Bagha']],
  ])

  State: any;
  City: any;

  get States(): string[] {
    return Array.from(this.map1.keys());
  }

  get Cities(): string[] | undefined {
    return this.map1.get(this.State);
  }
  orderSummaryFalse() {
    // if (this.fName.valid && this.email.valid && this.lName.valid && this.nName.valid && this.gender.valid && this.phNumber.valid && this.state.valid && this.city.valid && this.pin.valid) {
    if (this.orderSummary == true) {
      this.orderSummary = false;
    }
    else {
      this.orderSummary = true;
    }
    //}
    //else{
    //  this._snackBar.open("Enter All Details First", 'Cancle')
    //}
  }
  educationalDetailsFalse() {
    // if (this.motherAge.valid && this.fathersAge.valid && this.motherName.valid && this.fatherName.valid && this.motherOccupation.valid && this.fatherOccupation.valid && this.motherPhNumber.valid && this.fatherPhNumber.valid) {
    if (this.educationalDetails == true) {
      this.educationalDetails = false;
    }
    else {
      this.educationalDetails = true;
    }
    // }
    // else {
    // this._snackBar.open("Enter All Details First", 'Cancle')
    //}
  }
  professitionalDetailsFalse() {
    if (this.experienceDetails == true) {
      this.experienceDetails = false;
    }
    else {
      this.experienceDetails = true;
    }
  }
}
