import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post('http://localhost:3000/users/register', user, httpOptions).pipe(map((response: any) => response));
  }

  authenticateUser(user) {
    return this.http.post('http://localhost:3000/users/authenticate', user, httpOptions).pipe(map((response: any) => response));
  }

  getProfile() {
    this.loadToken();
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.get('http://localhost:3000/users/profile', headers).pipe(map((response: any) => response));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  isAdmin() {
    return JSON.parse(localStorage.getItem('user')).is_admin == 1 ? true : false;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    console.clear();
  }
}
