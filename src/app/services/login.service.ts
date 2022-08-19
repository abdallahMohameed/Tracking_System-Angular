import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../_models/admin';
import jwt_decode from 'jwt-decode';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(Admin: Admin) {
    return this.http.post(`${environment.commonUrl}api/Login`, Admin,{responseType: 'text'});
  }

  decodeToken() {
    var token = localStorage.getItem('token');
    if (token) {
      const decode: Token = jwt_decode(token);
      return decode;
    } else {
      return;
    }
  }
}
