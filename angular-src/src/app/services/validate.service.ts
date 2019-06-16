import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // To make user completes the form fully
  validateRegister(user) {
    if (user.first_name == undefined || user.last_name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    }else {
      return true;
    }
  }

  validateContactMessage(form) {
    if(form.first_name == undefined || form.last_name == undefined || form.email == undefined || form.message == undefined) {
      return false;
    }else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
