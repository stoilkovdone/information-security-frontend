import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import {UserRegister} from '../_model/user-register';
import {UserLogin} from '../_model/user-login';

@Injectable({providedIn: "root"})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(private httpClient: HttpClient) {
  }

  register(payload: UserRegister) {
    return this.httpClient.post<{}>(this.baseUrl + '/register', payload).subscribe();
  }

  login(payload: UserLogin) {
    return this.httpClient.post<{}>(this.baseUrl + '/login', payload, {withCredentials: true}).subscribe();
  }
}
