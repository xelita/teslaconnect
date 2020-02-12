import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehicleModel} from '../../models/vehicle.model';
import {NavigationService} from '../../shared/services/navigation.service';
import {TeslaService} from '../../services/tesla.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.scss']
})
export class VehiculeDetailsComponent implements OnInit {

  vehicle: VehicleModel;

  constructor(private navigationService: NavigationService,
              private teslaService: TeslaService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.onVehicleReceived(data.vehicle));
  }

  onVehicleReceived(vehicle: VehicleModel) {
    console.log(vehicle);
    this.vehicle = vehicle;
  }

  exitClickHandler() {
    this.teslaService.revokeAccessToken().subscribe(() => this.onAccessRevoked());
  }

  onAccessRevoked() {
    this.teslaService.clearStoredAccessToken();
    this.navigationService.goSignIn();
  }
}
