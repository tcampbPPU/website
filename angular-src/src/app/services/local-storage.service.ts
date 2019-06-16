import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    }catch (e) {
      console.error(`Error getting data from localStorage. ${e}`);
      return null;
    }
  }
}
