import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {
  }

  notify(text: string) {
    this.snackBar.open(text, 'OK', {
      duration: 5000,
    });
  }
}
