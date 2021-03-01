import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable, Subject } from 'rxjs';
import { PRODUCT } from 'src/app/components/admindashboard/admindashboard.component';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpserviceService {
  baseUrl = environment.baseUrl;
  private searchBookData = new Subject<any>();
  constructor(private httpclient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllHotels(): Observable<PRODUCT[]> {
    return this.httpclient.get<PRODUCT[]>(this.baseUrl)
  }

  addHotel(product: any): Observable<PRODUCT> {
    return this.httpclient.post<PRODUCT>(this.baseUrl, JSON.stringify(product), this.httpOptions)
  }

  deleteHotel(id: any) {
    return this.httpclient.delete<PRODUCT>(this.baseUrl + id, this.httpOptions)
  }

  setSearchBookData(message: any) {
    console.log("set service", message);
    return this.searchBookData.next({ hotels: message });
  }
  getSearchBookData(): Observable<any> {
    console.log("get service");
    return this.searchBookData.asObservable();
  }
}
