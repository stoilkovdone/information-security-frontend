import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from "@angular/core";
import {UserRegister} from '../_model/user-register';
import {UserLogin} from '../_model/user-login';

@Injectable({providedIn: "root"})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(private httpClient: HttpClient) {
  }

  register(payload: UserRegister) {
    return this.httpClient.post<{}>(this.baseUrl + '/register', payload);
  }

  login(payload: UserLogin) {
    return this.httpClient.post<{}>(this.baseUrl + '/login', payload, {withCredentials: true});
  }

  logout() {
    return this.httpClient.post<{}>(this.baseUrl + '/logout', {withCredentials: true});
  }

  verifyEmail(token: string) {
    const params = new HttpParams().set('verificationToken', token);
    return this.httpClient.post(`${this.baseUrl}/verify-email`, null, {params});
  }
}
