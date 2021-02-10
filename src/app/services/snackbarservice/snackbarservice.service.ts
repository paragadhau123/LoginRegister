import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarserviceService {
   
  constructor(public snackBar: MatSnackBar) { }
  displayMessage(message:any) {
    this.snackBar.open(message, 'Cancle', {
      duration: 1000
    })
  }
}
