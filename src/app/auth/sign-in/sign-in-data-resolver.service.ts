import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TeslaService} from '../../services/tesla.service';
import {Observable} from 'rxjs';
import {NavigationService} from '../../shared/services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class SignInDataResolverService implements Resolve<string> {

  constructor(private navigationService: NavigationService,
              private teslaService: TeslaService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    if (this.teslaService.getStoredAccessToken()) {
      this.navigationService.goVehicles();
    }
    return this.teslaService.getStoredAccessToken();
  }
}
