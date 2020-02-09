import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TeslaService} from '../../services/tesla.service';
import {VehicleModel} from '../../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleListDataResolverService implements Resolve<VehicleModel[]> {

  constructor(private teslaService: TeslaService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VehicleModel[]> | Promise<VehicleModel[]> | VehicleModel[] {
    return this.teslaService.getVehicles();
  }
}
