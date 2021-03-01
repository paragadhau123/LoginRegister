import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  private messageSource = new BehaviorSubject<any>('default message');

  currentMessage = this.messageSource.asObservable();
}
