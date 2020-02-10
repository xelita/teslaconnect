import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehicleModel} from '../../models/vehicle.model';
import {NavigationService} from '../../shared/services/navigation.service';
import {TeslaService} from '../../services/tesla.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: VehicleModel[];

  constructor(private navigationService: NavigationService,
              private teslaService: TeslaService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.onVehiclesReceived(data.vehicles));
  }

  onVehiclesReceived(vehicles: VehicleModel[]) {
    console.log(vehicles);
    this.vehicles = vehicles;
  }

  exitClickHandler() {
    this.teslaService.clearStoredAccessToken();
    this.navigationService.goSignIn();
  }
}
