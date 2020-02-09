import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  goSignIn() {
    this.router.navigate(['/signin']);
  }

  goVehicles() {
    this.router.navigate(['/vehicles']);
  }

  goVehicleDetails(id: number) {
    this.router.navigate(['/vehicles', id]);
  }
}
