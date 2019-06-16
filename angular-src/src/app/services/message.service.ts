import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  form: any;
  // id: ID;

  constructor(private http: HttpClient) { }

  leaveMessage(form) {
    return this.http.post('http://localhost:3000/users/contact', form, httpOptions).pipe(map((response: any) => response));
  }

  getMessages() {
    return this.http.get('http://localhost:3000/users/messages', httpOptions).pipe(map((response: any) => response));
  }

  markedAsRead(id) {
    const data = {
      id: id
    };
    return this.http.post('http://localhost:3000/users/read', data, httpOptions).pipe(map((response: any) => response));
  }
}
