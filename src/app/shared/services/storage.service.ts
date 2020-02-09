import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  read(key): string {
    return localStorage.getItem(key);
  }

  write(key, value): void {
    localStorage.setItem(key, value);
  }

  remove(key): void {
    localStorage.removeItem(key);
  }
}
