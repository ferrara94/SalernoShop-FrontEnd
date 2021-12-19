import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredential } from '../class/UserClass'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  user: UserCredential;
  logged: boolean;

  constructor( public http: HttpClient ) {
    this.user = new UserCredential;
    this.logged = false;
  }

  logIn() :Observable<any> {
    let username = this.user.username;
    let password = this.user.password;

    return this.http.get<any>(
      `http://localhost:8080/api/users/get/user/${username}/${password}`
      );
  }

  setUserCredential(username: string, password: string) {
    this.user.username = username;
    this.user.password = password;
  }

  getUsername() {
    return this.user.username;
  }

  setLoggedFlag(flag: boolean) {
    this.logged = flag;
  }

  getLoggedFlag() {
    return this.logged
  }

  getPassword() {
    return this.user.password;
  }

  getUserCredential() {
    return this.user;
  }

}
