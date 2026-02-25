import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiURL: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  Login(credentials: Credentials) {
    return this.http.post(`${this.apiURL}/Auth/login`, credentials);
  }  
}
