import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private apiUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  getProducts() {
    return this.http.get(`${this.apiUrl}/Products/products`);
  }
}
