import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {
  isAuthenticate = false;
  constructor() { }
  isAuthenticated() {
    if (localStorage.getItem('Token')) {
      return true;
    }
    else {
      return false
    }
  }
}
